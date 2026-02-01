import React from 'react';
import { motion, Variants } from 'framer-motion';
import { MEMORIES } from '../constants';
import { Memory } from '../types';
import { ArrowRight } from 'lucide-react';

interface GalleryProps {
  onMemoryClick: (memory: Memory) => void;
  onFinish: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 50, damping: 15 }
  }
};

const Gallery: React.FC<GalleryProps> = ({ onMemoryClick, onFinish }) => {
  return (
    <div className="min-h-screen w-full py-20 px-4 md:px-8 max-w-[1600px] mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-script text-rose-800 mb-4">Our Beautiful Journey</h2>
        <p className="text-slate-500 font-sans max-w-md mx-auto">
          Every picture tells a story. Here are 20 moments that make my heart skip a beat.
        </p>
      </motion.div>

      {/* Adaptive Masonry Grid */}
      <motion.div
        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {MEMORIES.map((memory) => (
          <motion.div
            key={memory.id}
            variants={itemVariants}
            className="break-inside-avoid relative cursor-pointer mb-8"
            whileHover={{ 
              scale: 1.02, 
              zIndex: 10,
              transition: { duration: 0.3 } 
            }}
            onClick={() => onMemoryClick(memory)}
          >
            {/* Polaroid Wrapper that expands to fit image height */}
            <div 
                className="bg-white p-3 pb-12 shadow-md rounded-sm transform transition-all duration-300 hover:shadow-2xl"
                style={{ rotate: `${memory.rotation}deg` }}
            >
              <div className="w-full overflow-hidden bg-gray-100 relative">
                {/* Natural aspect ratio image */}
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-auto block object-contain filter sepia-[0.15] contrast-[1.05] hover:sepia-0 hover:contrast-100 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-white/10 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                <p className="font-script text-2xl text-gray-700 opacity-90 truncate">
                  {memory.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="mt-24 text-center pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-serif italic text-slate-400 mb-8">But I can't stop looking at you...</p>
        <button
          onClick={onFinish}
          className="group flex items-center gap-2 px-8 py-3 bg-white border border-rose-200 text-rose-500 rounded-full shadow-lg hover:shadow-xl hover:bg-rose-50 transition-all duration-300 font-sans font-medium tracking-wide mx-auto transform hover:-translate-y-1"
        >
          <span>See My Muse</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
        </button>
      </motion.div>
    </div>
  );
};

export default Gallery;