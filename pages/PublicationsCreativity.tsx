
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';

interface StudentBook {
  id: number;
  author: string;
  title: string;
  category: 'Ilmiy' | 'Badiiy' | 'Publitsistik' | 'Tadqiqot';
  image: string;
  date: string;
  excerpt: string;
  pages: number;
  pdfUrl: string;
}

const studentBooks: StudentBook[] = [
  {
    id: 1,
    author: "Zilola Alimova",
    title: "Ma'naviyat — inson qalbi ko'zgusi",
    category: "Publitsistik",
    image: "https://images.unsplash.com/photo-1513001900722-370f803f498d?q=80&w=1200",
    date: "12-May, 2024",
    excerpt: "Insonning ma'naviy dunyosi uning xatti-harakatlarida namoyon bo'ladi. Ushbu kitobda zamonaviy yoshlarimizning ma'naviy qiyofasi tahlil qilingan...",
    pages: 124,
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 2,
    author: "Asadbek Orifov",
    title: "Islom sivilizatsiyasi tarixidan",
    category: "Ilmiy",
    image: "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=1200",
    date: "05-May, 2024",
    excerpt: "Markaziy Osiyoda islom madaniyatining shakllanishi va rivojlanish bosqichlari haqida keng qamrovli monografiya.",
    pages: 240,
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  },
  {
    id: 3,
    author: "Malika Rasulova",
    title: "Xattotlik san'ati asoslari",
    category: "Badiiy",
    image: "https://images.unsplash.com/photo-1564392257011-c171735be37b?q=80&w=1200",
    date: "28-Aprel, 2024",
    excerpt: "Xattotlik shunchaki chiroyli yozuv emas, bu qalb harakati. Kitobda arab xattotligining turli uslublari va ularning falsafiy ma'nolari haqida...",
    pages: 86,
    pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
  }
];

const PublicationsCreativity: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<StudentBook | null>(null);

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1455391727333-85e68379447b?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="Library Background" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em]">Ilmiy va Badiiy Meros</span>
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-tight tracking-tighter">
            Talabalar <br /> <span className="text-[#D4AF37] italic font-light">Kitoblari.</span>
          </h1>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-40 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="space-y-32">
          {studentBooks.map((book, idx) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              <div className="lg:w-1/2 relative group cursor-pointer" onClick={() => setSelectedBook(book)}>
                <div className="aspect-[16/10] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                   <img 
                    src={book.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
                    alt={book.title} 
                   />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-[60px]">
                   <span className="bg-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0A1F44] shadow-xl">Tafsilotlar</span>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                   <span className="px-4 py-1.5 bg-[#0A84FF]/10 text-[#0A84FF] rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-50">
                    {book.category}
                  </span>
                  <div className="h-px w-8 bg-slate-200" />
                  <span className="text-slate-400 text-[10px] font-bold uppercase">{book.date}</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#0A1F44] mb-8 leading-tight">
                  {book.title}
                </h2>
                
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 italic">
                  "{book.excerpt}"
                </p>
                
                <div className="flex flex-wrap items-center gap-6 pt-12 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                       <img src={`https://i.pravatar.cc/150?u=${book.author}`} alt={book.author} />
                    </div>
                    <div>
                      <span className="text-slate-400 text-[9px] uppercase font-black block tracking-widest">Muallif:</span>
                      <span className="text-[#0A1F44] font-bold">{book.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 ml-auto">
                    <button 
                      onClick={() => setSelectedBook(book)}
                      className="px-8 py-4 border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0A1F44] hover:border-[#D4AF37] transition-all"
                    >
                      Batafsil
                    </button>
                    <a 
                      href={book.pdfUrl}
                      target="_blank"
                      download
                      className="px-8 py-4 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 shadow-lg"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                      PDF Yuklab olish
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal View */}
      <Modal isOpen={!!selectedBook} onClose={() => setSelectedBook(null)} title="Kitob Haqida">
        {selectedBook && (
          <div className="p-10 md:px-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
              <div className="aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#F8FAFF]">
                <img src={selectedBook.image} className="w-full h-full object-cover" alt="" />
              </div>
              <div>
                <span className="text-[#0A84FF] text-[10px] font-black uppercase tracking-[0.2em] block mb-4">{selectedBook.category} • {selectedBook.date}</span>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-[#0A1F44] mb-8 leading-tight">{selectedBook.title}</h2>
                <div className="flex items-center gap-6 mb-10">
                   <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D4AF37]/20">
                     <img src={`https://i.pravatar.cc/150?u=${selectedBook.author}`} alt="" />
                   </div>
                   <div>
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block">Muallif</span>
                     <p className="text-[#0A1F44] font-bold text-xl">{selectedBook.author}</p>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100 mb-10">
                   <div>
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Sahifalar</span>
                     <p className="text-[#0A1F44] font-bold text-2xl">{selectedBook.pages}</p>
                   </div>
                   <div>
                     <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest block mb-2">Format</span>
                     <p className="text-[#0A1F44] font-bold text-2xl">PDF</p>
                   </div>
                </div>
                <a 
                  href={selectedBook.pdfUrl}
                  target="_blank"
                  download
                  className="w-full py-6 bg-[#0A1F44] text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#D4AF37] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Hujjatni Yuklab Olish
                </a>
              </div>
            </div>
            <div className="bg-[#F8FAFF] p-10 rounded-[40px]">
              <h4 className="text-[#0A1F44] font-bold mb-6 text-xl">Annotatsiya</h4>
              <p className="text-xl font-playfair italic text-[#0A1F44]/70 leading-relaxed">
                "{selectedBook.excerpt} Ushbu asarda muallif o'zining ko'p yillik izlanishlari va shaxsiy tajribasi asosida muhim ijtimoiy-madaniy masalalarni ko'taradi. Kitob keng kitobxonlar ommasi hamda soha mutaxassislari uchun foydali bo'lishi shubhasiz."
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* CTA section */}
      <section className="py-40 bg-[#0A1F44] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.8em] mb-12 block">Sizning kitobingiz</span>
          <h2 className="text-4xl md:text-7xl font-playfair font-bold text-white mb-12">
            O'z asaringizni bizda <br /> <span className="text-[#D4AF37] italic font-light">nashr qiling.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-light">
            Iqtidorli talabalar bo'limi sizning ilmiy va ijodiy kitoblaringizni portalda va maxsus nashr ko'rinishida e'lon qilishga tayyor.
          </p>
          <button className="px-16 py-8 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-110 transition-all shadow-2xl">
            Kitobni yuborish
          </button>
        </div>
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[#D4AF37]/5 -skew-x-12 translate-x-1/2" />
      </section>
    </div>
  );
};

export default PublicationsCreativity;
