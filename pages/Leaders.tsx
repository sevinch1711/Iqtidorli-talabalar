
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const staticLeaders = [
  {
    id: 1,
    name: "Javohir Toshpo'latov",
    role: "Talabalar Kengashi Raisi",
    bio: "Javohir akademiyamizning eng faol talabalaridan biri bo'lib, yoshlar siyosati va ijtimoiy loyihalar bo'yicha katta tajribaga ega.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200",
    experience: "4 yil",
    projects: "15+",
    focus: "Strategiya"
  },
  {
    id: 2,
    name: "Mohira Ahmedova",
    role: "Ilmiy Kengash Yetakchisi",
    bio: "Mohira ilmiy-tadqiqot ishlarida talabalarni birlashtirish va xalqaro grantlarda ishtirok etish bo'yicha mas'ul.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    experience: "3 yil",
    projects: "8+",
    focus: "Tadqiqot"
  },
  {
    id: 3,
    name: "Sardor Mirzaev",
    role: "Innovatsiya Klubi Rahbari",
    bio: "Sardor IT va innovatsion texnologiyalar orqali islom madaniyatini targ'ib qilish loyihalarini boshqaradi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200",
    experience: "2 yil",
    projects: "12+",
    focus: "Texnologiya"
  }
];

const Leaders: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<any>(null);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/75 z-10" />
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400" className="w-full h-full object-cover" alt="Leaders Academy" />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-10 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 text-white text-[10px] font-black uppercase tracking-[0.8em]">Yetakchilar Hamjamiyati</motion.div>
          <h1 className="text-7xl md:text-[10vw] font-playfair font-bold text-white leading-none tracking-tighter mb-10">
            Ertangi <br /> <span className="text-[#D4AF37] italic font-light">Yetakchilar.</span>
          </h1>
        </div>
      </section>

      <section className="py-48 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
        {staticLeaders.map(leader => (
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
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8FAFF] bg-slate-50">
                  <img src={selectedLeader.image} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div className="md:col-span-7 pt-4">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0A1F44] mb-2">{selectedLeader.name}</h2>
                <p className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">{selectedLeader.role}</p>
                <div className="bg-[#F8FAFF] p-8 rounded-[40px]">
                  <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-widest block mb-4">Biografiya:</span>
                  <p className="text-lg md:text-xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
                    "{selectedLeader.bio}"
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
