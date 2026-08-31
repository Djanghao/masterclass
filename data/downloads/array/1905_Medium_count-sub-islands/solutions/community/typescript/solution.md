# Simple DFS solution

**Author:** 10974
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5709397/](https://leetcode.com/problems/count-sub-islands/solutions/5709397/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1.  DFS to Eliminate Non-Matching Islands:

First, iterate through each cell in grid2. If you find a 1 in grid2 that corresponds to a 0 in grid1, this part of the island cannot be a sub-island. Use DFS to eliminate this entire island by marking it as 0 in grid2.

2. DFS to Count Sub-Islands:

After eliminating non-matching islands, iterate again through grid2. Every time you find a 1, it's a sub-island. Use DFS to mark the entire sub-island as visited by setting it to 0, and increment the count.

# Complexity
- Time complexity:O( N * M )
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O( N * M )
<!-- Add your space complexity here, e.g. $$O(n)$$ --> 

# Code
```typescript []
function countSubIslands(grid1: number[][], grid2: number[][]): number {
    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid2.length || j >= grid2[0].length || grid2[i][j] === 0) {
            return;
        }
        grid2[i][j] = 0;
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[0].length; j++) {
            if (grid1[i][j] == 0 && grid2[i][j] == 1) {
                dfs(i, j);
            }
        }
    }
    let count = 0;
    for (let i = 0; i < grid2.length; i++) {
        for (let j = 0; j < grid2[0].length; j++) {
            if (grid2[i][j] == 1) {
                count++;
                dfs(i, j);
            }
        }
    }
    return count;
};
```