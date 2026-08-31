# PHP solution

**Author:** azizbekeshonaliyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4359952/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/4359952/)

---

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```
class Solution {

    /**
     * @param Integer $purchaseAmount
     * @return Integer
     */
    function accountBalanceAfterPurchase($purchaseAmount) {
        $a = (100 - $purchaseAmount) % 10;
        return $a <= 5 ? (100 - $purchaseAmount - $a) : (100 - $purchaseAmount - $a + 10);
    }
}
```