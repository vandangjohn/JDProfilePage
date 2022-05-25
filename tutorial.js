//console.log('Hello');
//window.prompt("Get user input");
//window.alert("Hello");


/********* Variables **********
Declaration: var, let, const
Example:
    let x = 1;
    var y = 2;
    const z = 3;
******************************/

/****************** Edit HTMl Tags *******************
 In your HTML file:
 <p id="p1"></p>

 In your JS file:
 document.getElementById("p1").innerHTML= "Hello" + x;
******************************************************/

/****************** Get User Input *******************
let username = window.prompt("What's your name");
console.log("Hello", username)

or

In HTML file:
<label id="myLabel">Enter your name:</label>
<br>
<input type="text" id="myText">
<br>
<button type="button" id="myButton">Submit</button>

In JS file:
let username;
document.getElementById("myButton").onclick = function()
{
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello" + username;
}

******************************************************/

/****************** Type Conversion *******************
let age = window.prompt("How old are you?");
console.log(typeof age);
age = Number(age); //String to Number
console.log(typeof age);

Number(), String(), Boolean() are constructors used for type conversion
******************************************************/

/****************** const variable *******************
const = a variable that can't be changed
Example:
   const PI = 3.14159;

It is good practice to make the name of const variables uppercase
******************************************************/

/******************* Math Object ********************
Rounding
    - x = Math.round(x);

Floor
    - x = Math.floor(x);

Ceil
    - x = Math.ceil(x);

Exponent
    - x = Math.pow(x, 2); //x squared

Square Root
    - x = Math.sqrt(x);

Absolute Value
    - x = Math.abs(x);

Min and Max
    - minimum = Math.min(x, y, z) //You can also pass in a list
    - maximum = Math.max(x, y, z)

PI
    - x = Math.PI;

Random
    - x = Math.random();
******************************************************/

/******************* String Methods ********************
Length of string
    - let username = "fdafdsaf";
      console.log(username.length);

 Character at specified Index
    - username.charAt(0); //Character at index 0 

Index of first occurence
    - username.indexOf("f"); //Index of the first occurence of char "f"

Index of last occurence
    - username.lastIndexOf("j"); //Index of the last occurence of char "j"

Trim beginning and ending whitespace
    - username.trim();

Uppercase
    - username.toUpperCase();

Lowercase
    - username.toLowerCase();

Replace
    - username.replaceAll("-", "/"); //Replaces all "-" in the string with "/"

Slicing
    - let fullName = "Bro Code";
    - firstName = fullname.slice(0, 3); //returns "Bro"
    - lastName = fullname.slice(4); //returns everything starting from index 4 and onward ("Code")
********************************************************/

/******************* Method Chaining **********************
Calling one method after another in one continuous line of code

let userName = "bro";

let upperCaseLetter = userName.charAt(0).toUpperCase().trim();
*************************************************************/


/******************* If Statements **********************
let age = 21;

if(age >= 18)
{
    console.log("you are an adult");
}
else if(age < 0)
{
    console.log("You havent been born yet");
}zzz
else
{
    console.log("you are a child");
}
*******************************************************/


/******************* Switch Statement **********************
let grade = "A";
switch(grade)
{
    case "A":
        console.log("You got an A");
        break;
    case "B":
        console.log("You got a B");
        break;
    case "C":
        console.log("You got a C");
        break;
    default:
        console.log("You did not pass");
}
*************************************************************/

/******************* Checkbox **********************
In HTML
    - <label for="myCheckBox">subscribe</label>
    - <input type="checkbox" id="myCheckBox">
    < <button id="myButton">Submit</button>

In JS file
    - document.getElementById("myButton").onclick = function()
    {
        if(document.getElementById("myCheckbox").checked)
        {
            console.log("You are subscribed");
        }
        else
        {
            console.log("You are not subscribed");
        }
    }    
*************************************************************/

/******************* AND / OR / NOT Logical Operators **********************
AND - &&
OR - ||
NOT - !
*************************************************************/

/*********************** While Loop **************************
let userName = "";

while(userName == "")
{
    userName = window.prompt("Enter your name");    
}

console.log("Hello", userName)
*************************************************************/

/******************* Do While Loop  **********************
let userName;

do
{
    userName = window.prompt("Enter your name");
}
while (userName == "")

console.log("Hello", userName);
*************************************************************/

