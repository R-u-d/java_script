// Classes

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  summary() {
    const readStatus = this.isRead ? "Yes" : "No";
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${readStatus}`;
  }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 300, false);

console.log(book1.summary());
// Output: "Title: The Hobbit, Author: J.R.R. Tolkien, Pages: 300, Read: No"