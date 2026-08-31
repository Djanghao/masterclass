# [Python3] just do what's told

**Author:** ye15
**Votes:** 13
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/1525221/](https://leetcode.com/problems/simple-bank-system/solutions/1525221/)

---


```
class Bank:

    def __init__(self, balance: List[int]):
        self.balance = balance

    def transfer(self, account1: int, account2: int, money: int) -> bool:
        if self.withdraw(account1, money): 
            if self.deposit(account2, money): return True 
            self.deposit(account1, money)

    def deposit(self, account: int, money: int) -> bool:
        if 1 <= account <= len(self.balance): 
            self.balance[account-1] += money
            return True 
        
    def withdraw(self, account: int, money: int) -> bool:
        if 1 <= account <= len(self.balance) and self.balance[account-1] >= money: 
            self.balance[account-1] -= money
            return True 
```