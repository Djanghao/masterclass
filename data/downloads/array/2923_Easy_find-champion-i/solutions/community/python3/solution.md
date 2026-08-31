# ✅Python || Easy Approach || 4 Lines Beats 100%

**Author:** chuhonghao01
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4250451/](https://leetcode.com/problems/find-champion-i/solutions/4250451/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If a team is the champion, then it is stronger than all the other teams(which means it is stronger than (n - 1) teams).
# Approach
<!-- Describe your approach to solving the problem. -->
So for the i-th row (i-th index in grid), there will be (n - 1) "1"s in the champion team's row.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findChampion(self, grid: List[List[int]]) -> int:
        
        n = len(grid)
        
        for i in range(n):
            if sum(grid[i]) == n - 1:
                return i
```