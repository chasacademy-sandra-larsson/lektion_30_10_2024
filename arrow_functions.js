// Arrow functions
// Arrow functions är en kortare syntax för att definiera funktioner.
// De är ofta anonyma och kan sparas i variabler.
// De är ofta anonyma och kan sparas i variabler.

const myFunction = () => {
    console.log("Hello, world!");
}

myFunction();

const myFunction2 = (a, b) => {
    console.log(a + b);

}

myFunction2(1, 2);

const myFunction3 = a => a * 2;

console.log(myFunction3(2));

const myFunction4 = () => "Hello, world!";

console.log(myFunction4()); 


const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(a => a * 2);

console.log(newArr);