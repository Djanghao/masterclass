# Kotlin simple and fast

**Author:** GrSpirit
**Votes:** 0
**Link:** [https://leetcode.com/problems/simple-bank-system/solutions/4630096/](https://leetcode.com/problems/simple-bank-system/solutions/4630096/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We need to manage user accounts. So let's create the structure

# Approach
<!-- Describe your approach to solving the problem. -->
Create account class to store balance

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$
# Code
```
class Bank(balance: LongArray) {
    private data class Account(var balance: Long)
    private val accounts = balance.map { Account(it) }

    private fun getAccount(num: Int): Account? = 
        if (num < 1 || num > accounts.size) null else accounts[num - 1]

    fun transfer(account1: Int, account2: Int, money: Long): Boolean {
        var acc1 = getAccount(account1) ?: return false
        var acc2 = getAccount(account2) ?: return false
        if (acc1.balance < money) return false
        acc1.balance -= money
        acc2.balance += money
        return true
    }

    fun deposit(account: Int, money: Long): Boolean = getAccount(account)?.run {
        balance += money
        return true
    } ?: false

    fun withdraw(account: Int, money: Long): Boolean = getAccount(account)?.run {
        if (balance < money) return false
        balance -= money
        return true
    } ?: false

}

```