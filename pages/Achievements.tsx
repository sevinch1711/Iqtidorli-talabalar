
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import Pagination from '../components/Pagination';

interface Achievement {
  id: number;
  name: string;
  award: string;
  category: string;
  level: string;
  history: string;
  image: string;
  publications: string;
}

const ITEMS_PER_PAGE = 6;

const staticAchievements: Achievement[] = [
  {
    id: 1,
    name: "Xasanov Umar",
    award: "XALQARO ARAB TILI OLIMPIADASI",
    category: "TILSHUNOSLIK",
    level: "XALQARO",
    history: "Ushbu iqtidorli talabamiz o'zining tirishqoqligi va ilmga bo'lgan chanqoqligi bilan akademiyamiz faxri hisoblanadi. U ko'plab ilmiy anjumanlarda ma'ruzalar qilgan va sohaga oid yangi yondashuvlarni taklif etgan.",
    image: "https://images.unsplash.com/photo-1506794778202-7968a1802642?q=80&w=1200",
    publications: "9 ta maqola"
  },
  {
    id: 2,
    name: "Ibragimova Sevinch",
    award: "PREZIDENT STIPENDIYASI SOHIBI",
    category: "IQTISODIYOT",
    level: "RESPUBLIKA",
    history: "Sevinch o'zining akademik ko'rsatkichlari va ijtimoiy faolligi bilan ajralib turadi. U xalqaro iqtisodiy forumlarda o'z loyihalari bilan muvaffaqiyatli ishtirok etib kelmoqda. Akademiyamizning eng iqtidorli vakillaridan biri.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200",
    publications: "5 ta maqola"
  },
  {
    id: 3,
    name: "Abdullayev Alisher",
    award: "ISLOM KARIMOV NOMIDAGI STIPENDIANT",
    category: "TARIX",
    level: "RESPUBLIKA",
    history: "Talaba o'z yo'nalishida yuqori natijalarga erishib, ko'plab respublika miqyosidagi tanlovlarda g'oliblikni qo'lga kiritgan. Uning ilmiy maqolalari nufuzli nashrlarda chop etilgan.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
    publications: "7 ta maqola"
  },
  {
    id: 4,
    name: "Sultonova Madina",
    award: "NAVOIY NOMIDAGI STIPENDIANT",
    category: "ADABIYOT",
    level: "RESPUBLIKA",
    history: "Madina o'zining adabiy ijodi va filologik izlanishlari bilan respublika miqyosida tanilgan. U ko'plab she'riy to'plamlar muallifi.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1200",
    publications: "12 ta maqola"
  },
  {
    id: 5,
    name: "Karimov Doston",
    award: "YIL TALABASI G'OLIBI",
    category: "MADANIYAT",
    level: "RESPUBLIKA",
    history: "Doston ijodiy yutuqlari va jamoat ishlaridagi faolligi uchun davlat miqyosidagi tanlovlarda sovrindor bo'lgan. Uning san'at asarlari xalqaro ko'rgazmalarda namoyish etilgan.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200",
    publications: "4 ta maqola"
  },
  {
    id: 6,
    name: "Mansurova Nigora",
    award: "ILMIY TADQIQOTLAR G'OLIBI",
    category: "ISLOMSHUNOSLIK",
    level: "XALQARO",
    history: "Nigora islomshunoslik sohasida xalqaro ilmiy tadqiqotlar olib borib, nufuzli grantlar g'olibiga aylangan. U ko'plab ilmiy safarlarda bo'lib qaytgan.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200",
    publications: "15 ta maqola"
  },
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: i + 7,
    name: i % 2 === 0 ? "Rahimov Jaloliddin" : "Azizova Kamila",
    award: i % 2 === 0 ? "DAVLAT STIPENDIANTI" : "AL-BUXORIY MEROSI G'OLIBI",
    category: i % 2 === 0 ? "FALSAFA" : "TADQIQOT",
    level: "RESPUBLIKA",
    history: "Iqtidorli talabamiz akademik va jamoat ishlarida o'zining yuqori salohiyatini ko'rsatib kelmoqda. Kelajakda nufuzli olim bo'lishi kutilmoqda.",
    image: `https://images.unsplash.com/photo-${1507003211169 + i + 10}?q=80&w=1200`,
    publications: `${Math.floor(Math.random() * 8) + 1} ta maqola`
  }))
];

