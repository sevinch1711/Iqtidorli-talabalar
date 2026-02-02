
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const ITEMS_PER_PAGE = 8;

const PublicationsCollections: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCollection, setSelectedCollection] = useState<any>(null);
  const [collections, setCollections] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCollections = async () => {
      setIsLoading(true);
      const data = await fetchFromStrapi('/toplams?populate=*');
      if (data) setCollections(data);
      setIsLoading(false);
    };
    loadCollections();
  }, []);

  const totalPages = Math.ceil(collections.length / ITEMS_PER_PAGE);
  const currentItems = collections.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0A1F44]">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2400" className="w-full h-full object-cover opacity-20" alt="Library" />
        </div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-7xl font-playfair font-bold text-white">Nashrlar To'plami</h1>
        </div>
      </section>

      <section className="py-24 px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCollection(item)}
              >
                <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-xl mb-6 border border-slate-100 bg-slate-200">
                  <img src={getStrapiMedia(item.rasm)} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                </div>
                <div className="text-center">
                  <span className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest block mb-2">{item.sana}</span>
                  <h3 className="text-xl font-playfair font-bold text-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} />
      </section>

      <Modal isOpen={!!selectedCollection} onClose={() => setSelectedCollection(null)} title="To'plam Tafsilotlari">
        {selectedCollection && (
          <div className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
              <img src={getStrapiMedia(selectedCollection.rasm)} className="rounded-[40px] shadow-2xl" alt="" />
              <div>
                <h2 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-6">{selectedCollection.title}</h2>
                <div className="space-y-4 mb-10 text-slate-500">
                  <p><strong>ISBN:</strong> {selectedCollection.isbn}</p>
                  <p><strong>Sahifalar:</strong> {selectedCollection.sahifalar_soni}</p>
                </div>
                <p className="text-lg italic mb-10 text-slate-600">"{selectedCollection.subdesc}"</p>
                {selectedCollection.fayl && (
                  <a href={getStrapiMedia(selectedCollection.fayl)} target="_blank" className="inline-block px-10 py-5 bg-[#0A1F44] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all">
                    Faylni Yuklab Olish
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

export default PublicationsCollections;
