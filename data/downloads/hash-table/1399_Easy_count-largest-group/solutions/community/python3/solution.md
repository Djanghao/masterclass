# Python DP O(N) 99%/100%

**Author:** xshoan
**Votes:** 56
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/660765/](https://leetcode.com/problems/count-largest-group/solutions/660765/)

---

The idea here is that we can save on calculating sums of digits for bigger numbers if we start from `1` and keep the results in `dp[]`. 

```
class Solution:

    def countLargestGroup(self, n: int) -> int:
        dp = {0: 0}
        counts = [0] * (4 * 9)
        for i in range(1, n + 1):
            quotient, reminder = divmod(i, 10)
            dp[i] = reminder + dp[quotient]
            counts[dp[i] - 1] += 1

        return counts.count(max(counts))
```