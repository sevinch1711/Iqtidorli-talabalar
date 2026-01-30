
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Scholarships from './pages/Scholarships';
import News from './pages/News';
import Media from './pages/Media';
import Achievements from './pages/Achievements';
import Leaders from './pages/Leaders';
import DepartmentTalented from './pages/DepartmentTalented';
import DepartmentScientific from './pages/DepartmentScientific';
import PublicationsCollections from './pages/PublicationsCollections';
import PublicationsCreativity from './pages/PublicationsCreativity';

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.02 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/faoliyat/talabalar" element={<PageWrapper><DepartmentTalented /></PageWrapper>} />
        <Route path="/faoliyat/ilmiy" element={<PageWrapper><DepartmentScientific /></PageWrapper>} />
        <Route path="/scholarships" element={<PageWrapper><Scholarships /></PageWrapper>} />
        <Route path="/news" element={<PageWrapper><News /></PageWrapper>} />
        <Route path="/media" element={<PageWrapper><Media /></PageWrapper>} />
        <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
        <Route path="/leaders" element={<PageWrapper><Leaders /></PageWrapper>} />
        <Route path="/publications/collections" element={<PageWrapper><PublicationsCollections /></PageWrapper>} />
        <Route path="/publications/creativity" element={<PageWrapper><PublicationsCreativity /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white selection:bg-[#0A84FF] selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
