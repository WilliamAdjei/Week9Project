import { useState } from "react";

function QuizQuestions(){

    const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
    const [score, setScore] = useState(null);

    
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


      const handleAnswer = (questionIndex, choiceIndex) => {
        if (selectedAnswers[questionIndex] === null) {
          const newSelectedAnswers = [...selectedAnswers];
          newSelectedAnswers[questionIndex] = choiceIndex;
          setSelectedAnswers(newSelectedAnswers);
        }
      };

      const calculateScore = () => {
        const correctAnswers = [0, 1, 0, 1, 2]; // Assuming correct answers for each question
        const userScore = selectedAnswers.reduce((acc, answer, index) => 
        (answer === correctAnswers[index] ? acc + 1 : acc), 0);
        setScore(userScore);
      };


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
    }
      
      
export default QuizQuestions