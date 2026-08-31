# Official Solution

**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solution/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solution/)

---

[TOC]

## Solution

---

### Approach 1: Simulation

#### Intuition

The problem statement implies that the length of `original` must equal $m \times n$, the total number of elements required to fill the matrix. So, we'll start by checking if it's possible to construct the array and return an empty array if not.

Next, we'll simulate filling the 2D matrix row by row using nested loops.
- Row (`i`): The row index `i` is directly controlled by the outer loop, which ranges from `0` to `m-1`. Each time the outer loop increments `i`, it moves to the next row.
- Column (`j`): The column index `j` is controlled by the inner loop, which ranges from `0` to `n-1`. As the inner loop increments `j`, it moves across the columns of the current row.

#### Algorithm

- Check if the length of the `original` array is equal to `m * n`:
  - If not, return an empty array.
- Initialize a 2D array `resultArray` of dimensions $m \times n$.
- Create a variable `index` to keep track of the current position in the `original` array.
- Iterate through each row `i` of `resultArray`:
  - For each row, iterate through each column `j`:
    - Assign the element at the current `index` of the `original` array to `resultArray[i][j]`.
    - Increment `index` to move to the next element in `original`.
- After filling all elements, return the `resultArray`.

#### Implementation

<iframe src="https://leetcode.com/playground/2GEqEPYR/shared" frameBorder="0" width="100%" height="500" name="2GEqEPYR"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the number of rows and columns in `resultArray`, respectively.

- Time complexity: $O(m \times n)$

    The algorithm initializes a 2D array and fills it using nested loops. The outer loop runs $m$ times and the inner loop runs $n$ times. Thus, the total number of iterations is $m \times n$, which equals a time complexity of $O(m \times n)$.

- Space complexity: $O(1)$

    The output array has a space complexity of $O(m \times n)$. However, we do not consider input and output space as part of our space complexity calculations. Thus, the space complexity of the algorithm is constant.

---

### Approach 2: Math

#### Intuition

Let's look for a pattern we can use to directly map elements from the `original` array to the 2D matrix using one loop instead of two.

We know that the length of each row is `n`, so the first `n` elements will be in row one, the next `n` elements will be in the row two, and so on. We can use this pattern to efficiently determine the row index for each element using integer division (also known as floor division): the element at index `i` in `original` belongs in row `i / n`. Have a look at the below illustration:

![](../Figures//2022/row_example.png)

To determine the column position of an element in the 2D matrix, we can use the remainder of its index in the 1D array when divided by the number of elements in each row of the 2D matrix. This method works because the remainder cycles through `0` to `n-1` as you move through the 1D array, matching the columns in each row of the 2D matrix:

![](../Figures//2022/col_example.png)

Given this mathematical relationship, we can directly populate the matrix by iterating through the `original` array and placing each element at the corresponding `(i / n, i % n)` position in the matrix:

![](../Figures//2022/final_matrix.png)

#### Algorithm

- Check if the length of the `original` array is equal to `m * n`:
  - If it isn't, return an empty array.
- Initialize a 2-D array `resultArray` with dimensions $m \times n$.
- Loop over each index `i` in `original`:
  - Set `resultArray[i / n][i % n]` to `original[i]`.
- Return `resultArray` as our answer.

#### Implementation

<iframe src="https://leetcode.com/playground/2aFpP7Bp/shared" frameBorder="0" width="100%" height="395" name="2aFpP7Bp"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the number of rows and columns in `resultArray`, respectively.

* Time complexity: $O(m \times n)$

    The algorithm iteratively fills every cell in the `resultArray`, which takes $O(m \times n)$ time.

* Space complexity: $O(1)$

    The output array takes $O(m \times n)$ space. However, we do not consider input and output space as part of our space complexity calculations. Thus, the space complexity of the algorithm is constant.

---