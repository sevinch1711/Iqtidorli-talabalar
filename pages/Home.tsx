
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const RevealText: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <div className="overflow-hidden">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  </div>
);

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A1F44]/55 z-10" />
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerlSpA_esCfKdoztSMvOMdS46dugVglejfMsFPH6KudD3hqncbt_1-ICWXKThXWkMDjnCgBxDCV5BzO10Wexvx44QUQMGzDaaETogQnO63mAYVPl3Fy-V3Yut2WcGt-U_jpDR_cdA=s1360-w1360-h1020-rw" 
            className="w-full h-full object-cover" 
            alt="International Islamic Academy of Uzbekistan Hero" 
          />
        </motion.div>

        <div className="relative z-20 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
            className="mb-10 mt-[100px]"
          >
            <span className="px-10 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-[9px] md:text-[10px] uppercase tracking-[0.6em] font-black text-white/90">
              O'zbekiston Xalqaro Islom Akademiyasi
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-8xl lg:text-[11vw] font-playfair font-bold text-white leading-[0.85] tracking-tighter mb-16">
            <RevealText>Fikr. Ilm.</RevealText>
            <span className="text-[#D4AF37] italic font-light block mt-6">
              <RevealText delay={0.4}>Kamolot.</RevealText>
            </span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.8, delay: 1, ease: [0.16, 1, 0.3, 1] }} 
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <Link to="/scholarships" className="w-full sm:w-auto px-16 py-7 bg-[#D4AF37] text-[#0A1F44] rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)]">
              Imkoniyatlar
            </Link>
            <Link to="/achievements" className="w-full sm:w-auto px-16 py-7 bg-transparent border border-white/30 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A1F44] transition-all">
              Shon-sharaf zali
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/50 font-bold">Scroll</span>
          <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-48 md:py-64 lg:py-80 px-6 md:px-8 max-w-[1400px] mx-auto">
        <div className="mb-32 md:mb-48 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.8em] block mb-8">Bizning yo'limiz</span>
            <h2 className="text-5xl md:text-8xl lg:text-9xl font-playfair font-bold text-[#0A1F44] leading-tight tracking-tighter">Missiyamiz</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          {missionCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-16 md:p-20 bg-white rounded-[80px] md:rounded-[100px] border border-slate-50 shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.05)] hover:-translate-y-6 transition-all duration-1000 group"
            >
              <div className="text-5xl md:text-7xl font-playfair font-bold text-slate-100 group-hover:text-[#D4AF37]/20 transition-colors duration-700 mb-12 md:mb-16">
                {card.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-[#0A1F44] mb-8 group-hover:text-[#D4AF37] transition-colors duration-700">
                {card.title}
              </h3>
              <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed italic">
                "{card.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-48 md:py-64 px-6 md:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ scale: 1.2, opacity: 0, rotate: -2 }} 
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
              className="rounded-[80px] overflow-hidden aspect-[4/5] shadow-2xl bg-slate-100 border-8 border-white"
            >
              <img src="https://static.oliygoh.uz/crop/2/1/832__85_2155841199.jpg?t=1735969157" className="w-full h-full object-cover" alt="Philosophy" />
            </motion.div>
          </div>
          <div className="lg:col-span-7">
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-5xl md:text-8xl font-playfair font-bold text-[#0A1F44] leading-[1.1] tracking-tighter mb-12">
                Kelajakni <br /><span className="italic text-[#D4AF37]">bugun</span> quramiz.
              </h2>
              <p className="text-2xl md:text-3xl text-slate-500 font-light leading-relaxed max-w-2xl">
                Biz nafaqat bilim, balki shaxsiyat va intellektual salohiyatni rivojlantirishga e'tibor qaratamiz. Har bir talabaning iqtidori — yurtimizning bebaho xazinasi va yorqin kelajagi poydevoridir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
