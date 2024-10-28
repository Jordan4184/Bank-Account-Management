//Define BankAccount class

class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        if(amount < 0) {
            return 'Invalid deposit';
        } this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
        if(this.balance < 0) {
            return 'There are insufficient funds';
        }
    }

    getBalance() {
        return `Your current balance is $${this.balance}`;
    }
}

module.exports = BankAccount;


