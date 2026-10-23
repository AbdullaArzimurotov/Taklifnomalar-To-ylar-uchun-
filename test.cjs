const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const {render,themes,normalize,safeMap}=require('./invitation.js');
for(const theme of themes){
 const html=render({theme:theme.id});
 assert(Buffer.byteLength(html)<200000);
 assert(html.includes(`class="${theme.id}"`));
 assert(!/<(?:script|link|img)[^>]+(?:src|href)="https?:/i.test(html));
 assert.equal(fs.readFileSync(`demos/${theme.id}/index.html`,'utf8'),html);
 const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
 new vm.Script(script);
 function timerFor(target){
   let label='',values=[{},{},{},{}],click;
   const countdown={dataset:{target},querySelectorAll:()=>values,set innerHTML(v){label=v;}};
   const document={querySelector:s=>s==='.cover'?{classList:{add(){}},setAttribute(){}}:{removeAttribute(){}},getElementById:id=>id==='open'?{addEventListener(t,fn){click=fn;}}:id==='countdown'?countdown:id==='couple'?{focus(){}}:null};
   vm.runInNewContext(script,{document,Date,setInterval(){}});click();return{label,values};
 }
 assert.match(timerFor('2000-01-01T00:00:00+05:00').label,/boshlandi/);
 const future=timerFor('2099-01-01T00:00:00+05:00');
 assert.equal(future.label,'');assert(future.values.every(v=>/^\d+$/.test(v.textContent)));
 console.log(`${theme.name}: ${Buffer.byteLength(html)} bytes, render + runtime OK`);
}
assert.equal(safeMap('javascript:alert(1)'),'');
assert.equal(safeMap('data:text/html,x'),'');
assert.equal(safeMap('https://maps.google.com/'),'https://maps.google.com/');
const unsafe=render({groom:'</script><img src=x onerror=alert(1)>',message:'<b>Hello</b>',map:'javascript:alert(1)'});
assert(!unsafe.includes('<img src=x'));
assert(unsafe.includes('&lt;b&gt;Hello&lt;/b&gt;'));
assert(!unsafe.includes('href="javascript:'));
assert.equal(normalize({photos:['https://remote.test/a.jpg','data:image/svg+xml;base64,eA=='],music:'https://remote.test/a.mp3'}).photos.length,0);
assert.equal(normalize({theme:'unknown'}).theme,'gold');
const media=render({photos:['data:image/jpeg;base64,eA=='],music:'data:audio/mpeg;base64,eA=='});
assert(media.includes('music-data'));assert(media.includes('loading="lazy"'));
assert.equal(normalize({photos:Array(9).fill('data:image/jpeg;base64,eA==')}).photos.length,6);
console.log('Escaping, unsafe URLs, media allowlist, max photos, countdown checks OK.');
