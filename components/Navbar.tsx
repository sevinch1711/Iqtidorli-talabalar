
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [location]);

  const navItems: NavItem[] = [
    { label: 'Asosiy', path: '/' },
    { 
      label: 'Faoliyat', 
      path: '#',
      dropdown: [
        { label: 'Iqtidorli talabalar bilan ishlash', path: '/faoliyat/talabalar' },
        { label: 'Ilmiy bo\'lim', path: '/faoliyat/ilmiy' }
      ]
    },
    { label: 'Yutuqlar', path: '/achievements' },
    { 
      label: 'Nashrlar', 
      path: '#',
      dropdown: [
        { label: 'To\'plamlar', path: '/publications/collections' },
        { label: 'Talabalar kitoblari', path: '/publications/creativity' }
      ]
    },
    { label: 'Liderlar', path: '/leaders' },
    { label: 'Media', path: '/media' },
    { label: 'Stipendiyalar', path: '/scholarships' },
  ];

  const logoUrl = "https://lh3.googleusercontent.com/d/1lOQ8BI09iEXoI3DZD2tOoyn16hssFpT5";

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
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white border border-slate-100 group-hover:scale-110 transition-all duration-700 shadow-sm flex items-center justify-center">
            <img src={logoUrl} alt="O'zXIA TIJ Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-700 max-w-[200px] leading-tight ${isScrolled ? 'text-[#0A1F44]' : 'text-white'}`}>
              O'zbekiston Xalqaro Islomshunoslik Akademiyasi
            </span>
            <span className={`text-[7px] md:text-[8px] font-bold uppercase tracking-[0.1em] opacity-60 ${isScrolled ? 'text-[#D4AF37]' : 'text-[#D4AF37]'}`}>
              Talabalar Ilmiy Jamiyati
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <div 
              key={item.label} 
              className="relative group"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className={`relative text-[9px] font-black uppercase tracking-[0.3em] py-2 transition-all duration-700 flex items-center gap-2 ${
                  (location.pathname === item.path || (item.dropdown && item.dropdown.some(d => location.pathname === d.path)))
                    ? 'text-[#D4AF37]' 
                    : (isScrolled ? 'text-[#0A1F44]/40 hover:text-[#0A1F44]' : 'text-white/40 hover:text-white')
                }`}
              >
                {item.label}
                {item.dropdown && (
                  <svg className={`w-2 h-2 transition-transform duration-500 ${activeDropdown === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
                {location.pathname === item.path && !item.dropdown && (
                  <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px bg-[#D4AF37]" />
                )}
              </Link>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 p-4 flex flex-col overflow-hidden"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="px-6 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-[#0A1F44]/60 hover:text-[#D4AF37] hover:bg-slate-50 transition-all"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#FCFBF7] lg:hidden flex flex-col pt-32 p-8 overflow-y-auto"
          >
            <div className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <div key={item.label}>
                  {!item.dropdown ? (
                    <Link
                      to={item.path}
                      className="text-4xl font-playfair font-bold text-[#0A1F44] block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="space-y-6">
                      <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 block mb-4">
                        {item.label}
                      </span>
                      {item.dropdown.map(sub => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="text-3xl font-playfair font-bold text-[#0A1F44] block pl-4 border-l-2 border-[#D4AF37]/20 hover:border-[#D4AF37]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
