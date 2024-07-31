# Day 8: ES6+ Features
## Tasks/Activities:
## Activity 1: Template Literals

### Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
```
let perosnName = 'Rahul'
let age = 20
console.log(`my name is ${perosnName} & my age is ${age}`);
```

### • Task 2: Create a multi-line string using template literals and log it to the console.
```
let multiStr = `first line
second line
third line 
fourth line `
console.log(multiStr);
```

## Activity 2: Destructuring

### Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
```
let number = [10,20,30,40,50,60]
let [first, second] = number;
console.log(`first number is ${first} and second is ${second}`);

```

### Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
```
const book = {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    year: 1997,
    genre: 'Personal Finance'
};

const {title, author} = book;
console.log(`Title ${title} & Author ${author}`);

```

## Activity 3: Spread and Rest Operators

### Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

```
let arr = [20,30,40]
let newArr = ['10',...arr, '50','60', '70', '80']
console.log(newArr);

```

### Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
```
function sumAll (...numbers) {
    return numbers.reduce((total , num) => total + num , 0)
}

console.log(sumAll(1,3,5,6));
console.log(sumAll(6,3,6,4));

```

## Activity 4: Default Parameters

### Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
```
function product (a, b=3){
    return a * b;
}
console.log(product(3,5));
console.log(product(3));

```

## Activity 5: Enhanced Object Literals

### Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

```
const person = {
    firstName : "Rahul",
    lastName : "Gurjar",
    age : 20,
    greet(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    },
    getfullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person);

person.greet()

console.log(person.getfullName());

```

### Task 9: Create an object with computed property names based on variables and log the object to the console.
```
const property1 = 'name'
const property2 = 'age'
const property3 = 'location'

const person1 = {
    [property1] : 'Rahul',
    [property2] : '20',
    [property3] : 'Indore'
}

console.log(person1);

```