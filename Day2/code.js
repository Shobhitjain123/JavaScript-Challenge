// Task1

const num1 = 10;
const num2 = 20;
console.log(num1 + num2);

// Task2

const val1 = 10;
const val2 = 20;
console.log(val1 - val2);

// Taks3

const number1 = 7;
const number2 = 8;
console.log(number1 * number2);

// Task4

const var1 = 100;
const var2 = 25;
console.log(var1 / var2);

// Task5

const value1 = 25;
const value2 = 4;
console.log(value1 % value2);

// Task6

let variable1 = 10;
variable1 += 10
console.log(variable1);

// Task7

let digit = 20;
digit -= 10;
console.log(digit);

// Task8

const digit1 = 10;
const digit2 = 20;
console.log(digit1 > digit2);
console.log(digit1 < digit2);

// Task9

const a = 5;
const b = 6;
const c = 5;

console.log(a >= b);
console.log(a >= c);

console.log(b <= a);
console.log(c <= a);

// Task10

const dig = 10;
const dig1 = "10";
console.log(dig == dig1);
console.log(dig === dig1);

//Task11

const userCount = 10;
const maxAllowed = 40;
const userWaiting = 30;

if(userCount < maxAllowed && (userCount + userWaiting) === maxAllowed){
    console.log("Let user come in");
}

if(userCount < maxAllowed && userWaiting <= userCount){
    console.log("Let user in")
}else{
    console.log("Don't allow user");
}

// Task12

if(userCount < maxAllowed || userWaiting <= userCount){
    console.log("Let user in");
}else{
    console.log("Don't allow user");
}

if(userCount >= maxAllowed || userCount > userWaiting){
    console.log("Let users go out")
}else{
    console.log("Let users stay!!");
}

//Task13

const isUserAvailable = true;
if(!isUserAvailable){
    console.log("User is available");
}else{
    console.log("User is not available");
}

//Task14

const checkNumber = 20;
checkNumber > 0 ? console.log("Positive number") : console.log("Negative Number");