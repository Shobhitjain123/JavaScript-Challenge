// Task1
// document.getElementById('changePara').addEventListener('click', () => {
//     document.getElementById('para').textContent = "Hi I am Shobhit Jain"
// })  

// Task2
// const img = document.querySelector('#toggleImage')
// document.querySelector('#toggleImgBtn').addEventListener('dblclick', () => {
//     if(getComputedStyle(img).visibility === 'hidden'){
//         img.style.visibility = "visible";
//     }else{
//         img.style.visibility = "hidden";
//     }
// } )

// Task3

// document.querySelector('#para').addEventListener('mouseover', () => {
//     document.querySelector('#para').style.backgroundColor = "red";
// })

// Task4
// document.querySelector('#para').addEventListener('mouseout', () => {
//     document.querySelector('#para').removeAttribute("style");
//     // document.querySelector('#para').style.backgroundColor = "";
//     // document.querySelector('#para').style.backgroundColor = "transparent";
// })

// Task5
// document.getElementById('password').addEventListener('keydown', (e) => {
//     console.log(e.key);
//     let confirmPass = document.getElementById('confirmPassword');
//     confirmPass.value += e.key;
// })

// Task6

// document.getElementById('keyUp').addEventListener('keyup', (e) => {
//     let paraText = document.getElementById('keyUpPara');
//     paraText.innerHTML += e.key;
// })

// Task7
const username = document.getElementById('inputText')
const password = document.getElementById('contentPassword')
const content = document.getElementById('content')
document.getElementById('contentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(username.value)
    console.log(password.value)
    console.log(content.value)
})  

// Task8
const books = document.getElementById('favBook')
document.getElementById('book').addEventListener('change', (e) => {
    console.log(e.target);
    console.log(e.target.value);
    books.innerHTML = `Your Favorite book is ${e.target.value}`
})

// Task9

// document.querySelector('ul').addEventListener('click', (e)=> {
//     console.log(e.target.innerHTML);
// })

// Task10
const parent = document.querySelector('#parent');
const addItem = document.querySelector('#addItem');
const addList = document.querySelector('#addList');

addItem.addEventListener('click', () => {
    const newItem = document.createElement('li');
    
    newItem.innerHTML = `List Item ${addList.children.length + 1} Added`;
    addList.append(newItem);
})

parent.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        console.log(e.target.innerHTML);
    }
    
})