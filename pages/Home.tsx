
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const RevealText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

  const missionCards = [
    {
      title: "Iqtidorlarni aniqlash",
      desc: "Akademiyamizdagi eng salohiyatli yoshlarni turli tanlovlar va monitoring orqali saralab olamiz.",
      icon: "01"
    },
    {
      title: "Ilmiy ko'mak",
      desc: "Talabalarning ilmiy maqolalari, tadqiqotlari va loyihalarini moliyaviy hamda uslubiy qo'llab-quvvatlaymiz.",
      icon: "02"
    },
    {
      title: "Global integratsiya",
      desc: "Xalqaro olimpiadalar va konferensiyalarda talabalarimiz ishtirokini ta'minlash orqali dunyo tajribasini o'rganamiz.",
      icon: "03"
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#FCFBF7]">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/75 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2400" 
            className="w-full h-full object-cover" 
            alt="Students collaborating" 
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className="mb-10">
            <span className="px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-[0.6em] font-black text-white/90">
              International Islamic Academy of Uzbekistan
            </span>
          </motion.div>

          <h1 className="text-8xl md:text-[11vw] font-playfair font-bold text-white leading-[0.85] tracking-tighter mb-16">
            <RevealText>Fikr. Ilm.</RevealText>
            <span className="text-[#D4AF37] italic font-light block mt-4">
              <RevealText delay={0.3}>Kamolot.</RevealText>
            </span>
          </h1>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.8 }} className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link to="/scholarships" className="px-14 py-6 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
              Imkoniyatlar
            </Link>
            <Link to="/about" className="px-14 py-6 bg-transparent border border-white/30 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0A1F44] transition-all">
              Biz haqimizda
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission Cards Section */}
      <section className="py-64 px-8 max-w-[1400px] mx-auto">
        <div className="mb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em] block mb-6">Bizning yo'limiz</span>
            <h2 className="text-6xl md:text-8xl font-playfair font-bold text-[#0A1F44] leading-none tracking-tighter">Missiyamiz</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {missionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1 }}
              className="p-16 bg-white rounded-[80px] border border-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 group"
            >
              <div className="text-6xl font-playfair font-bold text-slate-100 group-hover:text-[#D4AF37]/20 transition-colors mb-12">
                {card.icon}
              </div>
              <h3 className="text-3xl font-playfair font-bold text-[#0A1F44] mb-8 group-hover:text-[#D4AF37] transition-colors">
                {card.title}
              </h3>
              <p className="text-xl text-slate-500 font-light leading-relaxed italic">
                "{card.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-64 px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div initial={{ scale: 1.2, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="rounded-[80px] overflow-hidden aspect-[4/5] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200" className="w-full h-full object-cover" alt="Philosophy" />
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="text-6xl md:text-8xl font-playfair font-bold text-[#0A1F44] leading-none tracking-tighter mb-12">
              Kelajakni <br /><span className="italic text-[#D4AF37]">bugun</span> quramiz.
            </h2>
            <p className="text-2xl text-slate-500 font-light leading-relaxed">Biz nafaqat bilim, balki shaxsiyat va intellektual salohiyatni rivojlantirishga e'tibor qaratamiz.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
