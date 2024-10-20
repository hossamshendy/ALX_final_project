// src/App.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import QuizStart from "./components/QuizStart";
import QuestionCard from "./components/QuestionCard";
import ScoreSummary from "./components/ScoreSummary";

const App = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api.php?amount=10&type=multiple"
        );
        setQuizData(response.data.results);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    };
    fetchQuizData();
  }, []);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleSelectAnswer = (selectedAnswer) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const renderQuestionCard = () => {
    if (currentQuestionIndex < quizData.length) {
      const currentQuestion = quizData[currentQuestionIndex];
      const options = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer
      ].sort(() => Math.random() - 0.5); // Shuffle options

      return (
        <QuestionCard
          question={currentQuestion.question}
          options={options}
          onSelect={handleSelectAnswer}
          onNext={handleNextQuestion}
        />
      );
    } else {
      return <ScoreSummary score={score} totalQuestions={quizData.length} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {quizStarted ? (
        renderQuestionCard()
      ) : (
        <QuizStart onStart={handleStartQuiz} />
      )}
    </div>
  );
};

export default App;
