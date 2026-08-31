# Official Solution

**Link:** [https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solution/](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given an integer grid with distinct positive integers and must replace each integer with a positive number such that the relative ordering of elements in each row and column remains the same. The goal is to minimize the maximum value in the modified grid.

These are some trivial observations before we start solving the problem:
- Consecutive numbers starting from `1` should be assigned to the matrix values. For example, `3` cannot be assigned until `2` has been assigned to some cell.  
- The smallest value in the matrix can always be assigned `1`, as no value in its row or column is smaller.

In other words, we need to replace every value in the matrix with its rank, starting from the smallest element.

> This problem has a conceptual similarity to topological sort, as the values in the matrix are processed in a specific order (increasing order of values), and each cell’s rank depends on the ranks of previously processed cells in its row and column. 
>
> However, unlike in the related problem [Rank Transform of a Matrix](https://leetcode.com/problems/rank-transform-of-a-matrix/description/), we do not need to explicitly use graph-based approaches like Disjoint Set Union (DSU) or adjacency lists. 
> This is because:
> - All integers in the matrix are distinct, which eliminates the need to group equal elements or handle ties, a common use case for DSU in problems like "Rank Transform of a Matrix."
> - The condition that `grid[r1][c1] > grid[r2][c2]` in the original matrix (if both belong to the same row or column) naturally holds after processing, as the values are handled in sorted order. Sorting the matrix ensures that dependencies are resolved sequentially, much like the ordering in topological sort.
> - Since there are no ties, ranks can be directly assigned during the traversal of the sorted list, avoiding the need for additional grouping or merging steps.

---

### Approach 1: Sorting

#### Intuition   

The task is to assign values to matrix elements such that each value satisfies two constraints: it must preserve the relative ordering of values in rows and columns, and it must be as small as possible under these constraints. For example, the smallest element in the matrix can always be assigned the value `1`, but for the second-smallest element, its value depends on its position. If it shares the same row or column as the smallest element, it cannot also be assigned `1` and must instead take the value `2`. Similarly, the third-smallest element, if it is in the same row or column as the second-smallest, must be assigned a value no less than `3`.

This leads to a crucial observation that the smallest value that a matrix cell can be assigned is determined by the maximum value assigned in its row or column, plus one. To implement this idea, we start by sorting all matrix elements in ascending order. Then, for each element, we compute its value as `max(max rank in its row, max rank in its column) + 1`. This ensures that all constraints are satisfied while keeping the assigned values minimal.

We can prove the correctness of this approach using induction. First, consider the base case: the smallest element in the matrix. It can always be assigned the value `1` since no smaller value exists in its row or column, satisfying the constraints. 

Now assume as an inductive hypothesis that for the first `k` smallest elements, the algorithm assigns values such that the relative ordering of rows and columns is preserved and all values are minimal. For the `(k+1)`-th smallest element located at position `(i, j)`, the algorithm computes its value as `max(max rank in row i, max rank in column j) + 1`. This guarantees that the `(k+1)`-th element is assigned a value greater than all smaller elements in its row or column, preserving relative ordering.

To confirm this is optimal, assume by contradiction that a smaller value `v` could be assigned to the `(k+1)`-th element. For this to happen, all previously assigned values in row `i` and column `j` must be smaller than `v`. 

However, the algorithm ensures that there is always at least one value in the current row or column that is greater than or equal to `v`, which violates the relative ordering. Thus, assigning `v` would contradict the inductive hypothesis, proving that the algorithm assigns values optimally.

#### Algorithm

1. Determine the dimensions `row` (number of rows) and `col` (number of columns) of the `grid`.
2. Initialize two lists:
    - `rows` to store the minimum values for each row, initially set to 1 for each row.
    - `cols` to store the minimum values for each column, initially set to 1 for each column.
3. Create an empty list `nums` to store pairs of each cell's value along with its row and column indices.
4. Loop through each cell in grid with indices `(i, j)`:
    - Append a list `(grid[i][j], i, j)` to `nums`.
5. Sort `nums` by the cell values in ascending order.
6. Loop through each list `(value, i, j)` in `nums`:
    - Calculate `val` as the maximum of `rows[i]` and `cols[j]`, which represents the maximum value assigned to that row and column so far.
    - Update `grid[i][j]` with `val`.
    - Update `rows[i]` and `cols[j]` to `val + 1`, increasing the minimum values for that row and column for future assignments.
7. After processing all indices, return `grid`.

#### Implementation

<iframe src="https://leetcode.com/playground/j7KBohAn/shared" frameBorder="0" width="100%" height="500" name="j7KBohAn"></iframe>

#### Complexity Analysis

Let $m$ and $n$ be the number of rows and columns in the matrix `grid`.

- Time Complexity: $O(m \cdot n \cdot log(m \cdot n))$

    The algorithm traverses the entire $m x n$ grid to populate the `nums` list, taking $O(m \cdot n)$ time. Sorting the nums list of $m x n$ elements takes $O(m \cdot n \cdot log(m \cdot n))$ time. 
    
    Finally, iterating over `nums` to update `grid` and the `rows` and `cols` arrays takes $O(m \cdot n)$ time. Thus, the overall time complexity is dominated by the sorting step, resulting in $O(m \cdot n \cdot log(m \cdot n))$.

- Space complexity: $O(m \cdot n)$

    The algorithm requires $O(m \cdot n)$ space for the `nums` list, which stores tuples of each element's value and position. Additionally, the `rows` and `cols` arrays use $O(m + n)$ space, but this is dominated by $O(m \cdot n)$. 

    Apart from this, the space complexity of the sorting algorithm depends on the programming language.
    - In Python, the sort method sorts a list using the Timsort algorithm which is a combination of Merge Sort and  Insertion Sort and has $O(l)$ additional space, where `l` is the size of the list.
    - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log l )$ for sorting two arrays.
    - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log l )$.

    Therefore, the total space complexity is given by $O(m \cdot n)$.