/*********************** For Loop ****************************
for(let i = 1; i <= 10; i += 1)
{
    console.log(i);
}

*************************************************************/

/*********************** break and continue ****************************
//break = breaks out of a loop entirely
//continue = skip an iteration of a loop
*************************************************************/

/*********************** Functions ****************************
function printMessage() //declare the function
{
    i = 5;
    console.log("This is a function");

    return i;
}

printMessage(); //call the function
*************************************************************/

/*********************** Ternary Operator ****************************
Shortcut for if/else statement
//condition ? expressionIfTrue : expressionIfFalse

let adult = checkAge(21);

function checkAge(age)
{
    return age >= 18 ? true : false;
}
*************************************************************/

/*********************** Variable Scope ****************************
let = variables are limited to block scope {}
var = variables are limited to a function(){}
global variable = declared outside any function

If var is declared global, var will change browser's window properties
*************************************************************/

/*********************** Template literals ****************************
Delimited with (`) backtick
Allows embedded variables and expressions

let userName = "Bro";
let items = 3;

console.log(`Hello ${userName}, you have ${items} items in your cart`);
*************************************************************/

/*********************** Format Currency ****************************
toLocaleString() method returns a string with a language sensitive representation of this number

number.toLocaleString(locale, {options})

locale = specify the language (undefined = default)
options = object with formatting options
options parameter is optional

let myNum = 123456.789;

myNum = myNum.toLocaleString("en-US", {style : "currency", currency: "USD"}); // US English

console.log(myNum);
*************************************************************/

/*********************** Arrays ****************************
let fruit = ["apple", "orange", "banana"];
fruit[0] = "coconut";
console.log(fruits);

Add an element
    - fruits.push("lemon");

Remove last element
    - fruits.pop();

Add an element to beginning of array
    - fruits.unshift("mango");

Remove beginning element of array
    - fruits.shift();

Length of Array
    - let length = fruits.length;

Index of element
    - let index = fruits.indexOf("apple");

Loop through array

    - let prices = [5, 10, 15, 20];
    
      for (let i = 0; i < prices.length; i += 1)
      {
          console.log(prices[i]);
      }

      for (let price of prices) //works like a foreach statement
      {
          console.log(price);
      }

Sort an array 
      let fruits = ["banana", "apple", "orange"];

      fruits = fruits.sort();

      - for(let fruit of fruits)
        {
            console.log(fruit);
        }

       To reverse order, use reverse() method
       - fruits = fruits.sort().reverse(); 

2D Array
        - let fruits = ["apples", "oranges", "bananas"];
        - let vegetables = ["carrots", "onions", "potatoes"];
        - let meats = ["eggs", "chicken", "fish"];

        - let groceryList = [fruits, vegetables, meats];

        for (let list of groceryList)
        {
            for(let food of list)
            {
                console.log(food);
            }
        }

        - To access an index of a 2D array, use two square brackets
        - grocerList[0][1] = "mangoes"; //first row, second column
*************************************************************/

/*********************** Spread Operator ****************************
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Spread operator unpacks elements of an array or string
//Can split up array elements into individual arguments so it can be used in places where zero or more arguments are used

let maximum = Math.max(...numbers);
console.log(maximum);

spread operator - ...
*************************************************************/
/*********************** Rest Parameters ****************************
Rest parameters represent an indefinite number of parameters (packs arguments into array)

//We will create a function that can accept any number of arguments
function sum(...numbers)
{
    let total = 0;

    for(let number of numbers)
    {
        total += number
    }
}

console.log(sum(4, 67, 3, 5, 7));
*************************************************************/

/*********************** Callbacks ****************************
Callback = a function passed as an argument to another function

sum(2, 3, displayConsole);

function sum(x, y, doSomething)
{
    let result = x + y;
    doSomething(result);
}

function displayConsole(output)
{
    console.log(output);
}
*************************************************************/

/*********************** Array.forEach() ****************************
Executes a provided callback function once for each arrray element

let students = ["spongebob", "patrick", "squidward"];

students.forEach(capitalize);

//the foreach method gives us 3 arguments to work with
function capitalize(element, index, array)
{
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element)
{
    console.log(element);
}


*************************************************************/


