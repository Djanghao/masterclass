# Kotlin OOP Solution | O(n) Time, beats 100%

**Author:** naXa777
**Votes:** 2
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/4717984/](https://leetcode.com/problems/lemonade-change/solutions/4717984/)

---

# Approach

Greedy

# Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code

```kt
class Solution {
    fun lemonadeChange(bills: IntArray): Boolean {
        bank.reset()
        return bills.all { bill ->
            bank.change(bill)
        }
    }

    companion object {
        private val bank = Bank()
    }
}

private class Bank() {
    private var five: Int = 0
    private var ten: Int = 0

    fun change(bill: Int): Boolean {
        when (bill) {
            5 -> {
                ++this.five
            }
            10 -> {
                if (this.five == 0) return false
                --this.five
                ++this.ten
            }
            20 -> {
                if (this.ten == 0) {
                    if (this.five < 3) return false
                    this.five -= 3
                } else {
                    if (this.five == 0) return false
                    --this.five
                    --this.ten
                }
            }
            else -> {}
        }
        return true
    }

    fun reset() {
        this.five = 0
        this.ten = 0
    }
}
```

# Screenshot

![image.png](./images/0.png)
