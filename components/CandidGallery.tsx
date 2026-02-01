import React from 'react';
import { motion } from 'framer-motion';
import { CANDIDS } from '../constants';
import { ArrowRight, Camera } from 'lucide-react';

interface CandidGalleryProps {
  onFinish: () => void;
}

const CandidGallery: React.FC<CandidGalleryProps> = ({ onFinish }) => {
  return (
    <div className="min-h-screen w-full py-24 px-4 bg-[#fffaf5]">
      
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-block p-4 bg-orange-100 rounded-full text-orange-500 mb-4">
            <Camera size={32} />
        </div>
        <h2 className="text-4xl md:text-6xl font-script text-slate-800 mb-4">Just You</h2>
        <p className="text-slate-500 font-sans max-w-lg mx-auto leading-relaxed">
          Caught in the moment. These are the random snapshots where you look absolutely breathtaking to me.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto mb-24">
        {CANDIDS.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: (index % 5) * 0.1, duration: 0.5 }}
            className="break-inside-avoid mb-4"
          >
            <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
                <img 
                    src={photo.url} 
                    alt="Candid" 
                    className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    {photo.caption && (
                        <p className="text-white font-handwriting text-xl">{photo.caption}</p>
                    )}
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center flex flex-col items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-serif italic text-slate-400 mb-6">Let's check the time...</p>
        <button
          onClick={onFinish}
          className="group flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-full shadow-xl hover:bg-slate-800 transition-all duration-300"
        >
          <span className="font-sans font-medium tracking-wide">What's Next?</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default CandidGallery;