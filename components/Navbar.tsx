
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: 'Asosiy', path: '/' },
    { label: 'Haqimizda', path: '/about' },
    { label: 'Yutuqlar', path: '/achievements' },
    { label: 'Liderlar', path: '/leaders' },
    { label: 'Media', path: '/media' },
    { label: 'Stipendiyalar', path: '/scholarships' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#FCFBF7]/90 backdrop-blur-xl py-4 md:py-6 border-b border-slate-200/30 shadow-sm' 
          : 'bg-transparent py-6 md:py-10'
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/50 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 flex justify-between items-center">
        <Link to="/" className="group flex items-center space-x-3 md:space-x-4">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-all duration-700" />
          <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-700 ${isScrolled ? 'text-[#0A1F44]' : 'text-white'}`}>
            Iqtidorli Talabalar
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-[9px] font-black uppercase tracking-[0.3em] transition-all duration-700 ${
                location.pathname === item.path 
                  ? 'text-[#D4AF37]' 
                  : (isScrolled ? 'text-[#0A1F44]/40 hover:text-[#0A1F44]' : 'text-white/40 hover:text-white')
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-px bg-[#D4AF37]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-[60] p-2"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
              className={`h-[2px] rounded-full transition-colors ${isMobileMenuOpen || isScrolled ? 'bg-[#0A1F44]' : 'bg-white'}`}
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`h-[2px] w-3/4 rounded-full transition-colors ${isScrolled ? 'bg-[#0A1F44]' : 'bg-white'}`}
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
              className={`h-[2px] rounded-full transition-colors ${isMobileMenuOpen || isScrolled ? 'bg-[#0A1F44]' : 'bg-white'}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#FCFBF7] lg:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col items-center space-y-10">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.path}
                >
                  <Link
                    to={item.path}
                    className={`text-2xl font-playfair font-bold uppercase tracking-widest ${
                      location.pathname === item.path ? 'text-[#D4AF37]' : 'text-[#0A1F44]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-12 text-center">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">O'zXIA 2024</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
