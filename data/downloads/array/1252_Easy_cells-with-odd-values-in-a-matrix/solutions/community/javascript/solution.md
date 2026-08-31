# [JavaScript] Easy to understand - 3 solutions

**Author:** poppinlp
**Votes:** 33
**Link:** [https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/428116/](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/428116/)

---

### SOLUTION 1

It's a brute force way.

1. We do all operations from the problem description to the matrix according to data in `indices`
2. Traversal the matrix to find the result

```js
const oddCells = (row, column, indices) => {
  const matrix = [];
  let ret = 0;

  for (let i = 0; i < row; ++i) matrix[i] = new Uint8Array(column);

  for (let i = 0; i < indices.length; ++i) {
    const [r, c] = indices[i];
    for (let j = 0; j < column; ++j) ++matrix[r][j];
    for (let j = 0; j < row; ++j) ++matrix[j][c];
  }

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      if (matrix[i][j] % 2 === 1) ++ret;
    }
  }

  return ret;
};
```

Time complexity: O(indices.length * (row + column) + row * column)
Space complexity: O(row * column)

### SOLUTION 2

We don't need to do the operation for all cells. We just need to know the operation count for every row and column, and based on that, we can calculate whether each cell is odd.

1. Traversal the indices and counting for every row and column
2. Traversal all the cells and check whether the value is odd

```js
const oddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  let ret = 0;

  for (let i = 0; i < indices.length; ++i) {
    ++rowCount[indices[i][0]];
    ++columnCount[indices[i][1]];
  }

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      ((rowCount[i] ^ columnCount[j]) & 1) === 1 && ++ret; // & 1 is to get the last bit
    }
  }

  return ret;
};
```

Time complexity: O(indices.length + row * column)
Space complexity: O(row + column)

### SOLUTION 3

Actually, we don't need to care about which row is odd or which column is odd. To find the result, the only thing we need is that the odd row count and odd column count. And then, we calculate the result.

```js
const oddCells = (row, column, indices) => {
  const rowCount = new Uint8Array(row);
  const columnCount = new Uint8Array(column);
  let oddRow = 0;
  let oddColumn = 0;

  for (let i = 0; i < indices.length; ++i) {
    (++rowCount[indices[i][0]] & 1) === 1 ? ++oddRow : --oddRow;
    (++columnCount[indices[i][1]] & 1) === 1 ? ++oddColumn : --oddColumn;
  }

  return oddRow * column + oddColumn * row - 2 * oddRow * oddColumn; // for detail explanation, please see. the comment
};
```

Time complexity: O(indices.length)
Space complexity: O(row + column)