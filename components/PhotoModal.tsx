import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Memory } from '../types';

interface PhotoModalProps {
  memory: Memory | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ memory, onClose, onNext, onPrev }) => {
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!memory) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [memory, onClose, onNext, onPrev]);

  if (!memory) return null;

  return (
    <AnimatePresence>
      {memory && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with Blur */}
          <div 
            className="absolute inset-0 bg-rose-950/60 backdrop-blur-md transition-all"
            onClick={onClose}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/80 hover:text-white z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-all backdrop-blur-sm"
          >
            <X size={28} />
          </button>

          {/* Navigation Buttons (Desktop) */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all z-50"
          >
            <ChevronLeft size={40} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all z-50"
          >
            <ChevronRight size={40} />
          </button>

          {/* Main Content Card */}
          <motion.div
            className="relative w-full max-w-6xl max-h-[90vh] md:h-[600px] flex flex-col md:flex-row bg-white/90 rounded-3xl overflow-hidden shadow-2xl z-40"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -50) onNext();
              else if (offset.x > 50) onPrev();
            }}
          >
            {/* Image Section */}
            <div className="w-full md:w-3/5 h-[50vh] md:h-full bg-gray-100 relative overflow-hidden group">
              <motion.img
                key={`img-${memory.id}`}
                src={memory.url}
                alt={memory.caption}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
            </div>

            {/* Poetry/Content Section */}
            <div className="w-full md:w-2/5 h-auto md:h-full bg-white/80 backdrop-blur-xl p-8 md:p-12 flex flex-col justify-center relative">
               {/* Decorative Background for text area */}
               <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-white to-purple-50/50 pointer-events-none" />
               
               <motion.div
                key={`content-${memory.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative z-10"
               >
                 <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 text-xs font-bold shadow-inner">
                      {memory.id}
                    </span>
                    <div className="h-px flex-1 bg-rose-200/50" />
                    <span className="text-xs font-sans font-medium text-rose-400 uppercase tracking-widest">
                      {memory.date}
                    </span>
                 </div>

                 <h3 className="text-3xl md:text-4xl font-script text-rose-900 mb-6 leading-tight">
                   {memory.caption}
                 </h3>

                 <div className="relative pl-6 border-l-2 border-rose-300">
                   <Quote className="absolute -left-2 -top-2 w-4 h-4 text-rose-400 bg-white" />
                   <p className="font-serif text-lg md:text-xl text-slate-700 leading-relaxed italic whitespace-pre-line">
                     {memory.poetry}
                   </p>
                 </div>

                 <div className="mt-10 flex justify-between items-center text-rose-300 text-sm font-sans">
                    <span className="hidden md:inline">Use arrow keys</span>
                    <span className="md:hidden">Swipe to navigate</span>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;