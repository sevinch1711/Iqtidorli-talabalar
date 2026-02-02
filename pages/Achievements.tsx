
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';
import PageLoader from '../components/PageLoader';
import { fetchFromStrapi, getStrapiMedia, blocksToText } from '../lib/strapi';

const ITEMS_PER_PAGE = 6;

const FALLBACK_ACHIEVEMENTS = [
  {
    id: 999,
    first_name: "Islombek",
    last_name: "Karimov",
    achievement_title: "Prezident Stipendiyasi G'olibi",
    department: "Ijtimoiy-gumanitar",
    scale: "Xalqaro",
    sub_description: "Akademiyamizning eng yorqin iqtidorlaridan biri, o'zining teran bilimi va ilmiy izlanishlari bilan yuksak cho'qqilarni zabt etib kelmoqda.",
    main_photo: { url: "https://images.unsplash.com/photo-1506794778202-7968a1802642?q=80&w=1200" },
    course: "4"
  }
];

const Achievements: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [achievements, setAchievements] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      const data = await fetchFromStrapi('/achievements?populate=*');
      if (data && data.length > 0) {
        setAchievements(data);
      } else {
        setAchievements(FALLBACK_ACHIEVEMENTS);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  const totalPages = Math.ceil(achievements.length / ITEMS_PER_PAGE);
  const currentItems = achievements.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      <PageLoader isLoading={isLoading} />
      
      <section className="relative min-h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-[#0A1F44] pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#D4AF37_0%,transparent_50%)]" />
        </div>
        <div className="relative z-20 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.5em] md:tracking-[0.8em] block mb-6">Iftixorimiz</span>
            <h1 className="text-4xl sm:text-6xl md:text-[7vw] font-playfair font-bold text-white tracking-tighter leading-[1.1] mb-8">
              Zafarli Qadamlar va <br /> <span className="text-[#D4AF37] italic font-light">Ilmiy Cho'qqilar.</span>
            </h1>
            <p className="text-white/50 text-base md:text-xl font-light italic max-w-2xl mx-auto leading-relaxed">
              "Akademiyamizning iqtidorli talabalari tomonidan qo'lga kiritilgan har bir yutuq — milliy ilm-fan taraqqiyotiga qo'shilgan munosib hissadir. Biz har bir iqtidor egasi bilan faxrlanamiz."
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#0A1F44] mb-4">Talabalar Yutuqlari</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {currentItems.map((student) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onClick={() => setSelectedStudent(student)}
                className="group cursor-pointer bg-white p-8 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
              >
                <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 bg-slate-100">
                  <img src={getStrapiMedia(student.main_photo)} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt="" />
                </div>
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#0A1F44] mb-2">{student.first_name} {student.last_name}</h3>
                <p className="text-[#D4AF37] text-[9px] font-black uppercase tracking-widest mb-6">{student.achievement_title}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                   <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{student.scale}</span>
                   <span className="text-[10px] font-black text-[#0A84FF]">{student.course}-kurs</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} />
      </section>

      <Modal isOpen={!!selectedStudent} onClose={() => setSelectedStudent(null)} title="Muvaffaqiyat Tarixi">
        {selectedStudent && (
          <div className="p-10 md:px-14">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden border-8 border-[#F8FAFF] shadow-2xl">
                 <img src={getStrapiMedia(selectedStudent.main_photo)} className="w-full h-full object-cover" alt="" />
               </div>
               <div>
                 <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest block mb-2">Akademiya Iftixori</span>
                 <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-2">{selectedStudent.first_name} {selectedStudent.last_name}</h2>
                 <p className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] mb-10">{selectedStudent.department}</p>
                 
                 <div className="bg-[#F8FAFF] p-8 rounded-[40px] mb-10 border border-slate-50">
                   <p className="text-lg italic text-[#0A1F44]/60 leading-relaxed">"{selectedStudent.sub_description}"</p>
                 </div>

                 <div className="space-y-6 text-slate-600">
                    <p><strong>Fakultet va kurs:</strong> {selectedStudent.department}, {selectedStudent.course}-kurs talabasi</p>
                    <p><strong>Erishilgan yutuq:</strong> {selectedStudent.achievement_title}</p>
                    <div className="prose prose-slate text-sm opacity-80 leading-relaxed pt-4 italic">
                      {blocksToText(selectedStudent.description)}
                    </div>
                 </div>
               </div>
             </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Achievements;
