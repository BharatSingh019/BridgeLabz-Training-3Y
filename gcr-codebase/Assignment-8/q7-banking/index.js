class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Deposit amount must be a positive number");
    }
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Withdrawal amount must be a positive number");
    }
    if (amount > this.#balance) {
      throw new Error(
        `Insufficient balance. Available: Rs.${this.#balance}, requested: Rs.${amount}`
      );
    }
    this.#balance -= amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log(`Opening balance: Rs.${account.getBalance()}`);

try {
  account.deposit(500);
  console.log(`After deposit of Rs.500: Rs.${account.getBalance()}`);
  account.deposit(250);
  console.log(`After deposit of Rs.250: Rs.${account.getBalance()}`);
} catch (error) {
  console.log(`Deposit failed: ${error.message}`);
}

try {
  account.withdraw(300);
  console.log(`After withdrawal of Rs.300: Rs.${account.getBalance()}`);
  account.withdraw(5000);
  console.log("This line will not run");
} catch (error) {
  console.log(`Withdrawal failed: ${error.message}`);
}

try {
  account.deposit(-100);
} catch (error) {
  console.log(`Deposit failed: ${error.message}`);
}

console.log(`Final balance: Rs.${account.getBalance()}`);
console.log(`Direct access to private field: ${account.balance}`);
