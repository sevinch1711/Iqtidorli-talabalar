
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Asosiy', path: '/' },
    { label: 'Bo\'lim haqida', path: '/about' },
    { label: 'Talabalarga', path: '/scholarships' },
    { label: 'Yangiliklar', path: '/news' },
    { label: 'Yutuqlar', path: '/achievements' },
    { label: 'Liderlar', path: '/leaders' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-slate-200 shadow-sm' : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          {/* Logo Katakchasi */}
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm border border-slate-100 group-hover:shadow-md transition-all duration-300">
            <img 
              src="https://i.postimg.cc/8z0NfR9y/photo-2025-02-12-16-11-20.jpg" 
              alt="O'zXIA Iqtidor" 
              className="w-10 h-10 object-contain"
            />
          </div>
          {/* Logo Matni - 2 qator va Bold */}
          <div className="flex flex-col">
            <span className="text-[13px] md:text-base font-bold text-[#0A1F44] tracking-tight leading-tight uppercase">
              O'zXIA Iqtidorli talabalar
            </span>
            <span className="text-[13px] md:text-base font-bold text-[#0A1F44] tracking-tight leading-tight uppercase">
              bilan ishlash bo'limi
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative text-sm font-medium transition-colors duration-300 ${
                location.pathname === item.path ? 'text-[#0A84FF]' : 'text-slate-600 hover:text-[#0A84FF]'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0A84FF]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-slate-100">
                  <img src="https://i.postimg.cc/8z0NfR9y/photo-2025-02-12-16-11-20.jpg" alt="Logo" className="w-8 h-8 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[13px] text-[#0A1F44] leading-tight uppercase">O'zXIA Iqtidorli talabalar</span>
                  <span className="font-bold text-[13px] text-[#0A1F44] leading-tight uppercase">bilan ishlash bo'limi</span>
                </div>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-playfair font-medium text-[#0A1F44] hover:text-[#0A84FF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
