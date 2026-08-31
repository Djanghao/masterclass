# 🔥 Clean JavaScript Solution better than 100%

**Author:** santoshyadav979439
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5356588/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5356588/)

---

# Intuition
traverse 4 boundries. 

# Approach
Extension of 
https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5356304/simple-java-script-solution-with-explanation-100-faster/

# Complexity
- Time complexity:
O(m*n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
    const m = grid.length
    const n = grid[0].length;
    let top = Infinity, left = Infinity, bottom = -Infinity, right = -Infinity;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                top = Math.min(i, top)
                bottom = Math.max(i, bottom)
                left = Math.min(j, left)
                right = Math.max(j, right)
            }
        }
    }
    return (bottom-top + 1) * (right - left + 1)
};
```