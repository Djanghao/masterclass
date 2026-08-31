# 🟡🔵 TS/JS easy to understand solution BEATS ✅ 100% time and memmory 🔥🔥🔥

**Author:** arveske
**Votes:** 1
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/4710877/](https://leetcode.com/problems/modify-the-matrix/solutions/4710877/)

---

![Screenshot 2024-02-11 141424.png](./images/0.png)

# Intuition
My initial thought is to iterate over the matrix and create a new matrix where each row represents the values of a specific column. Then I iterate over the original matrix again and replace any occurrences of -1 with the maximum values found in the corresponding columns matrix
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Initialize an array called `columns` to store the columns of the matrix.
2. Populate the `columns` array by iterating over each row of the input matrix and pushing the values into the corresponding column array.
3. **Iterate** over the input **matrix again**. If the element is equal to -1, replace it with the maximum value found in the corresponding column from the columns array.
4. Return the modified matrix
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n * m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function modifiedMatrix(matrix: number[][]): number[][] {
    const columns: number[][] = Array.from({ length: matrix[0].length }, () => [])
    for (const row of matrix) {
        row.forEach((val, colIndex) => {
            columns[colIndex].push(val)
        })
    }
    return matrix.map((row) => row.map((val, colIndex) => {
        if (val == -1) {
            return Math.max(...columns[colIndex])
        }
        return val
    })
    )
};
```