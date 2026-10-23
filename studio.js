'use strict';
const form = document.getElementById('editor');
const preview = document.getElementById('preview');
const statusEl = document.getElementById('status');
const downloadButton = document.getElementById('download');
let photos = [], music = '', mediaPending = false, refreshTimer, currentHTML = '';
const themeSelect = document.getElementById('theme');
Invitation.themes.forEach(t => { const opt = document.createElement('option'); opt.value=t.id; opt.textContent=t.name; themeSelect.append(opt); });
for (const [key,value] of Object.entries(Invitation.defaults)) { if (form.elements.namedItem(key)) form.elements.namedItem(key).value=value; }
const grid = document.getElementById('design-grid');
Invitation.themes.forEach((t,i)=>{
  const card = document.createElement('article'); card.className='design-card';
  card.innerHTML=`<a class="design-art ${t.id}" href="demos/${t.id}/" target="_blank" rel="noopener" aria-label="${t.name} namunasini ochish"><div class="mini"><span class="mini-symbol">${t.id==='national'?'❖':t.id==='minimal'?'22 / 05 / 27':'✧'}</span><div class="mini-names">Azizbek<em>&</em>Madina</div><span class="mini-date">22 . 05 . 2027</span></div></a><h3>${t.name}</h3><p>${t.note}</p><div class="card-actions"><a href="demos/${t.id}/" target="_blank" rel="noopener">Namunani ko‘rish ↗</a><button type="button">Tanlash +</button></div>`;
  card.querySelector('button').addEventListener('click',()=>{ themeSelect.value=t.id; refresh(); document.getElementById('create').scrollIntoView({behavior:'smooth'}); });
  grid.append(card);
});
function notify(message,error=false) { statusEl.textContent=message; statusEl.className=error?'error':'success'; }
function data() { const values=Object.fromEntries(new FormData(form)); if(values.timezone==='custom') values.timezone=document.getElementById('custom-zone').value; return {...values,photos:photos.map(p=>p.data),music}; }
function refresh() {
  clearTimeout(refreshTimer);
  currentHTML=Invitation.render(data());
  preview.srcdoc=currentHTML;
  const bytes=new Blob([currentHTML]).size;
  document.getElementById('size-note').textContent=`Fayl hajmi: ${bytes<1024*1024 ? (bytes/1024).toFixed(0)+' KB' : (bytes/1024/1024).toFixed(2)+' MB'}${bytes>2*1024*1024?' · Tezroq ochilishi uchun surat yoki musiqa hajmini kamaytiring.':''}`;
}
form.addEventListener('input', e=>{ if(e.target.type==='file') return; clearTimeout(refreshTimer); refreshTimer=setTimeout(refresh,250); });
form.addEventListener('change', e=>{
  if(e.target.name==='timezone') { const custom=e.target.value==='custom'; document.getElementById('custom-zone-label').hidden=!custom; document.getElementById('custom-zone').required=custom; }
  if(e.target.type!=='file') refresh();
});
document.getElementById('restart').addEventListener('click',refresh);
function fileData(file) { return new Promise((resolve,reject)=>{ const reader=new FileReader(); reader.onload=()=>resolve(reader.result); reader.onerror=()=>reject(new Error('Faylni o‘qib bo‘lmadi.')); reader.readAsDataURL(file); }); }
async function compressImage(file) {
  if (!['image/jpeg','image/png','image/webp'].includes(file.type)) throw new Error('Suratlar JPG, PNG yoki WebP formatida bo‘lsin.');
  if (file.size>15*1024*1024) throw new Error('Har bir surat 15 MB dan kichik bo‘lishi kerak.');
  const url=URL.createObjectURL(file);
  try {
    const img=await new Promise((resolve,reject)=>{ const el=new Image(); el.onload=()=>resolve(el); el.onerror=()=>reject(new Error('Surat ochilmadi. Boshqa fayl tanlang.')); el.src=url; });
    const ratio=Math.min(1,1200/Math.max(img.naturalWidth,img.naturalHeight));
    const canvas=document.createElement('canvas'); canvas.width=Math.max(1,Math.round(img.naturalWidth*ratio)); canvas.height=Math.max(1,Math.round(img.naturalHeight*ratio));
    const ctx=canvas.getContext('2d'); if(!ctx) throw new Error('Bu brauzerda suratni qayta ishlab bo‘lmadi.');
    ctx.fillStyle='#fbf7ef';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);
    return { data:canvas.toDataURL('image/jpeg',.78), name:file.name };
  } finally { URL.revokeObjectURL(url); }
}
function renderPhotos() {
  const container=document.getElementById('photo-list');container.replaceChildren();
  photos.forEach((p,i)=>{ const item=document.createElement('div');item.className='photo-item'; const img=new Image();img.src=p.data;img.alt=`Tanlangan surat ${i+1}`;const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.setAttribute('aria-label',`${i+1}-suratni o‘chirish`);remove.disabled=mediaPending;remove.onclick=()=>{photos.splice(i,1);renderPhotos();refresh();};const caption=document.createElement('small');caption.textContent=i===0?'1 · Asosiy surat':`${i+1} · Albom`;item.append(img,remove,caption);container.append(item); });
}
function setBusy(value) { mediaPending=value;downloadButton.disabled=value;document.getElementById('photos').disabled=value;document.getElementById('audio').disabled=value;renderPhotos(); }
document.getElementById('photos').addEventListener('change',async e=>{
  const files=Array.from(e.target.files);if(!files.length)return;
  if(photos.length+files.length>6) {notify('Jami 6 ta surat qo‘shish mumkin. Avval ortiqcha suratni o‘chiring.',true);e.target.value='';return;}
  setBusy(true);notify('Suratlar kichraytirilmoqda…');
  try {const additions=[];for(const file of files)additions.push(await compressImage(file));photos.push(...additions);notify('Suratlar tayyor. Faylga ixcham ko‘rinishda qo‘shildi.');refresh();}catch(error){notify(error.message,true);}finally{setBusy(false);e.target.value='';}
});
document.getElementById('audio').addEventListener('change',async e=>{
  const file=e.target.files[0];if(!file)return;
  if(file.size>3*1024*1024){notify('Musiqa 3 MB dan kichik bo‘lishi kerak.',true);e.target.value='';return;}
  if(!file.type.startsWith('audio/')){notify('Audio fayl tanlang (masalan, MP3).',true);e.target.value='';return;}
  setBusy(true);notify('Musiqa tayyorlanmoqda…');
  try {const result=await fileData(file);if(!/^data:audio\/[a-z0-9.+-]+;base64,/i.test(result))throw new Error('Audio formati qo‘llab-quvvatlanmaydi.');music=result;const info=document.getElementById('audio-info');info.replaceChildren(document.createTextNode(file.name+' '));const remove=document.createElement('button');remove.type='button';remove.textContent='O‘chirish';remove.onclick=()=>{music='';info.replaceChildren();refresh();};info.append(remove);notify('Musiqa qo‘shildi. Mehmonning o‘zi yoqadi.');refresh();}catch(error){notify(error.message,true);}finally{setBusy(false);e.target.value='';}
});
form.addEventListener('submit',e=>{
  e.preventDefault();if(mediaPending||!form.reportValidity())return;
  const d=data();if(d.map&&!Invitation.safeMap(d.map)){notify('Xarita havolasi https:// yoki http:// bilan boshlanishi kerak.',true);form.elements.map.focus();return;}
  if(d.timezone&&!/^[+-](0\d|1[0-4]):[0-5]\d$/.test(d.timezone)){notify('Vaqt mintaqasini +05:00 shaklida kiriting.',true);return;}
  refresh();const blob=new Blob([currentHTML],{type:'text/html;charset=utf-8'}),url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='index.html';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),10000);notify('Taklifnoma tayyor! Yuklangan index.html faylini brauzerda ochib tekshiring, so‘ng GitHub’ga joylang.');
});
refresh();
