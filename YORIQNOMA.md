# Mehr — elektron to‘y taklifnomalari

## Boshlash

VS Code va Live Server o‘rnatilgan bo‘lsa, `Mehr.code-workspace` faylini oching. Asosiy `index.html` fayliga o‘ng tugma bosib **Open with Live Server** ni tanlang. Sahifa `http://127.0.0.1:5500/` manzilida ochiladi. Qo‘shimcha o‘rnatish yoki build kerak emas. To‘liq ishga tushirish tartibi `README.md` ichida.

`index.html` faylini Chrome, Edge yoki Safari’da oching. O‘rnatish, Node.js, server yoki akkaunt kerak emas. Besh namuna sahifaning “Dizaynlar” bo‘limida joylashgan.

1. Dizayn ostidagi **Tanlash** tugmasini bosing.
2. Kelin-kuyov ismlari, mehmonga murojaat, matn, sana, vaqt va manzilni yozing.
3. Xarita xizmatidan olingan to‘liq `https://` havolani kiriting. Xarita kerak bo‘lmasa maydonni bo‘sh qoldiring.
4. Xohlasangiz suratlar va musiqa qo‘shing. Suratlar tartibi qo‘shish tartibiga mos; birinchi surat “Foto hikoya” muqovasi bo‘ladi. Suratni almashtirish uchun eskisini × bilan o‘chiring.
5. Telefon ko‘rinishidagi konvertni oching va pastga aylantirib tekshiring.
6. **Tayyor HTML faylni yuklab olish** tugmasini bosing. Brauzer faylni `index.html` nomida saqlaydi; takror yuklashda nomiga raqam qo‘shilishi mumkin. Joylashtirishdan oldin uni yana `index.html` deb nomlang.

Yuklangan fayl ichida dizayn, dastur, tanlangan suratlar va musiqa mavjud. Uni boshqa papkaga ko‘chirsangiz ham ishlaydi. Tayyorlagich sahifasini yopish yoki yangilash kiritilgan ma’lumotlarni o‘chiradi; ishni tugatgach faylni yuklab oling. Tayyor HTML’ni qayta import qilish funksiyasi mavjud emas.

## GitHub Pages orqali havola olish

Oddiy GitHub omboriga fayl yuklash saytni avtomatik nashr qilmaydi. **GitHub Pages** yoqilishi kerak. GitHub Free uchun ochiq (public) ombordan foydalanishingiz mumkin. Yopiq omborlar uchun imkoniyat hisob rejasiga bog‘liq.

### Bitta taklifnoma

1. GitHub’da yangi ombor (repository), masalan `taklifnoma`, yarating.
2. **Add file → Upload files** orqali eksport qilingan `index.html` faylini omborning asosiy papkasiga yuklang va **Commit changes** bosing.
3. **Settings → Pages → Build and deployment** ga o‘ting.
4. **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)** ni tanlab **Save** bosing. Asosiy branch nomi boshqacha bo‘lsa, o‘shani tanlang.
5. Pages bo‘limida nashr tugashini kuting. GitHub tayyor havolani ko‘rsatadi. Odatdagi manzil: `https://USERNAME.github.io/taklifnoma/`.
6. Telefoningizda shu havolani tekshiring va mehmonlarga yuboring.

### Bitta omborda ko‘p mijoz

Har mijoz uchun alohida papka yarating:

```text
taklifnomalar/
  azizbek-madina/
    index.html
  sardor-shahnoza/
    index.html
```

GitHub veb interfeysida **Add file → Create new file** oynasida `azizbek-madina/index.html` nomini yozib, yuklab olingan HTML’ning to‘liq matnini joylashingiz mumkin. Yoki tayyor mijoz papkalarini Git orqali yuklang. Papka nomlariga kichik lotin harflari, raqamlar va chiziqcha ishlating; bo‘sh joy ishlatmang.

Pages sozlamasini bir marta `main / (root)` ga o‘rnating. Shundan keyin manzillar:

- `https://USERNAME.github.io/taklifnomalar/azizbek-madina/`
- `https://USERNAME.github.io/taklifnomalar/sardor-shahnoza/`

`USERNAME` o‘rniga haqiqiy GitHub foydalanuvchi nomingizni, `taklifnomalar` o‘rniga ombor nomini yozing. Yangilashda tegishli papkaning `index.html` faylini almashtirib commit qiling. Nashr bir necha daqiqa olishi mumkin; eski ko‘rinish qolsa sahifani yangilang.

### Tayyorlagichning o‘zini joylashtirish

Quyidagilarni birgalikda yuklang: `index.html`, `studio.css`, `studio.js`, `invitation.js`, `demos/`, `YORIQNOMA.md` va `.nojekyll`. GitHub Pages’ni yuqoridagidek yoqing. `build-demos.cjs`, tekshiruv fayllari va skrinshotlarni yuklash shart emas. HTML, CSS va JS fayllarini bir papkada saqlang; mijozga eksport qilingan HTML esa yolg‘iz o‘zi yetarli.

## Tezlik va media

- Media yo‘q taklifnoma taxminan 14–17 KB. Tashqi shrift yoki JavaScript kutubxonasi yuklanmaydi.
- Ko‘pi bilan 6 surat, har biri JPG/PNG/WebP va 15 MB gacha. Tayyorlagich ularni uzun tomoni 1200 px gacha kichraytirib, JPEG formatiga o‘tkazadi.
- Musiqa 3 MB gacha; keng moslik uchun MP3 tavsiya qilinadi. Mualliflik huquqiga ega bo‘lgan yoki foydalanishga ruxsat etilgan audio tanlang.
- Musiqa va suratlar HTML ichiga qo‘shiladi. Pastdagi rasmlar kechiktirib chiziladi, ammo ichki media tufayli fayl hajmi baribir oshadi. Eng tez ochilish uchun kamroq va kichikroq media ishlating.
- Musiqa avtomatik yoqilmaydi. Telefon brauzeri talabiga mos ravishda mehmonning o‘zi tugmani bosadi; boshqa oynaga o‘tganda to‘xtaydi.
- Vaqt mintaqasi boshlanishda O‘zbekiston — UTC+5. “Boshqa” orqali `+05:30` kabi siljish ham kiritiladi. Yozgi vaqt qo‘llanadigan davlatlarda to‘y sanasiga mos UTC siljishini tanlang.
- Mehmon javoblari, tashrif statistikasi, bot yoki ma’lumotlar bazasi yo‘q.

## Joylashtirish shartlari

GitHub Pages statik sahifalarni joylashtiradi. U onlayn biznes yoki tijoriy SaaS xizmatini bepul yuritish uchun mo‘ljallanmagan. Pullik mijozlar xizmatiga kengaytirishdan oldin [GitHub Pages cheklovlarini](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits) o‘qing; zarur bo‘lsa ushbu statik fayllarni tijoriy foydalanishingizga mos hostingga joylashtiring.

Ochiq havoladagi taklifnomani havolasi bor har kim ko‘rishi mumkin. Bu parol bilan himoyalangan taklifnoma emas. Ochiq ombordagi fayllar ham hammaga ko‘rinadi.

## Dasturchi uchun

`invitation.js` umumiy dizayn va mustaqil HTML rendereridir. O‘zgartirilgach, besh demoni yangilang:

```sh
node build-demos.cjs
node test.cjs
```

`studio.js` tayyorlagich, suratlarni siqish va yuklab olishni boshqaradi. Tarmoq so‘rovi, token yoki maxfiy kalit ishlatilmaydi.
