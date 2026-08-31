# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/6010155/](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/6010155/)

---

# Intuition
Make all the 1s in a binary grid isolated, meaning no 1s should be adjacent to another 1 in the grid. To achieve this, we must flip certain 1s to 0s, and our goal is to minimize the number of flips.

# Approach
Model this problem as a bipartite graph, where each 1 is a node, and edges exist between nodes if their corresponding 1s are adjacent. Then, by using a matching algorithm (like DFS), we can pair adjacent nodes (connected 1s) and decide which ones to flip.

# Complexity
- Time complexity:
O(m * n) because we traverse each grid cell once and explore neighboring cells during DFS.

- Space complexity:
Also O(m * n) due to the adjacency list and the matches array, which store information about all grid cells.

# Code
```typescript []
function minimumOperations(grid: number[][]): number {
  const numRows = grid.length;
  const numCols = grid[0].length;

  const matches: number[] = new Array(numRows * numCols).fill(-1);
  const visited: Set<number> = new Set();
  const adjacencyList: Map<number, number[]> = new Map();

  const directions: [number, number][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
  ];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if ((row + col) % 2 === 1 && grid[row][col] === 1) {
        const node = row * numCols + col;
        adjacencyList.set(node, []);

        for (const [dx, dy] of directions) {
          const newRow = row + dx;
          const newCol = col + dy;

          if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols && grid[newRow][newCol] === 1) {
            const neighbor = newRow * numCols + newCol;
            adjacencyList.get(node)?.push(neighbor);
          }
        }
      }
    }
  }

  const dfs = (currentNode: number): number => {
    for (const neighbor of adjacencyList.get(currentNode)!) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);

        if (matches[neighbor] === -1 || dfs(matches[neighbor])) {
          matches[neighbor] = currentNode;
          return 1;
        }
      }
    }
    return 0;
  };

  let result = 0;

  for (const currentNode of adjacencyList.keys()) {
    result += dfs(currentNode);
    visited.clear();
  }

  return result;
}

```