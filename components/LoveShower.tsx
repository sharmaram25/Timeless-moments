import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  scale: number;
  rotation: number;
  color: string;
}

const LoveShower: React.FC = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const addHearts = () => {
    const count = 5 + Math.random() * 5; // 5 to 10 hearts
    const newHearts: FloatingHeart[] = [];
    
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: Date.now() + i,
        x: (Math.random() - 0.5) * 100, // Random spread
        scale: 0.5 + Math.random() * 1, // Random size
        rotation: (Math.random() - 0.5) * 60,
        color: Math.random() > 0.5 ? 'text-rose-500' : 'text-pink-400',
      });
    }

    setHearts((prev) => [...prev, ...newHearts]);

    // Cleanup
    setTimeout(() => {
      setHearts((prev) => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, y: 0, x: 0, scale: 0 }}
            animate={{ 
              opacity: 0, 
              y: -200 - Math.random() * 100, 
              x: heart.x, 
              scale: heart.scale 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`absolute bottom-full left-1/2 ${heart.color} pointer-events-none`}
            style={{ rotate: heart.rotation }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={addHearts}
        className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-lg shadow-rose-500/30 text-rose-500 border border-rose-100 hover:bg-rose-50 transition-colors"
      >
        <Heart size={28} fill="currentColor" className="animate-pulse" />
      </motion.button>
    </div>
  );
};

export default LoveShower;