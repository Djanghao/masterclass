# JavaScript solutions

**Author:** shengdade
**Votes:** 5
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/512018/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/512018/)

---

### The usual way:

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] > 0) res++;
    }
    res += Math.max(...grid[i]);
    res += Math.max(...grid.map(r => r[i]));
  }
  return res;
};
```

### Using map:

```javascript
var projectionArea = function(grid) {
  const x = grid.reduce((a, b) => a.concat(b), []).filter(x => x > 0).length;
  const y = grid.map(r => Math.max(...r)).reduce((acc, idx) => acc + idx);
  const z = grid[0].map((_, i) => Math.max(...grid.map(r => r[i]))).reduce((acc, idx) => acc + idx);
  return x + y + z;
};
```

### One-liner:

```javascript
var projectionArea = function(grid) {
  return [
    ...grid.reduce((a, b) => a.concat(b), []).filter(x => x > 0).map(_ => 1),
    ...grid.map(r => Math.max(...r)),
    ...grid[0].map((_, i) => Math.max(...grid.map(r => r[i])))
  ].reduce((acc, idx) => acc + idx);
};
```