/*
First Factorial

Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. 
For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/

function FirstFactorial(num) {
    var result = 1
    if (num == 1) return 1

    for (let i = num; i > 0; i--) {
        result *= i
    }

    return result;

}

// keep this function call here 
console.log(FirstFactorial(readline()));