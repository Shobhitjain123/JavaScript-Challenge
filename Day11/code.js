// Task1
// new Promise((res, rej) => {
//     setTimeout(() => {
//         res("This is resolved")
//     }, 2000);
// }).then((res) => {
//     console.log(res);
//     console.log("promise is resolved")
// })

// Task2

// new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("There is error in your request");
//     }, 2000)
// })
// .then((res) => console.log(res))
// .catch((rej) => {
//     console.log(rej);
//     console.log("This rejection promise is resolved");
// })

// Task3

// function fetchUserId() {
//     return new Promise((resolve, reject) => {
//         console.log("User is fetched");
//         resolve("User123")
//     })
// }

// function fetchUserPosts(userid, delay) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(`${userid} post is fetched`);
//             res(['Post1', 'Post2', 'Post3'])
//         }, delay)

//     })
// }

// function fetchComments(post, delay) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(`Comments are fetched for post ${post}`)
//             res({
//                 comment1: "4Likes",
//                 comment2: "20Likes",
//                 comment2: "33Likes"
//             })
//         }, delay)

//     })

// }

// fetchUserId()
//     .then((userID) => {
//         console.log(`User fetched is ${userID}`);
//         return fetchUserPosts(userID, 1000);
//     })
//     .then((posts) => {
//         console.log(`Posts made by user are ${posts}`);
//         return fetchComments(posts[0], 1500);
//     })
//     .then((comments) => {
//         console.log(`Likes on Comments for user on Post are ${comments.comment1}`);
//     })

// Task4

// const promiseOne = new Promise((res, rej) => {
//     const err = true;
//     if (!err) {
//         res({
//             username: "Shobhit Jain",
//             id: "Sjnn123",
//             age: 18
//         })
//     } else {
//         rej("Something went wrong")
//     }
// })

// async function handlePromise() {
//     const response = await promiseOne;
//     console.log(response);
// }
// handlePromise()

// Task5

// async function handlePromise() {
//     try {
//         const response = await promiseOne;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Task6
// fetch('https://fakestoreapi.com/products?limit=5')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));


// Task7

// async function fetchProducts() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products?limit=5');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchProducts()

// Task8

// const promiseOne = new Promise((res,rej) => {
//     setTimeout(() => {
//         res("promise1")
//         // console.log("Promise one executed");
//     }, 3000)
// });

// const promiseTwo = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise2")
//         // console.log("Promise two executed");
//     }, 2000)
// })

// const promiseThree = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("promise3")
//         // console.log("Promise three executed");
//     }, 1000)
// })

// Promise.all([promiseOne, promiseTwo, promiseThree]).then((values) => console.log(values));

// Task9

// Promise.race([promiseOne, promiseTwo, promiseThree]).then((val) => console.log(val));
