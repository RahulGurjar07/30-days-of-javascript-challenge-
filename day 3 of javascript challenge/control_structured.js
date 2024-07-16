// Day 3: Control Structures
// Tasks/Activities:
// Activity 1: If-Else Statements
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let number = 3;
if (number > 0) {
    console.log(`${number} is positive number`);
} else if (number < 0) {
    console.log(`${number} is negative number `);
} else {
    console.log('the number is zero');
}


// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 20;

if (age >= 18) {
    console.log('you are eligible to vote');
} else {
    console.log("you'r not eligible to vote");
}

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let number1 = 20;
let number2 = 22;
let number3 = 23;

// Initialize a variable to hold the largest number
let largest;

// Use nested if-else statements to find the largest number
if (number1 >= number2) {
    if (number1 >= number3) {
        largest = number1;
    } else {
        largest = number3
    }
} else {
    if (number2 >= number3) {
        largest = number2
    } else {
        largest = number3;
    }
}

// log the result
console.log(`${largest} is the largest number`)


// Activity 3: Switch Case
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 

// Declare a variable and assign it a value (1-7)
let dayNumber = 2;

// Use a switch case to determine the day of the week
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day number";
}

// Log the result to the console
console.log("The day of the week is:", dayName);


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

// Declare a variable and assign it a score value
let score = 85;

// Use a switch case to determine the grade
let grade;
switch (true) {
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}

// Log the result to the console
console.log("The grade is:", grade);


// Activity 4: Conditional (Ternary) Operator
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
// Declare a variable and assign it a number
let evenoddNum = 10;

// Use the ternary operator to check if the number is even or odd
let result = (evenoddNum % 2 === 0) ? "Even" : "Odd";

// Log the result to the console
console.log(evenoddNum + " is " + result);

// Activity 5: Combining Conditions
// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

// Declare a variable and assign it a year
let year = 2024;

// Check if the year is a leap year
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// Log the result to the console
if (isLeapYear) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
