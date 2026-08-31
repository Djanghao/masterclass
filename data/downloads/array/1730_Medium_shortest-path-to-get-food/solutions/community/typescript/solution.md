# Solution Using BFS & Amplitude Search - Easy to Understand (90ms = Beats 100%) ✅

**Author:** RubenChirino
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/5023443/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/5023443/)

---

# Approach: Breadth-First Search (BFS) for Shortest Path to Food

## Problem Statement
Given a grid where each cell can be:
- An obstacle (`'X'`) that cannot be traversed.
- Open space (`'O'`) that can be moved through.
- Food (`'#'`) which is the target to reach.
- The starting position (`'*'`).

The goal is to find the shortest path from the start position (`'*'`) to any food cell (`'#'`) using adjacent (**up, down, left, right**) moves.

## Solution Details

### Global Variables
- `DIRECTIONS`: An array of arrays representing possible movement directions (north, east, south, west).
- `ROWS`, `COLUMNS`: Variables to store the dimensions of the grid.
- `GRID`: The grid itself, stored globally for easy access across helper functions.

### Function: `getFood(grid)`
- **Input**: A 2D grid as described.
- **Output**: The minimum number of steps from '*' to the nearest '#'. Returns `-1` if no path is possible.
- **Process**:
  1. Initialize global variables with the grid's dimensions and content.
  2. Locate the starting position ('*') using the `getPersonPosition` helper function.
  3. If no start position is found, immediately return `-1`.
  4. Initialize a queue for BFS, starting with the position of '*'.
  5. While there are positions in the queue:
     - Dequeue the current position.
     - For each possible direction:
       - Calculate the new position.
       - Use the `isValid` function to check if the move is legal (i.e., within bounds, not visited, not an obstacle).
       - If the new position is food ('#'), return the current distance plus one.
       - Otherwise, mark as visited, update the distance, and enqueue the new position.

### Function: `getPersonPosition()`
- Searches the entire grid to find the starting position ('*').
- Returns the position with an initial distance of `0`.
- Returns `null` if no start position is found, indicating an error in input setup.

### Function: `isValid(row, column)`
- Checks if a position is within the grid boundaries and not previously visited or blocked.
- Ensures that the BFS only processes valid moves.

# Complexity

## Time Complexity

**O(m * n)**

- **Explanation**: Each cell in the grid of size `m` by `n` (where `m` is the number of rows and `n` is the number of columns) is visited at most once in the worst case. The BFS algorithm processes each cell once, exploring all four possible directions from each cell. However, once a cell is visited, it is marked as visited ('X'), and it will not be processed again.

## Space Complexity

**O(m * n)**

- **Explanation**: In the worst case, the space complexity is also `O(m * n)` due to the queue potentially holding a number of positions close to the total number of cells in the grid. This occurs particularly in dense grids where the path to the food is blocked in many directions, requiring the algorithm to store many positions in the queue before reaching the food or exhausting all possibilities.

# Code
```
const DIRECTIONS: number[][] = [[-1, 0], [0, 1], [1, 0], [0, -1]];
let ROWS: number;
let COLUMNS: number;
let GRID: string[][];

type Position = {
    row: number,
    column: number,
    distance: number
};

function getFood(grid: string[][]): number {
    if (grid == null || grid.length === 0) {
        return -1;
    }

    GRID = grid;
    ROWS = grid.length;
    COLUMNS = grid[0].length;

    // Get initial position
    const personPosition = getPersonPosition();
    if (!personPosition) {
        return -1; // Early exit if no starting position is found
    }

    // BFS 
    const queue: Array<Position> = [];
    queue.push(personPosition);
    while (queue.length) {
        const curPosition = queue.shift();
        for (let i = 0; i < DIRECTIONS.length; i++) {
            const direction = DIRECTIONS[i];
            const nextRow = curPosition.row + direction[0];
            const nextColumn = curPosition.column + direction[1];

            if (isValid(nextRow, nextColumn)) {
                // Check if we find the food
                if (GRID[nextRow][nextColumn] === '#') {
                    return curPosition.distance + 1;
                }
                // Mark the current positon as visited
                GRID[nextRow][nextColumn] = 'X';
                // Continue the search, add the cur positon to the queue
                queue.push({ row: nextRow, column: nextColumn, distance: curPosition.distance + 1 });
            }
        } 
    }

    return -1;
};

// Locate the start position marked by '*'
function getPersonPosition(): Position | null {
    for (let row = 0; row < ROWS; row++) {
        for (let column = 0; column < COLUMNS; column++) {
            if (GRID[row][column] === '*') {
                return { row, column, distance: 0 };
            }
        }
    }
    return null;
}

// Check boundaries & if the position is not valid or it was already visited
function isValid(row: number, column: number) {
    return row >= 0 && row < ROWS && column >= 0 && column < COLUMNS && GRID[row][column] !== 'X';
}
```