# JavaScript solution

**Author:** shengdade
**Votes:** 5
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/512251/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/512251/)

---

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  const height = grid.length;
  const width = grid[0].length;
  let sum = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] > 0) sum += grid[i][j] * 4 + 2;
      if (i > 0) sum -= 2 * Math.min(grid[i - 1][j], grid[i][j]);
      if (j > 0) sum -= 2 * Math.min(grid[i][j - 1], grid[i][j]);
    }
  }
  return sum;
};
```

* 90/90 cases passed (52 ms)
* Your runtime beats 100 % of javascript submissions
* Your memory usage beats 100 % of javascript submissions (34.7 MB)