# Official Solution

**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solution/](https://leetcode.com/problems/trapping-rain-water-ii/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a grid, `heightMap`, where each element represents the height of the corresponding cell in the 3D representation of the map. Our task is to calculate the total amount of water trapped on the map after it rains.

We can assume that it rains an infinite amount of water, but the water stays inside any area of the map only if there is a boundary that traps it. Specifically, the water remains on top of a cell as long as its combined height (the height of the cell plus the water above it) is less than or equal to the height of all its neighbors. If any neighbor is lower, the water will flow out to that lower cell. 

---

### Approach: BFS + Priority Queue 

#### Intuition

Building on the earlier observation, the total height of any cell (its original height plus any trapped water) must not exceed the smallest total height of its neighbors. Specifically, it cannot exceed the smallest total height of its neighboring cells. This constraint propagates outward from the grid’s edges, which act as the ultimate boundary since no water can be trapped beyond them.

In simpler terms, the cells around a region of the grid act as a boundary, and the smallest height of this boundary determines how much water can be stored in that region. To solve the problem, we begin by treating the edges of the grid as the initial boundary since water cannot spill beyond them. From there, we move inward, processing cells in a manner that respects the relationship between a cell’s height and the boundary:

1. **Trapping Water**: When we process a cell, if its height is lower than the current boundary height, water can be trapped above it. The amount of water trapped is equal to the difference between the boundary height and the cell’s height. We then add this trapped water to our running total. To ensure the boundary remains valid, the cell is added to the boundary with its effective height adjusted to match the current boundary height. This adjustment prevents water from "spilling" through this cell and invalidating the boundary.

2. **Updating the Boundary**: If the cell's height is greater than or equal to the boundary height, no water can be trapped above it. However, the cell still becomes part of the boundary because it might help trap water in adjacent, higher regions as we continue processing.

To efficiently manage the boundary and dynamically update the smallest height, we use a min-heap (priority queue). The heap lets us quickly find the lowest boundary height and ensure the traversal always processes the most constrained regions first.

> For a more comprehensive understanding of heaps and priority queues, check out the [Heap Explore Card 🔗](https://leetcode.com/explore/learn/card/heap/). This resource provides an in-depth look at heap-based algorithms, explaining their key concepts and applications with a variety of problems to solidify understanding of the pattern.

!?!../Documents/407/407_approach1_fix.json:960,540!?!

#### Algorithm

-   Define a struct `Cell` that stores the height and the coordinates of a cell in the map.
-   Define two direction arrays, that will help us explore the neighbors of each cell: `dRow = [0, 0, -1, 1], dCol = [-1, 1, 0, 0]`.
-   Initialize `numOfRows` and `numOfCols` to the number of rows and columns of the original grid, respectively.
-   Create a `numOfRows x numOfCols` boolean grid, called `visited`, with all its values initialized to `false`.
-   Initialize a priority queue (min-heap) of `Cells`, called `boundary`.
-   Push the cells of the first and last row and column of the grid into the `boundary` and mark them as visited.
-   Initialize `totalWaterVolume` to `0`.
-   While the `boundary` is not empty:
    -   Pop the top cell out of the `boundary`, as `[minBoundaryHeight, [currentRow, currentCol]]` - this is the cell with the minimum height in the unexplored part of the boundary.
    -   Update `minBoundaryHeight` to `height`.
    -   Loop through all neighbors of the current cell, with `direction` from `0` to `3`:
        -   Initialize `neighborRow` to `currentRow + dRow[direction]` and `neighborCol` to `currentCol + dCol[direction]`.
        -   If the cell `(neighborRow, neighborCol)` is valid, i.e. it is not out of the bounds of the grid and not visited:
            -   If the height of the cell, `neighborHeight` is lower than `minBoundaryHeight`, add the difference `minBoundaryHeight - neighborHeight` to the `totalWaterVolume`.
            -   Push the neighboring cell into the `boundary` with its height set to the maximum of its value and `minBoundayHeight`, as the lowest height of the boundary cannot fall below its current value.
            -   Mark the neighboring cell as visited.
-   Return `totalWaterVolume`.

#### Implementation

<iframe src="https://leetcode.com/playground/dt4uER9y/shared" frameBorder="0" width="100%" height="500" name="dt4uER9y"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ the number of columns of the input grid.

-   Time complexity: $O(m \cdot n \times \log{m \cdot n})$

    Each cell is pushed in the `boundary` exactly once, so the while loops runs $O(mn)$ times. On each iteration, an element is popped from the priority queue and four other elements (the neighboring cells) are potentially pushed into it. Since the push and pop operations of the priority queue have a time complexity of $O(k)$, where $k$ represents the size of the priority queue, the overall time complexity of the algorithm becomes $O(m \cdot n \times \log{m \cdot n})$.

-   Space complexity: $O(m \times n)$

    We create a `visited` grid of size $m \times n$ to keep track of the cells already explored. The priority queue, `boundary` can also grow up to $O(m \times n)$ in size, so the algorithm requires $O(m \times n)$ extra space.

---