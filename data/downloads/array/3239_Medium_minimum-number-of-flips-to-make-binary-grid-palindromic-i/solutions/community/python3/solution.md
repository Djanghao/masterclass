# Python 3 || 8 lines, transpose  ||

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581075/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581075/)

---

```
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:

        m, n  = len(grid)//2, len(grid[0])//2
        row_ans, col_ans = 0, 0
        
        
        row_ans= sum(row[i]^row[~i] for i in range(n) for row in grid)

        grid = zip(*grid)

        for row in grid:
            for i in range(m):
                col_ans+= row[i]^row[~i]    

        return min(row_ans, col_ans)
```