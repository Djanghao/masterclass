# Official Solution

**Link:** [https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solution/](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solution/)

---

[TOC]

## Solution

---

### Approach 1: Iterative Simulation

#### Intuition

We want to determine which unoccupied cells are unguarded given a grid populated by guards, walls, and empty cells. 

The vision of each guard is limited:
- They can see every cell in the four cardinal directions from their position: north, east, south, and west. In other words, they cannot see diagonally.
- They cannot see past walls. 

Since we are given the locations of the guards and walls in the grid, the simplest approach will be to simulate each guard's range of vision. We can iterate through each direction from the guard's position until we either reach the grid's boundary, encounter another guard, or a wall, which blocks the guard's line of sight. 

The key things to keep in mind are:

- Guards and walls occupy cells that cannot be guarded, so these should be distinctly marked.
- For each guard, visibility should be checked in all four directions until an obstruction or the grid’s edge is reached.
- Once all guarded cells are marked, any unmarked cells represent unguarded areas, which can then be counted to find the solution.

The following is a simulation of the approach, resulting in a final answer of 7 unguarded cells.

!?!../Documents/2257/2257_count_unguard.json:755,470!?!

#### Algorithm

- Initialize constants:
  - `UNGUARDED` (0): Represents an unguarded cell.
  - `GUARDED` (1): Represents a cell that is guarded.
  - `GUARD` (2): Represents a cell with a guard.
  - `WALL` (3): Represents a wall cell.

- Define the function `markguarded` to mark cells as guarded:
  - Traverse upwards from the given `(row, col)` position:
    - If the cell is a wall or already has a guard, stop marking.
    - Otherwise, mark the cell as `GUARDED`.
  - Traverse downwards, leftwards, and rightwards in a similar manner to mark all reachable cells as `GUARDED` from the given position.

- Define the function `countUnguarded` to count unguarded cells:
  - Initialize a grid of size `m x n`, where each cell is initially set to `UNGUARDED`.
  - Mark the positions of guards in the grid as `GUARD`.
  - Mark the positions of walls in the grid as `WALL`.
  - For each guard, call `markguarded` to mark all cells that are guarded by that guard.
  
- After marking all guarded cells, iterate through the grid and count the number of cells that are still `UNGUARDED`.

- Return the count of unguarded cells.

#### Implementation

<iframe src="https://leetcode.com/playground/A8EV58Xz/shared" frameBorder="0" width="100%" height="500" name="A8EV58Xz"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows, $n$ the number of columns, $g$ be the number of guards in the `guards` list, and $w$ be the number of walls in the `walls` list.

- Time Complexity: $O(m \cdot n)$

    Initializing the grid of size $m \times n$ takes $O(m \cdot n)$.

    Marking guards and walls in the grid requires iterating over the `guards` and `walls` arrays, which takes $O(g + w)$. However, since $g, w \leq m \cdot n$, this step is bounded by $O(m \cdot n)$.

    For each guard, the `markguarded` function traverses in four directions (up, down, left, right) but stops as soon as a wall, another guard, or the grid boundary is encountered. Each cell can be visited at most four times (once from each direction). Hence, marking all guarded cells is proportional to the total number of cells, taking $O(m \cdot n)$.

    Finally, counting the unguarded cells involves iterating over the entire grid, which also takes $O(m \cdot n)$.

    Combining all steps, the overall time complexity is: $O(m \cdot n) + O(m \cdot n) + O(m \cdot n) = O(m \cdot n)$.

- Space Complexity: $O(m \cdot n)$

    The grid occupies $O(m \cdot n)$ space. No additional space is used for recursion or other data structures, as the `markUnguarded` function uses iterative loops for marking cells.

    Thus, the overall space complexity is $O(m \cdot n)$.

---

### Approach 2: Recursive Way

#### Intuition

We begin by marking the positions of the guards and walls in the grid, just like in the first approach. Then, for each guard, we trigger recursion in all four directions. Each recursive call will explore one direction as far as possible, marking all the reachable cells as "guarded." The exploration stops when it encounters a wall or another guard, and we repeat this process with other guards.

There is not much difference between Approach 1 and Approach 2 on a fundamental level, apart from their implementation, so this is meant to showcase a different implementation.

#### Algorithm

- Initialize constants:
  - `UNGUARDED` (0): Represents an unguarded cell.
  - `GUARDED` (1): Represents a cell that is guarded.
  - `GUARD` (2): Represents a cell with a guard.
  - `WALL` (3): Represents a wall cell.

- Define `recurse(row, col, grid, direction)` function to perform recursive Search:
  - If `row` or `col` is out of bounds, or if the cell is a guard or a wall, return.
  - Mark the current cell as `GUARDED`.
  - Recursively call `recurse` for neighboring cells based on the given direction ('U', 'D', 'L', or 'R').

- Define `countUnguarded(m, n, guards, walls)` to count the unguarded cells:
  - Initialize a `grid` of size `m x n` with all cells set to `UNGUARDED`.
  
  - Mark the guards' positions in the `grid` by setting the respective cells to `GUARD`.
  
  - Mark the walls' positions in the `grid` by setting the respective cells to `WALL`.
  
  - For each guard:
    - Call `recurse` to mark the cells as `GUARDED` by traversing in all four directions (Up, Down, Left, Right).
  
  - After marking all guarded cells, count the number of cells that are still `UNGUARDED` in the grid.
  
