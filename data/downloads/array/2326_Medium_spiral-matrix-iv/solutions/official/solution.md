# Official Solution

**Link:** [https://leetcode.com/problems/spiral-matrix-iv/solution/](https://leetcode.com/problems/spiral-matrix-iv/solution/)

---

[TOC]

## Solution

---

### Approach: Simulation

#### Intuition

We have two integers, `m` and `n`, representing the dimensions of a matrix. We are also given the `head` of a linked list containing the elements of the matrix in spiral order. Our task is to reconstruct the original matrix.

We can simulate the spiral movement by following these steps:

- Start by moving to the right until reaching the boundary.
- Then move downwards until reaching the boundary.
- Next, move to the left until reaching the boundary.
- Finally, move upwards until reaching the boundary.
- Repeat these steps until all elements are placed in the matrix.

The movement pattern repeats in the order of right, down, left, and up. We can store these directional movements in an array. For example, moving right corresponds to `(x+0, y+1)` and moving down to `(x+1, y+0)`. We simulate the process by following each direction until we reach the matrix boundary, then switch to the next direction, continuing until all nodes in the linked list are used.

#### Algorithm

1. Set `i` (row index) to 0, `j` (column index) to 0, and `cur_d` (current direction) to 0.
2. Define a `movement` matrix that stores the directions for east, south, west, and north movements:
    - `East: (0, 1)`
    - `South: (1, 0)`
    - `West: (0, -1)`
    - `North: (-1, 0)`
3. Initialize a 2D matrix `res` with dimensions `m x n`, filled with -1.
4. Iterate over the linked list until you reach the end (`head` is not `nullptr`):
    - Assign the current node's value `head->val` to the matrix at position `res[i][j]`.
    - Calculate the next position `newi` and `newj` using the current direction from the movement matrix.
    - If the next position `newi, newj` is out of the matrix bounds (less than 0 or greater than/equal to m or n), or is already filled (`res[newi][newj]` is not -1):
        - Then, change the direction by incrementing `cur_d` (`modulus 4` to keep within the bounds of the direction matrix).
    - Update the current position `i, j` using the updated direction.
5. Once the linked list is fully traversed and the matrix is filled, return the resulting matrix `res`.

!?!../Documents/2326/slideshow.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/o2rpHqJ2/shared" frameBorder="0" width="100%" height="500" name="o2rpHqJ2"></iframe>

#### Complexity Analysis

Let $k$ be the size of the linked list with the first node `head`.

- Time complexity: $O(n \cdot m)$

    We start by creating a matrix of size `n * m` and fill it with `-1`, which takes $O(n \cdot m)$ time. After that, we loop through the linked list once. In the worst case, the list has `k` nodes, which can go up to `n * m`. So, the overall time complexity is $O(n \cdot m)$.

- Space complexity: $O(1)$

    No additional space is used proportional to the list size `k`. Therefore, the space complexity is given by $O(1)$.

---