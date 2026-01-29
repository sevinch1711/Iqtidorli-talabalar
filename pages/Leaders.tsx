
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const Leaders: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<any>(null);

  const academyLeaders = [
    { 
      id: 1, name: "Jasur Turobov", role: "AKADEMIYA LIDERI", desc: "Strategik boshqaruv bo'yicha mutaxassis.", 
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
      history: "Jasur Akademiya yoshlari orasida innovatsion g'oyalarni qo'llab-quvvatlash tizimini yaratdi va 10 dan ortiq yirik loyihalarga rahbarlik qildi.",
      experience: "5 yil", projects: "12 ta", focus: "Strategiya"
    },
    { 
      id: 2, name: "Kamola Nizomova", role: "KOORDINATOR", desc: "Ilmiy loyihalar boshqaruvchisi.", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
      history: "Kamola xalqaro grantlar va ilmiy hamkorlik sohasida katta tajribaga ega bo'lib, talabalar uchun yangi imkoniyatlar ochishda faol ishtirok etadi.",
      experience: "3 yil", projects: "8 ta", focus: "Ilmiy grant"
    },
    { 
      id: 3, name: "Azizbek Rahimov", role: "MA'NAVIYAT YETAKCHISI", desc: "Milliy g'oya targ'ibotchisi.", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
      history: "Azizbek talabalar orasida vatanparvarlik va milliy qadriyatlarni yuksaltirishga qaratilgan 'Yuksak Ma'naviyat' loyihasining asoschisi hisoblanadi.",
      experience: "4 yil", projects: "15 ta", focus: "Ma'naviyat"
    },
    { 
      id: 4, name: "Malika Aliyeva", role: "XALQARO ALOQALAR", desc: "Xorijiy universitetlar bilan hamkorlik.", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600",
      history: "Malika sa'y-harakatlari bilan Akademiya 5 ta xorijiy nufuzli universitet bilan o'zaro memorandum imzoladi va talabalar almashinuvini yo'lga qo'ydi.",
      experience: "2 yil", projects: "6 ta", focus: "Diplomatiya"
    },
    { 
      id: 5, name: "Umar Xasanov", role: "IT VA INNOVATSIYA", desc: "Raqamli texnologiyalar bo'yicha maslahatchi.", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
      history: "Umar talabalar portali va ichki monitoring tizimini ishlab chiqishda texnik rahbarlik qilgan. U ko'plab startap loyihalar mentori hisoblanadi.",
      experience: "4 yil", projects: "10 ta", focus: "Texnologiya"
    },
    { 
      id: 6, name: "Zuhra Karimoza", role: "LOYIHALAR MENEJERI", desc: "Ijtimoiy tashabbuslar yetakchisi.", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
      history: "Zuhra ko'plab ijtimoiy va xayriya loyihalari muallifi. U Akademiya yoshlarining ijtimoiy mas'uliyatini oshirish bo'yicha samarali ishlamoqda.",
      experience: "3 yil", projects: "9 ta", focus: "Ijtimoiy faollik"
    }
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/75 z-10" />
          <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=2400" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-10 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 text-white text-[10px] font-black uppercase tracking-[0.8em]">Yetakchilar Hamjamiyati</motion.div>
          <h1 className="text-7xl md:text-[10vw] font-playfair font-bold text-white leading-none tracking-tighter mb-10">
            Ertangi <br /> <span className="text-[#D4AF37] italic font-light">Yetakchilar.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="px-14 py-6 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Bizning jamoa</button>
            <button className="px-14 py-6 bg-transparent border border-white/30 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all">Loyihalar</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-48 px-8 max-w-4xl mx-auto text-center border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-[0.6em] block mb-8">Yetakchilik Falsafasi</span>
          <p className="text-3xl md:text-5xl font-playfair italic text-[#0A1F44] leading-tight">
            "Bizning jamoa akademiyaning eng faol va intiluvchan yoshlaridan tashkil topgan. Biz birgalikda buyuk maqsadlar sari odimlaymiz."
          </p>
          <p className="mt-10 text-slate-500 font-light text-xl max-w-2xl mx-auto">
            Liderlik — bu nafaqat boshqarish, balki o'z ortidan ergashtirish va yangi marralarni zabt etish demakdir.
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="py-48 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 max-w-7xl mx-auto">
        {academyLeaders.map(leader => (
          <motion.div 
            key={leader.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center group cursor-pointer" 
            onClick={() => setSelectedLeader(leader)}
          >
            <div className="aspect-[4/5] rounded-[80px] overflow-hidden mb-8 border border-slate-100 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-1000">
               <img src={leader.image} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" alt={leader.name} />
            </div>
            <h4 className="text-3xl font-playfair font-bold text-[#0A1F44] mb-2">{leader.name}</h4>
            <p className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest">{leader.role}</p>
          </motion.div>
        ))}
      </section>

      <Modal isOpen={!!selectedLeader} onClose={() => setSelectedLeader(null)} title="Leader Profili">
        {selectedLeader && (
          <div className="p-10 md:px-14 md:pb-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
              <div className="md:col-span-5 relative">
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8FAFF]">
                  <img src={selectedLeader.image} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div className="md:col-span-7 pt-4">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0A1F44] mb-2">{selectedLeader.name}</h2>
                <p className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">{selectedLeader.role}</p>
                <div className="bg-[#F8FAFF] p-8 rounded-[40px]">
                  <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-widest block mb-4">Biografiya:</span>
                  <p className="text-lg md:text-xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
                    "{selectedLeader.history}"
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-100 grid grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">Tajriba</span>
                <p className="text-[#0A1F44] font-bold text-lg">{selectedLeader.experience}</p>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">Loyihalar</span>
                <p className="text-[#0A1F44] font-bold text-lg">{selectedLeader.projects}</p>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">Fokus</span>
                <p className="text-[#0A1F44] font-bold text-lg">{selectedLeader.focus}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Leaders;
