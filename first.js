// lecture 1 variables & Data Types
/*const product = {
     name: "Ball pen",
     rating : 3,
     offer : 5,
     price : 54,
};
console.log(product)

const profile = {
     username: "Dev Saini",
     isFollow : false,
     followers : 234,
     following : 423,
};
console.log(profile)*/

// lecture 2 Operators and conditional Statements
//Artimetic Operators
// let a =5;
// let b =2;

// console.log("a=",a,"& b=",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log("a ** b =", a ** b);

//unary Operator
// let a =5;
// let b =2;

// console.log("a=",a,"& b=",b);
// post
// a++; //a = a + 1
// a--; //a = a - 1
// console.log("a =", a);
// pre
// console.log("++a =", ++a);
// console.log("--a =", --a);

// Asignment Operator
// let a = 5;
// let b = 2;

// a += 4; // a = a + 4
// a -= 4; // a = a - 4
// a *= 4; // a = a * 4
// a /= 4; // a = a / 4
// a %= 4; // a = a % 4
// a **= 4; // a = a ** 4
// console.log("a =", a);

// Comparison Operator
// let a = 5;
// let b = 2;

// console.log("a > b =", a > b);
// console.log("a < b =", a < b);
// console.log("a == b =", a == b);
// console.log("a === b =", a === b);
// console.log("a != b =", a != b);
// console.log("a !== b =", a !== b);
// console.log("a >= b =", a >= b);
// console.log("a <= b =", a <= b);

// Logical Operator
// let a = 5;
// let b = 2;
// console.log("a > b && a < b =", a > b && a < b);
// console.log("a > b || a < b =", a > b || a < b);
// console.log("!(a > b) =", !(a > b));

//conditional Statement
// let a = 5;
// let b = 3;
// if (a > b) {
//   console.log("a is greater than b");
// } else {
//   console.log("b is greater than a");
// }

// odd or even
// let num = 20;

// if (num % 2 == 0) { // 20 % 2 = 0
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let mode = "dark";
// let color;

// if (mode == "dark") {
//   color = "black";
// } else if (mode === "blue") {
//   color = "white";
// } else if (mode === "pink") {
//   color = "pink";
// } else {
//   color = "white";
// }

// console.log(color);

// ternary operator
// let age = 25;
// let result = age > 18 ? "adult" : "Not adult";

// console.log(result);

// Quastion 1
// let num = prompt("Enter a number:");

// if (num % 2 === 0) {
//   console.log(num,"is a multiple of 2");
// } else {
//   console.log(num,"is not a multiple of 2");
// }

// Quastion 2
// let score = prompt("Enter a number(0-100):");
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 80 && score <= 89) {
//   grade = "B";
// } else if (score >= 70 && score <= 79) {
//   grade = "C";
// } else if (score >= 60 && score <= 69) {
//   grade = "D";
// } else if (score >= 50 && score <= 59) {
//   grade = "E";
// } else if (score >= 0 && score <= 49) {
//   grade = "F";
// } else {
//   grade = "Invalid";
// }

// console.log(grade);

// lecture 3 Loops and strings
// loops

// for loop
// for (let count = 1; count <= 10; count++) {
//   console.log("Dev Saini");
// }

// console.log("loop has ended");

//calculate sum of 1 to 5
// let sum = 0;
// for (let count = 1; count <= 5; count++) {
//   sum = sum + count;
// }
// console.log(sum);

// Infinite loop
// for (let i = 1; i >= 0; i++) {
//   console.log("i = ", i);
// }

// while loop
// let i = 1;
// while (i <= 5) {
//   console.log("i = ", i);
//   i++;
// }

// do while loop
// let j = 1;
// do {
//   console.log("j = ", j);
//   j++;
// } while (j <= 5);

// for of loop
// let str = "Dev Saini";
// let size = 0;

// for (let i of str) {
//   //iteratar -> characters
//   console.log("i = ", i);
//   size++;
// }

// console.log("string size = ", size);

// for in loop
// let student = {
//   name: "Dev Saini",
//   age: 25,
//   city: "Delhi",
//   marks: 99.9,
//   isPassed: true,
// };
// for (let key in student) {
//   console.log("key = ", key,"value = ", student[key] );
// }

// Quastion 3
// even numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//   if(i%2 === 0){
//     console.log("i =", i);
//   }
// }

// odd numbers from 0 to 100
// for (let i = 0; i <= 100; i++) {
//   if(i%2 !== 0){
//     console.log("i =", i);
//   }
// }

// Quastion 4
// let gamenum = 25;
// let usernum = prompt("Guess the game number:");

// while (usernum != gamenum) {
//   usernum = prompt("you entered wrong number. Guess again:");
// }

// console.log("you guessed the right number");

//strings

// let name = "Dev Saini";  //string
// let age = 25;  //number
// let city = "Delhi";  //string
// let isPassed = true;  //boolean
// let marks = 99.9;  //number

// console.log(typeof name, typeof age, typeof city, typeof isPassed, typeof marks);

// Quastion 5
let fullname = prompt("Enter your full name:");

let username = "@" + fullname + fullname.length;
console.log(username);