import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Heart } from 'lucide-react';
import { MEMORIES } from '../constants';

interface EndingProps {
  onRestart: () => void;
}

const Ending: React.FC<EndingProps> = ({ onRestart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MEMORIES.length);
    }, 4000); // Slower slideshow
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 opacity-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
             <img
              src={MEMORIES[currentSlide].url}
              alt="Slideshow"
              className="w-full h-full object-cover blur-[4px]"
            />
             <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <motion.div
          className="bg-white/10 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-3xl text-center shadow-2xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
            </motion.div>
          </div>

          <h2 className="text-5xl md:text-7xl font-script text-white mb-6 drop-shadow-lg">
            Humari Kahani
          </h2>
          
          <p className="text-xl md:text-2xl text-rose-100 font-handwriting leading-relaxed mb-10">
            "Yeh sirf tasveerein nahi, yeh humari zindagi ke woh pal hain jo hamesha mere dil mein rahenge. 
            Thank you for being my everything."
          </p>

          <p className="text-white/60 font-sans uppercase tracking-[0.3em] text-xs mb-12">
            I Love You
          </p>

          <button
            onClick={onRestart}
            className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-900/50 transition-all mx-auto"
          >
            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-sans font-medium tracking-wide">Watch Again</span>
          </button>
        </motion.div>
      </div>

      {/* Subtle Progress Line */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full">
        <motion.div 
          className="h-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"
          animate={{ width: `${((currentSlide + 1) / MEMORIES.length) * 100}%` }}
          transition={{ ease: "linear", duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default Ending;