const Achievements: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState<Achievement | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(staticAchievements.length / ITEMS_PER_PAGE);
  const currentItems = staticAchievements.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#FCFBF7] min-h-screen pb-40">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/75 z-10" />
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="Achievements Background" 
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-12 text-white text-[10px] font-black uppercase tracking-[0.8em]"
          >
            Akademik muvaffaqiyatlar
          </motion.div>
          <h1 className="text-7xl md:text-[9vw] font-playfair font-bold text-white leading-none tracking-tighter mb-10">
            Shon-sharaf <br /> <span className="text-[#D4AF37] italic font-light">Zali.</span>
          </h1>
        </div>
      </section>

      {/* Grid Section */}
      <section className="max-w-7xl mx-auto px-8 py-48 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-40 mb-32">
          <AnimatePresence mode="popLayout">
            {currentItems.map((student, idx) => (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: idx * 0.1 }}
                onClick={() => setSelectedStudent(student)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-[80px] overflow-hidden mb-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-slate-100 border border-slate-50">
                  <img src={student.image} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt={student.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </div>
                
                <div className="px-6">
                  <h3 className="text-4xl md:text-5xl font-playfair font-bold text-[#0A1F44] mb-4 group-hover:text-[#D4AF37] transition-colors duration-700">{student.name}</h3>
                  <p className="text-[#0A1F44]/50 text-sm md:text-base font-medium uppercase tracking-[0.1em] italic mb-10">
                    "{student.award}"
                  </p>
                  <div className="flex items-center gap-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37]">{student.category}</span>
                    <div className="h-px w-20 bg-slate-200" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-[#0A84FF] transition-colors duration-700">{student.level}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>

      {/* Detail Modal - Enhanced UI without Download */}
      <Modal isOpen={!!selectedStudent} onClose={() => setSelectedStudent(null)} title="Muvaffaqiyat Tafsilotlari">
        {selectedStudent && (
          <div className="p-10 md:p-20 md:pt-10">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start mb-24">
              {/* Profile Image */}
              <div className="w-full md:w-[45%]">
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-square rounded-[80px] overflow-hidden shadow-[0_50px_100px_-30px_rgba(0,0,0,0.2)] border-[16px] border-white relative bg-slate-50"
                >
                  <img src={selectedStudent.image} className="w-full h-full object-cover" alt={selectedStudent.name} />
                </motion.div>
              </div>

              {/* Information */}
              <div className="w-full md:w-[55%] flex flex-col pt-10">
                <motion.h2 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-playfair font-bold text-[#0A1F44] mb-6 leading-tight"
                >
                  {selectedStudent.name}
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-[#0A84FF] text-[14px] font-black uppercase tracking-[0.3em] mb-16"
                >
                  {selectedStudent.award}
                </motion.p>

                {/* Narrative Box */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="bg-[#F8FAFF] p-16 rounded-[80px] border border-slate-50 relative"
                >
                  <span className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] block mb-10">AKADEMIK TARIXI:</span>
                  <p className="text-2xl md:text-3xl font-playfair italic text-[#0A1F44]/60 leading-relaxed">
                    "{selectedStudent.history}"
                  </p>
                  <div className="absolute top-12 right-12 opacity-5">
                     <svg className="w-20 h-20 text-[#0A84FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.0166 21L3.0166 18C3.0166 16.8954 3.91203 16 5.0166 16H8.0166C8.56889 16 9.0166 15.5523 9.0166 15V9C9.0166 8.44772 8.56889 8 8.0166 8H5.0166C3.91203 8 3.0166 7.10457 3.0166 6V3H8.0166C9.67345 3 11.0166 4.34315 11.0166 6V15C11.0166 18.3137 8.33031 21 5.0166 21H3.0166Z"/></svg>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="pt-20 border-t border-slate-100 flex flex-wrap gap-y-16 items-center justify-between">
              {[
                { label: "YO'NALISH", value: selectedStudent.category },
                { label: "NASHRLAR", value: selectedStudent.publications },
                { label: "DARAJA", value: selectedStudent.level }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                  className="w-full md:w-1/3 min-w-[200px] group"
                >
                  <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.4em] block mb-6 group-hover:text-[#D4AF37] transition-colors duration-500">{stat.label}</span>
                  <p className="text-[#0A1F44] font-bold text-3xl md:text-5xl font-playfair">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Achievements;
