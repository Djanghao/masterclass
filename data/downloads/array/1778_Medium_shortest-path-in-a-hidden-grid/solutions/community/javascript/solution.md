# DFS + BFS

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/6091547/](https://leetcode.com/problems/shortest-path-in-a-hidden-grid/solutions/6091547/)

---

1. Creates a grid centered at (500,500) to map the unknown maze, where cells can be unvisited(0), path(1), target(2), or visited/blocked(-1)

2. Uses DFS with backtracking to explore and map out the entire reachable maze, moving in all 4 directions and marking cells appropriately

3. Once maze is mapped and target is found, uses BFS starting from center to find shortest path to target
4. BFS tracks distance while exploring, returns distance+1 when target found or -1 if no path exists


```javascript []
/**
 * @param {GridMaster} master
 * @return {number}
 */
const findShortestPath = function (master) {
  // Grid size and direction mappings ([dx,dy,forward,backward])
  const N = 500, dirs = [[-1, 0, 'U', 'D'], [1, 0, 'D', 'U'], [0, -1, 'L', 'R'], [0, 1, 'R', 'L']];
  // Initialize grid: 0=unvisited, 1=path, 2=target, -1=visited/blocked
  const g = Array.from({ length: 2 * N + 1 }, () => Array(2 * N + 1).fill(0));

  // Step 1: DFS to map out the grid
  const dfs = (x, y) => {
    g[x][y] = master.isTarget() ? 2 : 1;
    for (const [dx, dy, f, b] of dirs) {
      if (master.canMove(f)) {
        master.move(f);
        const nx = x + dx, ny = y + dy;
        if (!g[nx][ny]) dfs(nx, ny);
        master.move(b);
      }
    }
  }

  // Map grid starting from center
  dfs(N, N);

  // Step 2: BFS to find shortest path to target
  const q = [[N, N, 0]];  // [x,y,distance]
  g[N][N] = -1;  // Mark start as visited

  while (q.length) {
    const [x, y, d] = q.shift();
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (g[nx]?.[ny] === 2) return d + 1;  // Found target
      if (g[nx]?.[ny] === 1) {  // Valid path
        q.push([nx, ny, d + 1]);
        g[nx][ny] = -1;  // Mark as visited
      }
    }
  }
  return -1;  // No path found
};
```