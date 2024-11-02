/*
class - blueprint to create objects (with properties and methods)
object - instance of a class
*/
class Car {
  /*private fields must be declared before like below*/
  #designerName; /*private field*/
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.#designerName = "John Doe";
  }
  present() {
    return `The car is a ${this.brand} ${this.model} from ${this.year}`;
  }
}
const myCar = new Car("BMW", "X5", 2020);

class BankAccount {
  /*balance is private field : we cannot directly access - we can use this variable in methods of this class*/
  #balance = 0;
  constructor(accountHolderName, balance, accountNumber) {
    this.accountHolderName = accountHolderName;
    this.#balance = balance;
    this.accountNumber = accountNumber;
  }
  deposit(amount) {
    console.log("Depositing...");
    this.#balance += amount;
    console.log("Deposit successful :)");
  }
  withdraw(amount) {
    console.log("Withdrawing...");
    if (this.#balance < amount) {
      console.log("Insufficient balance");
    } else {
      console.log("Withdrawal successful :)");
      this.#balance -= amount;
    }
  }
  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount("John Doe", 1000, 123456789);
myAccount.withdraw(100);
myAccount.deposit(101);
myAccount.withdraw(5000);
console.log(myAccount.getBalance());
