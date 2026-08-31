# Efficient Ruby Implementation Utilizing Built-In Binary Search

**Author:** nohat
**Votes:** 0
**Link:** [https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/5354675/](https://leetcode.com/problems/leftmost-column-with-at-least-a-one/solutions/5354675/)

---


# Intuition

Given a binary matrix with the API that allows accessing individual elements and dimensions, the task is to find the leftmost column index containing at least one '1'. A naive approach would involve checking every element in the matrix, but since the matrix is sorted in non-decreasing order from left to right (binary rows), we can optimize the search. My first thought is to leverage binary search on each row to quickly locate the first '1', which can potentially reduce the number of column accesses dramatically compared to a linear scan.

# Approach

The solution starts by retrieving the dimensions of the matrix to understand the boundaries. I set an initial value of `min_col` to an impossible high column index (`col_count + 1`) to aid in later comparisons. For each row in the matrix:

1. A binary search is conducted across all columns of the row using Ruby's built-in `Range#bsearch` method. This method searches for the first occurrence where `binaryMatrix.get(row, v)` returns a value greater than 0, i.e., the first '1' in the row.
2. If a '1' is found (i.e., `col` is not `nil`), update `min_col` to be the minimum of its current value and the column index `col`.

After examining all rows, check if `min_col` has been updated from its initial value. If it has been updated, return `min_col` as the index of the leftmost column with a '1'. If it remains unchanged, return `-1`, indicating that no '1' was found in any column.

# Complexity
- **Time complexity:** Each row search involves a binary search over at most `col_count` columns. Since there are `row_count` rows, the total time complexity is $$O(\	ext{row\\_count} \	imes \\log(\	ext{col\\_count}))$$.
- **Space complexity:** The space complexity is $$O(1)$$, as the solution only uses a fixed amount of additional storage for variables like `row_count`, `col_count`, `min_col`, and loop indices, independent of the size of the input matrix.

This approach uses binary search to solve, minimizing unnecessary computations.

# Code

```
def leftMostColumnWithOne(binaryMatrix)
    row_count, col_count = binaryMatrix.dimensions()
    min_col = col_count + 1
    for row in (0..row_count-1) do
        col = (0..col_count-1).bsearch { |v| binaryMatrix.get(row,v) > 0 }
        min_col = [min_col, col].min if col
    end
    return min_col == col_count + 1 ? -1 : min_col
end
```