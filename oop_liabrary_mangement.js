class Book {
  constructor(name, auther) {
    this.name = name;
    this.auther = auther;
    this.isAvailable = true;
  }

  borrowBook() {
    if (this.isAvailable) {
      this.isAvailable = false;
      return `You have borrowed ${this.name}`;
    } else {
      return `${this.name} is not currently availabe.`;
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      return `You have returned ${this.name}`;
    } else {
      `You did not borrow ${this.name}`;
    }
  }
}

// class Library {
//   constructor() {
//     this.books = [];
//   }

//   addBook(book) {
//     this.books.push(book);
//     console.log(`${book.name} by ${book.auther} is added to the library`);
//   }

//   showAvailableBooks() {
//     const books = this.books.filter((book) => book.isAvailable === true);
//     if (books.length === 0) {
//       return `No books available right now.`;
//     } else {
//       console.log(`Available books:`);
//       books.forEach((book, index) => {
//         console.log(`${index + 1}: ${book.name} by ${book.auther}`);
//       });
//     }
//   }

//   borrowBook(title) {
//     const book = this.books.find((book) => book.name === title);
//     if (book) {
//       return book.borrowBook();
//     } else {
//       return `Sorry, we don't have "${title}" in the library.`;
//     }
//   }

//   returnBook(title) {
//     const book = this.books.find((book) => book.name === title);
//     if (book) {
//       return book.returnBook();
//     } else {
//       return `${title} is not in the library`;
//     }
//   }
// }

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    return `${book.name} is added to library.`;
  }

  showAvailabeBooks() {
    const book = this.books.filter((book) => book.isAvailable === true);
    if (book) {
      console.log("Available books:");
      this.books.forEach((book, index) => {
        console.log(`${index + 1}: ${book.name} by ${book.auther}`);
      });
    } else {
      console.log("No books available right now.");
    }
  }

  borrowFromLibrary(title) {
    const book = this.books.find((book) => book.name === title);
    if (book) {
      return book.borrowBook();
    } else {
      return `Sorry, ${title} is not availabe in the library!`;
    }
  }

  returnToLibrary(title) {
    const book = this.books.find((book) => book.name === title);
    if (book) {
      return book.returnBook();
    } else {
      return `${title} is not in the library.`;
    }
  }
}

const alu = new Book("alu", "khalu");
// console.log(alu);

// let aluBorrow = alu.borrowBook();
// console.log(aluBorrow);

// aluBorrow = alu.returnBook();
// console.log(aluBorrow);

const lalu = new Book("lalu", "balu");

const library = new Library();
library.addBook(alu);
library.addBook(lalu);

library.showAvailabeBooks();

// alu is borrowed and made not avaible
console.log(library.borrowFromLibrary("alu"));
console.log(library);

// cannot borrow alu, cuz it is borrowed
console.log(library.borrowFromLibrary("alu"));
console.log(library);

// alu is retured and available again
console.log(library.returnToLibrary("alu"));
console.log(library);
