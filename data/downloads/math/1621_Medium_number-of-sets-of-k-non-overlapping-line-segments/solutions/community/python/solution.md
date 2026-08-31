# 2D DP

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/5233029/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/5233029/)

---

DP state transition explanation:

> Observations and ideas

1. We have 2 options for any point on the line:
- `pick` it
- `skip` it
2. when we `pick`:
- `pick` can be the `start` of a segment.
If it's the `start`, the next point can be either `skipped` or picked as the `end` point for a segment
- `pick` can be the `end` of a segment .
If it's the `end`, the next point can be either `skipped` or picked as the `start` point for a new segment

> The catch
> 
When you `start` a new segment it can be started **IMPORTANT** either at the previous `end` point **OR** at the next point (after a few skipped).


```
            res = dfs(i + 1, is_start, k) % MOD # skip current point
            if is_start: # set/pick current point as start
                return (res + dfs(i + 1, False, k)) % MOD # the next will be end -> i + 1 means that end should be at least 1 later than the start (no 1 point start-end intervals)
            else: # set/pick current point as end
                return (res + dfs(i, True, k - 1)) % MOD # the next will be start -> i + 0 means that the next start can be at the same point as the last end 
```
Now coding:
```
class Solution:
    def numberOfSets(self, N: int, k: int) -> int:
	    # bottom-up
        MOD = 10 ** 9 + 7
        dp = [[0] * 2 for _ in range(k + 1)]
        dp[0][1] = dp[0][0] = 1
        for i in reversed(range(N)):
            for ck in range(1, k + 1):
                dp[ck][1] = (dp[ck][1] + dp[ck][0]) % MOD
                dp[ck][0] = (dp[ck][0] + dp[ck - 1][1]) % MOD
        return dp[-1][1]

        # top-down
        @cache
        def dfs(i, is_start, k):
            if i == N or k == 0:
                return k == 0
            res = dfs(i + 1, is_start, k) % MOD
            if is_start:
                return (res + dfs(i + 1, False, k)) % MOD
            else:
                return (res + dfs(i, True, k - 1)) % MOD
        MOD = 10 ** 9 + 7
        return dfs(0, True, k)
```