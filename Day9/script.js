// Task1
document.getElementById('heading').textContent = "DOM Manipulation"

// Task2
const para = document.getElementsByClassName('para');
para[0].style.backgroundColor = "red";

// Task3
const div = document.createElement('div');
div.setAttribute('class', 'paraDiv');
div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi aperiam placeat cumque quasi dolore maiores atque maxime, aut obcaecati amet saepe vitae! Totam ex itaque, atque quis deserunt et!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit excepturi aperiam placeat cumque quasi dolore maiores atque maxime, aut obcaecati amet saepe vitae! Totam ex itaque, atque quis deserunt et!";

document.body.append(div);

// Task4
document.querySelector('#addBtn').addEventListener('click', () => {
    const bookName = prompt("Enter book name to add to the list");
    if(bookName){
        addToBookList(bookName);
    }
})

function addToBookList(bookName){
    const bookItem = document.createElement('li');
    const bookList = document.querySelector('ul');
    bookItem.textContent = bookName;
    bookList.append(bookItem);
}

// Task5
setTimeout(() => {
    document.querySelector('.paraDiv').remove()
}, 1000);


//Task6 //Task9
document.querySelector('#removeBtn').addEventListener('click', () => {
    // const bookName = prompt("Enter book name to add to the list");
    // if(bookName){
    //     addToBookList(bookName);
    // }
    const lastListItem = document.getElementById('books').lastElementChild;
    lastListItem.remove();
})

// Task7
document.querySelector('.imgBtn').addEventListener('click', () => {
    document.querySelector('img').setAttribute('src', 'images/pexels-pixabay-45853.jpg')
})

// Task8 // Task9
document.getElementsByClassName('addImgStyle')[0].addEventListener('click', () => {
    document.querySelector('img').setAttribute('class', 'imgStyle')
})

document.getElementsByClassName('removeImgStyle')[0].addEventListener('click', () => {
    document.querySelector('img').removeAttribute('class', 'imgStyle')
})

// Task10

document.querySelector('.para').addEventListener('mouseover', () => {
    document.querySelector('.para').style.border = '5px solid grey';
    
})

