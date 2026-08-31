# Beat 100% Easy Solution in Time and Memory - DFS

**Author:** malikmuhammadali56
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/5449957/](https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path/solutions/5449957/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {character[][]} grid
 * @return {boolean}
 */

let m = 0;
let n = 0;
var hasValidPath = function(grid) {
    const mem = new Set();
    m = grid.length;
    n = grid[0].length;
    if(grid[0][0] == ')') return false;
    return dfs(0, 0, grid, mem, 0);
};

const dfs = (i, j, grid, mem, currentOpen) => {
    if(i >= m || j >= n || currentOpen < 0) return false;
    if(i == m - 1 && j == n - 1) {
        return grid[i][j] == ')' && currentOpen == 1;
    }

    const key = i + ',' + j + ',' + currentOpen;
    if(mem.has(key)) return false;

    mem.add(key);
    const increase = grid[i][j] == '(' ? 1 : -1;
    return dfs(i + 1, j, grid, mem, currentOpen + increase) || dfs(i, j + 1, grid, mem, currentOpen + increase);
}
```