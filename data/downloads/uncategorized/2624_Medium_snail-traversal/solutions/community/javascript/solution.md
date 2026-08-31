# Snail | Easy | Detail Explanation

**Author:** sourasb
**Votes:** 23
**Link:** [https://leetcode.com/problems/snail-traversal/solutions/3567988/](https://leetcode.com/problems/snail-traversal/solutions/3567988/)

---

## \u2705\u2705 Please Upvote if you find it useful \u2705\u2705

1. The `Array.prototype.snail` function extends the functionality of the JavaScript `Array` prototype, allowing you to convert a one-dimensional array into a two-dimensional snail-shaped matrix based on the specified number of rows and columns.

2. The function takes two parameters: `numRows` and `numCols`, which represent the number of rows and columns in the resulting matrix.

3. We first checks whether the total number of elements in the array matches the expected number of elements based on the provided `numRows` and `numCols`. If they don't match, it returns an empty array, indicating that the conversion is not possible.

4. Then, we create an empty `result` array, which will store the elements of the resulting matrix. The `Array()` constructor is used to create an array with a length equal to `numRows`. The `fill()` method fills this array with empty arrays, essentially initializing a matrix structure.

5. The nested loops iterate over the `numCols` and `numRows` to fill the result matrix. The outer loop, represented by `row`, iterates over the columns.

6. Inside the outer loop, the inner loop, represented by `col`, iterates over the rows.

7. The matrix elements are inserted into the `result` matrix based on their position in the snail shape. The conditional expression `(row & 1)` checks if the current row index is odd. If it is odd, it means the elements need to be inserted in reverse order, so the formula `numRows - col - 1` is used to calculate the correct index for insertion. Otherwise, if the row index is even, the elements are inserted in the regular order using the `col` index.

8. The elements are pushed into the respective row of the `result` matrix using the calculated index.

9. Once all the elements are inserted into the `result` matrix, it is returned as the final result.

# Code
```
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(numRows, numCols) {
  if (numRows * numCols !== this.length) return [];
  let result = Array(numRows).fill().map(() => []);
  for (let row = 0; row < numCols; row++) {
    for (let col = 0; col < numRows; col++) {
      result[(row & 1) ? numRows - col - 1 : col].push(this[row * numRows + col]);
    }
  }
  return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
```
## \u2705\u2705 Please Upvote if you find it useful \u2705\u2705