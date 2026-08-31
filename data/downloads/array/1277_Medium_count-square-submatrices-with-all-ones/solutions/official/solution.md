# Official Solution

**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solution/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solution/)

---

[TOC]

## Solution

---

### Overview

We need to find the number of square submatrices containing only ones in a binary matrix. A square submatrix has equal rows and columns, such as `1x1`, `2x2`, `3x3`, and so on.

1. 1x1 submatrices: Each cell with only a `1` contributes directly to the count.
2. Larger submatrices: For submatrices larger than `1x1`, the size of the largest square submatrix with its bottom right corner at `(i, j)` determines the count of possible square submatrices.

![slide1](../Figures/1277re/Slide1re.png)

For a `2x2` square ending at `(i, j)`, the following conditions must be met:
- The cell at `(i, j)` must be `1`.
- The cells above `(i-1, j)`, to the left `(i, j-1)`, and diagonally `(i-1, j-1)` must also be `1`.

![slide2](../Figures/1277re/Slide2re.png)

Similarly, for a `3x3` square:
- The `2x2` square formed by the neighbors `(i-1, j-1)`, `(i-1, j)`, and `(i, j-1)` must be valid.

![slide3](../Figures/1277re/Slide3re.png)

Thus, constructing larger submatrices relies on the existence of smaller valid ones.

---

### Approach 1: Bottom-up Approach

#### Intuition

We initialize another matrix (`dp`) with the same dimensions as the original one initialized with all 0’s.

`dp(i,j)` represents the side length of the maximum square whose bottom right corner is the cell with index `(i,j)` in the original matrix.

Starting from index `(0,0)`, for every 1 found in the original matrix, we update the value of the current element as:

$$
\text{dp}(i+1,\  j+1) = \min \big( \text{dp}(i,\  j+1),\  \text{dp}(i+1,\  j),\  \text{dp}(i,\  j) \big) + 1.
$$

We store the sizes of the largest squares in the `dp` array. This gives the side length of the maximal squares upto every index filled with all 1s. The required result is the sum of the sizes of these squares, so we can accumulate them and return the result. 

#### Algorithm

1. Create a 2D DP table `dp` of size `(row+1) x (col+1)` to store the size of the largest square submatrices ending at each cell `(i, j)`. 
2. This extra row and column (initialized to 0) help handle boundary conditions and simplify the logic for edge cases.
3. Initialize a variable `ans` to keep track of the total number of square submatrices with all 1s.
4. Traverse the input matrix using a nested loop:
    - Outer loop iterates over the rows (`i` from 0 to `row-1`).
        - Inner loop iterates over the columns (`j` from 0 to `col-1`):
            - For each cell `matrix[i][j]`, if the value is 1, calculate the size of the square submatrix ending at that cell.
            - Use the following relation to fill the `dp` matrix: `dp[i+1][j+1] = min(dp[i][j+1],dp[i+1][j],dp[i][j])+1`
            - Add this value to the total count `ans`, which keeps track of all squares found so far.
5. Return the value of `ans`, which represents the total number of square submatrices filled with 1s.

!?!../Documents/1277-re/slideshow1_rename.json:960,540!?!

#### Implementation

<iframe src="https://leetcode.com/playground/Dc4KocxB/shared" frameBorder="0" width="100%" height="429" name="Dc4KocxB"></iframe>

#### Complexity Analysis

Let $row$ and $col$ be the number of rows and columns in the matrix respectively.

- Time complexity: $O(row \cdot col)$

    The solution iterates through every cell in the matrix using two nested loops. Since the matrix has dimensions `row x col`, the total number of cells is `row x col`.
   
    Inside the loop, we perform constant-time operations (computing the minimum of three values and updating the result).

    Thus, the overall time complexity is $O(row \cdot col)$.

- Space complexity: $O(row \cdot col)$.

    The space complexity is dominated by the 2D DP table `dp`, which is of size `(row+1) x (col+1)`. This extra row and column are used to handle boundary conditions.
    
    Therefore, the total space required is $O(row \cdot col)$.

---

### Approach 2: Top-Down Dynamic Programming

#### Intuition

We can also approach this problem using recursion, breaking it down into smaller subproblems. At each cell `(i, j)`, the size of the largest square submatrix depends on the sizes of the submatrices at its neighboring cells: `(i-1, j)`, `(i, j-1)`, and `(i-1, j-1)`. This recursive structure enables us to tackle the problem incrementally.

To optimize, we can convert the recursive approach into a dynamic programming (DP) solution. The DP table will store results of subproblems, preventing redundant calculations and improving time complexity.

#### Algorithm

`solve(i, j, grid, dp)` function:

1. If the current cell `grid[i][j]` is outside the bounds of the grid or is 0, return 0. This means no square submatrices can be formed from this cell.
2. If a cell's result is already computed (i.e., `dp[i][j]` != -1), return the memoized value to avoid redundant calculations.
3. For each cell `(i, j)`, recursively calculate the size of the square submatrices:
    - right: Check the cell to the right `(i, j+1)`.
    - diagonal: Check the cell to the diagonal below `(i+1, j+1)`.
    - below: Check the cell below `(i+1, j)`. 
4. For a given cell `(i, j)`, store the result as `1 + min(right, diagonal, below)` in the `dp` table. This accounts for the size of the largest square submatrix that can end at this cell, including the current cell itself.

