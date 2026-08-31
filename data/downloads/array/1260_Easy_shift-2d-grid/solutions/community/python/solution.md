# ✅ [Python] 3 Lines || 3 steps || Clean and Simple Solution

**Author:** linfq
**Votes:** 42
**Link:** [https://leetcode.com/problems/shift-2d-grid/solutions/1934852/](https://leetcode.com/problems/shift-2d-grid/solutions/1934852/)

---


**Please UPVOTE if you LIKE!** \uD83D\uDE01
```
class Solution(object):
    def shiftGrid(self, grid, k):
        l, m, n, k = [num for row in grid for num in row], len(grid), len(grid[0]), k % (len(grid) * len(grid[0]))  # grid to list
        l = l[-k:] + l[:-k]  # shift k times
        return [l[i * n: i * n + n] for i in range(m)]  # list to grid
```

**If you have any question, feel free to ask. If you like the solution or the explanation, Please UPVOTE!**