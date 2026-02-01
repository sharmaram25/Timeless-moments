import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FUTURE_PROMISES } from '../constants';
import { Sparkles, X, Heart } from 'lucide-react';

const PromiseJar: React.FC = () => {
  const [currentPromise, setCurrentPromise] = useState<number | null>(null);
  const [isShaking, setIsShaking] = useState(false);

  const pullPromise = () => {
    if (currentPromise !== null) return;
    
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      const randomIndex = Math.floor(Math.random() * FUTURE_PROMISES.length);
      setCurrentPromise(randomIndex);
    }, 800);
  };

  const closePromise = () => {
    setCurrentPromise(null);
  };

  const promiseData = currentPromise !== null ? FUTURE_PROMISES[currentPromise] : null;

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <div className="relative h-64 w-48 cursor-pointer group" onClick={pullPromise}>
            {/* The Jar SVG / Visual */}
            <motion.div
                className="w-full h-full bg-white/20 backdrop-blur-sm border-4 border-white/50 rounded-3xl relative overflow-hidden shadow-xl"
                animate={isShaking ? { rotate: [-5, 5, -5, 5, 0], x: [-5, 5, -5, 5, 0] } : {}}
                transition={{ duration: 0.5 }}
            >
                 {/* Lid */}
                 <div className="absolute top-0 left-0 w-full h-8 bg-rose-200 border-b-2 border-white/40" />
                 
                 {/* Label */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 px-4 py-2 rounded-lg shadow-sm text-center">
                    <span className="font-handwriting text-2xl text-rose-500 font-bold block">Our</span>
                    <span className="font-serif text-sm uppercase tracking-widest text-slate-500">Promise Jar</span>
                 </div>

                 {/* Folded Papers Inside */}
                 <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-100 rotate-12 rounded-sm shadow-sm opacity-80" />
                 <div className="absolute bottom-6 right-8 w-8 h-8 bg-blue-100 -rotate-6 rounded-sm shadow-sm opacity-80" />
                 <div className="absolute bottom-12 left-10 w-8 h-8 bg-pink-100 rotate-45 rounded-sm shadow-sm opacity-80" />
                 
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent pointer-events-none" />
            </motion.div>
            
            <motion.div 
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow-sm"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs font-bold text-rose-400">Tap me!</span>
            </motion.div>
        </div>

        {/* The Pulled Promise Modal */}
        <AnimatePresence>
            {promiseData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={closePromise}
                    />
                    
                    <motion.div
                        layoutId={`promise-${promiseData.id}`}
                        initial={{ scale: 0.2, y: 100, rotate: 20 }}
                        animate={{ scale: 1, y: 0, rotate: 0 }}
                        exit={{ scale: 0.2, y: 100, opacity: 0 }}
                        transition={{ type: "spring", damping: 15 }}
                        className={`${promiseData.color} p-8 rounded-sm shadow-2xl max-w-sm w-full relative transform rotate-1 paper-texture`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={closePromise}
                            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex justify-center mb-4">
                            <Sparkles className="text-rose-400" />
                        </div>

                        <h3 className="text-center font-handwriting text-3xl text-slate-800 leading-snug mb-6">
                            {promiseData.text}
                        </h3>

                        <div className="flex justify-center">
                            <Heart size={16} className="text-rose-400 fill-rose-400" />
                        </div>
                        
                        <div className="absolute -bottom-6 right-0 text-white/80 text-xs font-sans">
                            Tap outside to close
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    </div>
  );
};

export default PromiseJar;