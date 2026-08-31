# Very Simple and Easy Solution TS/JS using Hashmap DS

**Author:** gouravojha4321
**Votes:** 1
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/3672609/](https://leetcode.com/problems/simple-bank-system/solutions/3672609/)

---

# Request
<!-- Describe your first thoughts on how to solve this problem. -->
Please upvote and show some love if you like my explanation.
Happy Coding
# Approach
<!-- Describe your approach to solving the problem. -->
Edge Case - Always Check if the account exists or not in every method you write
# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Bank {
    private ledger : object
    private balance : number[]
    constructor(balance: number[]) {
        this.balance = balance
        this.ledger = {}
        for(let i = 0 ; i < this.balance.length ; i++){
            this.ledger[i+1] = this.balance[i]
        }
        console.log(this.ledger,this.balance.length)
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if(this.ledger[account1] >= money && this.ledger[account1] !== undefined &&this.ledger[account2] !== undefined){
            this.ledger[account1] = this.ledger[account1] - money
            this.ledger[account2] = this.ledger[account2] + money
            return true
        }
        return false
    }

    deposit(account: number, money: number): boolean {
        if(this.ledger[account] !== undefined){
            this.ledger[account] = this.ledger[account] + money
            return true
        }
        return false
    }

    withdraw(account: number, money: number): boolean {
        if(this.ledger[account] >= money && this.ledger[account] !== undefined){
            this.ledger[account] = this.ledger[account] - money
            return true
        }
        return false
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */
```