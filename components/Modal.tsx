
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-[#0A1F44]/40 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[70] flex items-end md:items-center justify-center p-0 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 100 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="bg-white w-full max-w-[850px] max-h-[90vh] md:max-h-[85vh] flex flex-col rounded-t-[40px] md:rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] pointer-events-auto overflow-hidden relative"
            >
              {/* Top Header */}
              <div className="flex items-center justify-between px-6 md:px-10 pt-8 md:pt-10 pb-4">
                <div className="flex flex-col">
                  <h3 className="text-[#0A1F44] font-playfair font-bold text-lg md:text-xl">{title}</h3>
                  <div className="w-10 md:w-12 h-[3px] bg-[#D4AF37] mt-2 rounded-full" />
                </div>
                <button 
                  onClick={onClose}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-300 group"
                >
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-slate-300 group-hover:text-[#0A1F44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-grow overflow-y-auto no-scrollbar pb-8">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
