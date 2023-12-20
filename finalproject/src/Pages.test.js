//1. What are you gonna test?
//2. Create test data - the input
//3. Formulate expected output based on that test data
//4. Derive the actual output from the test data
//5. Compare the expected output to the actual output

//Using Try Catch method


import QuizQuestions from "./quizquestions.js"


/**
 * User can select options of answers on the quiz page
 */

//Creating a QuiQuestions function
function TestQuiz(){

    const [selectedAnswers, setSelectedAnswers] = useState(Array(5).fill(null));
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

//Calling the function



//The test
test("User is able to do a quiz on computer questions and get their score", ()=>{
    //creating test data
    QuizQuestions [questions]
    QuizQuestions [choices]

    //Formulate expected output
    let expectedOutput = QuizQuestions(correctAnswers)

    //Derive actual output
    let actualOutput = QuizQuestions(score)

    //Compare the actual and expected outputs of the answers
    expect(actualOutput).toBe(expectedOutput)
})

test("The cart can calculate products price that have been bought")
/**
 * Function adding products price together
 * @param {First item to be added} item 1
 * @param {second item to be added} num1
 * @returns The Sum of the 2 items
 */