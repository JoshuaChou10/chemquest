'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is a chemical reaction?",
    options: ["A physical change", "A process where substances are transformed", "A change in temperature", "A change in state"],
    correctAnswer: 1,
    explanation: "A chemical reaction is a process where substances (reactants) are transformed into different substances (products) through the breaking and forming of chemical bonds."
  },
  {
    id: 2,
    question: "Which of the following is evidence of a chemical reaction?",
    options: ["Melting ice", "Color change", "Boiling water", "Dissolving salt"],
    correctAnswer: 1,
    explanation: "Color change is evidence of a chemical reaction, while melting ice, boiling water, and dissolving salt are physical changes."
  },
  {
    id: 3,
    question: "What type of reaction releases energy to the surroundings?",
    options: ["Endothermic", "Exothermic", "Catalytic", "Reversible"],
    correctAnswer: 1,
    explanation: "Exothermic reactions release energy to the surroundings, making the reaction mixture feel hot or warm."
  },
  {
    id: 4,
    question: "What type of reaction absorbs energy from the surroundings?",
    options: ["Exothermic", "Endothermic", "Catalytic", "Irreversible"],
    correctAnswer: 1,
    explanation: "Endothermic reactions absorb energy from the surroundings, making the reaction mixture feel cold or cool."
  },
  {
    id: 5,
    question: "Which factor increases reaction rate?",
    options: ["Lower temperature", "Higher temperature", "Lower concentration", "Smaller surface area"],
    correctAnswer: 1,
    explanation: "Higher temperature increases reaction rate because it provides more energy for particles to overcome activation energy."
  },
  {
    id: 6,
    question: "What is a catalyst?",
    options: ["A reactant", "A product", "A substance that speeds up reactions", "A substance that slows down reactions"],
    correctAnswer: 2,
    explanation: "A catalyst is a substance that speeds up chemical reactions without being consumed in the process."
  },
  {
    id: 7,
    question: "Which type of reaction involves a substance reacting with oxygen?",
    options: ["Synthesis", "Combustion", "Decomposition", "Single replacement"],
    correctAnswer: 1,
    explanation: "Combustion reactions involve a substance reacting with oxygen to produce heat and light."
  },
  {
    id: 8,
    question: "What is an acid-base reaction also called?",
    options: ["Neutralization", "Oxidation", "Reduction", "Synthesis"],
    correctAnswer: 0,
    explanation: "Acid-base reactions are also called neutralization reactions because they neutralize the acidic and basic properties."
  },
  {
    id: 9,
    question: "What happens in a redox reaction?",
    options: ["Atoms are rearranged", "Electrons are transferred", "Protons are transferred", "Neutrons are transferred"],
    correctAnswer: 1,
    explanation: "Redox (oxidation-reduction) reactions involve the transfer of electrons between substances."
  },
  {
    id: 10,
    question: "What is a double displacement reaction?",
    options: ["Two compounds exchange ions", "One element replaces another", "Two substances combine", "One compound breaks down"],
    correctAnswer: 0,
    explanation: "Double displacement reactions occur when two compounds exchange ions to form two new compounds."
  },
  {
    id: 11,
    question: "What is a single displacement reaction?",
    options: ["Two compounds exchange ions", "One element replaces another in a compound", "Two substances combine", "One compound breaks down"],
    correctAnswer: 1,
    explanation: "Single displacement reactions occur when one element replaces another element in a compound."
  },
  {
    id: 12,
    question: "What is a synthesis reaction?",
    options: ["Two compounds exchange ions", "One element replaces another", "Two or more substances combine", "One compound breaks down"],
    correctAnswer: 2,
    explanation: "Synthesis reactions occur when two or more simple substances combine to form a more complex compound."
  },
  {
    id: 13,
    question: "What is a decomposition reaction?",
    options: ["Two compounds exchange ions", "One element replaces another", "Two substances combine", "A complex compound breaks down"],
    correctAnswer: 3,
    explanation: "Decomposition reactions occur when a complex compound breaks down into simpler substances."
  },
  {
    id: 14,
    question: "What is a reversible reaction?",
    options: ["A reaction that can go both directions", "A reaction that only goes forward", "A reaction that produces heat", "A reaction that requires a catalyst"],
    correctAnswer: 0,
    explanation: "A reversible reaction can proceed in both the forward and reverse directions, often reaching a state of equilibrium."
  }
];

