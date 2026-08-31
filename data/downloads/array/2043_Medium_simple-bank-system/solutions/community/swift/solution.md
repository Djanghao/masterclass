# Simple solution

**Author:** venkatasaipulipati_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/6036659/](https://leetcode.com/problems/simple-bank-system/solutions/6036659/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []

class Bank {
    var balance:[Int]
    init(_ balance: [Int]) {
        self.balance = balance
    }
    
    func transfer(_ account1: Int, _ account2: Int, _ money: Int) -> Bool {
        if(account1 > 0 && account1 <= balance.count && account2 > 0 && account2 <= balance.count){
            if(balance[account1-1] - money >= 0){
                balance[account1-1] -= money
                balance[account2-1] += money
                return true
            }
        }
        return false
    }
    
    func deposit(_ account: Int, _ money: Int) -> Bool {
        if(account > 0 && account <= balance.count){
            balance[account - 1] += money
            return true
        }
        return false
    }
    
    func withdraw(_ account: Int, _ money: Int) -> Bool {
        if(account > 0 && account <= balance.count){
            if(balance[account - 1] - money >= 0){
                balance[account - 1] -= money
                return true
            }
        }
        return false
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * let obj = Bank(balance)
 * let ret_1: Bool = obj.transfer(account1, account2, money)
 * let ret_2: Bool = obj.deposit(account, money)
 * let ret_3: Bool = obj.withdraw(account, money)
 */
```