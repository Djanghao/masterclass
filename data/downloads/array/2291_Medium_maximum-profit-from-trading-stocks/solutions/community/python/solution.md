# Python 3 | Clean Knapsack | Explanation

**Author:** idontknoooo
**Votes:** 31
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/2133902/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/2133902/)

---

### Explanation
- `dp[i]`: Maximum profit when spend $`i`
- Initially `dp[0] = 0`
- Each stock can be only purchase once, thus they are the outer loop
- For the inner loop, we want to test the **present value** against each **cost (from 0 to `budget`)**, and see if we can get a large profit at cost `j` (`dp[j]`) by using the profit at certain cost (`dp[j-p]`); we will do this from larger cost to smaller, to avoid repeat counting.
- Time: `O(mn), m = len(present), n = budget`
### Implementation
```
class Solution:
    def maximumProfit(self, present: List[int], future: List[int], budget: int) -> int:
        dp = [0] * (budget+1)
        for p, f in zip(present, future):
            for j in range(budget, p-1, -1):
                dp[j] = max(dp[j], dp[j-p] + f-p)
        return dp[-1]
```