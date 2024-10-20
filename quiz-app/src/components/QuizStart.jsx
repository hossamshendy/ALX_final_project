// src/components/QuizStart.jsx
import React, { useState } from "react";
import "./QuizStart.css"; // استيراد ملف CSS

const QuizStart = ({ onStart }) => {
  const [name, setName] = useState("");

  const handleStartClick = () => {
    if (name) {
      onStart(name); // تمرير الاسم عند البدء
    }
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz Master</h1>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="quiz-input"
      />
      <button onClick={handleStartClick} className="start-button">
        Start
      </button>
    </div>
  );
};

export default QuizStart;
