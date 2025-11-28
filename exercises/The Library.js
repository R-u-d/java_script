
// Base Class: LibraryItem

class LibraryItem {
  #title;
  #author;

  constructor(title, author) {
    this.#title = title;
    this.#author = author;
  }

  // Getters (safe access to private fields)
  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  // Basic info method
  getInfo() {
    return `Title: ${this.getTitle()}, Author: ${this.getAuthor()}`;
  }
}


// Subclass: Book

class Book extends LibraryItem {
  #pages;

  constructor(title, author, pages) {
    super(title, author); // inherit from LibraryItem
    this.#pages = pages;
  }

  getPages() {
    return this.#pages;
  }

  // Polymorphism: same method name, more details
  getInfo() {
    return `${super.getInfo()}, Pages: ${this.getPages()}`;
  }
}



// Class: Member

class Member {
  #name;
  #booksCheckedOut = [];

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  checkOutBook(book) {
    this.#booksCheckedOut.push(book);
    console.log(`${this.getName()} checked out "${book.getTitle()}".`);
  }

  returnBook(book) {
    const index = this.#booksCheckedOut.indexOf(book);
    if (index !== -1) {
      this.#booksCheckedOut.splice(index, 1);
      console.log(`${this.getName()} returned "${book.getTitle()}".`);
    } else {
      console.log(`Book not found in checked-out list.`);
    }
  }

  listBooks() {
    if (this.#booksCheckedOut.length === 0) {
      console.log(`${this.getName()} has no books checked out.`);
      return;
    }

    console.log(`${this.getName()} has checked out:`);
    this.#booksCheckedOut.forEach(book => {
      console.log(`- ${book.getInfo()}`);
    });
  }
}



// Example Usage


// Create books
const book1 = new Book("Dune", "Frank Herbert", 500);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 300);

// Create a member
const alice = new Member("Alice");

// Check out books
alice.checkOutBook(book1);
alice.checkOutBook(book2);

// List books
alice.listBooks();

// Return a book
alice.returnBook(book1);

// List again
alice.listBooks();
