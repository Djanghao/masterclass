# 🚀Pathfinding Using 0-1 BFS to Minimize Obstacle Removal ✔Beats 💯

**Author:** ranganathv415
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6092772/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6092772/)

---

# Intuition

This problem can be thought of as finding the shortest path in a weighted graph where moving to a cell with an obstacle (value `1`) has a cost of 1, and moving to an empty cell (value `0`) has no cost. To achieve this efficiently, we utilize a **0-1 Breadth-First Search (BFS)** approach, where a deque (double-ended queue) is used to manage nodes based on their priority (cost).

- **0-cost transitions**: Push to the front of the deque.
- **1-cost transitions**: Push to the back of the deque.

This ensures that nodes with the smallest cost are processed first, similar to Dijkstra's algorithm but optimized for graphs with edge weights of only `0` or `1`.

# Approach

1. **Initialization**:
    - Create a `m x n` `ans` array to store the minimum cost (number of obstacles removed) to reach each cell. Initialize all values to `Infinity` except the starting cell `(0, 0)`, which is set to `0`.
    - Use a deque to store the current cell position. Start with `(0, 0)`.
2. **Traversal**:
    - Define possible directions for movement: up, down, left, and right.
    - While the deque is not empty, pop a cell `(x, y)` from the front.
    - For each neighbor `(i, j)`:
        - Check if it's within the grid bounds.
        - Compute the cost to move to `(i, j)` as the current cell's cost plus the value of the grid at `(i, j)`.
        - If this new cost is less than the existing cost in `ans[i][j]`, update `ans[i][j]`.
            - If the cost is `0`, push `(i, j)` to the front of the deque (higher priority).
            - If the cost is `1`, push `(i, j)` to the back of the deque.
3. **Result**:    
    - Return the value of `ans[m-1][n-1]`, which contains the minimum number of obstacles removed to reach the bottom-right corner.

# Complexity

- **Time Complexity**: ***O(m \xD7 n)***
    - Each cell is processed at most once in the BFS traversal.
- **Space Complexity**: ***O(m \xD7 n)***
    - The `ans` array and the deque can grow to the size of the grid.

# Code

```typescript
function minimumObstacles(grid: number[][]): number {
    const m = grid.length,
        n = grid[0].length;
    const dirs = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    let ans = Array.from({ length: m }, v => new Array(n).fill(Infinity));
    ans[0][0] = 0;
    let deque = [[0, 0]];
    while (deque.length) {
        let [x, y] = deque.shift();
        for (let [dx, dy] of dirs) {
            let [i, j] = [x + dx, y + dy];
            if (i < 0 || i > m - 1 || j < 0 || j > n - 1) continue;
            const cost = grid[i][j];
            if (ans[x][y] + cost >= ans[i][j]) continue;
            ans[i][j] = ans[x][y] + cost;
            deque.push([i, j]);
        }
    }
    return ans[m - 1][n - 1];
};

```

---

## Example and Walkthrough

### Example 1:

**Input**:  
`grid = [[0,1,1], [1,1,0], [1,1,0]]`

**Output**:  
`2`

**Explanation**:

1. Start at `(0, 0)`. Cost = 0.
2. Move right to `(0, 1)` (remove obstacle). Cost = 1.
3. Move right to `(0, 2)` (remove obstacle). Cost = 2.
4. Move down to `(1, 2)` (no obstacle). Cost = 2.
5. Move down to `(2, 2)` (no obstacle). Cost = 2.
6. Return `2` as the minimum number of obstacles removed.

### Example 2:

**Input**:  
`grid = [[0,1,0,0,0], [0,1,0,1,0], [0,0,0,1,0]]`

**Output**:  
`0`

**Explanation**:

1. Start at `(0, 0)`. Cost = 0.
2. Move down, right, or left without encountering obstacles.
3. Reach `(2, 4)` without removing any obstacles.
4. Return `0`.

This approach guarantees efficient traversal with optimal obstacle removal.