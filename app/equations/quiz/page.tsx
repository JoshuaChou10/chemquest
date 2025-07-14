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
    question: "What does a chemical equation represent?",
    options: ["A mathematical formula", "A chemical reaction", "A physical change", "A temperature change"],
    correctAnswer: 1,
    explanation: "A chemical equation represents a chemical reaction, showing the reactants and products involved."
  },
  {
    id: 2,
    question: "What are the substances on the left side of a chemical equation called?",
    options: ["Products", "Reactants", "Catalysts", "Enzymes"],
    correctAnswer: 1,
    explanation: "Reactants are the starting substances that undergo a chemical reaction, shown on the left side of the equation."
  },
  {
    id: 3,
    question: "What are the substances on the right side of a chemical equation called?",
    options: ["Reactants", "Products", "Catalysts", "Inhibitors"],
    correctAnswer: 1,
    explanation: "Products are the substances formed as a result of the chemical reaction, shown on the right side of the equation."
  },
  {
    id: 4,
    question: "What does the arrow (→) in a chemical equation represent?",
    options: ["Equals", "Yields or produces", "Plus", "Minus"],
    correctAnswer: 1,
    explanation: "The arrow (→) indicates the direction of the reaction, meaning 'yields' or 'produces'."
  },
  {
    id: 5,
    question: "What is the coefficient in a chemical equation?",
    options: ["The number of atoms", "The number of molecules", "The temperature", "The pressure"],
    correctAnswer: 1,
    explanation: "Coefficients are numbers placed in front of chemical formulas to indicate the number of molecules or formula units."
  },
  {
    id: 6,
    question: "What is the law of conservation of mass?",
    options: ["Mass can be created", "Mass can be destroyed", "Mass is conserved in reactions", "Mass changes with temperature"],
    correctAnswer: 2,
    explanation: "The law of conservation of mass states that mass is neither created nor destroyed in a chemical reaction."
  },
  {
    id: 7,
    question: "What does it mean to balance a chemical equation?",
    options: ["Make it equal on both sides", "Ensure the same number of atoms on both sides", "Make it look good", "Add more reactants"],
    correctAnswer: 1,
    explanation: "Balancing a chemical equation ensures that the same number of atoms of each element appears on both sides."
  },
  {
    id: 8,
    question: "What is the balanced equation for the reaction: H₂ + O₂ → H₂O?",
    options: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + 2O₂ → H₂O", "2H₂ + 2O₂ → 2H₂O"],
    correctAnswer: 1,
    explanation: "2H₂ + O₂ → 2H₂O is balanced because there are 4 H atoms and 2 O atoms on both sides."
  }
];

export default function EquationsQuiz() {
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
          <p className="text-xl text-gray-600">Equations Quiz</p>
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
              <p className="text-green-800 font-semibold">🎉 Excellent! You have a strong understanding of chemical equations!</p>
            </div>
          ) : score.percentage >= 60 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-semibold">👍 Good work! Review the concepts to improve your understanding.</p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-semibold">📚 Keep studying! Review the equations concepts and try again.</p>
            </div>
          )}

          <div className="space-y-4">
            <Link 
              href="/equations"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block mr-4"
            >
              Review Concepts
            </Link>
            <Link 
              href="/reactions"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Next Section: Reactions
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
          <h1 className="text-4xl font-bold text-gray-800">⚖️ Equations Quiz</h1>
          <div className="flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <span className="text-2xl">💎</span>
            <span className="font-bold text-yellow-800">{gems}</span>
          </div>
        </div>
        <p className="text-xl text-gray-600">Test your knowledge of chemical equations</p>
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
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
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
          <div className="mt-6 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
            <p className="text-indigo-800 font-semibold mb-2">Explanation:</p>
            <p className="text-indigo-700">{currentQ.explanation}</p>
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
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next →'}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Concepts */}
      <div className="text-center">
        <Link 
          href="/equations"
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          ← Back to Equations Concepts
        </Link>
      </div>
    </div>
  );
} 