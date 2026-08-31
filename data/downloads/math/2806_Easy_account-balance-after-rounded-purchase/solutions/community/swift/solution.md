# Swift solution (1 line)

**Author:** Globaler
**Votes:** 1
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3868243/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3868243/)

---


```
class Solution {
    func accountBalanceAfterPurchase(_ purchaseAmount: Int) -> Int {
        return 100 - (purchaseAmount + 5) / 10 * 10
    }
}
```