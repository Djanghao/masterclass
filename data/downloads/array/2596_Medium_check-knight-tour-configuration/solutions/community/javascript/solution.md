# Beats 100%

**Author:** coderAustin
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-knight-tour-configuration/solutions/5556328/](https://leetcode.com/problems/check-knight-tour-configuration/solutions/5556328/)

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
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkValidGrid = function (grid) {

    let dir = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, -2], [2, -1], [2, 1], [1, 2]];
    let n = grid.length;
    let step = 0

    dfs = function (x, y) {
        if (grid[x][y] !== step) {
            return false;
        }
        if (step == n * n - 1) {
            return true;
        }
        for (const [i, j] of dir) {
            const newX = x + i;
            const newY = y + j;
            if (newX < 0 || newY < 0 || newX > n - 1 || newY > n - 1 || grid[newX][newY] !== step + 1) {
                continue;
            }
            dfs(newX, newY, ++step);
        }
    }

    dfs(0, 0);
    return step == n * n - 1;

};
```