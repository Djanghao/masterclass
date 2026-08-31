# simple if else solution

**Author:** amaltscaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4745642/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4745642/)

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
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    let x, y, z;
    x = Math.floor(purchaseAmount/10);
    y = purchaseAmount%10;
    z = y>=5 ? 10 : 0;
    console.log(x, y , z)
    return 100 -( x*10 + z);
};
```