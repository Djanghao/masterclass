# Intuitive TypeScript Solution

**Author:** DawChihLiou
**Votes:** 3
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/3188146/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/3188146/)

---

```
function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacific = new Set<string>();
  const atlantic = new Set<string>();
  const output: number[][] = [];

  for (let c = 0; c < cols; c++) {
    dfs(heights, 0, c, heights[0][c], pacific);
    dfs(heights, rows - 1, c, heights[rows - 1][c], atlantic);
  }

  for (let r = 0; r < rows; r++) {
    dfs(heights, r, 0, heights[r][0], pacific);
    dfs(heights, r, cols - 1, heights[r][cols - 1], atlantic);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = encode(r, c);
      if (pacific.has(key) && atlantic.has(key)) {
        output.push([r, c]);
      }
    }
  }

  return output;
};

function dfs(grid: number[][], r: number, c: number, max: number, visited: Set<string>): void {
  const rows = grid.length;
  const cols = grid[0].length;

  if (
    visited.has(encode(r, c)) ||
    (r < 0 || r >= rows) ||
    (c < 0 || c >= cols) ||
    grid[r][c] < max
  ) {
    return;
  }
  visited.add(encode(r, c));

  dfs(grid, r + 1, c, grid[r][c], visited);
  dfs(grid, r - 1, c, grid[r][c], visited);
  dfs(grid, r, c + 1, grid[r][c], visited);
  dfs(grid, r, c - 1, grid[r][c], visited);
} 

function encode(x: number, y: number) {
  return `${x},${y}`;
}

```