/*********************** Array.map() ****************************
Executes a provided callback function once for each arrray element and creates a new array

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(square);

squares.forEach(print);

function square(element)
{
    return Math.pow(element, 2);
}

function print(element)
{
    console.log(element);
}

*************************************************************/

/*********************** Array.filter() ****************************
Creates a new array with all elements that pass a condition provided by a function

let ages = [18, 16, 21, 17, 19, 90];

let adults = age.filter(checkAge);

adults.forEach(print);

//return elements of age that are over 18
function checkAge(element)
{
    return element >= 18;
}

function print(element)
{
    console.log(element);
}
*************************************************************/

/*********************** Array.reduce() ****************************
Reduces an array to a single value

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

console.log(`The total is: ${total}`);

function checkOut(total, element)
{
    return total + element;
}
*************************************************************/

/*********************** Sort Array of Numbers ****************************
let grades = [100, 50, 90, 60, 80, 70];

grades = grades.sort(descendingSort);

grades.forEach(print);

function descendingSort(x, y)
{
    return y - x;
}

function print(element)
{
    console.log(element);
}
*************************************************************/

/*********************** Function Expressions ****************************
Also known as anonymous functions, avoid polluting the global scope with names

const greeting = function()
{
    console.log("Hello");
}

greeting();
*************************************************************/

/*********************** Arrow Functions ****************************
const greeting = (userName) => console.log(`Hello ${userName}`);

greeting("Bro");
*************************************************************/

/*********************** Map ****************************
Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
console.log(shoppingCart);

store.set("hat", 40);

store.delete("hat");

store.has("hat");

console.log(store.size);

store.forEach((value, key) => console.log(`${key} ${value}`));
*************************************************************/

/*********************** Objects ****************************
const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function()
    {
        console.log("Starting driving");
    }

    brake : function()
    {
        console.log("braking");
    }

    displayModel : function()
    {
        console.log(`${this.model}`);
    }
}

console.log(car.model);

console.log(car.color);

car.drive();
car.brake();

car.displayModel();
*************************************************************/

/*********************** Classes ****************************
class Player 
{
    score = 0;

    pause()
    {
        console.log("You paused the game");
    }

    exit()
    {
        console.log("You exited the game");
    }
}

const player1 = new Player();

player1.score += 1;

console.log(player.score);

player1.pause();
*************************************************************/

/*********************** Constructor ****************************
class Student
{
    constructor(name, age, gpa)
    {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study()
    {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("spongebob", 30, 3.2);

student1.study();
*************************************************************/

/*********************** static Keyword ****************************
static = belongs to the class, not the objects
         properties : useful for caches, fixed-configurations
         methods: useful for utility functions

class Car
{
    static numberOfCars = 0;

    constructor(model)
    {
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace()
    {
        console.log("Go");
    }
}

const car 1 = new Car("Mustang");
const car 2 = new Car("Corvette");
const car 3 = new Car("BMW");

Car.startRace();

console.log(Car.numberOfCars);
*************************************************************/

/*********************** Inheritance ****************************
class Animal //Will be parent class
{
    alive = true;
    
    eat()
    {
        console.log(`This ${this.name}  is eating`);
    }
    sleep()
    {
        console.log(`This ${this.name}  is sleeping`);
    }
}

class Rabbit extends Animal //Will be child class
{
    name = "rabbit";

    jumping()
    {
        console.log(`This ${this.name}  is jumping`);
    }
}

const rabbit = new Rabbit();

rabbit.eat();
*************************************************************/

/*********************** super Keyword ****************************
Refers to the parent class
Commonly used to invoke constructor of a parent class

class Animal
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal
{
    constructor(name, age, runSpeed)
    {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
*************************************************************/

/*********************** getters and setters ****************************
Properties should usually be prefixed with an underscore (_) to let developers know that it is protect and should not be modified
class Car
{
    constructor(power)
    {
        this._power = power;
        this._gas = 25;
    }

    get power()
    {
        return `${this._power}hp`;
    }

    get gas()
    {
        return `${this._gas}L (${this._gas / 50 * 100})`;
    }

    set gas(value)
    {
        if(value > 50)
        {
            value = 50;
        }
        else if(value < 0)
        {
            value = 0;
        }

        this._gas = value;
    }
}

let car = new Car(400);

car.gas = 100

console.log(car.power);
*************************************************************/

