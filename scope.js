
// Scope - var är mina variabler synliga?
// Global - hela filen
// Local eller function scope i funktionen
// Block {} - alla andra block

// Global 
let x = 1;
var a = 2;

let test; // undefinied. Men ange värde senare i koden, ex rad 22

function myFunction() {

    // Local (function)
    let y = 5;
    console.log("x", x);
    console.log("y", y);

    var b = 3; // local/function scope

     test = "test!!" // variabeln deklarerades på rad 11
 
    // Blockscope
    if(true) {

        let z = 40;
        console.log("x", x);
        console.log("y", y);
        console.log("z", z);
        var c = 5; // local/function scope
        console.log("a,b,c", a, b, c)
    }


    // for(let i = 0; i < 10; i++) {

    //     for(let j = 0; j < 10; j++) {
    //     }
    // }

    // for(let i = 0; i < 10; i++) {

    // }

    // let arr = [1,2,3];
    // arr.forEach(function(item) {
    //     console.log(item);
    // })
    // arr.forEach(function(item) {
    //     console.log(item);
    // })

   // console.log("z", z); // error z is not defined
   console.log("c", c); // var får endast local/function scope


}

myFunction();
//console.log("x", x);
//console.log("y", y); // error - y is not defined
//console.log("z", z); // error - z is not defined
console.log("a", a);
//console.log("b", b);
//console.log("c", c);

