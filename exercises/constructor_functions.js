
// Constructor functions

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

const myBook = new Book("Black Holes The Reith Lectures", "Stephen Hawking", 80, true);
Book.prototype.summary = function() {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Read: ${this.isRead ? "Yes" : "No"}`;
};
myBook.summary();
// Output: "Title: Black Holes The Reith Lectures, Author: Stephen Hawking, Pages: 80, Read: Yes"

