// Task1
const book = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 2002,

    // bookInfo: function(){
    //     return `Title and Author of the book respectively is ${this.title} and ${this.author}`
    // },

    // update: function(year){
    //     this.year = year;
    //     return this.year
    // },

    library: {
        name: "The Great library",
        books: [
            {
                "title":"The secret",
                "author":"Rhonda Byrne",
                "year":"21/03/2012",
            },
            {
                "title":"Twisted Love",
                "author":"ava haung",
                "year":"17/08/2015",
            },
            {
                "title":"I Fell In Love with Hopes",
                "author":"Koi toh",
                "year":"19/09/2017",
            }
        ]
    }
}

// console.log(book);

// Task2 // Task7

// console.log(`Title and Author of the book respectively is ${book["title"]} and ${book['author']}`);
// console.log(`Title and Author of the book respectively is ${book.title} and ${book.author}`);

// Task3
// console.log(book.bookInfo())

// Task4

// const year1 = new book.update(2010);
// const year2 = new book.update(2003);
// const year3 = new book.update(2004);
// const year4 = new book.update(2006);

// console.log(year1)
// console.log(year2)
// console.log(year3)
// console.log(year4)

// console.log(book)

// Task5
// console.log(book.library);

// Task6
// console.log(book.library.name);

// book.library.books.forEach((bk) => console.log(bk.title))

// Task8

// for (let x in book) {
//     console.log(`Properties of Book object are ${x}`)
//     console.log(`Values of Book object properties are ${book[x]}`)
// }

// Task9

// console.log(Object.keys(book))
// console.log(book.library.hasOwnProperty('books'));
// console.log(Object.values(book))    