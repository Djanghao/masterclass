# Go | one-liner [math]

**Author:** MichaelGov-ctrl
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/5422273/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/5422273/)

---

# Code
```
func accountBalanceAfterPurchase(purchaseAmount int) int {
    return 100 - (10 * ((purchaseAmount+5) / 10))
}

```