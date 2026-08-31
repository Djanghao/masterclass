# One Liner

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3868120/](https://leetcode.com/problems/account-balance-after-rounded-purchase/solutions/3868120/)

---

**C++**
```cpp
int accountBalanceAfterPurchase(int purchaseAmount) {
    return 100 - (purchaseAmount + 5) / 10 * 10;
}
```