/*********************** Anonymous Objects ****************************
Objects without a name
Not directly referenced
Less syntax. No need for unique names

class Card
{
    constructor(value, suit)
    {
        this.value = value;
        this.suit = suit;
    }
}

let cards = 
    [new Card("A", "Hearts"), 
     new Card("A", "Spades"), 
     new Card("A", "Clubs"), 
     new Card("A", Diamonds")];

console.log(cards[0].value + cards[0].suit);

cards.forEach(card => console.log(`${card.value} ${card.suit}`))
*************************************************************/

/*********************** Error Handling ****************************
try
{
    let x = window.prompt("Eneter a number: ");
    x = Number(x);

    if(isNaN(x))
    {
        throw "that wasn't a number";
    }

    if(x == "") 
    {
        throw "that was empty";
    }

    console.log(`${x} is a number`);
}
catch (error)
{
    console.log(error);
}
finally
{
    console.log("This always executes");
}
*************************************************************/


/*********************** setTimeout() ****************************
invokes a function after a number of milliseconds
it is an asynchronous function

setTimeout(firstMessage, 3000);
setTimeout(secondMessage, 6000);
setTimeout(thirdMessage, 9000);

function firstMessage()
{
    alert("Buy this course for $500");
}

function secondMessage()
{
    alert("This is not a scam");
}

function thirdMessage()
{
    alert("do it!");
}
*************************************************************/

/*********************** setInterval() ****************************
invokes a function repeatedly after a number of milliseconds
it is an asynchronous function

let count = 0;
let max = window.prompt("Count up to what number?");
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp()
{
    count += 1;
    console.log(count);

    if (count >= max)
    {
        clearInterval(myTimer);
    }
}
*************************************************************/

/*********************** Date Object ****************************
let date = new Date(); <=== Default parameter is 0, but you can pass in a parameter which will be in milliseconds

date = date.toLocaleString();
console.log(date);


let date = new Date("January 1, 2022 00:00:00");

let year = date.getFullYear();
let dayOfMonth  = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours(); 
let minutes = date.getMinutes();
let seconds = date.getSeconds();

date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);

let date = new Date(2022, 0, 1, 2, 3, 4, 5); // Year, Month (January), Day, hour, seconds, milliseconds
*************************************************************/

/*********************** console.time() ****************************
Starts a timer you can use to track how long an operation takes
Give each timer a unique name

//start
console.time("Response time");

alert("Click the OK button");

console.timeEnd("Response time");
*********************************************************************/

/*********************** promises ****************************
object that encapsulates the result of an asynchronous operation
let asynchronous methods return values like synchronous methods
can solve the problem of nested callbacks

the STATE is 'pending' then: 'fulfilled' or 'rejected'
the RESULT is what can be returned
2 parts, producing (lines 893 to 906) and consuming (line 908)

const promise = new Promise((resolve, reject) => {

    let fileLoaded = true; //pretend this is an asynchronous function

    if(fileLoaded)
    {
        resolve("File loaded"); 
    }
    else
    {
        rejected("File not loaded");
    }

}); 

promise.then((value) => { console.log(value)})
        .catch((error) => { console.log(error)}); 
        //if rejected is invoked, then catch method will run

//rejecting a promise is allowed
*********************************************************************/

/*********************** async ****************************
Makes a function return a Promise

async function loadFile()
{
    let fileLoaded = true; 

    if(fileLoaded)
    {
        return ("File loaded"); 
    }
    else
    {
        throw ("File not loaded");
    }
}

loadFile().then((value) => { console.log(value) })
          .catch((error) => { console.log(error) });

Another way to write the code above:

function loadFile()
{
    let fileLoaded = true; 

    if(fileLoaded)
    {
        return Promise.resolve("File loaded"); 
    }
    else
    {
        return Promise.reject("File not loaded");
    }
}

loadFile().then((value) => { console.log(value) })
          .catch((error) => { console.log(error) });
*********************************************************************/

/*********************** await ****************************
Makes an async function wait for a Promise
has to be within an async function

async function loadFile()
{
    let fileLoaded = true; 

    if(fileLoaded)
    {
        return ("File loaded"); 
    }
    else
    {
        throw ("File not loaded");
    }
}

async function startProcess()
{
    try 
    {
        let message = await loadFile(); //use this instead of the code below
        console.log(message);
    }
    catch(error)
    {
        console.log(error);
    }
}

loadFile().then((value) => { console.log(value) })
          .catch((error) => { console.log(error) });
*********************************************************************/

