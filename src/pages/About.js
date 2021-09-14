import React from "react";

const About = () => {
  return (
    <main className="flex flex-col justify-center items-center mt-14 mb-24 px-24">
      <h1 className="text-3xl font-bold text-primary mb-5">
        STUDENT HOUSE haqida
      </h1>
      <p className="leading-8">
        <span className="text-primary font-bold">STUDENT HOUSE</span> - bu
        talabalarning turar joy muammosini hal qilish va ularga yengillik
        yaratish uchun ishlab chiqilgan O’zbekistondagi yagona chet el
        tajribalariga asoslangan onlayn platforma. Bu platforma nafaqat mahalliy
        balki xalqaro talabalarga ham birdek xizmat ko’rsatish uchun
        mo’ljallangan. Siz bu yerda o’z uyingizni ijaraga qo’ya olasiz va
        talabalar hech qanday qiyinchiliksiz yashash uchun uy topa oladilar. Shu
        bilan birga OTM ma’sul xodimlari o’z talabalarini ushbu platforma orqali
        nazorat qila oladilar.
      </p>
      <h1 className="text-3xl font-bold text-primary mb-5 mt-10">
        STUDENT HOUSE afzalliklari
      </h1>

      <ul className="leading-8 list-decimal">
        <li>24/7 rejimida xizmat ko’rsatiladi.</li>
        <li>
          Xavfsizlik ta’minlangan va hech qanday firibgarlik va yolg’onchilikka
          yo’l qo’yilmaydi.
        </li>
        <li>Siz bu platforma orqali anchagina vaqtingizni tejab qolasiz.</li>
        <li>
          Ortiqcha ovoragarchiliklarsiz o’zingizga yoqqan uyni tanlaysiz.
          Barchasi birgina platforma orqali amalga oshiriladi. Shunchaki uyni
          tanlang va uyni ijaraga oling.
        </li>
        <li>
          Uyga ko’chib o’tganingizdan so’ng, agar uy e’lon qilinganidek holatda
          bo’lmasa, 48 soat ichida bizga xabar bering va pulingizni qaytarib,
          sizga boshqa uy topishda yordam beramiz.
        </li>
        <li>
          Shuningdek, talabaning o’qish joyidan ma’sul shaxs talabani nazoratga
          oladi va uni doimiy ravishda turar joyi bo’yicha ma’lumotga ega bo’lib
          boradi.
        </li>
        <li>
          Ijaraga uy oldi berdisi 3-shaxs (vositachi) tomonidan amalga
          oshirilmaydi (makler). Barcha kelishuvlar StudentHouse platformasi
          orqali faqatgina talaba va uy egasi o’rtasida bo’ladi.
        </li>
        <li>
          Begona shaxslar bu platformadan foydalana olmaydilar. Ro’yxatdan
          o’tish jarayonida barcha talabalarning shaxsi o’zlari o’qib turgan OTM
          mas’ul xodimlari orqali tasdiqlanadi.
        </li>
      </ul>
      <h1 className="text-3xl font-bold text-primary mb-5 mt-10">
        STUDENT HOUSE qulayliklari
      </h1>
      <ul className="leading-8 list-decimal">
        <li>
          Talaba ro’yhatdan o’tgandan so’ng, unga birinchi navbatda o’zi
          o’qiyotgan OTM talabasi yoki talabalari tomonidan ijaraga olingan
          lekin bo’sh o’rni bo’lgan uylar ro’yhati ko’rsatiladi.
        </li>

        <li>
          Talaba ijaraga uyni olgandan so’ng, talaba ijaraga olgan kvartiradan u
          o’qiydigan OTM sigacha bo’lgan masofa kartadan ko’rsatiladi va OTM ga
          qanday borish yo’llari ham ko’rsatiladi. Misol uchun, talabaga
          107-avtobus orqali yoki chilonzor metro stansiyasidan metroga minib,
          paxtakor metro bekatidan chiqib OTM ga yetib olishingiz mumkin deb
          ko’rsatiladi.
        </li>
        <li>
          Ijaraga beruvchini baholash tizimi. Deylik, bir talaba bir kvartirani
          StudentHouse orqali ijaraga oldi va qanchadir muddat u yerda yashadi.
          Talaba u yerda yashab bo’lgach, uyni va ijaraga beruvchini baholashi
          mumkin, ya’ni o’z fikrini StudentHouse platformasiga yozib qoldiradi
          va 5 yulduzlik baholash tizimida baholaydi. Shu tariqa shu uyga
          keyinroq kelgan talabalar ham uy to’g’risidagi fikrlarni o’qib uy
          tanlashlari mumkin bo’ladi.
        </li>
      </ul>
    </main>
  );
};

export default About;
