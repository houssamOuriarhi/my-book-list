// Book Class: Represent a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  sayHello() {
    return `Hello, my name is ${this.author}`;
  }
}

const book = new Book('Book', 'Hamid Rajawi', 123456);
console.log(book.sayHello());

// UI Class: Handle UI Tasks

// Store Class: Handles storage

//Event: Display Books

//Event: Add a Book

//Event: Remove a Book
