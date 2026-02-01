import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Memory, PageState } from './types';
import { MEMORIES } from './constants';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PhotoModal from './components/PhotoModal';
import LoveNotes from './components/LoveNotes';
import Ending from './components/Ending';
import FloatingParticles from './components/FloatingParticles';
import FunSection from './components/FunSection';
import LoveShower from './components/LoveShower';
import FunnyGallery from './components/FunnyGallery';
import CandidGallery from './components/CandidGallery';

const App: React.FC = () => {
  const [page, setPage] = useState<PageState>(PageState.HERO);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleNextMemory = () => {
    if (!selectedMemory) return;
    const currentIndex = MEMORIES.findIndex(m => m.id === selectedMemory.id);
    const nextIndex = (currentIndex + 1) % MEMORIES.length;
    setSelectedMemory(MEMORIES[nextIndex]);
  };

  const handlePrevMemory = () => {
    if (!selectedMemory) return;
    const currentIndex = MEMORIES.findIndex(m => m.id === selectedMemory.id);
    const prevIndex = (currentIndex - 1 + MEMORIES.length) % MEMORIES.length;
    setSelectedMemory(MEMORIES[prevIndex]);
  };

  return (
    <div className="relative min-h-screen bg-animated-mesh font-sans text-slate-800 selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden">
      
      {/* Global Interactive Elements */}
      <LoveShower />
      
      {/* Ambient Background - Persistent across all pages except Ending */}
      {page !== PageState.ENDING && <FloatingParticles />}

      <AnimatePresence mode="wait">
        {page === PageState.HERO && (
          <Hero key="hero" onStart={() => setPage(PageState.GALLERY)} />
        )}

        {page === PageState.GALLERY && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <Gallery 
              onMemoryClick={setSelectedMemory} 
              onFinish={() => setPage(PageState.CANDIDS)} 
            />
          </motion.div>
        )}

        {page === PageState.CANDIDS && (
          <motion.div
            key="candids"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <CandidGallery onFinish={() => setPage(PageState.FUN_SECTION)} />
          </motion.div>
        )}

        {page === PageState.FUN_SECTION && (
          <motion.div
             key="fun-section"
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0, y: -50 }}
             transition={{ duration: 0.8 }}
          >
             <FunSection onFinish={() => setPage(PageState.FUNNY_GALLERY)} />
          </motion.div>
        )}

        {page === PageState.FUNNY_GALLERY && (
          <motion.div
            key="funny"
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <FunnyGallery onFinish={() => setPage(PageState.NOTES)} />
          </motion.div>
        )}

        {page === PageState.NOTES && (
          <motion.div
            key="notes"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          >
            <LoveNotes onFinish={() => setPage(PageState.ENDING)} />
          </motion.div>
        )}

        {page === PageState.ENDING && (
          <Ending key="ending" onRestart={() => setPage(PageState.HERO)} />
        )}
      </AnimatePresence>

      <PhotoModal 
        memory={selectedMemory} 
        onClose={() => setSelectedMemory(null)} 
        onNext={handleNextMemory}
        onPrev={handlePrevMemory}
      />
    </div>
  );
};

export default App;