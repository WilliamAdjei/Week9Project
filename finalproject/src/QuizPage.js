import React from "react";

function QuizPage(){

  const [answers, setAnswers] = useState(Array(5).fill(null));
  const [score, setScore] = useState(null);


  const questions = [
    "What is the primary function of a CPU?",
    "Which component stores data temporarily for quick access by the CPU?",
    "What does RAM stand for?",
    "What is the purpose of a graphics card?",
    "Which component is responsible for long-term data storage?",
  ];

    return(
        <div></div>
    )

}

export default QuizPage