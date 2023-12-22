//1. What are you gonna test?
//2. Create test data - the input
//3. Formulate expected output based on that test data
//4. Derive the actual output from the test data
//5. Compare the expected output to the actual output


/**
 * Function adding products price together
 * @param {First item to be added} item 1
 * @param {second item to be added} item2
 * @param {third item to be added} item3
 * @returns The Sum of adding 3 products
 */

//Sum of Two
function SumofTwo(item1, item2, item3){
    return item1 + item2 + item3

}

//Calling Sum of two function
SumofTwo()

test("The cart can calculate products price that have been bought", ()=>{
    //creating test data
    let Itemprice1 = 10.99
    let Itemprice2 = 14
    let Itemprice3 = 22

    //Expected Output
    let expectedOutput = 46.99

    //Derive the actual output
    let actualOutput = SumofTwo(Itemprice1, Itemprice2, Itemprice3)

    //Compare the actual and expected outputs of the answers
    expect(actualOutput).toBe(expectedOutput)
})
