
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

interface CollectionItem {
  id: number;
  title: string;
  year: string;
  category: string;
  coverImage: string;
  description: string;
  pdfUrl: string;
  pages: number;
  isbn: string;
}

const ITEMS_PER_PAGE = 8;

const collections: CollectionItem[] = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: i % 2 === 0 ? "Islom sivilizatsiyasi va yosh olimlar" : "Akademiya Ilmiy Axborotnomasi",
  year: "2024",
  category: i % 3 === 0 ? "Konferensiya materiallari" : "Ilmiy Jurnal",
  coverImage: `https://images.unsplash.com/photo-${1544947950 + i}?q=80&w=800`,
  description: "Ushbu to'plamda O'zbekiston Xalqaro Islom Akademiyasi iqtidorli talabalari va yosh olimlarining dolzarb ilmiy tadqiqotlari jamlangan. Materiallar xalqaro ilmiy bazalar talablariga muvofiq saralab olingan.",
  pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  pages: 150 + (i * 10),
  isbn: `978-9943-${40 + i}-12-0`
}));

const PublicationsCollections: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);

  const totalPages = Math.ceil(collections.length / ITEMS_PER_PAGE);
  const currentItems = collections.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/85 z-10" />
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2400" className="w-full h-full object-cover" alt="Library" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em]">Ilmiy Meros</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-tight tracking-tighter">
            Nashrlar <br /> <span className="text-[#D4AF37] italic font-light">To'plami.</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl font-playfair italic text-[#0A1F44] leading-relaxed opacity-60">
          "Akademiyamizda chop etilgan har bir to'plam — bu iqtidorli yoshlarimizning ilm yo'lidagi mustahkam qadamlaridir."
        </p>
      </section>

      <section className="pb-40 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCollection(item)}
              >
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-xl mb-8 border border-slate-100 bg-slate-200">
                  <img src={item.coverImage} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                    <button className="w-full py-4 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[9px] font-black uppercase tracking-widest text-center shadow-xl">
                      Batafsil ko'rish
                    </button>
                  </div>
                </div>
                <div className="px-4 text-center">
                  <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest block mb-3">{item.category} • {item.year}</span>
                  <h3 className="text-2xl font-playfair font-bold text-[#0A1F44] mb-4 group-hover:text-[#D4AF37] transition-colors leading-tight">{item.title}</h3>
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

      <Modal isOpen={!!selectedCollection} onClose={() => setSelectedCollection(null)} title="To'plam Tafsilotlari">
        {selectedCollection && (
          <div className="p-10 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
              <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#F8FAFF]">
                <img src={selectedCollection.coverImage} className="w-full h-full object-cover" alt="" />
              </div>
              <div>
                <span className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">{selectedCollection.category}</span>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#0A1F44] mb-8 leading-tight">{selectedCollection.title}</h2>
                
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mb-10">
                   <div>
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Chop etilgan yil</span>
                     <p className="text-[#0A1F44] font-bold text-2xl">{selectedCollection.year}</p>
                   </div>
                   <div>
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Sahifalar</span>
                     <p className="text-[#0A1F44] font-bold text-2xl">{selectedCollection.pages}</p>
                   </div>
                   <div className="col-span-2">
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">ISBN</span>
                     <p className="text-[#0A1F44] font-bold text-lg">{selectedCollection.isbn}</p>
                   </div>
                </div>
                
                <a 
                  href={selectedCollection.pdfUrl}
                  target="_blank"
                  download
                  className="w-full py-6 bg-[#0A1F44] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#D4AF37] transition-colors shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  PDF To'plamni Yuklab Olish
                </a>
              </div>
            </div>
            <div className="bg-[#F8FAFF] p-10 rounded-[40px]">
              <h4 className="text-[#0A1F44] font-bold mb-6 text-xl">Annotatsiya</h4>
              <p className="text-xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
                "{selectedCollection.description}"
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PublicationsCollections;
