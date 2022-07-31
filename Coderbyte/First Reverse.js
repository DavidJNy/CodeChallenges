/*
First Reverse

Have the function FirstReverse(str) take the str parameter being 
passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders" 
then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverse(str) {

    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}


// keep this function call here 
console.log(FirstReverse(readline()));