# Python: maps

**Author:** vokasik
**Votes:** 0
**Link:** [https://leetcode.com/problems/lonely-pixel-ii/solutions/4401611/](https://leetcode.com/problems/lonely-pixel-ii/solutions/4401611/)

---

```
class Solution:
    def findBlackPixel(self, picture: List[List[str]], target: int) -> int:
        grid = [''.join(row) for row in picture]
        R,C = len(grid), len(grid[0])
        row_sum = defaultdict(int)
        col_sum = defaultdict(int)
        group = defaultdict(int)
        for r in range(R):
            for c in range(C):
                if grid[r][c] == 'B':
                    row_sum[r] += 1
                    col_sum[c] += 1
            group[grid[r]] += 1
        count = 0
        for r in range(R):
            for c in range(C):
                if grid[r][c] == 'B':
                    count += row_sum[r] == col_sum[c] == group[grid[r]] == target
        return count
```