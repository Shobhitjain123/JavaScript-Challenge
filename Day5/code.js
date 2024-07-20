// Task1

// const num = Math.floor(Math.random()*100 + 1)
// const result = checkEveOdd(num);

// function checkEveOdd(num) {
//    return num % 2 == 0 ? "Number is Even" : "Number is odd";
// }

// console.log(num);
// console.log(result);

// Task2

// const numSquare = Math.floor(Math.random()*10 + 1);

// const result = squareTheNumber(numSquare);

// function squareTheNumber(num) {
//    return Math.pow(num , 2);
// }

// console.log(numSquare);
// console.log(result);

// Task3

// document.querySelector('input[type = "submit"]').addEventListener('click', (e) => {
//    e.preventDefault()
//    const firstNum = document.getElementById('fNumber').value
//    const secondNum = document.getElementById('Snumber').value
//    const p = document.createElement("p");
//    firstNum > secondNum ? p.innerHTML = "First Number is greater" : p.innerHTML = "Second Number is greater"
//    document.body.appendChild(p);
//    setTimeout(() => {
//       p.remove();
//    },1000)
// })

// Task4

// const str1 = "Hello";
// const str2 = "World";

// console.log(concatStrings(str1, str2));

// function concatStrings(str1, str2) {
//    return str1 + " " + str2;
// }

// Task5

// const resultArray = (num1, num2) => {
//    return num1 + num2;
// }

// console.log(resultArray(34, 45));

// Task6

// const result = (str) => {
//    return str.includes("Jain")
// }

// console.log(result("Shobhit Jain"))

// Task7

// const num1 = 23;
// console.log(findProduct(23))

// function findProduct(num1, num2 = 24) {
//    return num1 * num2;
// }

// Task8

// const personName = "Shobhit Jain";

// const greetings = (name, age = 18) => {
//    console.log(`Hello ${name}, Your age is ${age}`);
// }

// greetings(personName);

// Task9
// function sayHii(name) {
//    console.log("Hii " + name);
// }

// const itr = 4;

// function highOrderFunc1(sayHii, itr) {
//    const name  = "Shobhit";
//    for (let index = 1; index <= itr; index++) {
//       sayHii(name);      
//    }
// }
// sayHii("Dhruv")
// highOrderFunc1(sayHii, itr);

// Task10

function nameFunc(name) {
   return `Your name is ${name}`;
}

function hobbies(result, hobby){
   return result + ` and your hobby is ${hobby}`;
}

function highOrderFunc2(name, hobbies, userName) {
   const result  = name(userName);
   return hobbies(result, "Cricket");
}

console.log(highOrderFunc2(nameFunc, hobbies, "Shobhit"));