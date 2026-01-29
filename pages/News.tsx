
import React from 'react';
import { motion } from 'framer-motion';

const News: React.FC = () => {
  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1504711432866-02bf947e89bd?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="News" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em]">Oxirgi Xabarlar</span>
          </motion.div>
          <h1 className="text-7xl md:text-[10vw] font-playfair font-bold text-white leading-none tracking-tighter mb-16">
            Akademiya <br /> <span className="text-[#D4AF37] italic font-light">Lentasi.</span>
          </h1>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="px-14 py-6 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
              Oxirgi yangiliklar
            </button>
            <button className="px-14 py-6 bg-transparent border border-white/30 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all">
              E'lonlar arxivi
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-48 px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        {[1, 2].map(i => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] rounded-[50px] overflow-hidden mb-8 shadow-lg">
              <img src={`https://images.unsplash.com/photo-${i === 1 ? '1434030216411-0b793f4b4173' : '1526676037777-05a232554f77'}?q=80&w=1200`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
            </div>
            <h3 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-4">Yangilik sarlavhasi {i}</h3>
            <p className="text-slate-500 font-light italic mb-6">Ushbu maqolada bo'limning oxirgi haftadagi yutuqlari va rejalar haqida so'z boradi.</p>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">24-May, 2024</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default News;
