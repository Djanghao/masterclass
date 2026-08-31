# Python 3 | Dynamic Programming Bottom-up | Explanation

**Author:** idontknoooo
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2707692/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2707692/)

---

### Explanation
- State: `dp[x][y]`: max tastiness when spending `x` dollars and `y` coupons
- Initialization: All cells in `dp` starts from 0
- Transition function:
	- Buy without coupon
		- `dp[i][j] = max(dp[i][j], dp[i - price[idx]][j] + tastiness[idx])`
	- Buy with coupon
		- `dp[i][j] = max(dp[i][j], dp[i - price[idx] // 2][j-1] + tastiness[idx])`
- Calculation order
	- From first item to the last: Each item should be used only once, thus this loop should be the outest loop
	- From largest total cost to lowest total cost: to avoid reuse the same item
	- From max coupon used to least coupon used: to avoid reuse the same item
	- The 2nd & 3rd loop can be swapped (i.e. coupon as the 2nd loop, cost as the 3rd loop

### Implementation
```python
class Solution:
    def maxTastiness(self, price: List[int], tastiness: List[int], maxAmount: int, maxCoupons: int) -> int:
        dp = [[0] * (maxCoupons+1) for _ in range(maxAmount+1)]
        n, ans = len(price), 0
        for idx in range(n):
            for i in range(maxAmount, -1, -1):
                for j in range(maxCoupons, -1, -1):
                    if i - price[idx] >= 0:
                        dp[i][j] = max(dp[i][j], dp[i - price[idx]][j] + tastiness[idx])
                    if j > 0 and i - price[idx] // 2 >= 0:
                        dp[i][j] = max(dp[i][j], dp[i - price[idx] // 2][j-1] + tastiness[idx])
					ans = max(ans, dp[i][j])
        return ans
```