export default function ReactionsQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gems, setGems] = useState(0);
  const [earnedGems, setEarnedGems] = useState<number[]>(new Array(questions.length).fill(0));
  const [showGemAnimation, setShowGemAnimation] = useState(false);

  // Load gems from localStorage on component mount
  useEffect(() => {
    const savedGems = localStorage.getItem('chemquest-gems');
    if (savedGems) {
      setGems(parseInt(savedGems));
    }
  }, []);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    // Check if answer is correct and award gem
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      const newEarnedGems = [...earnedGems];
      if (newEarnedGems[currentQuestion] === 0) {
        newEarnedGems[currentQuestion] = 1;
        setEarnedGems(newEarnedGems);
        
        // Award gem and save to localStorage
        const newGems = gems + 1;
        setGems(newGems);
        localStorage.setItem('chemquest-gems', newGems.toString());
        
        // Dispatch custom event to update GemCounter in navigation
        window.dispatchEvent(new CustomEvent('gemUpdate', { detail: { gems: newGems } }));
        
        // Show gem animation
        setShowGemAnimation(true);
        setTimeout(() => setShowGemAnimation(false), 1000);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const isAnswerCorrect = (questionIndex: number) => {
    return selectedAnswers[questionIndex] === questions[questionIndex].correctAnswer;
  };

  const currentQ = questions[currentQuestion];

  if (showResults) {
    const score = calculateScore();
    const totalGemsEarned = earnedGems.reduce((sum, gem) => sum + gem, 0);
    
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Quiz Results</h1>
          <p className="text-xl text-gray-600">Reactions Quiz</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className={`text-6xl font-bold ${getScoreColor(score.percentage)} mb-4`}>
            {score.percentage}%
          </div>
          <p className="text-xl text-gray-700 mb-6">
            You got {score.correct} out of {score.total} questions correct!
          </p>
          
          {/* Gems earned display */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">💎</span>
              <p className="text-yellow-800 font-semibold">
                You earned {totalGemsEarned} gems in this quiz!
              </p>
            </div>
            <p className="text-yellow-700 text-sm mt-2">
              Total gems: {gems}
            </p>
          </div>
          
          {score.percentage >= 80 ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">🎉 Excellent! You have a strong understanding of chemical reactions!</p>
            </div>
          ) : score.percentage >= 60 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-semibold">👍 Good work! Review the reaction concepts to improve your understanding.</p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-semibold">📚 Keep studying! Review the reactions concepts and try again.</p>
            </div>
          )}

          <div className="space-y-4">
            <Link 
              href="/reactions"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block mr-4"
            >
              Review Concepts
            </Link>
            <Link 
              href="/"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header with Gem Counter */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-4">
          <h1 className="text-4xl font-bold text-gray-800">🔥 Reactions Quiz</h1>
          <div className="flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <span className="text-2xl">💎</span>
            <span className="font-bold text-yellow-800">{gems}</span>
          </div>
        </div>
        <p className="text-xl text-gray-600">Test your knowledge of chemical reactions</p>
      </div>

      {/* Gem Animation */}
      {showGemAnimation && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="text-6xl animate-bounce">💎</div>
          <div className="text-center text-green-600 font-bold mt-2">+1 Gem!</div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700 font-semibold">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-gray-500">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-orange-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-300 ${
        selectedAnswers[currentQuestion] !== -1 && isAnswerCorrect(currentQuestion) 
          ? 'border-4 border-green-300 bg-green-50' 
          : ''
      }`}>
        <h2 className="text-2xl font-bold text-black mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswers[currentQuestion] !== -1}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all text-gray-600 duration-200 ${
                selectedAnswers[currentQuestion] === index
                  ? index === questions[currentQuestion].correctAnswer
                    ? 'border-green-500 bg-green-100 text-green-800'
                    : 'border-red-500 bg-red-100 text-red-800'
                  : selectedAnswers[currentQuestion] !== -1 && index === questions[currentQuestion].correctAnswer
                    ? 'border-green-500 bg-green-100 text-green-800'
                    : 'border-gray-200 hover:border-gray-300'
              } ${selectedAnswers[currentQuestion] !== -1 ? 'cursor-default' : 'hover:border-gray-300'}`}
            >
              <span className="font-semibold">
                {String.fromCharCode(65 + index)}. {option}
              </span>
              {selectedAnswers[currentQuestion] === index && index === questions[currentQuestion].correctAnswer && (
                <span className="ml-2 text-green-600">💎</span>
              )}
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-orange-800 font-semibold mb-2">Explanation:</p>
            <p className="text-orange-700">{currentQ.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>

          <div className="space-x-4">
            {selectedAnswers[currentQuestion] !== -1 && (
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                {showExplanation ? 'Hide' : 'Show'} Explanation
              </button>
            )}
            
            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === -1}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next →'}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Concepts */}
      <div className="text-center">
        <Link 
          href="/reactions"
          className="text-orange-600 hover:text-orange-800 font-semibold"
        >
          ← Back to Reactions Concepts
        </Link>
      </div>
    </div>
  );
} 