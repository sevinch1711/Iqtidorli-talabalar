
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '../components/Pagination';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const ITEMS_PER_PAGE = 6; 

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true);
      const data = await fetchFromStrapi('/news-items?populate=*&sort=sana:desc');
      if (data) setNews(data);
      setIsLoading(false);
    };
    loadNews();
  }, []);

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const currentItems = news.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative min-h-[65vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/75 z-10" />
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            src="https://lh3.googleusercontent.com/d/17etYK5PY5zi3VyisfvehNSuU1tTsScgX" 
            className="w-full h-full object-cover" 
            alt="Academy News Hero" 
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] md:tracking-[0.8em] block mb-6">Akademiya Hayoti</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-white tracking-tighter leading-[1.1]">
              Akademiya <br /> <span className="text-[#D4AF37] italic font-light">Yangiliklari.</span>
            </h1>
            <p className="mt-6 text-white/50 text-base md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
              "Bizning kundalik faoliyatimiz, erishilayotgan natijalar va muhim voqealar markazi."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-[1400px] mx-auto">
        <div className="mb-20">
          <span className="text-[10px] font-black text-[#0A84FF] uppercase tracking-[0.5em] block mb-4">Oxirgi voqealar</span>
          <div className="w-16 h-1 bg-[#0A84FF] rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item, idx) => (
              <motion.div 
                key={item.id} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-[60px] overflow-hidden mb-10 shadow-xl border border-slate-50 relative bg-slate-100">
                  <img 
                    src={getStrapiMedia(item.asosiy_rasm) || "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200"} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    alt={item.title} 
                  />
                  <div className="absolute top-8 left-8">
                    <span className="px-5 py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-[#0A1F44]">
                      {item.kategoriya}
                    </span>
                  </div>
                </div>
                <div className="px-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] mb-4 block">{item.sana}</span>
                  <h3 className="text-2xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-slate-500 font-light italic leading-relaxed line-clamp-3">
                    "{item.sub_description}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </div>
  );
};

export default News;
