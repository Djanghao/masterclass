# scala 1 line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3930445/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3930445/)

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
```
object Solution {
    def accountBalanceAfterPurchase(purchaseAmount: Int): Int = 
        100 - (5 + purchaseAmount) / 10 * 10
    
}
```