
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

interface Scholarship {
  id: number;
  title: string;
  description: string;
  requirements: string[];
  lexLink: string;
  icon: string;
  amount?: string;
}

const Scholarships: React.FC = () => {
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  const scholarshipData: Scholarship[] = useMemo(() => {
    const base = [
      {
        title: 'Prezident Stipendiyasi',
        description: "O'zbekiston Respublikasi Prezidentining eng nufuzli davlat mukofoti.",
        requirements: [
          "Barcha fanlardan a'lo baholar (kamida 75% 'a'lo')",
          "Xalqaro va respublika ilmiy anjumanlaridagi ishtirok",
          "Kamida 2 ta ilmiy maqola nashr etilgan bo'lishi",
          "Xorijiy tillarni bilish darajasi (B2 va undan yuqori)"
        ],
        lexLink: "https://lex.uz/docs/-4725554",
        icon: "👑"
      },
      {
        title: 'Navoiy Stipendiyasi',
        description: "Adabiyot, san'at va gumanitar fanlar sohasidagi yutuqlar uchun.",
        requirements: [
          "Ijtimoiy-gumanitar yo'nalish talabasi bo'lish",
          "Ijodiy ishlari va maqolalari mavjudligi",
          "O'quv ko'rsatkichlari yuqori bo'lishi",
          "Ma'naviy-ma'rifiy tadbirlarda faol ishtirok"
        ],
        lexLink: "https://lex.uz/docs/-4725554",
        icon: "✒️"
      },
      {
        title: 'Akademiya Granti',
        description: "Iqtidorli va kam ta'minlangan talabalarni qo'llab-quvvatlash dasturi.",
        requirements: [
          "Akademiya hayotida ijtimoiy faollik",
          "Ilmiy loyihalarda qatnashish",
          "O'rtacha ball 4.0 dan yuqori bo'lishi",
          "Tavsiyanoma mavjudligi"
        ],
        lexLink: "https://lex.uz/docs/-4725554",
        icon: "🏛️"
      }
    ];

    return Array.from({ length: 6 }).map((_, i) => ({
      ...base[i % base.length],
      id: i + 1,
    }));
  }, []);

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="Opportunities" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 md:mb-8">
            <span className="text-[9px] md:text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] md:tracking-[0.8em]">Akademik Imkoniyatlar</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl lg:text-[8vw] font-playfair font-bold text-white leading-tight tracking-tighter mb-8 md:mb-16">
            Muvaffaqiyat <br /> <span className="text-[#D4AF37] italic font-light">Kaliti.</span>
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 px-6 md:px-8 max-w-4xl mx-auto text-center border-b border-slate-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="text-[8px] md:text-[9px] font-black text-[#0A84FF] uppercase tracking-[0.4em] block mb-6 md:mb-8">Moddiy va Ma'naviy Ko'mak</span>
          <p className="text-2xl md:text-4xl font-playfair italic text-[#0A1F44] leading-relaxed">
            "Biz iqtidorli yoshlarni nafaqat ma'naviy, balki moddiy jihatdan ham qo'llab-quvvatlaymiz. Har bir talabaning salohiyati biz uchun qadrlidir."
          </p>
          <div className="w-16 md:w-24 h-px bg-[#D4AF37]/30 mx-auto mt-10 md:mt-12" />
        </motion.div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {scholarshipData.map((item) => (
            <motion.div 
              key={item.id} 
              whileHover={{ y: -15 }} 
              onClick={() => setSelectedScholarship(item)}
              className="group cursor-pointer p-10 md:p-16 bg-white rounded-[40px] md:rounded-[60px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700"
            >
              <div className="text-4xl md:text-5xl mb-6 md:mb-8 group-hover:scale-125 transition-transform duration-500 origin-left inline-block">
                {item.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#0A1F44] mb-4 md:mb-6 group-hover:text-[#D4AF37] transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 font-light mb-8 md:mb-10 leading-relaxed italic line-clamp-3">
                "{item.description}"
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#D4AF37] border-b-2 border-[#D4AF37] pb-1">
                  Batafsil ma'lumot
                </span>
                <svg className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Modal 
        isOpen={!!selectedScholarship} 
        onClose={() => setSelectedScholarship(null)} 
        title="Stipendiya Tafsilotlari"
      >
        {selectedScholarship && (
          <div className="px-6 md:px-14 md:pb-14 py-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8 mb-10">
              <div className="text-6xl md:text-7xl">{selectedScholarship.icon}</div>
              <div className="text-center sm:text-left">
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-2">
                  {selectedScholarship.title}
                </h2>
                <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                  Davlat Stipendiya Dasturi
                </span>
              </div>
            </div>

            <div className="bg-[#F8FAFF] p-6 md:p-10 rounded-[30px] md:rounded-[40px] mb-10 md:mb-12">
              <span className="text-[#0A84FF] text-[8px] md:text-[9px] font-black uppercase tracking-widest block mb-4">Dastur haqida:</span>
              <p className="text-lg md:text-xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
                "{selectedScholarship.description}"
              </p>
            </div>

            <div className="mb-10 md:mb-12">
              <h4 className="text-[#0A1F44] font-bold text-lg mb-6 flex items-center">
                <span className="w-8 h-[2px] bg-[#D4AF37] mr-4 rounded-full" />
                Asosiy Talablar
              </h4>
              <ul className="space-y-4">
                {selectedScholarship.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start space-x-4">
                    <div className="mt-2 w-2 h-2 rounded-full bg-[#0A84FF] flex-shrink-0" />
                    <span className="text-slate-600 font-medium leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10 border-t border-slate-100 flex flex-col items-center justify-between gap-8 text-center sm:text-left">
              <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                Manba: Lex.uz Huquqiy Portal
              </div>
              <a 
                href={selectedScholarship.lexLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#0A1F44] text-white rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-4"
              >
                <span>Nizom (PDF)</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Scholarships;
