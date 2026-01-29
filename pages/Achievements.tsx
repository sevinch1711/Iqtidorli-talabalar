
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

const ITEMS_PER_PAGE = 6;

const Achievements: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const students = useMemo(() => {
    const baseStudents = [
      { name: "Xasanov Umar", award: "XALQARO ARAB TILI OLIMPIADASI", category: "Tilshunoslik", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600" },
      { name: "Ibragimova Sevinch", award: "PREZIDENT STIPENDIYASI SOHIBI", category: "Iqtisodiyot", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" },
      { name: "Karimov Javohir", award: "YIL TALABASI - 2023", category: "Tarix", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600" },
      { name: "Aliyeva Malika", award: "NAVQIY STIPENDIYASI", category: "Adabiyot", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600" },
      { name: "Tursunov Bekzod", award: "ISLOM OLAMI TADBIRKORI", category: "Biznes", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600" }
    ];

    return Array.from({ length: 20 }).map((_, i) => ({
      ...baseStudents[i % baseStudents.length],
      id: i + 1,
      name: `${baseStudents[i % baseStudents.length].name} ${Math.floor(i/5) > 0 ? i : ''}`,
      publications: `${Math.floor(Math.random() * 10) + 1} ta maqola`,
      recognition: i % 3 === 0 ? "Xalqaro" : "Respublika",
      history: "Ushbu iqtidorli talabamiz o'zining tirishqoqligi va ilmga bo'lgan chanqoqligi bilan akademiyamiz faxri hisoblanadi. U ko'plab ilmiy anjumanlarda ma'ruzalar qilgan va sohaga oid yangi yondashuvlarni taklif etgan."
    }));
  }, []);

  const totalPages = Math.ceil(students.length / ITEMS_PER_PAGE);
  const currentItems = students.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/75 z-10" />
          <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2400" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-10 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-10 text-white text-[10px] font-black uppercase tracking-[0.8em]">Akademik yutuqlar</motion.div>
          <h1 className="text-7xl md:text-[8vw] font-playfair font-bold text-white leading-none tracking-tighter mb-10">
            Shon-sharaf <br /> <span className="text-[#D4AF37] italic font-light">Zali.</span>
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <AnimatePresence mode="popLayout">
            {currentItems.map((student) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedStudent(student)}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-[50px] overflow-hidden mb-8 shadow-xl border border-slate-50">
                  <img 
                    src={student.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                    alt={student.name} 
                  />
                </div>
                <div className="px-4">
                  <h3 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                    {student.name}
                  </h3>
                  <p className="text-xl text-slate-500 font-light italic mb-6 leading-relaxed">
                    "{student.award}"
                  </p>
                  <div className="flex items-center space-x-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37]">
                      {student.category}
                    </span>
                    <span className="w-8 h-px bg-slate-200" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {student.recognition}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination UI */}
        <div className="mt-40 flex items-center justify-center gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage(prev => Math.max(1, prev - 1));
              window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
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
                window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
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
              window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
            }}
            className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-30 transition-all cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </section>

      <Modal isOpen={!!selectedStudent} onClose={() => setSelectedStudent(null)} title="Yutuq Tafsilotlari">
        {selectedStudent && (
          <div className="p-10 md:px-14 md:pb-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
              <div className="md:col-span-5 relative">
                <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-[#F8FAFF]">
                  <img src={selectedStudent.img} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
              <div className="md:col-span-7 pt-4">
                <h2 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-2">{selectedStudent.name}</h2>
                <p className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">{selectedStudent.award}</p>
                <div className="bg-[#F8FAFF] p-8 rounded-[40px]">
                  <span className="text-[#0A84FF] text-[9px] font-black uppercase tracking-widest block mb-4">Muvaffaqiyat tarixi:</span>
                  <p className="text-lg font-playfair italic text-[#0A1F44]/70 leading-relaxed">"{selectedStudent.history}"</p>
                </div>
              </div>
            </div>
            <div className="pt-10 border-t border-slate-100 grid grid-cols-3 gap-8">
              <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">Yo'nalish</span>
                <p className="text-[#0A1F44] font-bold">{selectedStudent.category}</p>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">Nashrlar</span>
                <p className="text-[#0A1F44] font-bold">{selectedStudent.publications}</p>
              </div>
              <div>
                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-2">Daraja</span>
                <p className="text-[#0A1F44] font-bold">{selectedStudent.recognition}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Achievements;
