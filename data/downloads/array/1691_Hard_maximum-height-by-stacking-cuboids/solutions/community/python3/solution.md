# Python 3 | DP, Sort, O(N^2) | Explanation

**Author:** idontknoooo
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/970397/](https://leetcode.com/problems/maximum-height-by-stacking-cuboids/solutions/970397/)

---

### Explanation
- Sort each cub's length, width, height from small to large
- Sort cub by length, width, height from large to small
- Initialize a 1-D dp array, `dp[i] = largest height if put cuboids[i] at the top`
- Iterate over cuboids, from large to small; try get the largest height by putting itself on previous cube `cub[j] (j < i)`
- Record height while iterating and return the maximum height
- Time: `O(N*N)`
- Space: `O(N)`
### Implementation
```
class Solution:
    def maxHeight(self, cuboids: List[List[int]]) -> int:
        cuboids = sorted([sorted(cub) for cub in cuboids], reverse=True)   # sort LxWxH in cube, then sort cube reversely
        ok = lambda x, y: (x[0] >= y[0] and x[1] >= y[1] and x[2] >= y[2]) # make a lambda function to verify whether y can be put on top of x
        n = len(cuboids)
        dp = [cu[2] for cu in cuboids]                                     # create dp array
        ans = max(dp)
        for i in range(1, n):                                              # iterate over each cube
            for j in range(i):                                             # compare with previous calculated cube
                if ok(cuboids[j], cuboids[i]):                             # update dp[i] if cube[i] can be put on top of cube[j]
                    dp[i] = max(dp[i], dp[j] + cuboids[i][2])              # always get the maximum
            ans = max(ans, dp[i])                                          # record the largest value
        return ans
```