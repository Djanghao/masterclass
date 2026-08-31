# [JavaScript] Easy to understand - BFS - 128ms

**Author:** poppinlp
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/393145/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/393145/)

---

Since we need to find out the minimum steps from one fixed point to another fixed point. The straight forward solution to do this is BFS.

- Maintain a `visited` set to prevent endless loop
- Use `x`, `y` and `status` to identifies a status uniquely
- Traversal all possible status for current step and get the possible status for next step
- Finally get the answer

```js
const minimumMoves = grid => {
  const visited = new Set();
  const n = grid.length;
  let queue = [[0, 0, "h"]];
  let step = 0;
  while (queue.length) {
    let next = [];
    for (let i = 0; i < queue.length; ++i) {
      const key = queue[i].join("-");
      if (visited.has(key)) continue;
      visited.add(key);
      const [x, y, status] = queue[i];
      if (x === n - 1 && y === n - 2 && status === "h") return step;
      if (status === "h") {
        x + 1 < n && grid[x + 1][y] === 0 && grid[x + 1][y + 1] === 0 && next.push([x, y, "v"]) && next.push([x + 1, y, "h"]);
        y + 2 < n && grid[x][y + 2] === 0 && next.push([x, y + 1, "h"]);
      } else {
        y + 1 < n && grid[x][y + 1] === 0 && grid[x + 1][y + 1] === 0 && next.push([x, y, "h"]) && next.push([x, y + 1, "v"]);
        x + 2 < n && grid[x + 2][y] === 0 && next.push([x + 1, y, "v"]);
      }
    }
    ++step;
    queue = next;
  }
  return -1;
};
```