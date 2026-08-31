# Official Solution

**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solution/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solution/)

---

[TOC]

## Solution

---

### Approach: Modified Dijkstra's Algorithm

#### Intuition

We are given a matrix `grid` where each cell contains the minimum time required for that cell to be accessible. In other words, if we begin at the top-left cell and each move takes 1 second, the value in each cell tells us the minimum time after which we can enter it.

The challenge arises when we find ourselves stuck in a cell, unable to move forward because all neighboring cells are inaccessible, with higher minimum times. In such situations, we must "waste" time to move forward. How do we do that? By wandering around! We can move back and forth between the current cell and any previously accessible cells until a neighboring cell becomes accessible.

The time we need to "waste" is determined by the difference between the current cell’s time and the minimum time of an accessible neighboring cell. It’s important to note that each unit of time wasted takes 2 seconds since we travel to a previous cell and return to the current cell. Therefore, if the difference between the current time and the target cell's time is odd, we can step into the target cell exactly when it becomes accessible. Here's a slideshow demonstrating that:

!?!../Documents/2577/odd_slideshow.json:564,822!?!

On the other hand, if the difference is even, we’ll arrive at the target cell 1 second after it has opened:
 
!?!../Documents/2577/even_slideshow.json:564,822!?!

Next, let’s discuss the base case. If we are at the top-left corner and all neighboring cells have a minimum time greater than 1, we are stuck. There are no other accessible cells to waste time on, and thus, the solution is not possible. In this case, we return -1.

Otherwise, a solution exists. We can apply Dijkstra’s shortest path algorithm with a priority queue, starting from the top-left cell. Each element in the queue holds the cell’s coordinates and the time taken to reach it, ordered by time in ascending order. We also maintain a `visited` matrix to track the cells we have already processed. For each cell in the queue, we check its neighbors, compute the time required to enter each one, and add any accessible neighbors to the queue, adjusting for the waiting time. When we reach the bottom-right corner, we return the associated time as the final answer.

#### Algorithm

- Check if both initial moves (right and down) in the grid require more than 1 second:
  - If both `grid[0][1] > 1` and `grid[1][0] > 1`, return `-1` because it’s impossible to proceed.

- Initialize variables:
  - `rows` and `cols` store the dimensions of the grid.
  - `directions` array defines the possible moves: down, up, right, and left.
  - `visited` array keeps track of visited cells.
  - `pq` is a priority queue that stores `{time, row, col}` tuples, ordered by minimum time to reach each cell.

- Add the starting point (top-left cell) to the priority queue with its initial time (`grid[0][0]`).

- While the priority queue is not empty:
  - Poll the cell with the minimum time (`time, row, col`).
  - If the target cell (bottom-right) is reached, return the `time`.

  - Skip the current cell if it has already been visited.
  - Mark the current cell as visited.

  - For each of the four possible directions:
    - Calculate the next cell coordinates (`nextRow, nextCol`).
    - If the cell is valid (within bounds and not visited), calculate the additional wait time for the next cell:
      - If the difference between the grid value and the current time is even, the additional wait time is `1`.
      - Otherwise, the wait time is `0`.
    - Calculate the next possible time based on the grid value and the wait time, and add the new `{nextTime, nextRow, nextCol}` to the priority queue.

- If the loop ends without reaching the target, return `-1` (no path found).

- Helper function `isValid`:
  - Check if a cell is within bounds and has not been visited.

#### Implementation

<iframe src="https://leetcode.com/playground/J2vnwBjv/shared" frameBorder="0" width="100%" height="500" name="J2vnwBjv"></iframe>

#### Complexity Analysis

Let $m$ be the number of rows and $n$ be the number of columns in the grid.

- Time complexity: $O(m \cdot n \log(m \cdot n))$
  
    In the main loop, the priority queue operations (insertion and deletion) take $O(\log k)$ time where $k$ is the number of elements in the queue. Since each cell is added to the queue exactly once, the queue size is bounded by $O(m \cdot n)$. Therefore, with $O(m \cdot n)$ cells and $O(\log(m \cdot n))$ time for each queue operation, the total time complexity is $O(m \cdot n\log(m \cdot n))$.

- Space complexity: $O(m \cdot n)$
  
    The space complexity is determined by two main components: the `visited` boolean matrix and the priority queue, both of which use $O(m \cdot n)$ space.   

    Thus, the space complexity of the algorithm is $O(m \cdot n)$.

---