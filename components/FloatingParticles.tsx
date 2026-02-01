import React from 'react';
import { motion } from 'framer-motion';

const FloatingParticles: React.FC = () => {
  // Reduced count slightly for better mobile performance
  const particles = Array.from({ length: 12 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-white/60 to-rose-200/40 blur-[2px]"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.3 + 0.2,
          }}
          animate={{
            y: [null, Math.random() * -150],
            x: [null, (Math.random() - 0.5) * 80],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 15 + 20, // Slower, smoother
            repeat: Infinity,
            ease: "linear",
            repeatType: "reverse"
          }}
          style={{
            width: Math.random() * 30 + 10 + 'px',
            height: Math.random() * 30 + 10 + 'px',
            willChange: 'transform' // Hardware acceleration hint
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;