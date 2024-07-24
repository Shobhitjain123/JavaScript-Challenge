// Task1
// function throwError() {
//     const err = true;
//     if(!err){
//         return "Handled successfully"
//     }else{
//         throw new Error("Error found")
//     }
// }

// try {
//     const message = throwError();
//     console.log(message);
// } catch (error) {
//     console.log(error.message); 
// }

// Task2
// function catchDeno(num1, num2){
//     if( num2 !== 0){
//         return num1 / num2;
//     }else{
//         throw new Error("Please don't enter denomenator as 0")
//     }
// }

// try {
//     const divisionResult = catchDeno(0,6);
//     console.log(divisionResult);
// } catch (error) {
//     console.log(error.message);
// }

// Task3

// function executeBlocks(num) {
//     try {
//         if(num%2 == 0){
//             console.log("Number is even");
//         }else{
//             throw new Error("Number is odd");
//         }
//     } catch (error) {
//         console.log(error.message);
//     } finally{
//         console.log("Finally block executed at the end");
//     }
// }
// executeBlocks(5)
// executeBlocks(6)

// Task4
// class customError extends Error {
//     constructor(msg) {
//         super(msg);
//     }
// }

// function throwCustomError(){
//     throw new customError("Custom error is triggered");
// }

// try {
//     console.log(throwCustomError())
// } catch (error) {
//     console.log(error instanceof Error)
//     console.log(error);
// }

// Task5

// function validateString(str) {
//     if(typeof str === 'string' && str.length !==0 ){
//         return "Valid String"
//     }else{
//         throw new customError("Invalid input");
//     }
// }

// try {
//     console.log(validateString(" "))
// } catch (error) {
//     console.log(error.message);    
// }

// Task6

// const val = Math.round(Math.random() * 1)

// new Promise((res,rej) => {
//     if(val){
//         console.log(val);
//         res("Promise is resolved")
//     }else{
//         console.log(val);
//         throw new Error("Promise is rejected");
//     }
// }).then((res) => {
//     console.log(res);
// }).catch((rej) => {
//     console.log(rej.message);
// })

// Task7

// const promiseOne = new Promise((res, rej) => {
//     if (val) {
//         console.log(val)
//         res("Promise is resolved");
//     } else {
//         console.log(val);
//         rej("Promise is rejected");
//     }
// })

// function checkVal(val) {
//     if(val){
//         console.log(val)
//         return "Promise is resolved"
//     }else{
//         console.log(val)
//         throw new Error("Promised is rejected")
//     }
// }

// async function handleRandomPromise() {
//     try {
//         const response = await promiseOne;
//         console.log(response);
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// handleRandomPromise()

// Task8

// fetch('https://fakestoreapi.com/invalid')
// .then((data) => {
//     return data.json();
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err.message);
// })

// Task9

// const invalidRequestHandle = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/invalid');
//         const data = await response.json();
//         console.log(data)
//     } catch (error) {
//         console.log(error.message)
//     }
// }
// invalidRequestHandle()