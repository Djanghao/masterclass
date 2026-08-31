# [JavaScript] Easy to understand - 2 solutions - 132ms

**Author:** poppinlp
**Votes:** 11
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/388639/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/388639/)

---

The first solution is do it by counting sort. Here's the algorithm:

1. Traversal the whole matrix, calculate the distance for each cell and save them into a list whose index could be used as the distance value.
2. Merge all items in the list and you will get the answer.

```js
const allCellsDistOrder = (r, c, r0, c0) => {
  const buckets = [];
  const ret = [];
  for (let i = 0; i < r; ++i) {
    for (let j = 0; j < c; ++j) {
      const dis = Math.abs(i - r0) + Math.abs(j - c0);
      if (buckets[dis] === undefined) buckets[dis] = [];
      buckets[dis].push([i, j]);
    }
  }
  for (const bucket of buckets) {
    ret.push(...bucket);
  }
  return ret;
};
```

The second solution is based on BFS. Here's the algorithm:

1. Traversal the whole matrix from the `(r0, c0)` cell with a queue by BFS.
2. Do some validation for each cell and you will get the answer.

```js
const allCellsDistOrder = (r, c, r0, c0) => {
  const visited = new Set();
  const ret = [];
  const queue = [[r0, c0]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x > r - 1 || x < 0 || y > c -1 || y < 0 || visited.has(x * 100 + y)) continue;
    ret.push([x, y]);
    visited.add(x * 100 + y);
    [[0, -1], [0, 1], [1, 0], [-1, 0]].forEach(move => {
      queue.push([x + move[0], y + move[1]]);
    });
  }
  return ret;
};
```