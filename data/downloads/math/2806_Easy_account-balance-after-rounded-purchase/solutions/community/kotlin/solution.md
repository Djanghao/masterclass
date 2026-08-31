# Branchless kotlin one liner

**Author:** ra5
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/5199235/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/5199235/)

---

# Intuition
Use integer divide to round instead of branching logic

# Approach
$$purchaseAmount +5$$ is greater than next multiple of 10 if and only if the least significant digit is >= 5. 

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun accountBalanceAfterPurchase(purchaseAmount: Int): Int = 
        100 - ((purchaseAmount + 5) / 10) * 10
}
```