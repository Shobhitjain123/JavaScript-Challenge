// Task1

// const personName = "Shobhit Jain";
// const age = 18;

// console.log(`The person name is ${personName} and his age is ${age}`);

// Task2

// const mailToCollegue = `Hello Mosh
//  How are you doing
//  Hope Everything's fine
 
//  This mail is to remind you to send updated for the latest deployments
 
//  Thanks 
//  Your buddy`;

//  console.log(mailToCollegue);

// Task3

// const arr = [1,2,3,4];

// [a,b, ...arr2] = arr;

// console.log(a, b, arr2);

// Task4

// const book = {
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: "2002"
// }

// const {title : bookTitle , author: bookAuthor} = book;

// console.log(bookTitle);
// console.log(bookAuthor);

// Task5

// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = [...arr, "Hello", "Hii", "Hey There!!"];

// console.log(newArr);

// Task6

// function sum(...numArr) {
//    return numArr.reduce((result, currVal) => result + currVal, 0)
// }

// console.log(sum(1,2,3,4,5,6,7,8,9));

// Task7

// function product(num1 , num2 = 1){
//     return num1 * num2;
// }

// console.log(product(10, 5));
// console.log(product(10));

// Task8

// const userName = "Shobhit Jain";
// const email = "sj@gmail.com";
// const password = "sj123";

// function user() {
//     return `Your user details are - 
//     Username: ${this.userName},
//     Email: ${this.email},
//     Password: ${this.password}`
// }

// const newUser = {userName, email, password, user}; // This is Object literal Enhancement

// console.log(newUser);
// console.log(newUser.user());

// Task9

// const propname1 = 'FName';
// const propname2 = 'SName';
// const methodName = 'getFullName';

// const userDetails = {
//     [propname1] : "Shobhit",
//     [propname2] : "Jain",
//     [methodName] : function() {
//         return `This is your full name ${this[propname1]} ${this[propname2]}`
//     }
// }

// console.log(userDetails);
// console.log(userDetails.getFullName());