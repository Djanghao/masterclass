# Official Solution

**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solution/](https://leetcode.com/problems/first-completely-painted-row-or-column/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given two inputs: an array `arr` and a matrix `mat`. The array `arr` is a list of numbers, and the matrix `mat` is a grid where each cell contains one of these numbers. Both `arr` and `mat` contain all integers from 1 to $m \cdot n$, where $m$ is the number of rows in the matrix and $n$ is the number of its columns.  

Our goal is to simulate a process where we "paint" the cells of the matrix in the order defined by `arr`. Starting from the first number in `arr`, we find the corresponding cell in `mat` and mark it as painted. As we progress through `arr`, more cells in `mat` will become painted.  

We need to find the smallest index `i` in `arr` such that, after painting the cell corresponding to $arr[i]$, either:  
1. An entire row in the matrix becomes completely painted (all cells in the row are marked).  
2. An entire column in the matrix becomes completely painted (all cells in the column are marked).  

> Note: Each number in `arr` corresponds to a unique cell in `mat`. This means no number is repeated, and every cell in the matrix will eventually be painted.

---

### Approach 1: Brute-Force

#### Intuition   

A brute force way to solve this problem will be to start processing each element of `arr` one by one, paint the corresponding cell in `mat` and then iterate over its row and column to check whether at least one of them is completely painted.

To achieve this, we need a way to efficiently retrieve the position of each number in the matrix. For this purpose, we create a map called `numToPos`, where each key represents a number from `mat`, and its corresponding value is the position (row and column) of that number in `mat`. This map allows us to quickly look up the position of any number during processing.

After constructing the map, we start iterating through each number in `arr`. For each number, we check where it appears in `mat` by looking it up in the map. Once we find the number’s position, we mark it as "seen" by setting its value in `mat` to a negative number. This marking indicates that the cell is painted.

After marking the cell, the next step is to check whether the current row or column is completely filled. To do this:
- We scan the entire row where the marked cell is located. If every element in that row is now negative, we know the entire row is painted.
- Similarly, we check the entire column for the same condition. If all elements in that column are negative, we know the column is fully painted.

If either the row or the column of the marked cell is completely painted, we immediately return the current index in `arr` since this is the first index, the processing of which resulted in fully painted row or column.
 
Since `mat` and `arr` always contain the same numbers, every cell in `mat` will eventually be painted. Therefore, we don’t need to account for a scenario where we reach the end of the array without completing a row or column. If such a scenario were possible, we might theoretically return an invalid value (e.g.,` -1`), but this is not allowed under the given constraints.

#### Algorithm

- Initialize `numRows` and `numCols` to the number of rows and columns in the matrix `mat`, respectively.
- Create a `numToPos` map to store the position (row, column) of each number in the matrix.

- Populate `numToPos` by iterating over the matrix `mat`:
  - For each element `value` in the matrix, store its position `(row, col)` in `numToPos`.

- Iterate over each element `num` in the array `arr`:
  - Retrieve the position `(row, col)` of `num` from `numToPos`.
  - Mark the element in `mat[row][col]` as seen by negating its value (`mat[row][col] = -mat[row][col]`).

  - Check if the entire row or column has been marked (i.e., if all values in the row/column are negative):
    - Call `checkRow(row, mat)` to check if the row is fully marked.
    - Call `checkColumn(col, mat)` to check if the column is fully marked.
    - If either check is `true`, return the current index `i` in `arr`.

- Return `-1` (This line is a safeguard and will never be reached because of the problem constraints).

- The helper functions `checkRow(row, mat)` and `checkColumn(col, mat)`:
  - Both functions iterate through the row or column, respectively, to check if all values are negative.
  - Return `true` if the entire row or column is fully marked, otherwise `false`.

#### Implementation

> Note: This solution gets a TLE because of high time complexity

<iframe src="https://leetcode.com/playground/7CbXtgK9/shared" frameBorder="0" width="100%" height="500" name="7CbXtgK9"></iframe>

#### Complexity Analysis

Let $k = m \cdot n$ be the size of `arr` (since $arr.length == m \cdot n$), $m$ the number of rows in `mat`, and $n$ the number of columns in `mat`.

- Time complexity: $O(k \cdot (m + n) + m \cdot n)$

    We first build a map to store the positions of each element in the matrix, which takes $O(m \cdot n)$ time. Then, we iterate through the array `arr` and for each element, we check if the corresponding row or column is completely painted. This checking step takes $O(m + n)$ for each element in `arr`, leading to a total time complexity of $O(k \cdot (m + n) + m \cdot n)$.

- Space complexity: $O(m \cdot n)$

    We use a map to store the positions of each element in the matrix, which requires $O(m \cdot n)$ space. Other variables use constant space, so the total space complexity is $O(m \cdot n)$.

---

### Approach 2: Brute Force Optimized with Counting

#### Intuition   

The brute force approach works by iterating over a row and a column after each number is marked, to check whether they have become fully painted.  However, we noticed that this is inefficient and leads to Time Limit Exceeded (TLE) error. 

In this approach, instead of checking the entire row or column after each step, we maintain counters for the number of painted cells in of them. This way, we avoid iterating through the entire row and column every time, making the "fully-colored check" a constant-time operation.

Just like in the brute force approach, we first map every number in `mat` to its position (row and column) using a hashmap `numToPos`. This allows us to efficiently find where each number from `arr` appears in `mat`.

Additionally, we maintain two arrays `rowCount` and `colCount` to track how many numbers have been marked in each row and column, respectively. Initially, all values in these arrays are set to `0`.

Each time a number is marked, we increment the count for its corresponding row and column. This allows us to efficiently track the progress of the marking without re-scanning the whole row or column.

After marking a number, we only need to check if the entire row or column has been filled:
- If the count of marked numbers in the row (`rowCount[row]`) is equal to the number of columns, it means the row is fully marked.
- Similarly, if the count of marked numbers in the column (`colCount[col]`) is equal to the number of rows, the column is fully marked.

Again, since the problem guarantees that a row or column will eventually be fully marked, we don't need to worry about handling edge cases where no completion happens. The return value of `-1` is just a safeguard, but it will never be reached given the problem constraints.

#### Algorithm

- Initialize `numRows` and `numCols` to the number of rows and columns in the matrix `mat`.
- Create two arrays, `rowCount` and `colCount`, to keep track of the number of times each row and column have been "painted". Initialize all their elements to `0`.
- Create a map `numToPos` to store the position of each number in the matrix.

- Iterate through the matrix `mat` to populate `numToPos` with the position (row, col) of each value in `mat`.

- Iterate through the array `arr`:
  - For each number `num` in `arr`, retrieve its position `(row, col)` from `numToPos`.
  - Increment the count of the corresponding row and column in `rowCount` and `colCount`.
  - If the count for the row reaches `numCols` or the count for the column reaches `numRows`, return the current index `i` (indicating the number that completes a row or column).

- Return `-1` (This line is a safeguard and will never be reached because of the problem constraints).

#### Implementation

<iframe src="https://leetcode.com/playground/gCcgLWPh/shared" frameBorder="0" width="100%" height="500" name="gCcgLWPh"></iframe>

#### Complexity Analysis

Let $k = m \cdot n$ be the size of `arr` (since $arr.length == m \cdot n$), $m$ the number of rows in `mat`, and $n$ the number of columns in `mat`.

- Time complexity: $O(k) \equiv O(m \cdot n)$

    We first build a map to store the positions of each element in the matrix, which takes $O(k)$ time. Then, we iterate through the array `arr` (of size $m \cdot n$) and for each element, we update the counts for the corresponding row and column. This step also takes $O(k)$ time. Therefore, the total time complexity is $O(k) \equiv O(m \cdot n)$.

- Space complexity: $O(m \cdot n)$

    We use a map to store the positions of each element in the matrix, which requires $O(k)$ space. Additionally, we use two arrays (`rowCount` and `colCount`) of sizes $m$ and $n$ respectively, contributing $O(m + n)$ space. Thus, the total space complexity is $O(k + m + n) \equiv O((m \cdot n) + m + n) \approx O(m \cdot n)$.

---

### Approach 3: Reverse Mapping

#### Intuition

In Approach 2, we were checking the count of "painted" elements for each row and column after every marking operation. Now, instead of that, we track the greatest index at which an element of each row and column occurs in `arr`. This will reduce space usage and eliminate the need for redundant checks, as we won’t need the `rowCount` and `colCount` arrays anymore. 

Similarly to the previous approaches, we begin by mapping each number to its position (index)  in `arr`, using a hashmap, `numToIndex`.

Instead of counting marked numbers, we consider a different question: When will a row or column be fully painted? Intuitively, this happens when all the numbers in that row or column have been processed. Building on this idea, we observe that it suffices to track the latest index in `arr` where each number in a row or column appears. If we know the greatest index for any element in a row or column, that row or column will be fully painted once that index is reached.

For example, consider a row of `mat`, which contains the numbers 3, 5, and 8. If their indices in `arr` are 1, 3, and 2 respectively, the row will be fully painted when index 3 (the largest index for any number in that row) in arr is reached.

After determining the greatest index for each row and column, we identify the row or column with the smallest maximum index, as this represents the first to be fully painted. 

The algorithm is visualized below:

!?!../Documents/2661/reverse_mapping.json:880,790!?!

#### Algorithm

- Initialize a `numToIndex` unordered map to store the index of each element from `arr`.
- Populate `numToIndex` by iterating over the `arr` and recording the index of each element.

- Initialize `lastElementIndex` to `INT_MAX` and `result` to `INT_MIN` to track the earliest complete row or column.
- Initialize `numRows` and `numCols` to the number of rows and columns in the matrix `mat`, respectively.

- Check for the earliest row to be completely painted:
  - Iterate through each row in the matrix `mat`:
    - Initialize `result` to `INT_MIN` for each row.
    - Iterate through each column in the current row:
      - For each element in the row, find its index in `numToIndex` and update `result` with the maximum of its current value and index of the current element in `arr`.
    - Update `lastElementIndex` with the minimum of `lastElementIndex` and the row's `result`.

- Check for the earliest column to be completely painted:
  - Iterate through each column in the matrix `mat`:
    - Initialize `result` to `INT_MIN` for each column.
    - Iterate through each row in the current column:
      - For each element in the column, find its index in `numToIndex` and update `result` with the maximum index value.
    - Update `lastElementIndex` with the minimum of `lastElementIndex` and the column's `result`.

- Return `lastElementIndex`, which represents the earliest index where a row or column has been completely painted.

#### Implementation

<iframe src="https://leetcode.com/playground/VohmeeNQ/shared" frameBorder="0" width="100%" height="500" name="VohmeeNQ"></iframe>

#### Complexity Analysis

Let $k = m \cdot n$ be the size of `arr` (since $arr.length == m \cdot n$), $m$ the number of rows in `mat`, and $n$ the number of columns in `mat`.

- Time complexity: $O(m \cdot n)$

    We first build a map to store the index of each element in `arr`, which takes $O(k)$ time. Then, we check for the earliest row and column to be completely painted, which takes $O(m \cdot n)$ time. Since $k = m \cdot n$, the total time complexity is $O(m \cdot n)$.

- Space complexity: $O(k) \equiv O(m\cdot n)$

    We use a map to store the index of each element in `arr`, which requires $O(k)$ space. Other variables use constant space, so the total space complexity is $O(k) \equiv O(m\cdot n)$.

---