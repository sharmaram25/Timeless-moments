import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NOTES } from '../constants';
import { Heart, ArrowRight, Gem } from 'lucide-react';
import PromiseJar from './PromiseJar';

interface LoveNotesProps {
  onFinish: () => void;
}

const LoveNotes: React.FC<LoveNotesProps> = ({ onFinish }) => {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center pt-24 pb-20 px-4 bg-rose-50/50">
      
      {/* SECTION 1: ENVELOPES */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-script text-rose-800 mb-3">Letters of Love</h2>
        <p className="text-slate-500 font-sans tracking-wide">Select an envelope to read a secret message</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full px-4 mb-32">
        {NOTES.map((note, index) => (
          <motion.div
            key={note.id}
            layoutId={`envelope-${note.id}`}
            onClick={() => setSelectedNote(note.id)}
            className="cursor-pointer group perspective-1000"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
          >
            <div className={`relative h-48 bg-white rounded-lg shadow-md border-b-2 border-gray-200 overflow-hidden`}>
               {/* Envelope Flap Design */}
               <div className={`absolute top-0 left-0 w-full h-full bg-${note.color.replace('bg-', '') || 'rose-100'} opacity-20`} />
               
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-rose-200 rotate-45 rounded-sm shadow-inner z-10" />
               
               {/* Seal */}
               <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center shadow-lg border-2 border-rose-400">
                    <Heart size={14} className="text-white fill-white" />
                  </div>
               </div>

               <div className="absolute bottom-0 w-full p-6 text-center z-10">
                 <h3 className="font-handwriting text-2xl text-gray-700 font-bold">{note.title}</h3>
                 <p className="text-xs text-rose-400 mt-2 uppercase tracking-wider font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                   Tap to open
                 </p>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECTION 2: PROMISE JAR */}
      <motion.div 
        className="w-full max-w-4xl border-t border-rose-200 pt-20 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-10">
            <div className="inline-block p-3 bg-teal-100 text-teal-600 rounded-full mb-4">
              <Gem size={24} />
            </div>
            <h3 className="font-script text-4xl text-teal-900">For Our Future</h3>
            <p className="text-slate-500 mt-2">Pull a note to see what's written in the stars for us</p>
        </div>
        <PromiseJar />
      </motion.div>

      {/* ENDING BUTTON */}
      <motion.div 
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <button
          onClick={onFinish}
          className="flex items-center gap-3 px-8 py-3 bg-white border border-rose-200 text-rose-600 rounded-full shadow-sm hover:shadow-md hover:bg-rose-50 transition-all duration-300"
        >
          <span className="font-sans uppercase tracking-widest text-xs font-bold">One Last Surprise</span>
          <ArrowRight size={16} />
        </button>
      </motion.div>

      {/* Note Modal - Letter Style */}
      <AnimatePresence>
        {selectedNote !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedNote(null)}
          >
            <motion.div
              layoutId={`envelope-${selectedNote}`}
              className="w-full max-w-lg bg-[#fdfbf7] p-8 md:p-12 rounded-sm shadow-2xl relative paper-texture transform rotate-1"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Close X */}
              <button 
                onClick={() => setSelectedNote(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition-colors"
              >
                ✕
              </button>
              
              {/* Letter Content */}
              <div className="text-center mb-8">
                <span className="text-rose-400 text-xs tracking-[0.2em] uppercase font-sans">
                  A note for you
                </span>
                <h3 className="font-handwriting text-4xl text-gray-800 mt-2 font-bold">
                  {NOTES.find(n => n.id === selectedNote)?.title}
                </h3>
                <div className="w-16 h-0.5 bg-rose-200 mx-auto mt-4" />
              </div>
              
              <div className="prose prose-rose mx-auto">
                <p className="font-handwriting text-2xl md:text-3xl text-gray-700 leading-relaxed text-center">
                  "{NOTES.find(n => n.id === selectedNote)?.content}"
                </p>
              </div>

              <div className="mt-10 text-center flex flex-col items-center">
                <Heart size={20} className="text-rose-500 fill-rose-500/20 mb-2" />
                <p className="text-sm font-serif italic text-gray-400">
                  Forever yours
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoveNotes;