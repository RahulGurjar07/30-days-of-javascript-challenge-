# Day 4: Loops

## Activity 1: For Loop
## Task 1: Write a program to print numbers from 1 to 10 using a for loop.

```
for(let i=1; i<=10; i++){
    console.log(i);
}

```

### Task 2: Write a program to print the multiplication table of 5 using a for loop.

```
for(let i=1; i<=10; i++){
    console.log(i*5);
}
```


## Activity 2: While Loop
### Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
```
let sum = 0
let i = 1;
while (i<=10) {
    sum += i
    i++
}
console.log(`the sum of all number is ${sum}`);

```

### Task 4: Write a program to print numbers from 10 to 1 using a while loop.
```
let a = 10 
while (a >= 1) {
    console.log(a);
    a--;
}
```

## Activity 3: Do... While Loop
### Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

```
let b = 1
do {
    console.log(b);
    b++;
} while (b <= 5);

```
## Task 6: Write a program to calculate the factorial of a number using a do...while loop.
```
function factorial(n){
    let result = 1
    let i = n;

    do {
        result *= i;
        i--;
    } while (i > 0);
    return result
}

let number = 5; // You can change this to any number you want to calculate the factorial for
let result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);

```

## Activity 4: Nested Loops
### Task 7: Write a program to print a pattern using nested for loops:
```
*
**
***
****
*****
```
```
function printHalfForest(N) {
    for (let i = 0; i < N; i++) {
        let row = '';
        for (let j = 0; j < N; j++) {
            if (j <= i) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}

let N = 5; // You can change this to any number you want
printHalfForest(N);
```

## Activity 5: Loop Control Statements
### Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
```
for (let i =1; i<=10; i++){
    if (i == 5){
        continue
    }
    console.log(i);
    
}
```

### Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
```
for (let i=1; i<=10; i++){
    if(i == 7){
        break
    }
    console.log(i);
}
```