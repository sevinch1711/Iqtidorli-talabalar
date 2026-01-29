
import React from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {
  isLoading: boolean;
  text?: string;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading, text = "Ma'lumotlar yuklanmoqda..." }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      // Fix: pointerEvents should be handled via the style object or CSS classes in React.
      style={{ pointerEvents: isLoading ? "auto" : "none" }}
      className="fixed inset-0 z-[100] bg-[#0A1F44] flex flex-col items-center justify-center text-white transition-opacity duration-500"
    >
      <div className="relative mb-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="w-32 h-32 rounded-full border border-white/10 border-t-[#D4AF37]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-[#D4AF37] rounded-full animate-pulse" />
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-[#D4AF37] mb-4">
          Tizim Tahlili
        </p>
        <p className="text-xl font-playfair italic font-light opacity-60">
          {text}
        </p>
      </motion.div>
      
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-px bg-white/10 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full bg-[#D4AF37]"
        />
      </div>
    </motion.div>
  );
};

export default PageLoader;