/*********************** ES6 Modules ****************************
in the script tag in your HTML, add an attribute of type="module"

<script type="module" src="index.js"></script>
*********************************************************************/

/*********************** DOM ****************************
Document Object Model - an interface for changing the content of a page

console.dir(document);

console.log(document);

console.log(document.title);

console.log(document.URL);

document.title = "Title goes here!";

document.location = "http://www.google.com";

document.body.style.backgroundColor = "skyblue";

document.getElementById("myDiv").innerHTML = "Hello";
*********************************************************************/

/*********************** Element Selector ****************************
//By Id
let element = document.getElementById("myTitle");

element.style.backgroundColor = "lightgreen";

//By Name
let fruits = document.getElementsByName("fruits"); //returns nodelist array

fruits.forEach((fruit) => {
    if (fruit.checked)
    {
        console.log(fruit.value);
    }
})

//By Tag Name
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

//By Class Name
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";

//Query Selector - Selects first one instead of all
let element = document.querySelector("#myTitle"); // Id
let element = document.querySelector(".desserts"); // Class
let element = document.querySelector("li"); // Tag Name
let element = document.querySelector("[for]"); // for attribute

//Query Selector All - Selects all
let elements = document.querySelectorAll("li");
*********************************************************************/

/*********************** DOM Traversal ****************************
Parent, Children, Sibling

let element = document.querySelect("#vegetables");

let parent = element.parentElement;

.firstElementChild
.lastElementChild
.parentElement
.nextElementSibling
.previousElementSibling
.children[]
Array.from(.children) //user if no index given to .children to convert to array
*********************************************************************/

/*********************** Add / Change HTML elements ****************************
.innerHTML (vunerable to XSS - Cross Site Script attacks)
.textContent (more secure)

const nameTag = document.createElement("h1");
nameTag.textContent = "Bro";
document.body.append(nameTag); //Can use prepend if you want to add to beginning
*********************************************************************/

/*********************** Add / Change HTML CSS Properties ****************************
const title = document.getElementById("myTitle");

title.style.backgroundColor = "rgb(50, 200, 250)";  //use camel-case equivalent of css property. for example, in css, backgroundColor is background-color. But camel case in javascript
title.style.backgroundColor = "blue";
title.style.backgroundColor = "#222222";

title.style.color = "red";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "block";
*********************************************************************/

/*********************** Events ****************************
const element = document.getElementById("myButton");
element.onclick = doSomething;

function doSomething()
{
    alert("You did something!");
}

const element = document.body;
element.onload = doSomething;

element.onchange = doSomething;

element.onmouseover = doSomething; 

element.onmouseout = doSomethingElse;

element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;
*********************************************************************/

/*********************** addEventListener(event, function, useCapture) ****************************
You can add many event handlers to one element.
Even the same even that invokes different functions
Preferred way of handling events

const innerDiv = document.getElementById("innerDiv");

innerDiv.addEventListener("mouseover", changeRed);

function changeRed()
{
    this.style.backgroundColor = "red;"
}

//useCapture parameter determines which event is handled first, indicated by boolean
*********************************************************************/

/*********************** Show / Hide HTML Elements ****************************
const myButton = document.querySelector("#myButton");
const myImg = document.querySelector("#myImg");

myButton.addEventListener("click", 
    () => 
    {
        if(myImg.style.display == "none")
        {
            myImg.style.display = "block";
        }
        else
        {
            myImg.style.display = "none";
        }
    }
);

Can use visibility : hidden /visible instead of display:none / block
*********************************************************************/

/*********************** Detect Key presses ****************************
window.AddEventListener("keydown", event => console.log(event.key));

const myDiv = document.getElementById("myDiv");
window.addEventListener("keydown", move); //can also use keyup

let x = 0;
let y = 0;

function move(event)
{
    switch(event.key)
    {
        case "ArrowDown";
            y += 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp";
            y -= 5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight";
            x += 5;
            myDiv.style.left = y + "px";
            break;
        case "ArrowLeft";
            x -= 5;
            myDiv.style.left = y + "px";
            break;
    }
}
*********************************************************************/