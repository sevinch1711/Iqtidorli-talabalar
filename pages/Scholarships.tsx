
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const ITEMS_PER_PAGE = 6;

const FALLBACK_SCHOLARSHIPS = [
  {
    id: 1,
    title: "O'zbekiston Respublikasi Prezidenti davlat stipendiyasi",
    field: "Barcha yo'nalishlar",
    bosqich: "Bakalavr, Magistr",
    source: "Davlat budjeti",
    content: []
  }
];

const Scholarships: React.FC = () => {
  const [selectedScholarship, setSelectedScholarship] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [scholarships, setScholarships] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchFromStrapi('/scholarships?populate=*');
      if (data && data.length > 0) {
        setScholarships(data);
      } else {
        setScholarships(FALLBACK_SCHOLARSHIPS);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  const totalPages = Math.ceil(scholarships.length / ITEMS_PER_PAGE);
  const currentItems = scholarships.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center overflow-hidden bg-[#0A1F44] pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37_0%,transparent_50%)]" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] md:tracking-[0.8em] block mb-6">Munosib Rag'bat</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold text-white tracking-tighter leading-[1.1] mb-8">
              Stipendiyalar.
            </h1>
            <p className="mt-4 text-white/40 text-base md:text-lg font-light max-w-2xl mx-auto italic leading-relaxed">
              "Ilm yo'lidagi har bir intilish munosib e'tirofga loyiqdir. Davlat stipendiyalari — talabalarimizning ilmiy faolligini oshirish yo'lidagi yuksak ko'llab-quvvatlovchi vositadir."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedScholarship(item)}
                className="group cursor-pointer bg-white p-12 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-8">
                  <span className="px-5 py-2 bg-[#D4AF37]/5 text-[#D4AF37] rounded-full text-[8px] font-black uppercase tracking-widest border border-[#D4AF37]/10">
                    {item.field}
                  </span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[#0A1F44] mb-10 leading-[1.2] group-hover:text-[#D4AF37] transition-colors duration-500">
                  {item.title}
                </h3>
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.bosqich}</span>
                   <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} />
      </section>

      <Modal isOpen={!!selectedScholarship} onClose={() => setSelectedScholarship(null)} title="Stipendiya Tafsilotlari">
        {selectedScholarship && (
          <div className="p-10 md:px-14">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-12 leading-tight">{selectedScholarship.title}</h2>
            <div className="space-y-12 text-slate-600">
               <div>
                 <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-[0.4em] block mb-4">Umumiy ma'lumot:</span>
                 <div className="prose prose-slate max-w-none text-lg leading-relaxed font-light text-slate-500 italic">
                   {blocksToText(selectedScholarship.content)}
                 </div>
               </div>
               <div className="bg-[#F8FAFF] p-10 rounded-[40px] border border-slate-50">
                 <span className="text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.4em] block mb-6">Nomzodlarga qo'yiladigan talablar:</span>
                 <div className="prose prose-slate max-w-none text-slate-700 leading-loose">
                   {blocksToText(selectedScholarship.requirements)}
                 </div>
               </div>
               <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Mablag' manbasi</span>
                    <span className="text-sm font-bold text-[#0A1F44]">{selectedScholarship.source || "O'zbekiston Respublikasi Davlat budjeti"}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase text-slate-300 tracking-widest mb-1">Ilmiy yo'nalish</span>
                    <span className="text-sm font-bold text-[#0A1F44]">{selectedScholarship.field}</span>
                  </div>
               </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Scholarships;
