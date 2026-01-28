
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // Prevent body scroll when modal is open
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
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="bg-white w-full max-w-3xl max-h-[85vh] flex flex-col rounded-[40px] shadow-[0_50px_100px_-20px_rgba(10,31,68,0.25)] pointer-events-auto overflow-hidden"
            >
              {/* Fixed Header */}
              <div className="px-8 md:px-12 py-8 border-b border-slate-50 flex justify-between items-center bg-white z-20">
                <div className="space-y-1">
                   <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[#0A1F44] leading-tight">{title}</h3>
                   <div className="w-12 h-1 bg-[#0A84FF] rounded-full"></div>
                </div>
                <button 
                  onClick={onClose}
                  className="p-3 bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-300 group"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6 text-slate-400 group-hover:text-[#0A1F44] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="flex-grow overflow-y-auto px-8 md:px-12 py-10 custom-scrollbar">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-8"
                >
                  {children}
                </motion.div>
                
                {/* Spacer to prevent content from touching the very bottom */}
                <div className="h-10"></div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
