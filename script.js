// PART 1

/* 
In this part, I wrote a simple program that captures user input and stores it in a variable.
The if/else statements are used to make decisions based on the user's age.
The program outputs different messages on the console based on the age provided by the user.
*/
let userAge = Number(prompt("How old are you? "));

if (userAge < 18){
    console.log("You are not eligible to enter.");
}
else if(userAge >= 18 && userAge <= 40){
    console.log("You are eligible to enter.");
}
else{
    console.log("You are too old to enter. Go home!");
}

// PART 2

/*
The first function is done through function declaration
It calculates the total cost based on price and quantity
user inputs are taken through prompt and converted to numbers
The total cost is then logged to the console
*/
function calculateTotal(price, quantity) {
    return price * quantity;
}
let itemPrice = Number(prompt("Enter the price of the item: "));
let itemQuantity = Number(prompt("Enter the quantity of the item: "));
let totalCost = calculateTotal(itemPrice, itemQuantity);
console.log("The total cost is: $" + totalCost);

/*
The second function is done through function expression
It calculates the circumference of a circle based on the radius
user input is taken through prompt and converted to a number
The circumference is then logged to the console
*/
let circumference = function(radius) {
    let pi = 3.14159;
    return 2 * pi * radius;
}
let circleRadius = Number(prompt("Enter the radius of the circle: "));
let circleCircumference = circumference(circleRadius);
console.log("The circumference of the circle is: " + circleCircumference);

/*
The third function is done through arrow function syntax
It greets the user by name
user input is taken through prompt
The greeting message is then logged to the console
*/
let greetUser = (name) => {
    return "Hello, " + name + "! Welcome to our website.";
}
let userName = prompt("Enter your name: ");
let greetingMessage = greetUser(userName); 
console.log(greetingMessage);

// PART 3 - This part demonstrates different types of loops in JavaScript

// A for loop that iterates from 1 to 9 and logs each number to the console
for (let i = 1; i < 10; i++) {
    console.log(i);
}

// A while loop that does the same thing as the for loop above
// It initializes a count variable and increments it until the condition is no longer met
let count = 1;
while (count < 10) {
    console.log(count);
    count++;
}

// A for of loop that iterates over an array of mixed data types
// It logs each item in the array to the console
let names = ["Alice", "Bob", "Charlie", "Diana", 25, 20, 34, 45, true];
for (let item of names) {
    console.log(item);
}

// PART 4
// This part demonstrates DOM manipulation using JavaScript

// Change background color and text color when a button is clicked
function changeBgColor() {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }

// Change the text content of the greetings element
function changeText() {
      document.getElementById("greetings").innerText = "Welcome to the world of JavaScript!";
    }

// Change the background color of the box element
let box = document.getElementById("box");
function changeBoxColor() {
    box.style.backgroundColor = "green";
}

