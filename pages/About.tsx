
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

const About: React.FC = () => {
  const [selectedStaff, setSelectedStaff] = useState<any>(null);

  const staff = [
    {
      id: 1,
      name: "Abdurahmonov Dilshod",
      position: "Bo'lim boshlig'i",
      email: "d.abdurahmonov@iiau.uz",
      phone: "+998 (71) 244-00-01",
      receptionTime: "Dushanba-Juma, 14:00 - 17:00",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      bio: "Dilshod Abdurahmonov 10 yildan ortiq vaqt davomida oliy ta'lim tizimida faoliyat yuritib kelmoqda.",
      fullExperience: "Xalqaro Islomshunoslik Akademiyasida ko'p yillik faoliyati davomida 200 dan ortiq iqtidorli talabalarni nomdor stipendiyalarga tayyorlagan."
    },
    {
      id: 2,
      name: "Karimova Zilola",
      position: "Bosh mutaxassis",
      email: "z.karimova@iiau.uz",
      phone: "+998 (71) 244-00-02",
      receptionTime: "Seshanba-Payshanba, 10:00 - 12:00",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Zilola Karimova talabalarning ilmiy maqolalarini nufuzli Scopus va Web of Science bazalaridagi jurnallarda chop etish bo'yicha maslahatchi.",
      fullExperience: "Ilmiy maqolalar tahriri va xalqaro jurnallarga taqdim etish bo'yicha 5 yillik tajribaga ega."
    },
    {
      id: 3,
      name: "Sattorov Jamshid",
      position: "Uslubchi",
      email: "j.sattorov@iiau.uz",
      phone: "+998 (71) 244-00-03",
      receptionTime: "Chorshanba, 15:00 - 18:00",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      bio: "Jamshid Sattorov iqtidorli yoshlarning ichki reytingini shakllantirish bo'yicha mutaxassis.",
      fullExperience: "Talabalar o'rtasida o'tkaziladigan 'Yil talabasi', 'Iqtidorli talaba' ko'rik-tanlovlarining ichki mezonlarini ishlab chiquvchi."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-48 pb-40 selection:bg-[#0A84FF]">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-56">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="space-y-14">
          <div className="inline-block px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-[#0A84FF] text-[11px] font-black uppercase tracking-[0.5em]">Bo'lim haqida</div>
          <h1 className="text-7xl md:text-[10rem] font-playfair font-bold text-[#0A1F44] tracking-tighter leading-[0.82]">Ilm bilan <br /> <span className="text-slate-200 italic font-light">cho'qqilarga.</span></h1>
          <p className="text-3xl md:text-4xl text-[#64748B] font-light max-w-3xl leading-relaxed">Iqtidori talabalar markazi — sizning akademik yuksalishingizda eng yaqin hamrohingizdir.</p>
        </motion.div>
      </section>

      {/* 2. HISTORY SECTION (Expanded and Centered Typography) */}
      <section className="max-w-5xl mx-auto px-6 mb-72">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-[#0A1F44] mb-16">Bo'lim tarixi va <br /> <span className="text-[#0A84FF]">rivojlanish yo'li</span></h2>
          <div className="space-y-12 text-2xl text-[#475569] font-light leading-relaxed">
            <p>
              O'zbekiston Xalqaro Islomshunoslik Akademiyasi qoshidagi "Iqtidorli talabalar bilan ishlash" bo'limi akademiya tashkil etilgan ilk kunlardanoq o'z faoliyatini boshlagan. Bo'limning vujudga kelishi mamlakatimizda diniy va dunyoviy bilimlarni uyg'unlashtirgan yangi avlod kadrlarini shakllantirish zaruriyati bilan bog'liq edi. Dastlab kichik ishchi guruh sifatida faoliyat boshlagan bo'lim, qisqa vaqt ichida akademiyaning strategik markazlaridan biriga aylandi.
            </p>
            <div className="py-12 border-y border-slate-100 my-16">
              <p className="text-3xl md:text-4xl font-playfair italic text-[#0A1F44] text-center max-w-3xl mx-auto">
                "Bizning tariximiz — bu iqtidorli yoshlarning orzulari va ularning ilm yo'lidagi matonati tarixidir."
              </p>
            </div>
            <p>
              2018-yilda bo'lim faoliyati tubdan isloh qilindi. Talabalarning ilmiy-tadqiqot ishlariga qiziqishini oshirish maqsadida maxsus "Mentorlik" dasturlari joriy etildi. Bu islohotlar natijasida talabalarimiz nafaqat mahalliy, balki nufuzli xalqaro konferensiyalarda ham faol ishtirok eta boshladilar. Ayniqsa, islomshunoslik, dinshunoslik va islom iqtisodiyoti yo'nalishlarida talabalarimiz tomonidan amalga oshirilgan tadqiqotlar xalqaro ekspertlar e'tirofini qozondi.
            </p>
            <p>
              Bugungi kunda bo'lim nafaqat stipendiyalar tayinlash markazi, balki yosh olimlarning intellektual maydoniga aylangan. Biz dunyoning yetakchi islomshunoslik va gumanitar fanlar markazlari, jumladan, Al-Azhar universiteti (Misr), Islom taraqqiyot banki va turli xalqaro jamg'armalar bilan muntazam aloqadamiz. Har yili o'nlab talabalarimiz xorijiy OTMlarda o'z malakalarini oshirib qaytmoqdalar. Bizning kelajakdagi maqsadimiz — akademiyamiz talabalarini jahon intellektual elitasining bir qismiga aylantirishdir.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 3. STAFF GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 border-b border-slate-50 pb-12 gap-8">
            <h2 className="text-6xl font-playfair font-bold text-[#0A1F44]">Akademik Jamoa</h2>
            <p className="text-xl text-[#64748B] font-light max-w-sm">Bizning tajribali ustozlarimiz har doim sizga yo'l ko'rsatishga tayyor.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {staff.map((person, idx) => (
            <Reveal key={person.id} delay={idx * 0.1}>
              <div className="group cursor-pointer" onClick={() => setSelectedStaff(person)}>
                <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden mb-12 bg-slate-50 border-[12px] border-white shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#0A84FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-4xl font-bold text-[#0A1F44] mb-2">{person.name}</h3>
                <p className="text-[#0A84FF] text-[12px] font-black uppercase tracking-[0.4em]">{person.position}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. MODAL */}
      <Modal isOpen={!!selectedStaff} onClose={() => setSelectedStaff(null)} title="Xodim Profili">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-16">
            <img src={selectedStaff?.image} className="w-64 h-64 rounded-[50px] object-cover shadow-2xl border-4 border-white" alt="" />
            <div>
              <h3 className="text-5xl font-playfair font-bold text-[#0A1F44] mb-3">{selectedStaff?.name}</h3>
              <p className="text-[#0A84FF] text-sm font-black uppercase tracking-widest mb-10">{selectedStaff?.position}</p>
              <p className="text-[#475569] leading-relaxed text-2xl font-light italic">"{selectedStaff?.bio}"</p>
            </div>
          </div>
          <div className="pt-16 border-t border-slate-50 space-y-10">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF] mb-6">Taqdimot</h4>
              <p className="text-slate-600 font-light text-xl leading-relaxed">{selectedStaff?.fullExperience}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-10 rounded-[40px]">
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</span>
                <p className="text-[#0A1F44] font-medium">{selectedStaff?.email}</p>
              </div>
              <div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Qabul vaqti</span>
                <p className="text-[#0A1F44] font-medium">{selectedStaff?.receptionTime}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
