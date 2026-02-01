
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

interface MediaItem {
  id: number;
  type: 'Foto' | 'Video';
  title: string;
  date: string;
  subDesc: string;
  thumbnail: string;
  gallery?: string[];
  videoUrl?: string;
  fullDescription: string;
}

const ITEMS_PER_PAGE = 6;

const Media: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaData = useMemo(() => {
    const baseItems = [
      { type: 'Foto', title: "Konferensiya 2024", img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200" },
      { type: 'Video', title: "Talabalar Hayoti", img: "https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=1200" },
      { type: 'Foto', title: "Sport Musobaqasi", img: "https://images.unsplash.com/photo-1461896756913-6d9ee99bc65c?q=80&w=1200" },
      { type: 'Foto', title: "Ilmiy Sayohat", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04844?q=80&w=1200" }
    ];

    return Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      type: (i % 4 === 1 ? 'Video' : 'Foto') as 'Foto' | 'Video',
      title: `${baseItems[i % 4].title} - Qism ${i + 1}`,
      date: `${Math.floor(Math.random() * 28) + 1}-May, 2024`,
      subDesc: "Ushbu tadbir akademiyamiz hayotidagi eng yorqin lahzalardan biri bo'lib muhrlandi.",
      thumbnail: baseItems[i % 4].img,
      videoUrl: i % 4 === 1 ? "https://www.youtube.com/embed/dQw4w9WgXcQ" : undefined,
      gallery: [
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
      ],
      fullDescription: "Tadbir davomida talabalar o'zaro tajriba almashdilar va yangi do'stlar orttirdilar. Akademiyamiz rahbariyati ushbu tashabbusni yuqori baholadi. Ushbu arxivda tadbirning eng muhim daqiqalari jamlangan."
    }));
  }, []);

  const totalPages = Math.ceil(mediaData.length / ITEMS_PER_PAGE);
  const currentItems = mediaData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/65 z-10" />
          <img 
            src="https://lh3.googleusercontent.com/d/17etYK5PY5zi3VyisfvehNSuU1tTsScgX" 
            className="w-full h-full object-cover" 
            alt="Academy Life Media" 
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em] block mb-8">Vizual Arxiv</span>
          <h1 className="text-7xl md:text-[8vw] font-playfair font-bold text-white leading-none tracking-tighter">Media <br /> <span className="text-[#D4AF37] italic font-light">Markazi.</span></h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedMedia(item)}
                className="group cursor-pointer bg-white rounded-[60px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img src={item.thumbnail} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[8px] font-black uppercase tracking-widest text-[#0A1F44]">{item.type}</div>
                </div>
                <div className="p-12">
                  <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-4">{item.date}</span>
                  <h3 className="text-3xl font-playfair font-bold text-[#0A1F44] mb-6 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed line-clamp-2 italic">"{item.subDesc}"</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination UI */}
        <div className="mt-32 flex items-center justify-center gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(prev => Math.max(1, prev - 1));
              window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' });
            }}
            className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-30 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' });
              }}
              className={`w-16 h-16 rounded-full text-[10px] font-black transition-all cursor-pointer ${currentPage === i + 1 ? 'bg-[#0A1F44] text-white shadow-2xl scale-110' : 'bg-white text-[#0A1F44] border border-slate-100 hover:border-[#D4AF37]'}`}
            >
              0{i + 1}
            </button>
          ))}

          <button 
            disabled={currentPage === totalPages}
            onClick={() => {
              setCurrentPage(prev => Math.min(totalPages, prev + 1));
              window.scrollTo({ top: window.innerHeight * 0.6, behavior: 'smooth' });
            }}
            className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-30 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      <Modal isOpen={!!selectedMedia} onClose={() => setSelectedMedia(null)} title="Media Tafsilotlari">
        {selectedMedia && (
          <div className="p-10 md:px-14">
            <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-[0.2em] block mb-4">{selectedMedia.date} • {selectedMedia.type}</span>
            <h2 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-8">{selectedMedia.title}</h2>
            
            <div className="rounded-[40px] overflow-hidden shadow-2xl mb-12 bg-black aspect-video relative border-8 border-[#F8FAFF]">
              {selectedMedia.videoUrl ? (
                <iframe src={selectedMedia.videoUrl} className="w-full h-full" allowFullScreen />
              ) : (
                <img src={selectedMedia.thumbnail} className="w-full h-full object-cover" alt="" />
              )}
            </div>

            <div className="bg-[#F8FAFF] p-10 rounded-[40px] mb-12">
              <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-widest block mb-4">Tadbir haqida:</span>
               <p className="text-xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">"{selectedMedia.fullDescription}"</p>
            </div>

            {selectedMedia.gallery && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pb-12">
                {selectedMedia.gallery.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-3xl overflow-hidden border-4 border-[#F8FAFF] shadow-sm hover:shadow-xl transition-all">
                    <img src={img} className="w-full h-full object-cover" alt="" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Media;
