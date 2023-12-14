import React, { useState } from 'react';
import './quizpage.css';

function QuizPage() {
    
  //Using UseState to create questions and answers on Computer parts  
  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [score, setScore] = useState(null);

  const questions = [
    "What is the primary function of a CPU?",
    "Which component stores data temporarily for quick access by the CPU?",
    "What does RAM stand for?",
    "What is the purpose of a graphics card?",
    "Which component is responsible for long-term data storage?",
  ];

  const choices = [
    ["Processing data", "Storing data", "Displaying data", "Inputting data"],
    ["Hard Drive", "RAM", "CPU", "Motherboard"],
    ["Random Access Memory", "Read-Only Memory", "Randomly Assigned Memory", "Real-time Access Memory"],
    ["Handling network connections", "Rendering graphics", "Calculating mathematical operations", "Storing files"],
    ["CPU", "RAM", "Hard Drive", "Motherboard"],
  ];

  // Using a Handle Answer arrow Function
  const handleAnswer = (questionIndex, choiceIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = choiceIndex;
    setAnswers(newAnswers);
  };

  // Using a Calculating Score arrow Function
  const calculateScore = () => {
    const correctAnswers = [0, 1, 0, 1, 2]; // Assuming correct answers for each question
    const userScore = answers.reduce((acc, answer, index) => (answer === correctAnswers[index] ? acc + 1 : acc), 0);
    setScore(userScore);
  };

  return (
    <div className="app">
      {/* Menu bar containing Store Name and Cart */}
      <header className="learning-header">
        <div className="container">
          <div className="store-info">
            <h1 className="store-name">Your Learning Platform</h1>
          </div>
          <div className="cart">
            {/* You can add any relevant learning-related icons or links here */}
          </div>
        </div>
      </header>

      {/*Menu bar containing Home, Laptops, PC, Gaming Monitors, Accessories, Headsets, Gaming Chairs, Mobile Devices */}
      <nav className="main-menu">
        <div className="container">
          <ul>
            <li>Home</li>
            <li>Laptops</li>
            <li>PC</li>
            <li>Gaming Monitors</li>
            <li>Accessories</li>
            <li>Headsets</li>
            <li>Gaming Chairs</li>
            <li>Mobile Devices</li>
          </ul>
        </div>
      </nav>

      {/* Quiz Section */}
      <section className="quiz-section">
        <div className="container">
          <h2>Computer Parts Quiz</h2>
          <div className="quiz-container">
            {questions.map((question, index) => (
              <div key={index} className="question-container">
                <div className="question">{`${index + 1}. ${question}`}</div>
                <div className="choices">
                  {choices[index].map((choice, choiceIndex) => (
                    <button key={choiceIndex} onClick={() => handleAnswer(index, choiceIndex)}>
                      {choice}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="score-button" onClick={calculateScore}>
            Calculate Score
          </button>
          {score !== null && (
            <div className="score-message">{`You got this ${score}/5 on this quiz!`}</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default QuizPage;
