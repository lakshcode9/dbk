import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, RefreshCw } from 'lucide-react';

interface Card {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const TravelMemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = [
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80',
  ];

  const initializeGame = () => {
    const duplicatedImages = [...images, ...images];
    const shuffledCards = duplicatedImages
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    setIsWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isMatched || flippedCards.includes(id)) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstCard, secondCard] = newFlippedCards;
      
      if (cards[firstCard].image === cards[secondCard].image) {
        newCards[firstCard].isMatched = true;
        newCards[secondCard].isMatched = true;
        setCards(newCards);
        setMatches(matches + 1);
        setFlippedCards([]);
        
        if (matches + 1 === images.length) {
          setIsWon(true);
        }
      } else {
        setTimeout(() => {
          newCards[firstCard].isFlipped = false;
          newCards[secondCard].isFlipped = false;
          setCards(newCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-8">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white">Travel Memory Game</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Match the travel destinations!</p>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <div className="text-blue-600 dark:text-blue-400 text-sm sm:text-base">
            <span className="font-bold">Moves:</span> {moves}
          </div>
          <div className="text-green-600 dark:text-green-400 text-sm sm:text-base">
            <span className="font-bold">Matches:</span> {matches}
          </div>
          <button
            onClick={initializeGame}
            className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm sm:text-base"
          >
            <RefreshCw className="w-4 h-4 mr-1" /> Reset
          </button>
        </div>
      </div>

      {isWon && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center mb-6 sm:mb-8 p-4 bg-green-100 dark:bg-green-900 rounded-lg"
        >
          <Trophy className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-green-700 dark:text-green-300 font-bold text-sm sm:text-base">
            Congratulations! You won in {moves} moves!
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={isMobile ? { scale: 0.95 } : {}}
            className="aspect-square rounded-lg cursor-pointer overflow-hidden"
            onClick={() => handleCardClick(card.id)}
          >
            <div className="relative w-full h-full transition-transform duration-500" style={{
              transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
              transformStyle: 'preserve-3d'
            }}>
              <div
                className={`absolute w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 rounded-lg ${
                  card.isFlipped ? 'backface-hidden' : ''
                }`}
                style={{
                  backfaceVisibility: 'hidden'
                }}
              />
              <div
                className="absolute w-full h-full rounded-lg"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <img
                  src={card.image}
                  alt="Travel destination"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TravelMemoryGame;