# JavaScript

**Author:** ThakurBallary
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420042/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3420042/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(mn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const ans = [];
    for (let i = 0; i < grid[0].length; i++) {
        let mx = 0;
        for (let j = 0; j < grid.length; j++) {
            mx = Math.max(mx, grid[j][i].toString().length);
        }
        ans.push(mx);
    }
    return ans;
};
```