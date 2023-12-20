//1. What are you gonna test?
//2. Create test data - the input
//3. Formulate expected output based on that test data
//4. Derive the actual output from the test data
//5. Compare the expected output to the actual output


/**
 * User can select options of answers on the quiz page
 */

function QuizQuestions(question, OptionsOfanswer){
 question = "What is the primary function of a CPU?"
 OptionsOfanswer = "Processing data", "storing data", "displaying data", 
 "inputting data", "carry out a set of instructions for the computer"

}

QuizQuestions()


test("User can select options of answers on the quiz page", ()=>{
    //creating test data
    let question = "What is the primary function of a CPU?"
    let answers = "carry out a set of instructions for the computer"

    //Formulate expected output
    let expectedOutput = answers

    //Derive actual output
    let actualOutput = QuizQuestions(question, answers)

    //Compare the actual and expected outputs
    expect(actualOutput).toBe(expectedOutput)
})