- Return the count of unguarded cells.

#### Implementation


<iframe src="https://leetcode.com/playground/3MhfHJ6b/shared" frameBorder="0" width="100%" height="500" name="3MhfHJ6b"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows, $n$ the number of columns, $g$ be the number of guards in the `guards` list, and $w$ be the number of walls in the `walls` list.

- Time Complexity: $O(m \cdot n)$
    
    Initializing the grid of size $m \times n$ takes $O(m \cdot n)$.
    
    Marking guards and walls in the grid involves iterating over the `guards` and `walls` arrays, which takes $O(g + w)$. Since $g, w \leq m \cdot n$, this step is bounded by $O(m \cdot n)$ in the worst case.

    When marking guarded cells, each cell in the grid can be visited at most four times (once for each possible direction: up, down, left, right) across all guards. This means that the total traversal across all guards is proportional to the number of cells in the grid, making the marking process $O(m \cdot n)$.

    Counting the unguarded cells at the end involves iterating through all cells in the grid, which takes $O(m \cdot n)$.

    Combining all these steps, the overall time complexity simplifies to $O(m \cdot n)$.

- Space Complexity: $O(m \cdot n)$
  
    The primary space usage is the grid, which requires $O(m \cdot n)$.
    
    The DFS recursion has a space complexity up to $O((m + n))$ due to the recursive stack in the worst case where it could traverse a straight line of unguarded cells. However, this is less significant than $O(m \cdot n)$ in terms of space complexity.

    Thus, the overall space complexity is $O(m \cdot n)$.

---

### Approach 3: Visibility Axis

#### Intuition

To approach this differently, we can spread visibility from each guard across the grid, row by row and column by column. At first, all cells are considered unguarded. As we go through each row and column, we update the grid to show which areas each guard can see. The important thing is that when a guard marks a cell as "guarded," it’s only marked once. If another guard later sees the same cell, we don’t mark it again since it has already been marked. This helps avoid doing the same work twice.

The process happens in two main steps: first, we check rows, and then we check columns. In each step, we only update visibility in the direction we’re focusing on. Once a guard marks a cell as "guarded," it won’t be marked again.

For example, if Guard A can see cell (2, 3), we mark it as "guarded." Later, if Guard B can also see cell (2, 3), we don’t mark it again because Guard A already did. This method makes the process more efficient by preventing unnecessary marking.

#### Algorithm

- Initialize constants:
  - `UNGUARDED` (0): Represents an unguarded cell.
  - `GUARDED` (1): Represents a cell that is guarded.
  - `GUARD` (2): Represents a cell with a guard.
  - `WALL` (3): Represents a wall cell.

- Initialize a 2D grid `grid` of size `m x n` with all cells set to `UNGUARDED`.

- Mark the positions of guards in the grid:
  - For each guard in `guards`, set `grid[guard[0]][guard[1]] = GUARD`.

- Mark the positions of walls in the grid:
  - For each wall in `walls`, set `grid[wall[0]][wall[1]] = WALL`.

- Define a helper function `updateCellVisibility` to handle updating visibility of cells:
  - If a cell contains a guard (`GUARD`), return `true`.
  - If a cell contains a wall (`WALL`), return `false`.
  - Otherwise, if the line of sight is active, mark the cell as `GUARDED`.

- Perform horizontal passes over the grid:
  - For each row:
    - Traverse from left to right, updating visibility based on the guard's position.
    - Traverse from right to left, updating visibility again for the row.

- Perform vertical passes over the grid:
  - For each column:
    - Traverse from top to bottom, updating visibility based on the guard's position.
    - Traverse from bottom to top, updating visibility again for the column.

- Iterate through the entire grid and count cells that are still marked as `UNGUARDED`.

- Return the count of unguarded cells.

#### Implementation

> Java does not allow nested function definitions directly inside another function. To fix this, the helper function updateCellVisibility was moved outside of the countUnguarded method.

<iframe src="https://leetcode.com/playground/hTpsxHyi/shared" frameBorder="0" width="100%" height="500" name="hTpsxHyi"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows, $n$ the number of columns, $g$ be the number of guards in the `guards` list, and $w$ be the number of walls in the `walls` list.

- Time complexity: $O(m \times n)$

    The first loop marks the positions of the guards, which takes $O(g)$ times. However, since we're iterating through the grid's dimensions, the overall complexity for this part remains $O(m \times n)$.
    
    The second loop marks the positions of the walls, similarly taking $O(w)$ time, but again the overall time complexity remains $O(m \times n)$ for iterating through the grid.

    The third set of loops processes the horizontal and vertical passes over the grid, where each pass involves iterating over all cells in the grid, resulting in $O(m \times n)$ for each direction (horizontal and vertical). Since we have two directions, the total complexity for this part is $O(2 \times m \times n) = O(m \times n)$.
    
    Finally, the grid is scanned again to count the unguarded cells, which takes $O(m \times n)$.

    Therefore, the overall time complexity is $O(m \times n)$.

- Space complexity: $O(m \times n)$

    The primary space used by the algorithm is the `grid`, which has dimensions $m \times n$. This grid stores the state for each cell (unguarded, guarded, guard, or wall). Hence, the space complexity is dominated by the space needed for the grid, which is $O(m \times n)$.

    Additionally, the `updateCellVisibility` function uses constant space, and there are no other significant data structures contributing to space usage. Thus, the space complexity is $O(m \times n)$.

---