
import React from 'react';
import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-24">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-20 disabled:cursor-not-allowed transition-all group"
      >
        <svg className="w-5 h-5 rotate-180 text-slate-400 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
      
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.button
            key={i}
            whileHover={{ y: -2 }}
            onClick={() => onPageChange(i + 1)}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-full text-[10px] font-black transition-all ${
              currentPage === i + 1 
                ? 'bg-[#0A1F44] text-white shadow-xl scale-110' 
                : 'bg-white text-[#0A1F44] border border-slate-100 hover:border-[#D4AF37]'
            }`}
          >
            0{i + 1}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-slate-200 flex items-center justify-center hover:border-[#D4AF37] disabled:opacity-20 disabled:cursor-not-allowed transition-all group"
      >
        <svg className="w-5 h-5 text-slate-400 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default Pagination;
