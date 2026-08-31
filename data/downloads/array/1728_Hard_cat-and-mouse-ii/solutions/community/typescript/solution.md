# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/cat-and-mouse-ii/solutions/5854391/](https://leetcode.com/problems/cat-and-mouse-ii/solutions/5854391/)

---

# Intuition
The problem involves a cat and a mouse navigating a grid, where the mouse must reach food while avoiding the cat. The challenge is to determine if the mouse can win given their jumping abilities and the positions of walls, the cat, and the food.

# Approach
Use a depth-first search (DFS) algorithm with memoization to explore all possible moves of the mouse and the cat, checking if the mouse can reach the food before the cat can catch it or reach the food first.

# Complexity
- Time complexity:
O(4 turns) due to the four possible directions for movement.

- Space complexity:
O(states) for memoization, where states are unique configurations of the mouse and cat positions and the current turn. Given the constraints, this is efficient enough to handle the problem within limits.

# Code
```typescript []
type Position = [number, number]; // Type alias for coordinates

/**
 * Determines if the mouse can win the game given the grid and jump lengths.
 * @param {string[]} grid - The game grid with walls, players, and food.
 * @param {number} catJump - The maximum jump length of the cat.
 * @param {number} mouseJump - The maximum jump length of the mouse.
 * @return {boolean} - True if the mouse can win, otherwise false.
 */
function canMouseWin(grid: string[], catJump: number, mouseJump: number): boolean {
    let mouse: Position = [0, 0];
    let cat: Position = [0, 0];
    let food: Position = [0, 0];
    const n: number = grid.length;
    const m: number = grid[0].length;
    const directions: Position[] = [
        [0, 1],  // right
        [0, -1], // left
        [1, 0],  // down
        [-1, 0]  // up
    ];

    // Locate the positions of the mouse, cat, and food
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 'M') {
                mouse = [i, j];
            } else if (grid[i][j] === 'C') {
                cat = [i, j];
            } else if (grid[i][j] === 'F') {
                food = [i, j];
            }
        }
    }

    // Check if coordinates are within grid boundaries
    function within(x: number, y: number): boolean {
        return x >= 0 && x < n && y >= 0 && y < m;
    }

    const dp = new Map<string, boolean>(); // Memoization map

    // Depth-First Search function to explore possible moves
    function dfs(mx: number, my: number, cx: number, cy: number, turn: number): boolean {
        if (turn >= 100) return false; // Limit the number of turns
        const [fx, fy] = food;

        if (mx === cx && my === cy) return false; // Cat catches Mouse
        if (fx === mx && fy === my) return true; // Mouse reaches Food
        if (fx === cx && fy === cy) return false; // Cat reaches Food

        const key = `${mx}|${my}|${cx}|${cy}|${turn}`;
        if (dp.has(key)) return dp.get(key)!; // Retrieve from memoization

        // If it's the mouse's turn
        if (turn % 2 === 0) {
            for (const [dr, dc] of directions) {
                for (let j = 0; j <= mouseJump; j++) {
                    const nr = mx + dr * j; // New mouse row
                    const nc = my + dc * j; // New mouse column
                    if (!within(nr, nc)) break; // Out of bounds
                    if (grid[nr][nc] === '#') break; // Hit a wall
                    if (dfs(nr, nc, cx, cy, turn + 1)) { // Recursive call
                        dp.set(key, true);
                        return true; // Mouse can win
                    }
                }
            }
            dp.set(key, false);
            return false; // No winning move found
        } else {
            // If it's the cat's turn
            for (const [dr, dc] of directions) {
                for (let j = 0; j <= catJump; j++) {
                    const nr = cx + dr * j; // New cat row
                    const nc = cy + dc * j; // New cat column
                    if (!within(nr, nc)) break; // Out of bounds
                    if (grid[nr][nc] === '#') break; // Hit a wall
                    if (!dfs(mx, my, nr, nc, turn + 1)) { // Recursive call
                        dp.set(key, false);
                        return false; // Cat prevents Mouse from winning
                    }
                }
            }
            dp.set(key, true);
            return true; // Cat can't prevent Mouse from winning
        }
    }

    const [mx, my] = mouse; // Mouse starting position
    const [cx, cy] = cat;   // Cat starting position
    return dfs(mx, my, cx, cy, 0); // Start the DFS
}

```