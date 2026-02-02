
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import PageLoader from '../components/PageLoader';
import Pagination from '../components/Pagination';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const ITEMS_PER_PAGE = 6;

const Leaders: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<any>(null);
  const [leaders, setLeaders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadLeaders = async () => {
      setIsLoading(true);
      const data = await fetchFromStrapi('/leaders?populate=*');
      if (data) setLeaders(data);
      setIsLoading(false);
    };
    loadLeaders();
  }, []);

  const totalPages = Math.ceil(leaders.length / ITEMS_PER_PAGE);
  const currentItems = leaders.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 z-0 bg-[#0A1F44]">
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400" className="w-full h-full object-cover opacity-40" alt="Leaders" />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] md:tracking-[0.8em] block mb-8">Kelajak Bunyodkorlari</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-white tracking-tighter leading-[1.1]">
              Yoshlar Akademiyasi <br /><span className="text-[#D4AF37] italic font-light">Liderlari.</span>
            </h1>
            <p className="mt-8 text-white/50 text-base md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
              "Yoshlik — bepoyon imkoniyatlar davri. Bizning liderlarimiz o'z tengdoshlarini yangi marralar sari yetaklayotgan irodali va iqtidorli yoshlardir."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          <AnimatePresence mode="popLayout">
            {currentItems.map(leader => (
              <motion.div 
                key={leader.id} 
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center group cursor-pointer" 
                onClick={() => setSelectedLeader(leader)}
              >
                <div className="aspect-[4/5] rounded-[80px] overflow-hidden mb-8 border border-slate-100 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-1000 bg-white">
                   <img src={getStrapiMedia(leader.avatar) || "https://i.pravatar.cc/400"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={`${leader.first_name} ${leader.last_name}`} />
                </div>
                <h4 className="text-2xl md:text-3xl font-playfair font-bold text-[#0A1F44] mb-2">{leader.first_name} {leader.last_name}</h4>
                <p className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest">{leader.position}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} />
      </section>

      <Modal isOpen={!!selectedLeader} onClose={() => setSelectedLeader(null)} title="Yetakchi Profili">
        {selectedLeader && (
          <div className="p-10 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
              <div className="md:col-span-5">
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8FAFF]">
                  <img src={getStrapiMedia(selectedLeader.avatar)} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div className="md:col-span-7">
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest block mb-2">Akademiya Lideri</span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-2">{selectedLeader.first_name} {selectedLeader.last_name}</h2>
                <p className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">{selectedLeader.field_and_course}</p>
                <div className="bg-[#F8FAFF] p-8 rounded-[40px] mb-8 border border-slate-50">
                  <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-widest block mb-4">Mas'uliyat va yo'nalish:</span>
                  <p className="text-lg italic text-[#0A1F44]/70 leading-relaxed">"{selectedLeader.leader_task}"</p>
                </div>
                <div className="prose prose-slate max-w-none text-slate-500 italic leading-relaxed">
                  {blocksToText(selectedLeader.biography)}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Leaders;
