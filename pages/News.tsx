
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 4;

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const newsData = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? "Iqtidorli talabalar xalqaro forumda" : "Yangi innovatsion loyihalar tanlovi",
    date: `${Math.floor(Math.random() * 28) + 1}-May, 2024`,
    excerpt: "Ushbu tadbirda akademiyamizning 50 dan ortiq iqtidorli talabalari o'zlarining yangi ishlanmalari bilan ishtirok etishdi...",
    image: `https://images.unsplash.com/photo-${1517486808906 + i}?q=80&w=1200`,
    category: i % 3 === 0 ? "Xalqaro" : "Akademiya"
  }));

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const currentItems = newsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
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
        </div>
      </section>

      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item, idx) => (
              <motion.div 
                key={item.id} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-[60px] overflow-hidden mb-10 shadow-xl border border-slate-50 relative">
                  <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt="" />
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-[#0A1F44] border border-slate-100">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="px-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-4 block">{item.date}</span>
                  <h3 className="text-3xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500 font-light italic leading-relaxed line-clamp-2">
                    "{item.excerpt}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      </section>
    </div>
  );
};

export default News;
