function addTwoNum(num1, num2){
    return num1 + num2;
}

const name = "Shobhit";

const person = {
    username: "Shobhit Jain",
    age: 23,
    email:"sj@gmail.com",

    personDetails() {
        console.log(`Person details are Username: ${this.username}, Age: ${this.age}, Email: ${this.email}`);
    }
}

function multiplyNum(num1, num2){
    return num1 * num2;
}

function diviNum(num1, num2){
    return num1 / num2
}

function moduloNum(num1 , num2) {
    return num1 % num2;
}

function defaultFunc(){
    console.log("This is the default function for utitlity.js file")
}

module.exports = { addTwoNum, multiplyNum, diviNum, moduloNum, defaultFunc, person, name}