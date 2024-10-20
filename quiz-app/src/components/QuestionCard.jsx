// src/components/QuestionCard.jsx
import React, { useState } from "react";
import "./QuestionCard.css"; // استيراد ملف CSS الخاص بك

const QuestionCard = ({ question, options, onSelect, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option); // Notify parent about the selected option
  };

  const handleNextClick = () => {
    onNext();
    setSelectedOption(null); // Reset selected option for next question
  };

  return (
    <div className="question-card">
      <h2 className="question-title">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="next-button"
        onClick={handleNextClick}
        disabled={!selectedOption} // Disable button if no option is selected
      >
        Next
      </button>
    </div>
  );
};

export default QuestionCard;
