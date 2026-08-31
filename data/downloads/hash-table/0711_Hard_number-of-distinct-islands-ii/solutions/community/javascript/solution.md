# Javascript - DFS + Sort

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/5122877/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/5122877/)

---

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands2 = function (grid) {
  const n = grid.length;
  const m = grid[0].length;
  let key = 2;
  const map = {};
  const set = new Set([]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 0) continue;
      map[key] = [];
      dfs(map[key], i, j, n, m, grid);
      const result = normalize(map[key]);
      set.add(result);
      key++;
    }
  }

  return set.size;
};

function dfs(positions, i, j, n, m, grid) {
  if (i < 0 || i >= n || j < 0 || j >= m || grid[i][j] === 0) return;
  grid[i][j] = 0;
  positions.push([i, j]);
  dfs(positions, i, j - 1, n, m, grid);
  dfs(positions, i - 1, j, n, m, grid);
  dfs(positions, i, j + 1, n, m, grid);
  dfs(positions, i + 1, j, n, m, grid);
}

function normalize(positions) {
  const arrays = new Array(8).fill().map((_) => []);
  for (const [i, j] of positions) {
    arrays[0].push([i, j]);
    arrays[1].push([i, -j]);
    arrays[2].push([-i, j]);
    arrays[3].push([-i, -j]);
    arrays[4].push([j, i]);
    arrays[5].push([j, -i]);
    arrays[6].push([-j, i]);
    arrays[7].push([-j, -i]);
  }

  for (const array of arrays) array.sort(customSort);
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 1; j < arrays[i].length; j++) {
      const ni = arrays[i][j][0] - arrays[i][0][0];
      const nj = arrays[i][j][1] - arrays[i][0][1];
      arrays[i][j] = [ni, nj];
    }
    arrays[i][0] = [0, 0];
  }

  arrays.sort((a, b) => (JSON.stringify(a) < JSON.stringify(b) ? -1 : 1));
  return JSON.stringify(arrays[0]);
}

function customSort(a, b) {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
}

```