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
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Cu"],
    correctAnswer: 0,
    explanation: "Au is the chemical symbol for gold, derived from the Latin word 'aurum'."
  },
  {
    id: 2,
    question: "Which element has the atomic number 1?",
    options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
    correctAnswer: 1,
    explanation: "Hydrogen has atomic number 1, meaning it has 1 proton in its nucleus."
  },
  {
    id: 3,
    question: "What is the most abundant element in the Earth's crust?",
    options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
    correctAnswer: 1,
    explanation: "Oxygen is the most abundant element in the Earth's crust, making up about 46% by mass."
  },
  {
    id: 4,
    question: "Which element is a noble gas?",
    options: ["Nitrogen", "Oxygen", "Neon", "Chlorine"],
    correctAnswer: 2,
    explanation: "Neon is a noble gas, characterized by its stable electron configuration and low reactivity."
  },
  {
    id: 5,
    question: "What is the atomic number of carbon?",
    options: ["4", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "Carbon has atomic number 6, meaning it has 6 protons in its nucleus."
  },
  {
    id: 6,
    question: "Which element is essential for life and makes up about 65% of the human body?",
    options: ["Carbon", "Oxygen", "Hydrogen", "Nitrogen"],
    correctAnswer: 1,
    explanation: "Oxygen is essential for life and makes up about 65% of the human body by mass."
  },
  {
    id: 7,
    question: "What is the chemical symbol for iron?",
    options: ["Ir", "Fe", "In", "Fr"],
    correctAnswer: 1,
    explanation: "Fe is the chemical symbol for iron, derived from the Latin word 'ferrum'."
  },
  {
    id: 8,
    question: "Which element is a halogen?",
    options: ["Neon", "Argon", "Chlorine", "Helium"],
    correctAnswer: 2,
    explanation: "Chlorine is a halogen, a group of highly reactive non-metal elements."
  }
];

export default function ElementsQuiz() {
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
          <p className="text-xl text-gray-600">Elements Quiz</p>
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
              <p className="text-green-800 font-semibold">🎉 Excellent! You have a strong understanding of elements!</p>
            </div>
          ) : score.percentage >= 60 ? (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-semibold">👍 Good work! Review the concepts to improve your understanding.</p>
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-800 font-semibold">📚 Keep studying! Review the elements concepts and try again.</p>
            </div>
          )}

          <div className="space-y-4">
            <Link 
              href="/elements"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block mr-4"
            >
              Review Concepts
            </Link>
            <Link 
              href="/diagrams"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Next Section: Diagrams
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
          <h1 className="text-4xl font-bold text-gray-800">🧪 Elements Quiz</h1>
          <div className="flex items-center space-x-2 bg-yellow-100 px-4 py-2 rounded-full">
            <span className="text-2xl">💎</span>
            <span className="font-bold text-yellow-800">{gems}</span>
          </div>
        </div>
        <p className="text-xl text-gray-600">Test your knowledge of chemical elements</p>
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
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
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
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-semibold mb-2">Explanation:</p>
            <p className="text-green-700">{currentQ.explanation}</p>
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
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'See Results' : 'Next →'}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Concepts */}
      <div className="text-center">
        <Link 
          href="/elements"
          className="text-green-600 hover:text-green-800 font-semibold"
        >
          ← Back to Elements Concepts
        </Link>
      </div>
    </div>
  );
} 