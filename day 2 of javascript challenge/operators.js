// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 30;
console.log(num1 + num2);

// Task 2: Write a program to subtract two numbers and log the result to the console.

let sub1 = 10;
let sub2 = 30;
console.log(sub1 - sub2);

// Task 3: Write a program to multiply two numbers and log the result to the console.

let mulNum1 = 10;
let mulNum2= 30;
console.log(mulNum1 * mulNum2);

// Task 4: Write a program to divide two numbers and log the result to the console.

let divNum1 = 10;
let divNum2 = 30;
console.log(divNum1 / divNum2);

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

let num3 = 50;
let num4 = 4;
console.log(num3 % num4);


// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let addNum = 15;
addNum += 5;
console.log(addNum);

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let subtNum = 15;
subtNum -= 5;
console.log(subtNum);


// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

let firstNum =  18
let secondNum = 22
if (firstNum < secondNum){
    console.log(`${firstNum} is less than ${secondNum}`);
} else if (firstNum > secondNum) {
    console.log(`${firstNum} is greater than ${secondNum}`);
} else {
    console.log(`${firstNum} and ${secondNum} both are equal`);
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

// Declare two variables and assign them values
let number1 = 30;
let number2 = 30;

// Compare the numbers using the >= operator and log the result
if (number1 >= number2) {
  console.log(number1 + " is greater than or equal to " + number2);
} else {
  console.log(number1 + " is less than " + number2);
}

// Compare the numbers using the <= operator and log the result
if (number1 <= number2) {
  console.log(number1 + " is less than or equal to " + number2);
} else {
  console.log(number1 + " is greater than " + number2);
}


// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

// Declare two variables and assign them values
let number3 = 30;
let number4 = '30';

// Compare the numbers using the == operator and log the result
console.log(number3 == number4); // true because == does type coercion

// Compare the numbers using the === operator and log the result
console.log(number3 === number4); // false because === checks both value and type

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// Declare two variables and assign them values
let a = 34
let b = 45

if (a < b && b > 30){
    console.log("condition is true");
} else {
    console.log("condition is false");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

// Declare two variables and assign them values
let x = 30;
let y = 20;

// Use the || operator to combine two conditions and log the result
console.log(x > 25 || y > 25); // true because one condition is true

// Another example where both conditions are false
console.log(x < 25 || y < 15); // false because both conditions are false

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

let num = 12

// Use the ! operator to negate a condition and log the result
console.log(!(num > 25)); // false because the original condition is true

// Another example where the original condition is false
console.log(!(num < 25)); // true because the original condition is false

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

// Declare a variable and assign it a value
let number = 10;

// Use the ternary operator to check if the number is positive or negative
let result = number >= 0 ? "Positive" : "Negative";

// Log the result to the console
console.log(result);
