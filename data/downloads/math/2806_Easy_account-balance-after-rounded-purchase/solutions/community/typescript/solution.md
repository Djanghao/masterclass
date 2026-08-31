# Simple solution using Math.round

**Author:** Hanuman-Ghawade
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4416499/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4416499/)

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
function accountBalanceAfterPurchase(purchaseAmount: number): number {
    let result =Math.round(purchaseAmount / 10) * 10
    return 100 - result

};
```