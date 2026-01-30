
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DepartmentTalented: React.FC = () => {
  const regulations = [
    { title: "Iqtidorli yoshlarni saralab olish tartibi to'g'risidagi nizom", link: "https://lex.uz/docs/-133502", isLex: true },
    { title: "Talabalar o'rtasida ilmiy tanlovlar o'tkazish yo'riqnomasi", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", isPdf: true },
    { title: "Akademiya iqtidorli talabalarining axloqiy kodeksi", link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", isPdf: true }
  ];

  return (
    <div className="bg-[#FCFBF7] min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="Academy Background" 
          />
        </div>
        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em]">Bo'lim Faoliyati</span>
          </motion.div>
          <h1 className="text-4xl md:text-8xl lg:text-[7vw] font-playfair font-bold text-white leading-tight tracking-tighter mb-12 md:mb-16">
            Iqtidorli yoshlar <br /> <span className="text-[#D4AF37] italic font-light">Markazi.</span>
          </h1>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <Link to="/leaders" className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all">
              Talaba Liderlar
            </Link>
            <Link to="/scholarships" className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-transparent border border-white/30 text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all">
              Imkoniyatlar
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-48 px-6 md:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-black uppercase tracking-[0.6em] mb-8 md:mb-12 block">Asosiy Missiyamiz</span>
          <p className="text-3xl md:text-5xl font-playfair italic text-[#0A1F44] leading-relaxed mb-10 md:mb-12">
            "Bizning bo'lim iqtidorli yoshlarni aniqlash, ularni har tomonlama qo'llab-quvvatlash va milliy g'urur ruhida tarbiyalashni o'z oldiga oliy maqsad qilgan."
          </p>
        </motion.div>
      </section>

      <section className="py-24 md:py-48 px-6 md:px-8 max-w-[1400px] mx-auto bg-white rounded-[40px] md:rounded-[100px] shadow-sm mb-24 border border-slate-50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center p-10 md:p-20">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200" className="w-full h-full object-cover" alt="Student Life" />
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#0A1F44] mb-8 leading-tight">
              Talabalarning <br /> <span className="text-[#D4AF37] italic">salohiyatini</span> ro'yobga chiqaramiz.
            </h2>
            <div className="space-y-8">
              {[
                "Yoshlarni turli respublika va xalqaro miqyosdagi tanlovlar, stipendiyalar va fan olimpiadalariga tayyorlash tizimini yo'lga qo'yish.",
                "Talabalarning ilmiy-tadqiqot ishlariga qiziqishini oshirish, ularning ilmiy maqola va tezislarini nashr etishda ko'maklashish.",
                "Iqtidorli talabalarning innovatsion g'oyalari va loyihalarini amaliyotga joriy etish uchun 'Start-up' muhitini shakllantirish."
              ].map((text, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-3xl font-playfair text-[#D4AF37] font-bold italic">0{i+1}.</span>
                  <p className="text-lg text-slate-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.6em] block mb-4">Huquqiy asoslar</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#0A1F44]">Bo'lim Nizomlari</h2>
          </div>
          <div className="w-full md:w-1/3 h-px bg-slate-100 hidden md:block mb-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {regulations.map((reg, idx) => (
            <motion.a
              key={idx}
              href={reg.link}
              target="_blank"
              download={reg.isPdf}
              whileHover={{ y: -10 }}
              className="p-10 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-[#F8FAFF] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors">
                {reg.isLex ? (
                  <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                ) : (
                  <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                )}
              </div>
              <p className="text-lg font-playfair font-bold text-[#0A1F44] leading-relaxed mb-10 flex-grow">
                {reg.title}
              </p>
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 group-hover:text-[#D4AF37]">
                  {reg.isLex ? "Lex.uz portalida ko'rish" : "PDF Yuklab olish"}
                </span>
                <svg className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-8 bg-[#0A1F44] mt-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.6em] block mb-8">Biz bilan bog'laning</span>
            <h2 className="text-4xl md:text-7xl font-playfair font-bold text-white mb-16 leading-tight">
              Savollaringiz bormi? <br /><span className="text-[#D4AF37] italic font-light">Bizga yozing.</span>
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                  <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth={2}/></svg>
                </div>
                <div>
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest block mb-2">Telefon raqam:</span>
                  <a href="tel:+998712440055" className="text-2xl text-white font-bold hover:text-[#D4AF37] transition-colors">+998 (71) 244-00-55</a>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                  <svg className="w-6 h-6 text-[#D4AF37] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeWidth={2}/></svg>
                </div>
                <div>
                  <span className="text-white/40 text-[9px] font-black uppercase tracking-widest block mb-2">Telegram:</span>
                  <a href="https://t.me/iiau_talented" target="_blank" className="text-2xl text-white font-bold hover:text-[#D4AF37] transition-colors">@iiau_talented</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl p-12 md:p-16 rounded-[60px] border border-white/10">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-white font-bold uppercase text-[10px] tracking-[0.3em]">Ish vaqti rejimi</span>
            </div>
            
            <div className="space-y-8">
              {[
                { day: "Dushanba - Juma", time: "09:00 - 18:00" },
                { day: "Tushlik vaqti", time: "13:00 - 14:00" },
                { day: "Shanba - Yakshanba", time: "Dam olish kuni", highlight: true }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center pb-6 border-b border-white/5">
                  <span className="text-white/60 font-medium">{item.day}</span>
                  <span className={`font-bold ${item.highlight ? 'text-white/30' : 'text-[#D4AF37]'}`}>{item.time}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-12 text-center border-t border-white/5">
               <p className="text-white/40 text-[10px] leading-relaxed italic">
                 "Iltimos, qabul vaqtlarida tashrif buyuring."
               </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DepartmentTalented;
