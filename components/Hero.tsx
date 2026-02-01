import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

// Cinematic Typing Component
const TypewriterText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const letters = Array.from(text);
  
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    })
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <motion.div 
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#fdfbf7]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1.2 }}
    >
      {/* Global Grain Overlay */}
      <div className="bg-grain" />

      {/* Background Animated Words */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {['Love', 'Forever', 'Timeless', 'Us', 'Always'].map((word, i) => (
            <motion.div
                key={i}
                className="absolute text-[10rem] font-script text-rose-50/60 whitespace-nowrap"
                initial={{ x: -200, opacity: 0 }}
                animate={{ 
                    x: window.innerWidth + 200, 
                    opacity: [0, 0.4, 0],
                    y: Math.sin(i) * 50
                }}
                transition={{ 
                    duration: 20 + Math.random() * 10, 
                    repeat: Infinity, 
                    delay: i * 5,
                    ease: "linear"
                }}
                style={{ 
                    top: `${10 + i * 20}%`,
                    left: -200,
                    filter: 'blur(4px)'
                }}
            >
                {word}
            </motion.div>
        ))}
      </div>

      {/* Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-200/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="z-10 max-w-5xl relative w-full flex flex-col items-center">
        
        {/* Main Title Block */}
        <div className="mb-8 md:mb-12 relative">
          <motion.div 
            className="inline-flex items-center justify-center p-3 mb-8 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse mr-2" />
            <span className="text-xs font-sans uppercase tracking-widest text-rose-900/70 font-semibold">Est. 2023</span>
          </motion.div>
          
          <div className="relative">
            <h1 className="text-7xl md:text-9xl font-cinematic text-slate-800 mb-2 leading-tight tracking-tighter">
                <TypewriterText text="Timeless" delay={0.5} />
            </h1>
            <motion.div 
                className="absolute -right-8 -top-8 text-rose-400 opacity-60"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <svg width="60" height="60" viewBox="0 0 100 100">
                    <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent"/>
                    <text fontSize="14" fill="currentColor">
                        <textPath href="#curve">
                            • twenty moments • twenty memories •
                        </textPath>
                    </text>
                </svg>
            </motion.div>
          </div>

          <h2 className="text-xl md:text-2xl font-handwriting text-rose-500/80 mt-4 tracking-wide transform -rotate-2">
            <TypewriterText text="Our Journey, Captured Forever." delay={1.5} />
          </h2>
        </div>

        {/* Floating Stacked Images - Filling the empty space */}
        <div className="relative w-full h-80 mb-12 flex justify-center items-center">
             {/* Back Image */}
             <motion.div
                className="absolute w-48 h-64 md:w-56 md:h-72 bg-white p-2 shadow-lg rounded-sm transform -rotate-12 opacity-60 grayscale-[50%]"
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 0.6, x: -60, rotate: -12 }}
                transition={{ delay: 1, duration: 1 }}
             >
                <img src="https://picsum.photos/seed/love_bg1/400/600" className="w-full h-full object-cover" alt="Memory" />
             </motion.div>
             
             {/* Middle Image */}
             <motion.div
                className="absolute w-48 h-64 md:w-56 md:h-72 bg-white p-2 shadow-lg rounded-sm transform rotate-12 opacity-80"
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                animate={{ opacity: 0.8, x: 60, rotate: 12 }}
                transition={{ delay: 1.2, duration: 1 }}
             >
                 <img src="https://picsum.photos/seed/love_bg2/400/600" className="w-full h-full object-cover" alt="Memory" />
             </motion.div>

             {/* Front Main Image */}
             <motion.div
                className="relative w-56 h-72 md:w-64 md:h-80 bg-white p-3 shadow-2xl rounded-sm transform rotate-0 z-10"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8, type: 'spring' }}
             >
                 <motion.div 
                    className="w-full h-full overflow-hidden relative"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                    <img src="https://picsum.photos/seed/love_hero_new/600/800" alt="Us" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent pointer-events-none" />
                 </motion.div>
                 
                 {/* Tape */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-rose-100/50 backdrop-blur-sm transform rotate-1 shadow-sm" />
             </motion.div>
        </div>

        {/* Cinematic Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <button
            onClick={onStart}
            className="group relative px-10 py-4 overflow-hidden rounded-full bg-slate-900 text-white shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-rose-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-3">
              <span className="font-serif italic text-lg tracking-wider">
                Open Our Book
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* Scrolling Footer Date Line */}
      <div className="absolute bottom-0 w-full overflow-hidden py-4 bg-white/30 backdrop-blur-sm border-t border-white/20">
         <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center mx-8 opacity-50">
                    <span className="font-cinematic text-sm uppercase tracking-[0.3em] text-slate-600">Every Moment With You Is Timeless</span>
                    <Heart size={10} className="ml-8 text-rose-400 fill-rose-400" />
                </div>
            ))}
         </div>
      </div>
    </motion.div>
  );
};

export default Hero;