import React, { useState } from 'react';
import './quizpage.css';

function QuizPage() {

  /**
   * Quiz Section
   * For the quiz section I used map functions, concatenation, on click
   * I used the map function to iterate through the question and index arrays and also for the choices array
   * I used the onclick for the CalculateScore button and the handle answer function
   * I used these methods it helps easily to write a method on how many answers the user gets right 
   * based on the choices they made in the choices section.
   */

  //Using UseState to create questions and answers on Computer parts
  /**
   * Using UseSate to track the selected answers and the score the person gets
   */
  const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
  const [score, setScore] = useState(null);

  //Question list Object
  /**
   * Using An array to create a list of quiz questions about computers
   */
  const questions = [
    "What is the primary function of a CPU?",
    "Which component stores data temporarily for quick access by the CPU?",
    "What does RAM stand for?",
    "What is the purpose of a graphics card?",
    "Which component is responsible for long-term data storage?",
  ];

  //Choices Array
  /**
   * Creating an array of the list of choices the user can pick from for the questions.
   */
  const choices = [
    ["Processing data", "Storing data", "Displaying data", "Inputting data"],
    ["Hard Drive", "RAM", "CPU", "Motherboard"],
    ["Random Access Memory", "Read-Only Memory", "Randomly Assigned Memory", "Real-time Access Memory"],
    ["Handling network connections", "Rendering graphics", "Calculating mathematical operations", "Storing files"],
    ["CPU", "RAM", "Hard Drive", "Motherboard"],
  ];

  //If statement
  /**
   * 
   * @param {Using an if statement for the questions and answers} questionIndex 
   * @param {*} choiceIndex 
   */
   
  const handleAnswer = (questionIndex, choiceIndex) => {
    if (selectedAnswers[questionIndex] === null) {
      const newSelectedAnswers = [...selectedAnswers];
      newSelectedAnswers[questionIndex] = choiceIndex;
      setSelectedAnswers(newSelectedAnswers);
    }
  };

  // Using a calculateScore arrow Function
  /**
   * Method used to calculate the score the user gets after choosing therr answers.
   * This method is assuming the process that happens when there is a correct answer.
   * I used onclick for the
   */
  const calculateScore = () => {
    const correctAnswers = [0, 1, 0, 1, 2]; // Assuming correct answers for each question
    const userScore = selectedAnswers.reduce((acc, answer, index) => 
    (answer === correctAnswers[index] ? acc + 1 : acc), 0);
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

      {/* Menu bar containing Home, Laptops, PC, Gaming Monitors, 
      Accessories, Headsets, Gaming Chairs, Mobile Devices */}
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
                    <button
                      key={choiceIndex}
                      className={selectedAnswers[index] === choiceIndex ? 'selected' : ''}
                      onClick={() => handleAnswer(index, choiceIndex)}
                    >
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
