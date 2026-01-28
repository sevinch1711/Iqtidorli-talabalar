
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const news = [
    {
      id: 1,
      title: "Akademiya talabasi xalqaro olimpiada g'olibi bo'ldi",
      date: "24-May, 2024",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
      category: "Yutuqlar",
      content: "Akademiyamiz Islomshunoslik yo'nalishi 3-bosqich talabasi Ahmadjonov Ali Misr Arab Respublikasida bo'lib o'tgan xalqaro fan olimpiadasida faxrli 1-o'rinni egalladi. Musobaqada dunyoning 40 dan ortiq davlatidan vakillar ishtirok etdi. Ushbu yutuq akademiyamizning ilmiy salohiyati xalqaro miqyosda e'tirof etilayotganining yana bir isbotidir."
    },
    {
      id: 2,
      title: "Yangi stipendiya dasturi e'lon qilindi",
      date: "20-May, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
      category: "E'lonlar",
      content: "Iqtidori bo'limi 2024-2025 o'quv yili uchun yangi 'Akademiya Iftixori' stipendiyasini e'lon qiladi. Ushbu dastur talabalarning ilmiy ishlarini xalqaro jurnallarda chop etish xarajatlarini qoplashga qaratilgan. Nomzodlar 1-iyunga qadar arizalarini topshirishlari mumkin."
    },
    {
      id: 3,
      title: "Yoshlar akademiyasi liderlari uchrashuvi",
      date: "15-May, 2024",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
      category: "Tadbirlar",
      content: "Akademiya binosida Yoshlar akademiyasining yangi tarkibi bilan uchrashuv bo'lib o'tdi. Unda kelgusi semestr uchun strategik rejalar, startap loyihalar va xalqaro hamkorlik masalalari muhokama qilindi. Liderlarimiz yangi tashabbuslarni ilgari surishga tayyor ekanliklarini bildirishdi."
    }
  ];

  return (
    <div className="pt-48 pb-40 bg-white selection:bg-[#0A84FF]">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <div className="inline-block px-6 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[#0A84FF] text-[11px] font-black uppercase tracking-[0.5em] mb-12">
            Media Markaz
          </div>
          <h1 className="text-7xl md:text-[9rem] font-playfair font-bold text-[#0A1F44] tracking-tighter leading-[0.85] mb-12">Yangiliklar.</h1>
          <p className="text-2xl text-[#64748B] font-light max-w-2xl leading-relaxed">
            Akademiyamizning ijtimoiy va ilmiy hayotidagi eng so'nggi voqealar, media materiallar va muhim e'lonlar.
          </p>
        </motion.div>
      </section>

      {/* Featured News */}
      <section className="max-w-7xl mx-auto px-6 mb-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          onClick={() => setSelectedNews({
            title: "Akademiyamizda yosh iqtidorlar forumi bo'lib o'tdi",
            content: "Forum doirasida 50 dan ortiq istiqbolli loyihalar taqdim etildi va ularning 10 tasi moliyalashtirishga tavsiya etildi. Tadbirda davlat arboblari, xalqaro ekspertlar va talabalar ishtirok etishdi. Ushbu forum har yili an'anaviy tarzda o'tkazilib, eng yaxshi startap loyihalar akademiya granti hisobidan qo'llab-quvvatlanadi.",
            date: "28-May, 2024",
            image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2200",
            category: "Forum"
          })}
          className="relative group cursor-pointer overflow-hidden rounded-[80px] aspect-[21/9] shadow-3xl border-[16px] border-white"
        >
          <img 
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2200" 
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            alt="Featured News"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44] via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
          <div className="absolute bottom-0 left-0 p-20 text-white">
            <span className="px-5 py-2 bg-[#0A84FF] rounded-full text-xs font-black mb-8 inline-block uppercase tracking-[0.4em]">Maxsus E'lon</span>
            <h2 className="text-5xl md:text-7xl font-playfair font-bold max-w-4xl mb-8 leading-tight">Akademiyamizda yosh iqtidorlar forumi bo'lib o'tdi</h2>
            <div className="flex items-center space-x-4 text-slate-300">
               <span className="text-sm font-bold uppercase tracking-widest">Batafsil ma'lumot olish →</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 1 }}
              onClick={() => setSelectedNews(item)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[60px] mb-10 aspect-[4/5] bg-slate-100 border-[10px] border-white shadow-2xl transition-all duration-700 group-hover:-translate-y-4">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  alt={item.title} 
                />
                <div className="absolute top-8 left-8">
                  <span className="bg-white/95 backdrop-blur px-5 py-2.5 rounded-full text-[10px] font-black text-[#0A1F44] uppercase tracking-widest shadow-xl">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4 px-4">
                <p className="text-xs text-[#0A84FF] font-black uppercase tracking-[0.4em]">{item.date}</p>
                <h3 className="text-3xl font-playfair font-bold text-[#0A1F44] group-hover:text-[#0A84FF] transition-colors leading-tight mb-4 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-lg leading-relaxed line-clamp-3 font-light">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Modal */}
      <Modal 
        isOpen={!!selectedNews} 
        onClose={() => setSelectedNews(null)} 
        title="Yangilik tafsiloti"
      >
        <div className="space-y-12">
          <div className="relative aspect-video rounded-[50px] overflow-hidden shadow-3xl border-4 border-white">
            <img src={selectedNews?.image} className="w-full h-full object-cover" alt="" />
          </div>
          <div className="flex justify-between items-center text-sm border-b border-slate-50 pb-10">
            <span className="px-6 py-2.5 bg-[#0A84FF]/10 text-[#0A84FF] rounded-full font-black uppercase tracking-[0.4em] text-[10px]">{selectedNews?.category || "Tadbir"}</span>
            <span className="text-slate-400 font-bold tracking-widest">{selectedNews?.date}</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0A1F44] leading-tight">{selectedNews?.title}</h3>
          <div className="prose prose-slate max-w-none">
             <p className="text-[#475569] leading-relaxed text-2xl font-light italic">
               {selectedNews?.content}
             </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default News;
