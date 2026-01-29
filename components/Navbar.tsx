
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        isScrolled 
          ? 'bg-[#FCFBF7]/80 backdrop-blur-xl py-6 border-b border-slate-200/30 shadow-sm' 
          : 'bg-transparent py-10'
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#D4AF37]/50 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
        <Link to="/" className="group flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-all duration-700" />
          <span className={`text-[9px] font-black uppercase tracking-[0.4em] transition-colors duration-700 ${isScrolled ? 'text-[#0A1F44]' : 'text-white'}`}>
            Iqtidorli Talabalar
          </span>
        </Link>

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

        <div className="w-20 lg:hidden"></div> {/* Mobile spacer if needed */}
      </div>
    </nav>
  );
};

export default Navbar;
