# Clean Python

**Author:** lokeshsk1
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581085/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581085/)

---



```python []
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        
        r = len(grid); c = len(grid[0])
        rf = 0; cf = 0

        for i in range(r):
            for j in range(c//2):
                if grid[i][j] != grid[i][c-j-1]:
                    rf += 1
        
        for i in range(c):
            for j in range(r//2):
                if grid[j][i] != grid[r-j-1][i]:
                    cf += 1

        return min(rf, cf)
```