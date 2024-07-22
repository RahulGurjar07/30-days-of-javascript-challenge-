// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title : "The Power of your subconscious mind",
    author : "Joseph Murphy",
    yearOfpublished : 1963
}

console.log(book);

// Task 2: Access and log the title and author properties of the book object.

console.log(book.title);
console.log(book.author);

// Activity 2: Object Methods
// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

book.getInfo =  function(){
    return this.title + " by " + this.author
}
console.log(book.getInfo());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.yearOfpublished = 2000;
let updatedYear = book.yearOfpublished
console.log(updatedYear);
// now the book object is updated
console.log(book);

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 
let library = {
    name : "Local library",
    Books : [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
            getInfo: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getInfo: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
            getInfo: function() {
                return `${this.title} (${this.year})`;
            }
        }
    ]

}

console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
let libraryName = library.name
console.log("Library Name:", libraryName);

console.log("Books in the Library:");
library.Books.forEach(book => {
    console.log("- " + book.title);
});

// Activity 4: The this Keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
library.Books.forEach(book => {
    console.log(`books title and years ${book.getInfo()}`)
    
})

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
library.Books.forEach(book => {
    // Use for...in loop to iterate over the properties of each book
    for (let property in book) {
        if (book.hasOwnProperty(property)) {
            console.log(`${property}: ${book[property]}`);
        }
    }
    console.log('---'); // Separator for each book
});
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
library.Books.forEach(book => {
    // Get all keys and values of the book object
    let keys = Object.keys(book);
    let values = Object.values(book);

    // Log keys and values
    console.log("Keys: ", keys);
    console.log("Values: ", values);
    console.log('---'); // Separator for each book
});