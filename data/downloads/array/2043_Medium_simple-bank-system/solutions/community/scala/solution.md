# Scala simple soultion

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/5804680/](https://leetcode.com/problems/simple-bank-system/solutions/5804680/)

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
```scala []
class Bank(_balance: Array[Long]) {

  private val accountsCount = _balance.length

  def transfer(account1: Int, account2: Int, money: Long): Boolean = {
    if (account1 <= accountsCount && account2 <= accountsCount && _balance(account1 - 1) >= money) {
      _balance(account1 - 1) -= money
      _balance(account2 - 1) += money
      true
    } else false
  }

  def deposit(account: Int, money: Long): Boolean = {
    if (account <= accountsCount) {
      _balance(account - 1) += money
      true
    } else false
  }

  def withdraw(account: Int, money: Long): Boolean = {
    if (account <= accountsCount && _balance(account - 1) >= money) {
      _balance(account - 1) -= money
      true
    } else false
  }

}

/**
 * Your Bank object will be instantiated and called as such:
 * val obj = new Bank(balance)
 * val param_1 = obj.transfer(account1,account2,money)
 * val param_2 = obj.deposit(account,money)
 * val param_3 = obj.withdraw(account,money)
 */
```