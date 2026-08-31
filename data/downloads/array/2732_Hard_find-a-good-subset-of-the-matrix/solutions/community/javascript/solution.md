# Efficient JS solution - Bruteforce (Beat 100% both time and memory)

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4898482/](https://leetcode.com/problems/find-a-good-subset-of-the-matrix/solutions/4898482/)

---

![image.png](./images/0.png)

Pro tip: THE_ONLY_LOVELY_XIE \uD83D\uDC9C

# Complexity
- Let `m == grid.length`, `n == grid[i].length`
- Time complexity: $$O(n + 2^{2m})$$
- Space complexity: $$O(2^m)$$

# Code
```js
let indices = new Int16Array(32);
let THE_EMPTINESS = new Uint16Array(0);
let THE_ONLY_LOVELY_XIE = new Uint16Array(1);
let THE_DUAL = new Uint16Array(2);

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var goodSubsetofBinaryMatrix = function (grid) {
  let n = grid.length;
  let m = grid[0].length;

  indices.fill(-1);
  for (let i = 0; i < n; ++i) {
    let x = 0;
    for (let j = 0; j < m; ++j) {
      x <<= 1;
      x |= grid[i][j];
    }

    if (!x) {
      THE_ONLY_LOVELY_XIE[0] = i;
      return THE_ONLY_LOVELY_XIE;
    }
    indices[x] = i;
  }

  m = (1 << m) - 1;
  for (let x = 1; x < m; ++x) {
    if (indices[x] < 0) continue;
    for (let y = x + 1; y < m; ++y) {
      if (indices[y] < 0 || x & y) continue;

      if (indices[x] < indices[y]) {
        THE_DUAL[0] = indices[x];
        THE_DUAL[1] = indices[y];
      } else {
        THE_DUAL[0] = indices[y];
        THE_DUAL[1] = indices[x];
      }
      return THE_DUAL;
    }
  }

  return THE_EMPTINESS;
};
```