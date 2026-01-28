
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const Leaders: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<any>(null);

  const leaders = [
    {
      id: 1,
      name: "Turobov Jasur",
      role: "Yoshlar Akademiyasi raisi",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      bio: "Strategik boshqaruv va jamoani motivatsiyalash bo'yicha mutaxassis.",
      fullBio: "Jasur Turobov Akademiyamizning eng faol talabalaridan biri bo'lib, u nafaqat o'z o'qishida, balki jamoat ishlarida ham yetakchi. Uning rahbarligida 'Yosh olimlar' klubi tashkil etilgan. U ko'plab xalqaro forumlarda O'zbekiston yoshlari nomidan ishtirok etib, yirik innovatsion loyihalarni joriy qilgan.",
      projects: ["Yosh olimlar klubi", "Talaba-mentor tizimi", "Innovatsion g'oyalar haftaligi", "Akademiya Digital Hub"],
      contact: { telegram: "@turobov_j", email: "j.turobov@iiau.uz" }
    },
    {
      id: 2,
      name: "Nizomova Kamola",
      role: "Ilmiy loyihalar koordinatori",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "Xalqaro grantlar va ilmiy hamkorlik bo'yicha tajribali lider.",
      fullBio: "Kamola Nizomova o'zining ilmiy izlanishlari bilan tanilgan. U 3 dan ortiq xalqaro grantlarni qo'lga kiritgan va ularni joriy etishda mas'ul bo'lib xizmat qiladi. Uning maqsadi talabalarning ilmiy ishlarini dunyo miqyosiga olib chiqish va xalqaro aloqalarni mustahkamlashdir.",
      projects: ["Xalqaro grantlar tahlili", "Ilmiy maqola yozish mahorati", "Online konferensiyalar", "Global Scholars Network"],
      contact: { telegram: "@nizomova_k", email: "k.nizomova@iiau.uz" }
    },
    {
      id: 3,
      name: "Abubakirov Azamat",
      role: "Tashqi aloqalar bo'limi boshlig'i",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      bio: "Xalqaro universitetlar bilan aloqalarni mustahkamlash bo'yicha ma'sul.",
      fullBio: "Azamat Abubakirov Akademiyamizning xalqaro aloqalarini yangi bosqichga olib chiqishda katta hissa qo'shgan. U ko'plab xorijiy OTMlar bilan memorandumlar imzolanishida faol ishtirok etgan. Talabalar almashinuv dasturlarining asosiy tashkilotchisi sifatida taniqli.",
      projects: ["Student Exchange program", "Xalqaro mehmondoshlik", "Akademiya elchilari", "Global Networking Days"],
      contact: { telegram: "@azamat_ab", email: "a.abubakirov@iiau.uz" }
    }
  ];

  return (
    <div className="pt-56 pb-40 bg-white min-h-screen selection:bg-[#0A84FF]">
      <section className="max-w-7xl mx-auto px-6 mb-56 text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <div className="inline-block px-6 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[#0A84FF] text-[11px] font-black uppercase tracking-[0.5em] mb-14">
            Yetakchilar Hamjamiyati
          </div>
          <h1 className="text-7xl md:text-[11rem] font-playfair font-bold text-[#0A1F44] tracking-tighter leading-[0.82] mb-14">Liderlar.</h1>
          <p className="text-3xl text-[#64748B] font-light max-w-3xl leading-relaxed">
            Kelajak rahbarlari, tashabbuskor yoshlar va ular boshqarayotgan akademik innovatsiyalar maskani.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="group flex flex-col items-center text-center cursor-pointer"
              onClick={() => setSelectedLeader(leader)}
            >
              <div className="relative mb-16 w-full aspect-square max-w-md">
                <div className="absolute inset-0 bg-slate-50 rounded-[100px] scale-105 -rotate-6 transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-110" />
                <div className="relative w-full h-full rounded-[100px] overflow-hidden shadow-3xl transition-all duration-1000 border-[16px] border-white bg-slate-100">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                </div>
              </div>
              <h3 className="text-5xl font-playfair font-bold text-[#0A1F44] mb-4 group-hover:text-[#0A84FF] transition-colors leading-tight">{leader.name}</h3>
              <p className="text-[#0A84FF] text-[12px] font-black uppercase tracking-[0.5em] mb-10">{leader.role}</p>
              <p className="text-slate-500 font-light text-2xl leading-relaxed max-w-sm line-clamp-2">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leader Detail Modal */}
      <Modal 
        isOpen={!!selectedLeader} 
        onClose={() => setSelectedLeader(null)} 
        title="Lider Profili"
      >
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-20">
            <div className="relative w-72 h-72 flex-shrink-0">
               <div className="absolute inset-0 bg-[#0A84FF]/10 rounded-[60px] rotate-6 scale-105"></div>
               <img src={selectedLeader?.image} className="relative w-full h-full rounded-[60px] object-cover shadow-3xl border-4 border-white" alt={selectedLeader?.name || "Leader"} />
            </div>
            <div className="flex-grow">
              <h3 className="text-5xl font-playfair font-bold text-[#0A1F44] mb-3">{selectedLeader?.name}</h3>
              <p className="text-[#0A84FF] text-sm font-black uppercase tracking-widest mb-10">{selectedLeader?.role}</p>
              <p className="text-[#475569] leading-relaxed text-2xl font-light italic">
                {selectedLeader?.fullBio}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-slate-50">
            <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF]">Muvaffaqiyatli Loyihalar</h4>
              <ul className="space-y-6">
                {selectedLeader?.projects.map((proj: string, i: number) => (
                  <li key={i} className="flex items-center space-x-5 text-[#1E293B] font-medium text-2xl leading-tight">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0A84FF] flex-shrink-0" />
                    <span>{proj}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF]">Aloqa kanallari</h4>
              <div className="space-y-8 bg-slate-50 p-12 rounded-[50px]">
                <div className="flex flex-col space-y-2">
                   <span className="text-slate-400 text-xs uppercase tracking-widest">Email</span>
                   <span className="text-[#0A1F44] font-bold text-xl break-all">{selectedLeader?.contact?.email}</span>
                </div>
                <div className="flex flex-col space-y-2">
                   <span className="text-slate-400 text-xs uppercase tracking-widest">Telegram</span>
                   <span className="text-[#0A1F44] font-bold text-xl">{selectedLeader?.contact?.telegram}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Leaders;
