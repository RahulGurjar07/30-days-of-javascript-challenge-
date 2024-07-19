// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let array = [1,2,3,4,5]

// arr.forEach(element => {
//     console.log(element);
    
// });
console.log(array);

// Task 2: Access the first and last elements of the array and log them to the console.
let firstElement = array[0]
let lastElement = array[array.length - 1]
console.log(firstElement);
console.log(lastElement);

// Activity 2: Array Methods (Basic)
// Task 3: Use the push method to add a new number to the end of the array and log the updated array.\
array.push(6)
let updatedArray = array;
console.log(updatedArray);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
array.pop()
let removeArray = array;
console.log(`remove and new updated array ${removeArray}`);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
array.shift()
let updatedArr = array
console.log(`shift updated array ${updatedArr}`);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array.unshift(1)
console.log(`unshift updated array ${array}`);

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.

let newArray = [2,4,6,7,8]
let doubleArray = newArray.map(function(number) {
    return number * 2;
})
console.log(doubleArray);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
let arr = [12,13,24,54,33,64,75,22]
let evenArr = arr.filter(number => number % 2 == 0);
console.log(evenArr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let numbers = [1,3,5,3,6,7,4]
let sum = numbers.reduce((total, number) => total + number ,0)
console.log(sum);

// Activity 4: Array Iteration
// Task 10: Use a for loop to iterate over the array and log each element to the console.
let iterateArray = [3,5,64,6,3,6,8,9]

for (let i=0; i<iterateArray.length; i++){
    
    console.log(`element at index ${i} is ${iterateArray[i]}`);
}

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
let iterateforEach = [6,3,2,7,5,3,3,7,8,1,6]
iterateforEach.forEach(element => {
    console.log(element);
})

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrixArray = [
    [2,4,6],
    [1,3,5],
    [3,6,9]
]
console.log(`matrix array ${matrixArray}`);


// • Task 13: Access and log a specific element from the two-dimensional array.
console.log(`accessing the second element in the matrixArray ${matrixArray[1][1]}`);