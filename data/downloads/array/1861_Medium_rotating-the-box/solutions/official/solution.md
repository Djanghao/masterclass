# Official Solution

**Link:** [https://leetcode.com/problems/rotating-the-box/solution/](https://leetcode.com/problems/rotating-the-box/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an `m x n` grid that represents the side view of a box, containing stones (denoted as `'#'`) and immovable obstacles (denoted as `'*'`), as well as some empty cells in between (`'.'`).

Our task is to simulate a 90-degree clockwise rotation of this box. After rotating, we must apply "gravity" to make the rocks fall as far down as possible, without moving the obstacles. The goal is to return the final layout of the box, as a new `n x m` grid, after both the rotation and gravity effects.

---

### Approach 1: Row by Row (Brute Force)

#### Intuition

In this approach, we separate the task into two distinct operations: first, rotating the grid; then, applying the gravity effect. We execute each operation independently to simplify the process.

###### 1. Rotate the grid

Let's start by observing how the grid changes after a 90-degree clockwise rotation:

-   The first row of the input grid becomes the last column of the output grid.
-   The second row of the input grid becomes the second-to-last column of the output grid.
-   ...
-   The last row of the input grid becomes the first column of the output grid.

> The **transpose** of a matrix is obtained by interchanging rows into columns or columns to rows.

If you aren't familiar with this concept, you might want to try out this problem first: [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/), as a good lead-in to this one.
Let's try to express this pattern, using the **transpose** of the original grid:

-   The first column of the transpose grid becomes the last column of the output grid.
-   The second column of the transpose grid becomes the second-to-last column of the output grid.
-   ...
-   The last column of the transpose grid becomes the first column of the output grid.

We can break down this rotation step further: first, find the transpose of the input grid, then reverse each row in the transpose grid.

![rotate operation](../Figures/1861/1861_rotate_operation.png)

###### 2. Apply the gravity effect

To apply the gravity effect to the rotated grid, we can follow a simple approach: for each empty cell, identify the first stone directly above it, ensuring there are no obstacles in between. This way, each stone falls to the lowest possible empty cell beneath it.

!?!../Documents/1861/1861_approach1_fix.json:960,540!?!

#### Algorithm

-   Initialize `m` and `n` to the number of rows and columns of the original grid, respectively.
-   Create an `n x m` grid, called `result`.
-   Set `result` to be the transpose of the input grid:
    -   Iterate over the rows with `i` from `0` to `m-1`:
        -   Iterate over the columns with `j` from `0` to `n-1`:
            -   Set `result[j][i] = box[i][j]`.
-   Reverse the order of elements in each row of the transpose grid.
-   Iterate over the columns of the rotated grid with `j` from `0` to `m-1`:
    -   For each column `j`, iterate over its elements with `i` from `n-1` to `0`:
        -   If `result[i][j]` is an empty cell:
            -   Initialize `nextRowWithStone` to `-1`.
            -   Loop through all rows above `i` with `k` from `i-1` to `0`.
                -   If `result[k][j]` contains an obstacle, exit the loop.
                -   If `result[k][j]` contains a stone, set `nextRowWithStone` equal to `k` and exit the loop.
            -   If the loop ends and `nextRowWithStone` remains equal to `-1`, no stone exists above the current empty cell with no obstacles in between; continue.
            -   Else, let the stone in `result[nextRowWithStone][j]` land on `result[i][j]` by setting `result[nextRowWithStone][j] = '.'` and `result[i][j] = '#'`.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/Po6ADV3z/shared" frameBorder="0" width="100%" height="500" name="Po6ADV3z"></iframe>

#### Complexity Analysis

-   Time complexity: $O(m \times n^2)$

    We need to access each cell to compute the transpose of the grid. This requires $O(m \times n)$ time since there are $m$ rows and $n$ columns in the grid.

    After transposing, we reverse each of the $n$ rows. Reversing a row involves swapping elements from the start and end until we reach the middle, which takes $O(m)$ time per row. Since there are $n$ rows, the total time for this operation is: $O(m \times n)$

    The gravity effect is implemented using an outer loop that iterates through the $m$ columns. For each column, two inner nested loops iterate through the rows:

    -   The first inner loop checks each row from the bottom to the top, running up to $O(n)$ times.
    -   The second inner loop checks the rows above the current empty cell to find a stone, which in the worst case can also iterate up to $O(n)$ times.

    Therefore, for each column, the worst-case scenario for the gravity application results in $O(n) \times O(n) = O(n^2)$

    Consequently, for all $m$ columns, the total time complexity for applying gravity is $O(m \times n^2)$

-   Space complexity: $O(m \times n)$

    Since we avoid modifying the input, we create a second grid, `result`, of size $n \times m$. Note that if we were allowed to alter the input directly, we could reduce the space complexity to $O(1)$.

---

### Approach 2: Row By Row (Optimized)

#### Intuition

When optimizing our solution, it's important to consider the lower bound of the algorithm's complexity. In this case, we need to somehow fill an $n \times m$ grid, with a minimum required time of $O(m \times n)$.

This prompts us to investigate whether we can reduce the time complexity of our previous approach to this lower bound. It turns out that we can achieve this because the third inner loop, which currently increases the time complexity to $O(m \times n^2)$, is actually redundant.

Specifically, instead of checking each empty cell to see if a stone can land on it, we can maintain a pointer to the lowest empty cell in the current column that has no obstacles above it. When we encounter a stone, we allow it to fall to the cell indicated by this pointer and then update the pointer to the row directly above where the stone landed. If we encounter an obstacle, we reset the pointer to the row directly above the obstacle.

We will use the [same algorithm](#1-rotate-the-grid) from our initial approach to simulate the rotation of the grid, before applying the gravity effect as described above.

!?!../Documents/1861/1861_approach2_fix.json:960,540!?!

#### Algorithm

-   Initialize `m` and `n` to the number of rows and columns of the original grid, respectively.
-   Create an `n x m` grid, called `result`.
-   Set `result` to be the transpose of the input grid:
    -   Iterate over the rows with `i` from `0` to `m-1`:
        -   Iterate over the columns with `j` from `0` to `n-1`:
            -   Set `result[j][i] = box[i][j]`.
-   Reverse the order of elements in each row of the transpose grid.
-   Iterate over the columns of the rotated grid with `j` from `0` to `m-1`:
    -   For each column `j`:
        -   Initialize a variable `lowestRowWithEmptyCell` to `n-1`
        -   Iterate over all of its elements in reversed order with `i` from `n-1` to `0`. On each iteration:
            -   If `result[i][j]` contains a stone, let it fall to the lowest empty cell:
                -   Set `result[lowestRowWithEmptyCell][j] = '#'`.
                -   Set `result[i][j] = '.'`.
                -   Update `lowestRowWithEmptyCell` to `i-1`.
            -   if `result[i][j]` contains an obstacle, set `lowestRowWithEmptyCell = i-1`.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/S8dHpXwx/shared" frameBorder="0" width="100%" height="500" name="S8dHpXwx"></iframe>

#### Complexity Analysis

-   Time complexity: $O(m \times n)$

    Similar to the first approach, the rotation operation takes $O(m \times n)$ time. The gravity effect is now implemented using two nested loops instead of three. The outer loop iterates over the $m$ columns, and for each column, the inner loop processes all $n$ elements. As a result, the total time complexity of the algorithm remains $O(m \times n)$.

-   Space complexity: $O(m \times n)$

    Once again, we avoid modifying the input directly by creating a second grid, `result`, of size $n \times m$. However, if we were allowed to modify the input in place, the space complexity could be reduced to $O(1)$.

---

### Approach 3: Combine rotation and gravity operations

#### Intuition

As mentioned earlier, the time complexity of $O(m \times n)$ achieved with the second approach represents a lower bound for this particular problem. This means we cannot further optimize our algorithm in terms of complexity. However, in this approach, we aim to streamline our code by combining the operations of rotation and the effects of gravity. This will allow us to generate the result in a single pass instead of three, potentially reducing the runtime of our program.

First, let's derive the formula to find the position of the cell originally located at $(i, j)$ in the rotated grid. Following the strategy outlined for the transpose grid, we will first map the position $(i, j)$ to $(j, i)$. Then, we will reverse each row, meaning that the first element becomes the last, the second element becomes the second-to-last, and so on. Specifically, the element at index $i$ will move to the position $m-i-1$. Combining these two conversions, we get that the cell originally located at $(i, j)$ will end up in the position $(j, m-i-1)$.

Now, we are ready to execute the same algorithm as before. This time, we will read the type of each cell from the original grid, `box`, and place the results into the `result` grid using the positions determined by the formula outlined above.

#### Algorithm

-   Initialize `m` and `n` to the number of rows and columns of the original grid, respectively.
-   Create an `n x m` grid, called `result`, and initialize all of its elements to be empty cells (`'.'`).
-   Iterate over the rows of the original grid, `box`, with `i` from `0` to `m-1`:
    -   For each row `i`, initialize a variable `lowestRowWithEmptyCell` to `n-1`.
    -   Iterate over all of its elements in reversed order with `j` from `n-1` to `0`. On each iteration:
        -   If `box[i][j]` contains a stone, let it fall to the lowest empty cell:
            -   Set `result[lowestRowWithEmptyCell][m-i-1] = '#'`.
            -   (Optionally) Set `result[j][m-i-1] = '.'`.
            -   Update `lowestRowWithEmptyCell` to `i-1`.
        -   If `box[i][j]` contains an obstacle:
            -   Set `result[j][m-i-1] = '*'`.
            -   Update `lowestRowWithEmptyCell` to `i-1`.
-   Return `result`.

#### Implementation

<iframe src="https://leetcode.com/playground/WNSuvFk7/shared" frameBorder="0" width="100%" height="500" name="WNSuvFk7"></iframe>

#### Complexity Analysis

-   Time complexity: $O(m \times n)$

    The rotation of the grid and the gravity effect are implemented using two nested loops. The outer loop iterates over the $m$ rows of the original grid, and for each row, the inner loop processes all $n$ elements. Therefore, the total time complexity of the algorithm is $O(m \times n)$.

-   Space complexity: $O(m \times n)$

    Similar to the other two approaches, we prefer not to modify the input, by creating a new $n \times m$ grid.

---