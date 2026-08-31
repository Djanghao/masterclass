# Beats 100% c#

**Author:** user2366HD
**Votes:** 0
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/6020054/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/6020054/)

---

# Code
```csharp []
public class Solution {
    public int AccountBalanceAfterPurchase(int purchaseAmount) {
        return 100 - (int)(Math.Round((decimal)purchaseAmount / 10, MidpointRounding.AwayFromZero)) * 10;
    }
}
```