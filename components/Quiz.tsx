import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RELATIONSHIP_TRIVIA } from '../constants';
import { Check, X, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleOptionClick = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(optionIndex);
    const correct = optionIndex === RELATIONSHIP_TRIVIA[currentQuestion].correctIndex;
    setIsCorrect(correct);

    if (correct) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fb7185', '#f472b6', '#e879f9']
      });
    }

    // Auto advance after delay
    setTimeout(() => {
      if (currentQuestion < RELATIONSHIP_TRIVIA.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setCompleted(true);
      }
    }, 2500);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setCompleted(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {!completed ? (
          <motion.div
            key="quiz-card"
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-rose-100 relative overflow-hidden"
          >
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
              <motion.div 
                className="h-full bg-rose-500"
                animate={{ width: `${((currentQuestion + 1) / RELATIONSHIP_TRIVIA.length) * 100}%` }}
              />
            </div>

            <div className="mb-6 mt-2">
              <span className="text-xs font-bold tracking-widest text-rose-400 uppercase">
                Question {currentQuestion + 1} of {RELATIONSHIP_TRIVIA.length}
              </span>
              <h3 className="text-xl md:text-2xl font-serif text-slate-800 mt-2 font-medium leading-snug">
                {RELATIONSHIP_TRIVIA[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-3">
              {RELATIONSHIP_TRIVIA[currentQuestion].options.map((option, index) => {
                const isSelected = selectedOption === index;
                const isAnswerCorrect = index === RELATIONSHIP_TRIVIA[currentQuestion].correctIndex;
                
                let buttonStyle = "border-slate-200 text-slate-600 hover:border-rose-300 hover:bg-rose-50";
                if (selectedOption !== null) {
                  if (isSelected && isCorrect) buttonStyle = "bg-green-100 border-green-500 text-green-700";
                  else if (isSelected && !isCorrect) buttonStyle = "bg-red-100 border-red-500 text-red-700";
                  else if (isAnswerCorrect && selectedOption !== null) buttonStyle = "bg-green-50 border-green-300 text-green-700 opacity-60";
                  else buttonStyle = "opacity-40 border-slate-100";
                }

                return (
                  <motion.button
                    key={index}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOptionClick(index)}
                    disabled={selectedOption !== null}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between group ${buttonStyle}`}
                  >
                    <span className="font-sans font-medium">{option}</span>
                    {isSelected && isCorrect && <Check size={18} />}
                    {isSelected && !isCorrect && <X size={18} />}
                  </motion.button>
                );
              })}
            </div>

            {/* Feedback Message */}
            <AnimatePresence>
              {isCorrect && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-center text-green-600 font-handwriting text-xl"
                >
                  {RELATIONSHIP_TRIVIA[currentQuestion].successMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-br from-rose-100 to-purple-100 rounded-3xl p-8 text-center shadow-xl border border-white"
          >
            <div className="bg-white p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center mb-4 shadow-sm text-yellow-500">
              <Trophy size={40} />
            </div>
            <h3 className="text-3xl font-script text-rose-900 mb-2">You know us best!</h3>
            <p className="text-slate-600 mb-6">You're officially an expert on our love story.</p>
            <button 
              onClick={restartQuiz}
              className="px-6 py-2 bg-white text-rose-500 rounded-full font-bold shadow-sm hover:shadow-md transition-all"
            >
              Play Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;