// Day 10: Event Handling
// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
function changeText(){
    let element = document.getElementById('changeContent')
    element.textContent = 'this is new content'
}

// Task 2: Add a double-click event listener to an image that toggles its visibility.

document.getElementById('myImage').ondblclick = function() {
    const image = document.getElementById('myImage');
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
};

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById('changeBg').addEventListener('mouseover', function() {
    document.getElementById('changeBg').style.backgroundColor = 'red'
})


// Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById('changeBg').addEventListener('mouseout', function() {
    document.getElementById('changeBg').style.backgroundColor = 'yellowgreen'
})

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 
document.getElementById('myInput').addEventListener('keydown', function(event){
    console.log(`key pressed: ${event.key}`);
    
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

document.getElementById('myInput').addEventListener('keyup', function() {
    document.getElementById('displayParagraph').textContent = 'current value: ' +  this.value
})

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. 
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.