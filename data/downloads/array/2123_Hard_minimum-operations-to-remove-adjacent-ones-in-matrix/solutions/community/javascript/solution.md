# DFS Way

**Author:** Asyncy99
**Votes:** -1
**Link:** [https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/5958351/](https://leetcode.com/problems/minimum-operations-to-remove-adjacent-ones-in-matrix/solutions/5958351/)

---

```javascript []
function minimumOperations(grid) {
  const m = grid.length; // Number of rows in the grid
  const n = grid[0].length; // Number of columns in the grid
  const match = Array(m * n).fill(-1); // Array to store matches for nodes (initialized to -1)
  const vis = new Set(); // Set to keep track of visited nodes during DFS
  const g = new Map(); // Graph representation (adjacency list)

  // Directions for moving: down, up, right, left
  const directions = [
    [1, 0], // down
    [-1, 0], // up
    [0, 1], // right
    [0, -1]  // left
  ];

  // Build the graph based on the grid
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      // Only consider cells with odd sum indices and a value of 1
      if ((i + j) % 2 && grid[i][j]) {
        const x = i * n + j; // Convert 2D index to 1D index
        g.set(x, []); // Initialize an adjacency list for this node

        // Check each direction to find valid neighboring nodes
        for (const [dx, dy] of directions) {
          const newX = i + dx; // Calculate new row index
          const newY = j + dy; // Calculate new column index

          // Ensure the new position is within bounds and is valid
          if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY]) {
            // Add valid neighboring node to the adjacency list
            g.get(x).push(newX * n + newY); // Convert back to 1D index
          }
        }
      }
    }
  }

  // DFS function to find a match for the node 'i'
  const find = (i) => {
    for (const j of g.get(i)) { // Explore each adjacent node
      if (!vis.has(j)) { // Check if this node has not been visited
        vis.add(j); // Mark the node as visited
        // If the node is unmatched or if we can find an alternative match for its current match
        if (match[j] === -1 || find(match[j])) {
          match[j] = i; // Assign the match
          return 1; // Return success
        }
      }
    }
    return 0; // Return failure if no match was found
  };

  let ans = 0; // Initialize the count of matches
  // Iterate through all nodes in the graph
  for (const i of g.keys()) {
    ans += find(i); // Try to find a match for each node
    vis.clear(); // Clear the visited set for the next iteration
  }

  return ans; // Return the total number of matches
}

```