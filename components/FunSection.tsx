import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { APP_CONFIG, DATE_IDEAS } from '../constants';
import { Clock, Ticket, Sparkles, ArrowRight } from 'lucide-react';

interface FunSectionProps {
    onFinish: () => void;
}

const FunSection: React.FC<FunSectionProps> = ({ onFinish }) => {
  // Timer State
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Date Generator State
  const [currentIdea, setCurrentIdea] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const startDate = new Date(APP_CONFIG.startDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;

      setTimeTogether({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateDate = () => {
    setIsSpinning(true);
    setCurrentIdea(null);
    
    // Simulate thinking/shuffling
    setTimeout(() => {
      const randomIdea = DATE_IDEAS[Math.floor(Math.random() * DATE_IDEAS.length)];
      setCurrentIdea(randomIdea);
      setIsSpinning(false);
    }, 800);
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center py-24 px-4 bg-white/50 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* ROW 1: Timer & Date Planner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Love Timer */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-rose-100 p-4 rounded-full mb-6 text-rose-600">
              <Clock size={32} />
            </div>
            <h3 className="font-script text-4xl text-rose-900 mb-2">Counting Every Second</h3>
            <p className="text-slate-500 font-sans mb-8">Time flies when I'm with you</p>
            
            <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-md">
              {[
                { label: 'Days', value: timeTogether.days },
                { label: 'Hours', value: timeTogether.hours },
                { label: 'Mins', value: timeTogether.minutes },
                { label: 'Secs', value: timeTogether.seconds },
              ].map((item, i) => (
                <div key={i} className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-rose-100">
                  <span className="block text-xl sm:text-3xl font-bold text-rose-600 font-sans">
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Date Randomizer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-purple-100 p-4 rounded-full mb-6 text-purple-600">
              <Ticket size={32} />
            </div>
            <h3 className="font-script text-4xl text-purple-900 mb-2">What's Next?</h3>
            <p className="text-slate-500 font-sans mb-8">Let's plan our next adventure</p>

            <div className="relative w-full max-w-sm h-48 perspective-1000">
              <motion.div
                className={`w-full h-full bg-gradient-to-br from-purple-500 to-rose-500 rounded-2xl shadow-xl flex items-center justify-center p-6 text-white text-center cursor-pointer relative overflow-hidden`}
                animate={{ rotateX: isSpinning ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                onClick={generateDate}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                
                {!currentIdea && !isSpinning && (
                  <div className="flex flex-col items-center gap-2">
                    <Sparkles size={24} className="opacity-80" />
                    <span className="font-handwriting text-2xl font-bold">Tap to Reveal Date</span>
                  </div>
                )}

                {isSpinning && (
                  <span className="font-sans text-sm tracking-widest uppercase animate-pulse">
                    Choosing...
                  </span>
                )}

                {currentIdea && !isSpinning && (
                  <motion.p 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-handwriting text-3xl font-bold leading-relaxed"
                  >
                    {currentIdea}
                  </motion.p>
                )}
              </motion.div>
            </div>
            
            <button 
              onClick={generateDate}
              className="mt-6 text-sm text-purple-600 font-sans font-medium hover:text-purple-800 transition-colors"
            >
              Spin Again
            </button>
          </motion.div>
        </div>

        {/* Navigation Button */}
        <motion.div 
            className="flex justify-center mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
             <button
              onClick={onFinish}
              className="group flex items-center gap-3 px-8 py-3 bg-white border border-rose-200 text-rose-500 rounded-full shadow-sm hover:shadow-md hover:bg-rose-50 transition-all duration-300"
            >
              <span className="font-sans font-bold tracking-wide">Behind The Scenes</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </motion.div>

      </div>
    </div>
  );
};

export default FunSection;