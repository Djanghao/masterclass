# 1/0.5/0 Knapsack

**Author:** votrubac
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2666530/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2666530/)

---

Like a regular 1/0 Knapsack, but with the third state (take with a coupon).

Need to use 3D memoisation for the current position, remaining amount, and remaining coupons.

This can be speeded-up by sorting/pruning, but the gain could be limited since `n` is capped at 100.

**Python 3**
```python
class Solution:
    def maxTastiness(self, price: List[int], taste: List[int], maxAmount: int, maxCoupons: int) -> int:
        @cache
        def dfs(i: int, amount: int, coupons: int) -> int:
            return 0 if i >= len(price) else max(
                dfs(i + 1, amount, coupons),
                0 if amount < price[i] else taste[i] + dfs(i + 1, amount - price[i], coupons),
                0 if amount < price[i] // 2 or coupons == 0 else taste[i] + dfs(i + 1, amount - price[i] // 2, coupons - 1)
            )
        return dfs(0, maxAmount, maxCoupons)
```

**C++**
We add `+ 1` to mark a path as explored. Alternatively, we can initialize the `dp` array with `-1`.
```cpp
int maxTastiness(vector<int>& price, vector<int>& tastiness, int maxAmount, int maxCoupons) {
    int dp[101][1001][6] = {};
    function<int(int,int,int)> dfs = [&](int i, int amount, int coupons){
        if (i < price.size() && dp[i][amount][coupons] == 0) {
            dp[i][amount][coupons] = 1 + max({ dfs(i + 1, amount, coupons), 
                amount < price[i] ? 0 : tastiness[i] + dfs(i + 1, amount - price[i], coupons),
                amount < price[i] / 2 || coupons == 0 ? 0 : tastiness[i] + dfs(i + 1, amount - price[i] / 2, coupons - 1) });
        }
        return max(0, dp[i][amount][coupons] - 1);
    };
    return dfs(0, maxAmount, maxCoupons);
}
```