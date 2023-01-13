console.log("JavaScript is running!");

/* longer JS block comment 
-Const is a type of variable - a bit ot memory that hold a value 

JS uses (can use) ANY valid CSS selector to make a connection to ANY element on the page - it works the same way as CSS selectors do, because its USING css selectors to dint matchiing element(s).

the document is the DOM - the webpage and all of its elements 

querrySelector is the method (function) that makes the connection between JS and the DOM (the element)

*/


//step 1 - Make the connection to the element you eant to interact with 

const jpgGraphic = document.querySelector("#bitmap");

function logID() {
    console.log(this.id);
}

// step 2 - Deside how you want the user to interact with the object you created in step 1

jpgGraphic.addEventListener("click", logID);

//vector

const svgGraphic = document.querySelector("#vector");

function logID() {
    console.log(this.id);
}

svgGraphic.addEventListener("click", logID);