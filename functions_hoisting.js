// Funktioner
// Hittils har vi använt det som kallas funktions deklaration 


// Hoisting - funktions deklarationer "hissas" till toppen av scriptet och är åtkomliga överallt
// alltsä är det möjligt att köra eb funktions deklaration innan den anropas
myFunc();
myFunc2(3,2);
const sum = myFunc3(4,5)
console.log(sum);


// Funktion deklareras
// Funktion som varken har input eller output
function myFunc() {
    console.log("Hello world");
}

// Funktion som har en input, men inget ouput
function myFunc2(a, b) {
    console.log("a", a, "b", b);
}

// Funktion som har en input och ger en output (return)
function myFunc3(a,b) {
    // a = 4
    // b = 5

    return a + b;
}


// Funktionen används/körs
myFunc();
myFunc2(3,2);
console.log(myFunc3(4,5));




// Funktions utryck - Function expression
 
//myFunc4(); // error - dessa funktioner hoistas inte. Den går inte att köra innan den deklarerats.
// Eftersom funktionen är en variabel, så har den det här beteendet.

const myFunc4 = function() {
    console.log("Hello my func 4!");
}

const myFunc5 = function(a, b) {
    return a + b;
}

const result = myFunc5(3,4);
console.log(result);




// I många fall i JS så skickar man med en funktion som argument och då 
// har den oftast inget namn - man säger att funktionen är anonym
document.addEventListener("DOMContentLoaded", function() {

    
})

// I det här fallet son använder man en namngiven funktion
document.addEventListener("DOMContentLoaded", onload);

function onload() {

}

setTimeout(function() {
    console.log("timeout")
}, 2000);