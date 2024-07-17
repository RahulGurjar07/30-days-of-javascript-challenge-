# Day 5: Functions

## Activity 1: Function Declaration

### Task 1: Write a function to check if a number is even or odd and log the result to the console.
```
function checkEvenOdd(number){
    if (number % 2 == 0){
        console.log(`the number ${number} is even`);
    }
    else {
        console.log(`the number ${number} is odd`);
    }
}

let number = 12;
checkEvenOdd(number)
```

### Task 2: Write a function to calculate the square of a number and return the result.
```
function square(n){
    return n*n;
}

console.log(square(25));
```

## Activity 2: Function Expression
### Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
```
const findMax = function(num1, num2) {
    return num1 > num2 ? num1 : num2;
};

let number1 = 10;
let number2 = 20;
let max = findMax(number1, number2);
console.log(`The maximum of ${number1} and ${number2} is: ${max}`);

```

### Task 4: Write a function expression to concatenate two strings and return the result.
```
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example usage
let string1 = "Hello, ";
let string2 = "world!";
let result = concatenateStrings(string1, string2);
console.log(result); // Output: Hello, world!
```

## Activity 3: Arrow Functions
### Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
```
let addTwoNumber =  (num1, num2) =>  {
    return num1 + num2;
}
console.log(addTwoNumber(5,6))

```

### Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

```
const containsCharacter = (str, char) => str.includes(char);

// Example usage
let string = "Hello, world!";
let character = "o";
let res = containsCharacter(string, character);
console.log(`Does "${string}" contain the character "${character}"?`, res);
```

## Activity 4: Function Parameters and Default Values
### Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

```
function multiply(num1, num2=4){
    return num1 * num2
}
let result2 = multiply(3,6);
console.log(result2);
```

### Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
```
function greeting(name , age=20){
    greet = (`Hello ${name} your age is ${age}`)
    return greet;
}

let gt = greeting("Rahul")
console.log(gt);
```

## Activity 5: Higher-Order Functions
## Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
```
function repeatFunction(func, times){
    for(let i=0; i<times; i++){
        func();
    }
}

const sayHello = () =>{
    console.log("Hello!");
}

console.log(repeatFunction(sayHello, 4));

```
### Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
```
function applyFunctions(func1, func2, value) {
    const result1 = func1(value);
    const result2 = func2(result1);
    return result2;
}

// Example usage
const double = x => x * 2;
const addThree = x => x + 3;

const initialValue = 5;
const finalResult = applyFunctions(double, addThree, initialValue);

console.log(`The final result is: ${finalResult}`);
```