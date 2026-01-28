
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import Modal from '../components/Modal';

const Counter = ({ value, suffix }: { value: string, suffix: string }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value);
      const controls = animate(0, numericValue, {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (val) => setDisplayValue(Math.floor(val)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={nodeRef}>
      {displayValue}
      {suffix}
    </span>
  );
};

const Achievements: React.FC = () => {
  const [selectedAch, setSelectedAch] = useState<any>(null);

  const achievements = [
    {
      id: 1,
      name: "Abdujabborov Shavkat",
      award: "Prezident stipendiyasi g'olibi",
      year: "2024",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      desc: "Islomshunoslik yo'nalishida 5 ta xalqaro maqola muallifi.",
      story: "Shavkat 1-kursdan boshlab islom huquqi bo'yicha tadqiqotlar olib boradi. Uning maqolalari Scopus bazasidagi jurnallarda chop etilgan. Uning ilmiy ishlari 'Zamonaviy huquq' xalqaro konferensiyasida yuksak e'tirof etildi. Uning maqsadi akademiyamizning ilmiy nufuzini dunyo miqyosida oshirishga o'z hissasini qo'shishdir.",
      details: {
        category: "Ilm-fan",
        publications: 5,
        internationalImpact: "Global"
      }
    },
    {
      id: 2,
      name: "Soliho'jayeva Mohigul",
      award: "Navoiy stipendiyasi sohibasi",
      year: "2024",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      desc: "O'zbek adabiyoti bo'yicha ilmiy tadqiqotlar o'tkazgan.",
      story: "Mohigul Alisher Navoiy asarlaridagi falsafiy qarashlarni zamonaviy talqinda o'rganib chiqdi. Uning izlanishlari yosh avlodni milliy qadriyatlar ruhida tarbiyalashda muhim ahamiyat kasb etadi. U bir necha bor respublika miqyosidagi ijodiy tanlovlarda g'oliblikni qo'lga kiritgan.",
      details: {
        category: "Adabiyot",
        publications: 3,
        internationalImpact: "Respublika"
      }
    },
    {
      id: 3,
      name: "Xasanov Umar",
      award: "Xalqaro Arab tili olimpiadasi",
      year: "2023",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      desc: "Misrda bo'lib o'tgan xalqaro bellashuvda 1-o'rin.",
      story: "Umar arab tilini mukammal egallagan bo'lib, xalqaro miqyosdagi sinovlardan eng yuqori natijani qayd etdi. U nafaqat til, balki arab xattotligi bo'yicha ham mahoratli. Hozirda u qadimiy qo'lyozmalarni tarjima qilish loyihasi ustida ish olib bormoqda.",
      details: {
        category: "Tilshunoslik",
        publications: 0,
        internationalImpact: "Xalqaro"
      }
    },
    {
      id: 4,
      name: "Ergasheva Dilafruz",
      award: "Eng iqtidorli talaba - 2023",
      year: "2023",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      desc: "Jamoatchilik ishlaridagi faolligi va ilmiy salohiyati uchun.",
      story: "Dilafruz nafaqat a'lochi talaba, balki 'Yosh liderlar' klubining asoschisi hamdir. U akademiyaning ijtimoiy hayotida tub burilishlar yasagan loyihalar muallifi. Uning tashabbusi bilan talabalar uchun maxsus media-markaz tashkil etildi.",
      details: {
        category: "Ijtimoiy",
        publications: 2,
        internationalImpact: "Akademiya"
      }
    }
  ];

  const stats = [
    { label: "Davlat stipendiatlari", value: "24", suffix: "" },
    { label: "Akademiya grantlari", value: "65", suffix: "+" },
    { label: "Xalqaro g'olibliklar", value: "110", suffix: "+" },
    { label: "Ilmiy nashrlar", value: "450", suffix: "+" }
  ];

  return (
    <div className="pt-56 pb-40 bg-white min-h-screen selection:bg-[#0A84FF]">
      <section className="max-w-7xl mx-auto px-6 mb-48 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <div className="inline-block px-6 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[#0A84FF] text-[11px] font-black uppercase tracking-[0.5em] mb-14">
            Muvaffaqiyatlarimiz
          </div>
          <h1 className="text-7xl md:text-9xl font-playfair font-bold text-[#0A1F44] mb-14 tracking-tighter leading-[0.85]">
            Akademik <br /> <span className="italic font-light text-slate-200">g'alabalar.</span>
          </h1>
          <p className="text-3xl text-[#64748B] font-light max-w-3xl mx-auto leading-relaxed italic font-playfair">
            "Ilm yo'lidagi har bir qadam — yangi bir dunyoni kashf etishdir."
          </p>
        </motion.div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-72">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 1 }}
              onClick={() => setSelectedAch(ach)}
              className="bg-white border border-slate-50 rounded-[80px] overflow-hidden group cursor-pointer hover:shadow-3xl transition-all duration-700 hover:-translate-y-4"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 border-[12px] border-white shadow-xl rounded-[70px] m-4">
                <img src={ach.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={ach.name} />
                <div className="absolute top-10 right-10">
                  <div className="bg-white/95 backdrop-blur text-[#0A1F44] px-6 py-3 rounded-3xl font-black text-xs shadow-2xl tracking-widest uppercase">
                    {ach.year}
                  </div>
                </div>
              </div>
              <div className="p-14 pt-8 text-center lg:text-left">
                <span className="text-[#0A84FF] text-[11px] font-black uppercase tracking-[0.4em] mb-6 block">{ach.award}</span>
                <h3 className="text-4xl font-playfair font-bold text-[#0A1F44] mb-6 group-hover:text-[#0A84FF] transition-colors leading-tight">{ach.name}</h3>
                <p className="text-[#64748B] text-xl leading-relaxed mb-10 font-light line-clamp-2">{ach.desc}</p>
                <div className="inline-flex items-center space-x-4 text-[#0A1F44] font-bold">
                   <span className="text-[12px] uppercase tracking-[0.4em] border-b-2 border-[#0A1F44] pb-1 group-hover:border-[#0A84FF] group-hover:text-[#0A84FF] transition-all">Tarixi ko'rish</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto mb-56 px-6">
        <div className="bg-[#0A1F44] rounded-[100px] p-24 md:p-32 text-white relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0A84FF]/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 text-center relative z-10">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-6">
                <div className="text-7xl md:text-8xl font-playfair font-bold tracking-tighter">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="w-16 h-1.5 bg-[#0A84FF] mx-auto rounded-full" />
                <p className="text-[11px] uppercase tracking-[0.5em] font-black text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Modal isOpen={!!selectedAch} onClose={() => setSelectedAch(null)} title="Yutuq Tafsilotlari">
        <div className="space-y-14">
           <div className="flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0 md:space-x-16">
             <div className="relative w-64 h-64 flex-shrink-0">
               <div className="absolute inset-0 bg-[#0A84FF]/10 rounded-[50px] rotate-6 scale-105"></div>
               <img src={selectedAch?.image} className="relative w-full h-full rounded-[50px] object-cover shadow-3xl border-4 border-white" alt={selectedAch?.name || "Student"} />
             </div>
             <div>
               <h3 className="text-5xl font-playfair font-bold text-[#0A1F44] mb-3">{selectedAch?.name}</h3>
               <p className="text-[#0A84FF] text-sm font-black uppercase tracking-widest mb-10">{selectedAch?.award}</p>
               <div className="bg-slate-50 rounded-[40px] p-12 mt-10">
                 <h4 className="text-xs font-black uppercase tracking-[0.5em] text-[#0A84FF] mb-6">Muvaffaqiyat tarixi</h4>
                 <p className="text-2xl text-slate-600 font-light leading-relaxed italic">
                   "{selectedAch?.story}"
                 </p>
               </div>
             </div>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-14 border-t border-slate-100">
             <div className="space-y-2">
               <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Yo'nalish</p>
               <p className="text-[#0A1F44] font-bold text-2xl">{selectedAch?.details?.category || 'Noaniq'}</p>
             </div>
             <div className="space-y-2">
               <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Nashrlar</p>
               <p className="text-[#0A1F44] font-bold text-2xl">{selectedAch?.details?.publications || 0} ta maqola</p>
             </div>
             <div className="col-span-2 md:col-span-1 space-y-2">
               <p className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">E'tirof darajasi</p>
               <p className="text-[#0A1F44] font-bold text-2xl">{selectedAch?.details?.internationalImpact || 'Oliy'}</p>
             </div>
           </div>
        </div>
      </Modal>
    </div>
  );
};

export default Achievements;
