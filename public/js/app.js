//? / Exercise 1: Greetings
// ? Create a function called greet that takes a name parameter and prints a greeting message to the console. Call the function with different names.

// function greet(name) {
//     console.log("Hello " + name + ", nice to meet u.");

// }

// greet("Youssef");
// greet("Yahya");
// greet("Hamza");

//? Exercise 2: Sum of Numbers
//? Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.

// function sumNumbers(numbers) {
//     let sum = 0;

//     for (let index = 0; index < numbers.length; index++) {
//         sum+= numbers[index]

//     }
//     return sum;
// }

// console.log(sumNumbers([1, 5, 6, 3]));
// console.log(sumNumbers([5, 9, -4, 10]));


//? Exercise 4: Even or Odd
//? Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. Use an if-else statement. Call the function with different numbers.

// function isEven(number) {
//     let results = [];

//     if (number % 2 == 0) {
//         console.log("This number " + number + " is even");

//     }
//     else {
//         console.log("This number " + number + " is odd");

//     }

// }

// isEven(20);
// isEven(19);

//? Exercise 6: Palindrome Check
//? Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements. Call the function with different strings.

// function isPalindrome(string) {
//     string = string.replace(/\s/g, '').toLowerCase();

//     for (let i = 0; i < string.length / 2; i++) {
//         if (string[i] !== string[string.length - 1 - i]) {
//             console.log("Not Palindrome");
//             return;
//         }
//     }
//     console.log("Palindrome");
// }

// isPalindrome("racecar");
// isPalindrome("hello");
// isPalindrome("Race cAr");

//? Exercise 7: Maximum of Two Numbers
//? Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. Use an if-else statement. Call the function with different numbers.

// function maxOfTwo(number1, number2) {
//     if (number1 > number2) {
//         console.log(number1);
//     } else {
//         console.log(number2);
//     }
// }

// maxOfTwo(100, 98);

//? Exercise 8: Array Sum
//? Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

// function arraySum(numbers) {
//     let sum = 0;

//     for (const number of numbers) {
//         sum += number;
//     }

//     console.log(sum);
// }

// arraySum([1, 5, 6, 3]);
// arraySum([5, 9, -4, 10]);


//? Exercise 9: Factorial Without Recursion
//? Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. Calculate the factorial without using recursion. Call the function with different numbers.

// function factorial(number) {
//     let result = 1;

//     for (let i = 1; i <= number; i++) {
//         result *= i;
//     }

//     return result;
// }

// let num = 5;
// console.log("The factorial of " + num + " is " + factorial(num));

// let num2 = 7;
// console.log("The factorial of " + num2 + " is " + factorial(num2));


//? Exercise 10: Vowel Checker
//? Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. Call the function with different characters.

// function isVowel(char) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y") {
//         console.log(char + " is a vowel.");

//     } else {
//         console.log(char + " is not a vowel.");

//     }
// }

// isVowel("a");
// isVowel("b");

//? Exercise 11: Largest in Array
//? Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. Use the Math.max function. Call the function with different arrays.

// function largestInArray(arr) {
//     let largest = Math.max(...arr)

//     console.log("The largest number in the array is: " + largest);

// }

// largestInArray([1, 5, 6, 3]);
// largestInArray([5, 9, -14, 10]);


//? Exercise 12: Prime Number Checker
//? Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. Use loops and conditional statements. Call the function with different numbers.

function isPrime(number) {
    let Prime = true;

    if (number < 2) {
        Prime = false;
    }
    else {
        for (let index = 2; index < number; index++) {
            if (number % index === 0) {
                Prime = false;
            }
        }
    }

    console.log(Prime);
}

isPrime(29);
isPrime(30);

//? Exercise 13: Sum of Digits
//? Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.



//? Exercice 14: Array Intersection
//? Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.



//? Exercice 15: Fibonacci Sequence

