const assert = require("assert");

const BankAccount = require('./script');

describe("BankAccount", () => {
    //initial balance
    describe("Initialization", () => {
        it('should set the initial balance', () => {
            const account = new BankAccount(100);
            assert.strictEqual(account.balance, 100);
        });
    });
    //deposit
    describe("deposit", () => {
        it("should increase the balance", () => {
            const account = new BankAccount(100);
            account.deposit(50);
            assert.strictEqual(account.balance, 150);
        });
        it("should return an error for a negative deposit", () => {
            const account = new BankAccount(100);
            const result = account.deposit(-50);
            assert.strictEqual(result, 'Invalid deposit');
        })
    })
    //withdraw
    describe("withdraw", () => {
        it("should decrease the balance", () => {
            const account = new BankAccount(100);
            account.withdraw(50); 
            assert.strictEqual(account.balance, 50);
        })
        it("should return an error for insufficient funds", () => {
            const account = new BankAccount(100);
            const result = account.withdraw(150);
            assert.strictEqual(result, 'There are insufficient funds');
        })
    })
    //getBalance
    describe("getBalance", () => {
        it("should return concatenated string", () => {
            const account = new BankAccount(100);
            const result = account.getBalance();
            assert.strictEqual(result, 'Your current balance is $100');
        })
    })
});

