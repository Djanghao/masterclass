# [Python] Dynamic Programming, O(cuts.length^3)

**Author:** delphih
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/780889/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/780889/)

---

Very similar to [312. Burst Balloons](https://leetcode.com/problems/burst-balloons/).

Cost of each cut is determined by the closest left and right cut that is done before it. In a given range, the cost of the first cut is certain ---- the length of this range.

Define `dp[i][j]` as the minimum cost of finishing all the cuts between `i`th and `j`th cut exclusively, **while `i`th and `j`th cut is already done**. Then we just loop through each cut as the first cut and find the minimum cost.

Here is my python code:
```
    def minCost(self, n: int, cuts: List[int]) -> int:
        cuts.extend([0, n])  # add 2 fake cuts as the boundary of the first cut
        cuts.sort()
        @functools.lru_cache(None)
        def f(i, j):
            if i + 1 >= j: return 0
            return cuts[j] - cuts[i]  # cost of the first cut between ith and jth cut
                + min((f(i, k) + f(k, j) for k in range(i+1, j)), default=0)  # go through all the cuts as the first cut
        return f(0, len(cuts)-1)
```