Main function:

1. Initialize a DP table:
    - Create a `dp` table (2D vector) of the same size as the input grid, and initialize it with -1 to indicate unvisited cells.
2. Use a nested loop to iterate through each cell in the grid. For each cell `(i, j)`, call the recursive function `solve(i, j)` to compute the size of the largest square submatrices ending at that cell and add it to the total count.
3. Finally, return the total number of square submatrices with all 1s.

#### Implementation

<iframe src="https://leetcode.com/playground/jX6Cbaqu/shared" frameBorder="0" width="100%" height="500" name="jX6Cbaqu"></iframe>

#### Complexity Analysis

Let $row$ and $col$ be the number of rows and columns in the matrix respectively.

- Time complexity: $O(row \cdot col)$

    The `solve(i, j)` function is called for each cell in the grid. However, due to memoization, the value for each cell is computed only once, and the result is stored in the `dp` table. This prevents recomputation for the same cell.
   
    Hence, there are `row * col` calls to the function, where `row` is the number of rows, and `col` is the number of columns.
   
    For each cell `(i, j)`, the function makes constant time calculations for its neighbors: `right`, `diagonal`, and `below`. Each of these operations takes constant time `O(1)`.
   
    Thus, the overall time complexity is `O(row * col)`.

- Space complexity: $O(row \cdot col)$

    The `dp` table is a 2D array of size `row * col` used to store the memoized results. This requires `O(row * col)` space.
   
    The recursion depth is bounded by the number of rows `row` or columns `col` in the worst case, depending on how far the recursion can go in the grid. This requires `O(max(row, col))` space for the call stack.
   
    Thus, the overall space complexity is `O(row * col)`.

---

### Approach 3: Optimized Dynamic Programming

#### Intuition

From the previous approach we can observe that calculating the size of the largest square submatrix ending at a given cell `(i, j)` only depends on three values: the size of the largest square ending at `(i, j-1)` (left), `(i-1, j)` (top), and `(i-1, j-1)` (top-left). These values are sufficient to determine the size of the square submatrix ending at `(i, j)` using the relation: 

$dp[j] = 1 + \min(dp[j-1], dp[j], \text{prev})$

where `prev` stores the value of `dp[j]` from the previous row, effectively representing the top-left neighbor in the matrix.

With this dependency in mind, we can optimize the traditional 2D dynamic programming table to a 1D array. Instead of maintaining the entire DP table, we use a single array `dp`, where each element corresponds to the size of the largest square submatrix ending at a column in the current row. To handle the dependency on the top-left neighbor, we maintain an additional variable `prev` to store the value of `dp[j]` before it is updated in the current iteration.

We initialize the `dp` array with all zeros since initially, no square submatrices have been identified. As we iterate through the matrix row by row, we update the `dp` array for each element in the current row. If the matrix element at `(i-1, j-1)` is `1`, it means that this cell can contribute to forming a square. In that case, we calculate the size of the square using the relation mentioned earlier. If the element is `0`, the size of the square at that cell is reset to `0`.

The `prev` variable is updated during each iteration to store the value of `dp[j]` before it is modified. This ensures that the dependency on the top-left neighbor is correctly accounted for in the current calculation. After updating the value of `dp[j]`, we add it to the `result` variable, which accumulates the total number of square submatrices in the matrix.

#### Algorithm

1. Create a 1D DP table `dp` of size `(row+1) x (col+1)` to store the size of the largest square submatrices ending at each cell `(i, j)`. 
2. This extra column (initialized to 0) helps handle boundary conditions and simplify the logic for edge cases.
3. Initialize a variable `result` to keep track of the total count of square submatrices and a variable `prev` to store the value of the top-left diagonal element for the DP computation.
4. Traverse the input matrix using a nested loop:
    - Outer loop iterates over the rows (`i` from 0 to `row-1`).
        - Inner loop iterates over the columns (`j` from 0 to `col-1`):
            - For each cell `matrix[i][j]`, if the value is 1:
                - Temporarily store the current value of `dp[j]` in a variable `temp`.
                - Update `dp[j]` using the formula `dp[j] = 1 + min(prev, min(dp[j-1], dp[j]))`.
                - Update `prev `to the value stored in `temp`.
                - Add `dp[j]` to `result` to increment the count of square submatrices.
            - Otherwise, set `dp[j]` to 0 as no square submatrix ends at this cell.
5. Return the value of `result`, which represents the total number of square submatrices filled with 1s.

#### Implementation

<iframe src="https://leetcode.com/playground/JFiPdsqk/shared" frameBorder="0" width="100%" height="412" name="JFiPdsqk"></iframe>

#### Complexity Analysis

Let $row$ and $col$ be the number of rows and columns in the matrix respectively.

- Time complexity: $O(row \cdot col)$

    The solution iterates through every cell in the matrix using two nested loops. Since the matrix has dimensions `row x col`, the total number of cells is `row x col`.

    Inside the loop, we perform constant-time operations (computing the minimum of three values and updating the result).

    Thus, the overall time complexity is $O(row \cdot col)$.

- Space complexity: $O(col)$

    The space complexity is dominated by the DP array `dp`, which is of size `(col+1)`. This extra column is used to handle boundary conditions.

    Therefore, the total space required is $O(col)$.

---