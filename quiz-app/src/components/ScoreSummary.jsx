// src/components/ScoreSummary.jsx
import React from "react";
import "./ResultsPage.css"; // استيراد ملف CSS

const ScoreSummary = ({ score, totalQuestions }) => {
  return (
    <div className="results-summary flex flex-col items-center justify-center p-6 rounded-lg shadow-md">
      <h1 className="results-title text-2xl font-bold mb-4">Quiz Completed!</h1>
      <p className="results-score text-lg">
        Your Score: {score} out of {totalQuestions}
      </p>
      <button
        className="restart-button mt-4 px-4 py-2"
        onClick={() => window.location.reload()}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreSummary;
