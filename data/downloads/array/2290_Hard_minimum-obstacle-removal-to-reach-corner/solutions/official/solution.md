# Official Solution

**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solution/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solution/)

---

[TOC]

## Solution

---

### Overview

We are given a 2-D matrix `grid`, where each cell is either empty or contains an obstacle. We can remove any obstacle, and our goal is to find the minimum number of obstacles that need to be removed to create a path from the top-left corner to the bottom-right corner.

---

### Approach 1: Dijkstra's Algorithm

#### Intuition

We can frame this problem as a shortest-path problem with a start and end point, and from each cell, we can move in four directions (up, down, left, right). There are two scenarios for movement:
1. Moving to an empty cell costs nothing (edge weight = 0).
2. Moving to a cell with an obstacle costs 1 as we must remove it (edge weight = 1).

This turns our problem into a graph with edges weighted 0 or 1. The goal is to find the shortest path from the start to the destination using Dijkstra's algorithm.

We’ll implement Dijkstra’s algorithm using a priority queue, where each element contains the cell's coordinates and the number of obstacles removed to reach it. The queue will be sorted by obstacle count in increasing order. For each element, we explore its four neighbors. If a neighbor contains an obstacle, we increment the obstacle count and add it to the queue for further exploration.

As we explore, we’ll eventually reach the destination cell. Once we do, we return its obstacle count, which is guaranteed to be the minimum, as the queue prioritizes cells with the fewest obstacles.

#### Algorithm

- Initialize a 2D array `directions` containing four pairs of coordinates representing possible movements: right (0,1), left (0,-1), down (1,0), and up (-1,0).

Main method `minimumObstacles`:

- Set dimensions of the grid in variables `m` (rows) and `n` (columns).
- Initialize a 2D array `minObstacles` of size $m \times n$ to track minimum obstacles needed to reach each cell.
  - Set all cells in `minObstacles` to infinity to represent unvisited cells.
- Set the starting cell `minObstacles[0][0]` to the value of `grid[0][0]`, since this is the initial position.
- Create a priority queue `pq` that orders elements based on the number of obstacles encountered.
   - Each element in the queue is an array containing: [obstacles count, row, column]
- Add the starting position to the priority queue with its obstacle count.
- Enter a loop that continues while `pq` is not empty:
  - Extract the cell with minimum obstacles from the queue.
  - If this cell is the target `(m-1, n-1)`, return the obstacle count.
  - For each possible direction:
    - Calculate new position coordinates.
    - If the new position is valid:
      - Calculate the new obstacle count by adding the grid value of the new position.
      - If the new obstacle count is less than the previously recorded count for that cell:
       - Update the `minObstacles` array with the new count.
       - Add the new position to `pq`.
- Return -1 if the main loop completes without finding the target (this shouldn't happen).


Helper method `isValid(row, col)`:
  - Return `true` if the `row` and `col` lie within the grid boundaries.
  - Return `false` otherwise.

#### Implementation

<iframe src="https://leetcode.com/playground/Z4CaAqmQ/shared" frameBorder="0" width="100%" height="500" name="Z4CaAqmQ"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

- Time complexity: $O(m \cdot n \log(m \cdot n))$

    The priority queue can contain up to $O(m \cdot n)$ elements (all the cells in the grid), making each operation cost $O(\log(m \cdot n))$ time. Thus, the time complexity is $O(m \cdot n \log(m \cdot n))$. 

- Space complexity: $O(m \cdot n)$

    The space complexity is dominated by two main components: the `minObstacles` array and the priority queue, both of which have a complexity of $O(m \cdot n)$. The `directions` array and other variables take constant space. 
    
    Therefore, the overall space complexity is $O(m \cdot n)$.  

---

### Approach 2: 0-1 Breadth-First Search (BFS)

#### Intuition

As stated earlier, moving through cells without obstacles has no cost. Therefore, we prioritize exploring neighboring empty cells first, only moving to cells with obstacles when no free cells are left.

We perform a BFS using a deque to manage the queue. When exploring neighboring cells, we add empty cells to the front of the deque for immediate exploration, and cells with obstacles to the back, delaying their exploration.

We maintain a result grid, `minObstacles`, initialized to infinity (indicating they are unvisited), to track the minimum obstacles encountered at each cell. We'll add the top left cell to the deque and begin our exploration. At each step, we'll pop the top cell in the deque and explore its neighbors. All empty neighbors go to the front of the deque, while others go to the bottom with their obstacle count increased by 1. Simultaneously, we'll update the `minObstacles` value for each neighboring position.

Once all cells are explored, the value at the bottom-right cell of `minObstacles` will give the minimum obstacles encountered on the shortest path.

Here's a brief visualization of how the `minObstacles` matrix is filled up step by step:

!?!../Documents/2290/slideshow.json:702,942!?!

#### Algorithm
 
- Initialize a 2-D array `directions` containing four pairs of coordinates representing possible movements: right (0,1), left (0,-1), down (1,0), and up (-1,0).

Main method `minimumObstacles`:

- Store the dimensions of the grid in variables `m` (rows) and `n` (columns).
- Initialize a 2-D array `minObstacles` of size $m \times n$ to track minimum obstacles needed to reach each cell.
- Initialize all cells in `minObstacles` with infinity to represent unvisited cells.
- Set the starting cell `minObstacles[0][0]` to 0, as we start from this position.
- Create a double-ended queue `deque` to process cells.
  - Add the starting position to the queue.
- Loop while the deque is not empty:
  - Extract the first cell from the queue.
  - For each possible direction:
    - Calculate new position coordinates.
    - If the new position is valid and unvisited (`minObstacles` value is infinity):
      - If the new cell contains an obstacle (value 1):
        - Update `minObstacles` with the current obstacle count plus 1.
        - Add the new position to the back of the deque.
      - If the new cell is empty (value 0):
        - Update `minObstacles` with the current obstacle count.
        - Add a new position to the front of the deque.
- Return the value in `minObstacles[m-1][n-1]` representing minimum obstacles removed to reach target.

Helper method `isValid(row, col)`:
  - Return `true` if the `row` and `col` lie within the grid boundaries.
  - Return `false` otherwise.

#### Implementation

<iframe src="https://leetcode.com/playground/VbP4ycxv/shared" frameBorder="0" width="100%" height="500" name="VbP4ycxv"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

* Time complexity: $O(m \cdot n)$

    Each of the $m \cdot n$ cells in the grid is visited exactly once because we only process unvisited cells. The deque operations are all $O(1)$. 
    
    Thus, the total time complexity is $O(m \cdot n)$. 

* Space complexity: $O(m \cdot n)$

    The `minObstacles` array and the deque both take $O(m \cdot n)$ space. All other variables take constant space.

    Thus, the space complexity remains $O(m \cdot n)$.

---