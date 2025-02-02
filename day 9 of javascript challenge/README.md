# Day 9: DOM Manipulation
### HTML file content
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom Manipulations</title>
    <style>
        .container {
            width: 200px;
            height: 200px;
            background-color: yellow;
        }
        .highlight {
            background-color: yellow;
        }
        #changeBorderColor {
            width: 200px;
            height: 200px;
            border: 2px solid black;
        }
    </style>
</head>
<body>

    <!-- Task 1 -->
    <div id="first">original text</div>

    <!-- Task 2 -->
     <div class="container">hello world</div>

     <!-- Task 4 -->

     <ul id="myList">
        <li>Item 1</li>
        <li>Item 2</li>
    </ul>
    <button onclick="addListItem()">Add List Item</button>

    <!-- Task 5 -->
     <div id="remove"> removed element </div>

     <!-- Task 6 -->
     <ul id="removelast">
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>

      <!-- Task 7 -->
      <img id="myImage" src="old-image.jpg" alt="Old Image" width="200">

      <!-- Task 8 -->
      <p id="myParagraph">This is a paragraph.</p>
    <button onclick="addClass()">Add Class</button>
    <button onclick="removeClass()">Remove Class</button>

    <!-- Task 9 -->
     <p id="changeText">when click to the button text will be changed</p>
     <button onclick="changeText()">Text change</button>

     <!-- Task 10 -->
      <div id="changeBorderColor">Change border color</div>

    <script src="DOM_Manipulation.js"></script>
</body>
</html>


```


## Activity 1: Selecting and Manipulating Elements

### Task 1: Select an HTML element by its ID and change its text content.
```
const element = document.getElementById('myElement');

// Change the text content of the selected element
element.textContent = 'Text content has been changed!';

```

### Task 2: Select an HTML element by its class and change its background color.
```
const element2 = document.getElementsByClassName('container')

element2.style.backgroundColor = 'red';
```


## Activity 2: Creating and Appending Elements

### • Task 3: Create a new div element with some text content and append it to the body.
```
document.body.onload = addElement

function addElement() {
    // create new element
    const newDiv = document.createElement('div')

    // give it some content
    const newContent = document.newContent('create a new div and add some text into it')

    // add the text node to the newly create div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);

}
```

### Task 4: Create a new li element and add it to an existing ul list.
```
function addListItem() {
    // Create a new li element
    const newItem = document.createElement('li');
    
    // Set the text content of the new li element
    newItem.textContent = 'New Item';
    
    // Select the existing ul element
    const list = document.getElementById('myList');
    
    // Append the new li element to the ul
    list.appendChild(newItem);
}
```

## Activity 3: Removing Elements
### Task 5: Select an HTML element and remove it from the DOM.
```
document.getElementById('remove').remove()
```
### Task 6: Remove the last child of a specific HTML element.
```
document.getElementById('removelast').lastElementChild.remove();

```

## Activity 4: Modifying Attributes and Classes
### • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
```
// Select the img element

const image = document.getElementById('myImage');
            
// Change the src attribute of the img element
image.setAttribute('src', 'new-image.jpg');

// Optionally, you can also change other attributes like alt or width
image.setAttribute('alt', 'New Image');

```

### Task 8: Add and remove a CSS class to/from an HTML element.
```
function addClass() {
  let element = document.getElementById('myParagraph')
  element.classList.add('highlight')
}

function removeClass() {
  let element = document.getElementById('myParagraph')
  element.classList.remove('highlight')
}
```

## Activity 5: Event Handling

### Task 9: Add a click event listener to a button that changes the text content of a paragraph.
```
function changeText() {
  let element = document.getElementById('changeText')
  element.textContent = 'This is the new text.';
}

```
### Task 10: Add a mouseover event listener to an element that changes its border color.
```
document.getElementById('changeBorderColor').addEventListener('mouseover', function() {
  this.style.borderColor = 'red';
})

document.getElementById('changeBorderColor').addEventListener('mouseout', function(){
  this.style.borderColor = 'black'
})

```