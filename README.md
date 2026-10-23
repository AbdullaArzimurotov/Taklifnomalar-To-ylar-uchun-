# Mehr — to‘y taklifnomalari

## Internetdagi manzil

GitHub Pages `main / (root)` orqali yoqilgach, sayt quyidagi manzilda ishlaydi:

**https://abdullaarzimurotov.github.io/Taklifnomalar-To-ylar-uchun-/**

Sayt GitHub’da joylashadi: kompyuteringiz, VS Code yoki Live Server ochiq turishi shart emas. `main` branch’dagi fayllarni yangilab push qilganingizda sayt ham avtomatik yangilanadi. GitHub Pages sozlamalari: https://github.com/AbdullaArzimurotov/Taklifnomalar-To-ylar-uchun-/settings/pages

## VS Code va Live Server orqali ishga tushirish

1. ZIP paketni to‘liq alohida papkaga chiqaring. ZIP ichidan to‘g‘ridan-to‘g‘ri ishga tushirmang.
2. `Mehr.code-workspace` faylini VS Code’da oching. Yoki **File → Open Folder** orqali loyiha papkasini tanlang.
3. Asosiy papkadagi `index.html` faylini oching.
4. Fayl ustida o‘ng tugma → **Open with Live Server** ni bosing. Yoki VS Code pastidagi **Go Live** tugmasini bosing.
5. Brauzerda `http://127.0.0.1:5500/` manzili ochiladi. Dizayn tanlang, ma’lumot kiriting va mustaqil taklifnomani yuklab oling.

**Ishga tushirish uchun Node.js, npm install yoki build shart emas.** Live Server sozlamalari `.vscode/settings.json` ichida tayyor. Kodga o‘zgartirish kiritib **Ctrl+S** bossangiz, Live Server sahifani yangilaydi. Forma ma’lumotlari yangilashda o‘chadi; kerakli taklifnomani avval yuklab oling.

Port 5500 band bo‘lsa, `.vscode/settings.json` ichidagi `liveServer.settings.port` qiymatini `5501` ga o‘zgartiring va Live Server’ni to‘xtatib qayta yoqing. Serverni to‘xtatish uchun pastdagi **Port: 5500** tugmasini bosing. `127.0.0.1` manzili faqat o‘z kompyuteringizda ishlaydi; mijozlarga yuborish uchun GitHub Pages’ga joylang.

Live Server’siz ham `index.html` faylini brauzerda ochish mumkin.

- Beshta dizayn: oq-oltin, milliy, gulli, minimal, foto hikoya.
- Konvert ochilishi, shaxsiy murojaat, vaqt hisoblagichi va xarita.
- Jonli telefon ko‘rinishi; suratlarni siqish va ixtiyoriy musiqa.
- Eksport: media ichiga qo‘shilgan bitta HTML fayl.
- Kutubxona, backend, o‘rnatish yoki majburiy tashqi so‘rov yo‘q.

GitHub Pages va har mijoz uchun havola yaratish bo‘yicha [o‘zbekcha yo‘riqnoma](YORIQNOMA.md).

## Fayllar

| Fayl | Vazifasi |
| --- | --- |
| `index.html` | Dizaynlar va taklifnoma tayyorlagichi — kirish sahifasi |
| `studio.css` | Tayyorlagich ko‘rinishi |
| `studio.js` | Forma, media va HTML eksporti |
| `invitation.js` | Besh dizayn va mustaqil taklifnoma generatori |
| `demos/` | Besh tayyor mustaqil namuna |
| `.vscode/` | Live Server sozlamalari va ixtiyoriy dasturchi vazifalari |
| `YORIQNOMA.md` | Mijozlar uchun taklifnoma va GitHub Pages yo‘riqnomasi |

## Dizayn kodini o‘zgartirish

`invitation.js` o‘zgarsa, tayyorlagich yangi dizaynni avtomatik ishlatadi. `demos/` ichidagi oldindan yaratilgan HTML namunalarini yangilash uchun **Node.js o‘rnatilgan bo‘lsa** terminalda:

```sh
node build-demos.cjs
node test.cjs
```

VS Code’dagi **Terminal → Run Task → Mehr: tekshiruv** ham demolarni qayta yaratib tekshiradi. Bu faqat dasturchi tekshiruvi; tayyor loyiha bilan ishlash uchun kerak emas.
