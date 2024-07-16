# 30-days-of-javascript-challenge-

# Day 1 of javascript Challenge 

## Activity 1: Variable Declaration 

### Task 1: Declare a variable using `var` assign it a number, and log the value to the console

```
var number = 1;
console.log(number) 
```

### Task 2: Declare a variable using `let` assign it a string , and log the value to the console
```
let assignStr = "day 1 of 30 days js challenge"
console.log(assignStr);
```

## Activity 2: Constant Declaration 

### Task 3: Declare a variable using `const`, assign it a Boolean , and log the value to the console


```
const isTrue = true
console.log(isTrue);
```


### Task 4: Create a variables of different data types `(number, string, boolean, object, array)` and log each variables types using `typeof` oprator
```
let num2 = 4
console.log(typeof(num2));


let str = "string"
console.log(typeof(str));

let bool = true
console.log(typeof(bool));

let obj = {
    f_name : "Rahul",
    l_name : "Gurjar"

}
console.log(typeof(obj));


let arr = [1,2,3,4,5,6,7]
console.log(typeof(arr));

```
## Activity 4: Reassigning  variables 

### Task 5: Declare a variable using let , assign it initial value, reassign a new value, and log both values to the console 
```
let myvar = 5
console.log(myvar);

// Reassigning value
myvar = 10
console.log(myvar);
```

 [ -------------------------------------------------------]

# Day 2 of javascript Challenge

## Activity 1: Arithmetic Operations
### Task 1: Write a program to add two numbers and log the result to the console.

```
let num1 = 10;
let num2 = 30;
console.log(num1 + num2);
```

### Task 2: Write a program to subtract two numbers and log the result to the console.
```
let sub1 = 10;
let sub2 = 30;
console.log(sub1 - sub2);
```
### Task 3: Write a program to multiply two numbers and log the result to the console.

```
let mulNum1 = 10;
let mulNum2= 30;
console.log(mulNum1 * mulNum2);
```

### Task 4: Write a program to divide two numbers and log the result to the console.
```
let divNum1 = 10;
let divNum2 = 30;
console.log(divNum1 / divNum2);
```

### Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

```
let num3 = 50;
let num4 = 4;
console.log(num3 % num4);
```

## Activity 2: Assignment Operators
### Task 6: Use the += operator to add a number to a variable and log the result to the console.

```
let addNum = 15;
addNum += 5;
console.log(addNum);
```

### Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
```
let subtNum = 15;
subtNum -= 5;
console.log(subtNum);
```

## Activity 3: Comparison Operators
### Task 8: Write a program to compare two numbers using > and < and log the result to the console.

```
let firstNum =  18
let secondNum = 22
if (firstNum < secondNum){
    console.log(`${firstNum} is less than ${secondNum}`);
} else if (firstNum > secondNum) {
    console.log(`${firstNum} is greater than ${secondNum}`);
} else {
    console.log(`${firstNum} and ${secondNum} both are equal`);
}
```


### Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

```
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

```

### Task 10: Write a program to compare two numbers using == and === and log the result to the console.
```
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

```

### Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
```
// Declare two variables and assign them values
let x = 30;
let y = 20;

// Use the || operator to combine two conditions and log the result
console.log(x > 25 || y > 25); // true because one condition is true

// Another example where both conditions are false
console.log(x < 25 || y < 15); // false because both conditions are false
```

### Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

```
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
```

[------------------------------------------------------------------]

# Day 3 of javascript Challenge 

## Tasks/Activities: Control Structures

## Activity 1: If-Else Statements
### Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

```
let number = 3;
if (number > 0) {
    console.log(`${number} is positive number`);
} else if (number < 0) {
    console.log(`${number} is negative number `);
} else {
    console.log('the number is zero');
}

```

### Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

```
let age = 20;

if (age >= 18) {
    console.log('you are eligible to vote');
} else {
    console.log("you'r not eligible to vote");
}

```

## Activity 2: Nested If-Else Statements

### Task 3: Write a program to find the largest of three numbers using nested if-else statements.

```
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

```

## Activity 3: Switch Case
### Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 

```

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

```

### Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

```

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

```

## Activity 4: Conditional (Ternary) Operator
### Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

```
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


```

[--------------------------------------------------------------------]
