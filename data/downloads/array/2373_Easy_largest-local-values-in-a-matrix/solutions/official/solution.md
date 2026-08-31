# Official Solution

**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solution/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solution/)

---

## Solution

---

### Approach: Simulation

#### Intuition

We are given an integer matrix `grid` of size $N \cdot N$. For each element `(i, j)` in the `grid`, we need to find the maximum value in the $3 \cdot 3$ matrix with the top left cell as `(i, j)`. The local maximums should be returned in a new matrix. Note that we need to add the value to the new matrix only for `(i, j)` values with a valid $3 \cdot 3$ matrix. Therefore, the size of the new matrix is always $(N - 2) \cdot (N - 2)$, and the last two rows and columns in the original matrix grid are left out.

We will follow the process given in the problem description to generate the new matrix. $3 \cdot 3$ matrices cannot be created from the last two rows and last two columns as of `grid`, so we will iterate over the rows from `0` to `N - 2` and columns from `0` to `N - 2` in the `grid`. For each cell, we will iterate over the $3 \cdot 3$ matrix and find the local maximum value. This value will be stored in the new matrix `maxLocal`.

The below figure demonstrates each step of the `maxLocal` grid creation. At each step, we iterate over the $3 \cdot 3$ matrix and add the maximum value to the `maxLocal` grid.

![fig](../Figures/2373/2373A.png)

#### Algorithm

1. Create an empty matrix `maxLocal` of size $(N - 2) \cdot (N - 2)$, this will store the maximum values of all possible `3 x 3` matrices.
2. Define the `findMax` function, which takes the `grid` and the coordinates `(x, y)` as parameters. This function finds the maximum value in the `3 x 3` section of the grid, where `(x, y)` is the top-left corner.
    - Iterate over the `3 x 3` matrix starting with `(x, y)` as top-left cell.
    - Find and return the maximum value as `maxElement`.
3. Iterate over the `grid` rows `0` to `N - 2` and columns `0` to `N - 2`, and for each cell `(i, j)`:
    - Use `findMax(grid, i, j)` to find the maximum local element and store it in the matrix `maxLocal` at position `(i, j)`.
4. Return `maxLocal`.

#### Implementation

<iframe src="https://leetcode.com/playground/hz258aNG/shared" frameBorder="0" width="100%" height="500" name="hz258aNG"></iframe>

#### Complexity Analysis

Here, $N$ is the number of rows and columns in the matrix `grid`.

* Time complexity: $O(N \cdot N)$

  We iterate over the matrix `grid` rows `0` to `N - 2` and columns `0` to `N - 2` using nested loops. In the inner loop, we call the `findMax` function, so it is called $(N - 2 )^2$ times. The `findMax` function iterates over the $3 \cdot 3$ matrix to find the maximum value. Hence, the total number of operations will be $9 \cdot (N -2)^2$. Therefore, the total time complexity is $O(N ^2)$.

* Space complexity: $O(N \cdot N)$

  We need to create a new matrix `maxLocal` of size $(N -2)^2$; hence, the total space complexity is equal to $O(N^2)$.

---