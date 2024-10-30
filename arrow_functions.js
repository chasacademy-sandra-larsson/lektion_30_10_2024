// Arrow function =>   Kom med ES6
// är endast syntaktisk socker - de tillför inget, bara snabbare att skriva och 
// kanske lite mer lättläst


// 1. 
const myFunction1 = function() {
    console.log("myfunc 1")
} 

// 2. 
const myFunction2 = function(a, b) {
    console.log("myfunc 1")
} 

// 3.
const myFunction3 = function(a, b) {
    return a + b;
} 


// Vi ska göra om dessa funktioner till arrow functions!

// 1.
const myArrowFunc1 = () => {
    console.log("myArrowfunc 1")
}
myArrowFunc1();

// 2. 
const myArrowFunction2 = (a, b) => {
    console.log("myfunc 1")
} 

// 3. 
const myArrowFunction6 = function(a,b) {
    return a + b;
} 

myArrowFunction2();

// 3. 
const myArrowFunction3 = (a, b) => a + b; 
// Om det bara finns en return rad så kan man ta bport brackets 
console.log(myArrowFunction3(1,2));

// USe case med arrow function
const arr = [1,2,3];
const newArr = arr.map(item => item * 2);
console.log(newArr);