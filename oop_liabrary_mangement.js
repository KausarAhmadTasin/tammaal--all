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

const alu = new Book("alu", "khalu");
console.log(alu);

let aluBorrow = alu.borrowBook();
console.log(aluBorrow);

aluBorrow = alu.returnBook();
console.log(aluBorrow);
