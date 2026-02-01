import React from 'react';
import { motion } from 'framer-motion';
import { FUNNY_MOMENTS } from '../constants';
import { ArrowRight, Sparkles, Smile } from 'lucide-react';

interface FunnyGalleryProps {
  onFinish: () => void;
}

const FunnyGallery: React.FC<FunnyGalleryProps> = ({ onFinish }) => {
  return (
    <div className="min-h-screen w-full py-20 px-4 bg-[#fdfbf7] relative overflow-hidden">
      
      {/* Chaotic Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl animate-bounce" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      </div>

      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-block relative">
            <h2 className="text-5xl md:text-7xl font-handwriting font-bold text-slate-800 mb-2 transform -rotate-2">
            The "Real" Us
            </h2>
            <motion.div 
                className="absolute -right-8 -top-8 text-yellow-400"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <Sparkles size={40} />
            </motion.div>
        </div>
        <p className="text-xl font-handwriting text-rose-500 mt-4 transform rotate-1">
          (Because we can't be aesthetic all the time)
        </p>
      </motion.div>

      {/* Robust Masonry Layout */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 pb-24">
        {FUNNY_MOMENTS.map((moment, index) => (
          <motion.div
            key={moment.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
                opacity: 1, 
                y: 0 
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15, 
                delay: index * 0.05 
            }}
            className="break-inside-avoid relative mb-6 group"
            style={{ rotate: `${moment.rotation}deg` }}
          >
            {/* Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-100/80 transform -rotate-2 shadow-sm z-20 backdrop-blur-sm" />

            <div className="bg-white p-3 shadow-lg rounded-sm border border-gray-100 hover:scale-105 transition-transform duration-300">
              <div className="w-full overflow-hidden bg-gray-100 relative mb-2">
                <img
                  src={moment.url}
                  alt={moment.caption}
                  className="w-full h-auto block object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Sticker Overlay */}
                <motion.div 
                    className="absolute bottom-2 right-2 text-4xl drop-shadow-md"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                    {moment.sticker}
                </motion.div>
              </div>

              <div className="p-2 text-center">
                 <p className="font-handwriting text-xl font-bold text-slate-700 leading-none">
                    {moment.caption}
                 </p>
                 <div className="mt-2">
                    <span className="bg-yellow-100 text-slate-600 px-2 py-1 text-sm font-handwriting font-bold rounded-sm shadow-sm inline-block transform -rotate-1">
                        {moment.comment}
                    </span>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="flex justify-center pb-20 relative z-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={onFinish}
          className="group relative px-10 py-4 bg-white border-2 border-rose-400 text-rose-500 rounded-full shadow-[4px_4px_0px_0px_rgba(251,113,133,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
        >
          <div className="flex items-center gap-3">
            <Smile size={24} />
            <span className="font-handwriting text-2xl font-bold">Okay, back to romance</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      </motion.div>

    </div>
  );
};

export default FunnyGallery;