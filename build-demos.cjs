// Run after changing invitation.js: node build-demos.cjs
const fs=require('node:fs');
const path=require('node:path');
const {themes,render}=require('./invitation.js');
for(const theme of themes){const dir=path.join(__dirname,'demos',theme.id);fs.mkdirSync(dir,{recursive:true});fs.writeFileSync(path.join(dir,'index.html'),render({theme:theme.id}),'utf8');}
console.log('5 ta mustaqil demo yangilandi.');
