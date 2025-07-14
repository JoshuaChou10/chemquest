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
    question: "What type of bond forms when atoms share electrons?",
    options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 1,
    explanation: "Covalent bonds form when atoms share electrons to achieve a stable electron configuration."
  },
  {
    id: 2,
    question: "Which elements typically form covalent bonds?",
    options: ["Metals and nonmetals", "Two nonmetals", "Two metals", "Metals only"],
    correctAnswer: 1,
    explanation: "Covalent bonds typically form between nonmetals when they share electrons."
  },
  {
    id: 3,
    question: "How many electrons does hydrogen need to be stable?",
    options: ["1", "2", "4", "8"],
    correctAnswer: 1,
    explanation: "Hydrogen needs 2 electrons to be stable (following the duet rule)."
  },
  {
    id: 4,
    question: "What is a single covalent bond?",
    options: ["Sharing of 1 electron", "Sharing of 2 electrons", "Sharing of 4 electrons", "Sharing of 8 electrons"],
    correctAnswer: 1,
    explanation: "A single covalent bond involves the sharing of 2 electrons (1 from each atom)."
  },
  {
    id: 5,
    question: "What is the molecular formula for water?",
    options: ["H₂O", "HO₂", "H₂O₂", "H₃O"],
    correctAnswer: 0,
    explanation: "Water has the molecular formula H₂O, with two hydrogen atoms bonded to one oxygen atom."
  },
  {
    id: 6,
    question: "Which molecule has a double covalent bond?",
    options: ["H₂", "O₂", "N₂", "CO₂"],
    correctAnswer: 1,
    explanation: "Oxygen gas (O₂) has a double covalent bond, with two pairs of electrons shared between the oxygen atoms."
  },
  {
    id: 7,
    question: "What is the shape of a water molecule?",
    options: ["Linear", "Bent", "Tetrahedral", "Trigonal planar"],
    correctAnswer: 1,
    explanation: "Water has a bent molecular geometry due to the lone pairs on the oxygen atom."
  },
  {
    id: 8,
    question: "Why do covalent compounds have lower melting points than ionic compounds?",
    options: ["They are gases", "Weaker intermolecular forces", "They contain metals", "They are larger molecules"],
    correctAnswer: 1,
    explanation: "Covalent compounds have lower melting points because they are held together by weaker intermolecular forces."
  }
];

export default function CovalentBondsQuiz() {
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
          <p className="text-xl text-gray-600">Covalent Bonds Quiz</p>
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
              <p className="text-green-800 font-semibold">🎉 Excellent! You have a strong understanding of covalent bonds!</p>
            </div>
          ) : score.percentage >= 60 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-semibold">👍 Good work! Review the concepts to improve your understanding.</p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-semibold">📚 Keep studying! Review the covalent bonds concepts and try again.</p>
            </div>
          )}

          <div className="space-y-4">
            <Link 
              href="/covalent-bonds"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block mr-4"
            >
              Review Concepts
            </Link>
            <Link 
              href="/equations"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Next Section: Equations
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
          <h1 className="text-4xl font-bold text-gray-800">🔗 Covalent Bonds Quiz</h1>
          <div className="flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <span className="text-2xl">💎</span>
            <span className="font-bold text-yellow-800">{gems}</span>
          </div>
        </div>
        <p className="text-xl text-gray-600">Test your knowledge of covalent bonding</p>
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
            className="bg-teal-600 h-2 rounded-full transition-all duration-300"
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-4">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={selectedAnswers[currentQuestion] !== -1}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
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
          <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-teal-800 font-semibold mb-2">Explanation:</p>
            <p className="text-teal-700">{currentQ.explanation}</p>
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
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next →'}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Concepts */}
      <div className="text-center">
        <Link 
          href="/covalent-bonds"
          className="text-teal-600 hover:text-teal-800 font-semibold"
        >
          ← Back to Covalent Bonds Concepts
        </Link>
      </div>
    </div>
  );
} 