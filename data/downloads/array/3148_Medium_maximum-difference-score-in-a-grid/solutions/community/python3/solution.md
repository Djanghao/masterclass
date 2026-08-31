# Python 3 || 8 lines, padded grid  || T/S: 86% / 61%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5153611/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/5153611/)

---

Here's the plan:
1. We pad `grid` with a top-row and a left-column of `inf` to avoid checking for edge cases. (Illustrated below with input from *Example 1*)
```
        [inf, inf, inf, inf, inf]
        [inf,  9,   5,   7,   3 ]
        [inf,  8,   9,   6,   1 ]
        [inf,  6,   7,  14,   3 ]
        [inf,  2,   5,   3,   1 ]
```
2. We iterate through `grid` upper-left to bottom-right, and we use `grid` to keep track of the optimum scores:
```
        [inf, inf, inf, inf, inf]
        [inf,  9,   5,   5,   3 ]
        [inf,  8,   5,   5,   1 ]
        [inf,  6,   5,   5,   1 ]
        [inf,  2,   2,   2,   1 ]

```
CODE:
```
class Solution:
    def maxScore(self, grid: List[List[int]]) -> int:

        ans, m, n = -inf, len(grid), len(grid[0])
        grid = [[inf]*n] + grid
        grid = [[inf]+row for row in grid]
        # for row in grid: print(row)
        
        for row, col in product(range(m), range(n)):
            mn = min(grid[row][col+1], grid[row+1][col])
            ans = max(ans, grid[row+1][col+1] - mn)
            grid[row+1][col+1] = min(grid[row+1][col+1], mn)
         # for row in grid: print(row)
        
        return ans
```
[https://leetcode.com/problems/maximum-difference-score-in-a-grid/submissions/1257127827/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/submissions/1257127827/)



I could be wrong, but I think that time complexity is *O*(*MN*) and space complexity is *O*(*MN*), in which *M* ~ `m` and *N* ~ `n`.