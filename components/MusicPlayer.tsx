import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, Play, Pause, Music } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      className="fixed bottom-6 left-6 z-50 flex items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        className={`bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl rounded-full overflow-hidden flex items-center relative cursor-pointer group`}
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{ 
            width: isExpanded ? 220 : 50,
            height: 50
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Vinyl Disc Icon (Spinning) */}
        <div className="absolute left-1 w-10 h-10 flex items-center justify-center">
            <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className={`w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-slate-700 ${isPlaying ? 'shadow-[0_0_15px_rgba(244,63,94,0.4)]' : ''}`}
            >
                <div className="w-3 h-3 bg-rose-500 rounded-full border border-rose-300" />
            </motion.div>
        </div>

        {/* Content (Title + Controls) */}
        <AnimatePresence>
            {isExpanded && (
                <motion.div 
                    className="flex items-center justify-between w-full pl-14 pr-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex flex-col justify-center overflow-hidden">
                        <span className="text-xs font-bold text-slate-800 whitespace-nowrap">Our Love Song</span>
                        <span className="text-[10px] text-slate-500">Perfect Duet</span>
                    </div>

                    <button 
                        onClick={togglePlay}
                        className="w-8 h-8 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-600 flex items-center justify-center transition-colors ml-2"
                    >
                        {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Floating notes animation when playing */}
        {isPlaying && (
            <div className="absolute -top-10 left-4 pointer-events-none">
                <MusicNote delay={0} />
                <MusicNote delay={1.5} />
            </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const MusicNote = ({ delay }: { delay: number }) => (
    <motion.div
        className="absolute text-rose-400"
        initial={{ y: 0, opacity: 0, x: 0 }}
        animate={{ 
            y: -60, 
            opacity: [0, 1, 0],
            x: Math.sin(delay) * 20
        }}
        transition={{ 
            duration: 2, 
            repeat: Infinity, 
            delay: delay,
            ease: "easeOut"
        }}
    >
        <Music size={14} />
    </motion.div>
);

export default MusicPlayer;