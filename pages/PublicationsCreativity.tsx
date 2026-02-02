
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const ITEMS_PER_PAGE = 6;

const FALLBACK_BOOKS = [
  {
    id: 1,
    title: "Ma'naviyat — inson qalbi ko'zgusi",
    janr: "Publitsistik",
    rasm: { url: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1200" },
    sana: "2024-05-12",
    subdesc: "Insonning ma'naviy dunyosi uning xatti-harakatlarida namoyon bo'ladi.",
    sahifalar_soni: 124
  }
];

const PublicationsCreativity: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchFromStrapi('/books?populate=*');
      if (data && data.length > 0) {
        setBooks(data);
      } else {
        setBooks(FALLBACK_BOOKS);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);
  const currentItems = books.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1F44]">
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2400" className="w-full h-full object-cover opacity-20" alt="Books" />
        </div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-7xl font-playfair font-bold text-white tracking-tighter">Talabalar Kitoblari.</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {currentItems.map((book) => (
              <motion.div
                key={book.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedBook(book)}
                className="group cursor-pointer bg-white p-8 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-8 shadow-lg">
                  <img src={getStrapiMedia(book.rasm)} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[#0A1F44] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  {book.title}
                </h3>
                <p className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest">{book.janr}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} />
      </section>

      <Modal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)} title="Kitob Haqida">
        {selectedBook && (
          <div className="p-10 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8FAFF]">
                 <img src={getStrapiMedia(selectedBook.rasm)} className="w-full h-full object-cover" alt="" />
               </div>
               <div>
                  <h2 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-6">{selectedBook.title}</h2>
                  <div className="bg-[#F8FAFF] p-8 rounded-[40px] mb-8">
                    <p className="text-lg italic text-[#0A1F44]/60">"{selectedBook.subdesc}"</p>
                  </div>
                  <div className="space-y-4 text-sm text-slate-500 mb-10">
                    <p><strong>Janr:</strong> {selectedBook.janr}</p>
                    <p><strong>ISBN:</strong> {selectedBook.isbn || "Mavjud emas"}</p>
                    <p><strong>Sahifalar:</strong> {selectedBook.sahifalar_soni}</p>
                    <p><strong>Sana:</strong> {selectedBook.sana}</p>
                  </div>
                  {selectedBook.fayl && (
                    <a href={getStrapiMedia(selectedBook.fayl)} target="_blank" className="inline-block px-10 py-5 bg-[#0A1F44] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
                      Kitobni Yuklab Olish (PDF)
                    </a>
                  )}
               </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PublicationsCreativity;