---

### Approach 2: Min-heap

#### Intuition   

In the previous approach, we iterated through the matrix values by sorting the array in increasing order. Alternatively, we can use a min-heap to process the elements of the matrix in ascending order. A min-heap is a binary heap data structure where the smallest element is always at the root, making it efficient for retrieving and removing the minimum element.

To implement this, we first push all the elements into a min-heap, where each element is stored alongside its position in the matrix. The min-heap ensures that the smallest element is always at the top. After inserting all elements into the heap, we can repeatedly pop the smallest element from the heap, maintaining the order of values in increasing sequence. As we pop each element, we can assign its value to the corresponding position in the result matrix.

#### Algorithm

1. Determine the dimensions `row` (number of rows) and `col` (number of columns) of the input `grid`.
2. Initialize:
    - `min_heap` as an empty min-heap to store tuples of cell values and their coordinates.
    - `rows` to track the maximum values assigned to each row, initialized with `1` for each row.
    - `cols` to track the maximum values assigned to each column, initialized with `1` for each column.
3. Populate `min_heap` with tuples of the form `(grid[i][j], i, j)` for each cell `(i, j)` in `grid`.
4. Process elements in ascending order of their values by repeatedly popping from `min_heap`:
    - For each popped element `(value, i, j)`, calculate `val` as the maximum of `rows[i]` and `cols[j]`, which represents the smallest assignable value based on row and column constraints.
    - Update `grid[i][j]` with `val`.
    - Update `rows[i]` and `cols[j]` to `val + 1` to ensure the next value for each row and column is greater.
5. After processing all elements, return the modified `grid`.

#### Implementation

<iframe src="https://leetcode.com/playground/Ym9swbFX/shared" frameBorder="0" width="100%" height="500" name="Ym9swbFX"></iframe>


#### Complexity Analysis

Let $m$ and $n$ be the number of rows and columns in the matrix `grid`.

- Time Complexity: $O(m \cdot n \cdot log(m \cdot n))$

    The algorithm traverses the entire `m×n` grid to populate the `nums` list, taking $O(m \cdot n)$ time. Pushing all the elements of `grid` in priority queue takes $O(m \cdot n \cdot log(m \cdot n))$ time. 
    
    Finally, iterating over the priority queue to update `grid` and the `rows` and `cols` arrays takes $O(m \cdot n \cdot log(m \cdot n))$ time. Therefore, the overall time complexity is given by $O(m \cdot n \cdot log(m \cdot n))$.

- Space complexity: $O(m \cdot n)$

    The algorithm requires $O(m \cdot n)$ space for the `priority_queue` priority queue, which stores tuples of each element's value and position. Additionally, the `rows` and `cols` arrays use $O(m+n)$ space, but this is dominated by $O(m \cdot n)$. Therefore, the overall space complexity is $O(m \cdot n)$.

---