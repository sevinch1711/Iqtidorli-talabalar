
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const Reveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen selection:bg-[#0A84FF] selection:text-white overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-start justify-center px-6">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0A84FF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="relative z-10 text-center max-w-7xl pt-48 pb-32"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="inline-flex items-center px-8 py-2.5 bg-white border border-slate-100 rounded-full mb-14 shadow-lg"
          >
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[#0A1F44]">Xalqaro Islomshunoslik Akademiyasi</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-[11rem] font-playfair font-bold text-[#0A1F44] leading-[0.82] tracking-tighter mb-16"
          >
            Iqtidor ilmda <br />
            <span className="text-[#0A84FF] italic font-light">shakllanadi.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-[#64748B] max-w-3xl mx-auto font-light leading-relaxed mb-20"
          >
            Sizning muvaffaqiyatingiz – bizning vazifamiz. Zamonaviy ta'lim va chuqur tadqiqotlar markazi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-14"
          >
            <Link 
              to="/scholarships" 
              className="group relative px-20 py-8 bg-[#0A1F44] text-white rounded-full font-bold text-xl overflow-hidden hover:shadow-[0_20px_40px_rgba(10,31,68,0.25)] transition-all duration-500 active:scale-95"
            >
              <div className="absolute inset-0 bg-[#0A84FF] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">Imkoniyatlarni ko'rish</span>
            </Link>
            <Link to="/about" className="group flex items-center space-x-4 text-[#0A1F44] font-bold text-xl">
              <span className="border-b-2 border-transparent group-hover:border-[#0A1F44] transition-all pb-1">Biz haqimizda</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. CINEMATIC VISUAL */}
      <section className="px-6 mb-72">
        <Reveal>
          <div className="max-w-[1600px] mx-auto relative aspect-[21/9] rounded-[100px] overflow-hidden shadow-[0_60px_120px_-30px_rgba(10,31,68,0.2)] bg-slate-100 border-[20px] border-white">
            <motion.img 
              style={{ y: imageY }}
              src="https://images.unsplash.com/photo-1541339907198-e087563ef3f5?auto=format&fit=crop&q=95&w=2400" 
              className="w-full h-[120%] object-cover"
              alt="Academy Architecture"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=95&w=2400";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/50 via-transparent to-transparent" />
            <div className="absolute bottom-20 left-20 right-20 text-white">
               <div className="max-w-2xl">
                 <div className="text-xs font-black uppercase tracking-[0.6em] mb-6 opacity-70">Kelajak maskani</div>
                 <h2 className="text-5xl md:text-6xl font-playfair font-bold leading-tight">Eng yaxshi akademik sharoitlar iqtidorli yoshlar uchun.</h2>
               </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. CORE MISSION */}
      <section className="max-w-7xl mx-auto px-6 mb-72">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
          <Reveal>
            <div className="space-y-16">
               <h2 className="text-6xl md:text-8xl font-playfair font-bold text-[#0A1F44] tracking-tighter leading-tight">
                 Bizning <br /> <span className="text-slate-200 italic font-light">missiyamiz.</span>
               </h2>
               <p className="text-3xl text-slate-500 font-light leading-relaxed">
                 Har bir talabaning salohiyatini kashf etish va ularni global darajadagi ilm-fan cho'qqilariga tayyorlash.
               </p>
               <div className="grid grid-cols-2 gap-20 pt-16 border-t border-slate-100">
                  <div>
                    <div className="text-5xl font-playfair font-bold text-[#0A84FF]">250+</div>
                    <div className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400 mt-4">Iqtidorli talabalar</div>
                  </div>
                  <div>
                    <div className="text-5xl font-playfair font-bold text-[#0A84FF]">40+</div>
                    <div className="text-[11px] uppercase tracking-[0.4em] font-black text-slate-400 mt-4">Nomdor stipendiatlar</div>
                  </div>
               </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-6 bg-slate-50 rounded-[80px] scale-95 group-hover:scale-100 transition-transform duration-1000 -z-10" />
              <div className="relative aspect-[4/5] rounded-[70px] overflow-hidden shadow-3xl bg-slate-200 border-[12px] border-white">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=85&w=1200" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  alt="Modern Learning Space"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTIONS GRID */}
      <section className="py-56 bg-slate-50 rounded-[120px] mb-20 mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-40">
             <Reveal>
               <span className="text-[#0A84FF] text-[12px] font-black uppercase tracking-[0.6em] mb-8 block">Tuzilma</span>
               <h2 className="text-6xl md:text-8xl font-playfair font-bold text-[#0A1F44] tracking-tighter">Asosiy bo'limlar</h2>
             </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Grantlar", path: "/scholarships", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1000" },
              { title: "Yutuqlar", path: "/achievements", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" },
              { title: "Liderlar", path: "/leaders", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000" }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <Link to={item.path} className="group relative block aspect-[3/4] rounded-[60px] overflow-hidden bg-white shadow-2xl hover:-translate-y-6 transition-all duration-700">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/90 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-14 left-14 text-white">
                    <h3 className="text-5xl font-playfair font-bold mb-6">{item.title}</h3>
                    <div className="text-[11px] uppercase tracking-[0.4em] font-black opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500">Batafsil →</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-72 text-center px-6">
        <Reveal>
          <div className="max-w-5xl mx-auto space-y-20">
            <h2 className="text-7xl md:text-[10rem] font-playfair font-bold text-[#0A1F44] tracking-tighter leading-[0.85]">
              Hozir <br /> <span className="text-[#0A84FF]">boshlang.</span>
            </h2>
            <p className="text-3xl text-slate-400 font-light max-w-3xl mx-auto">
              Akademiya iqtidorli talabalari qatoriga qo'shiling va kelajagingizni quring.
            </p>
            <Link 
              to="/scholarships" 
              className="inline-block px-24 py-10 bg-[#0A84FF] text-white rounded-full font-bold text-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 active:scale-95"
            >
              Imkoniyatlarni o'rganish
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
