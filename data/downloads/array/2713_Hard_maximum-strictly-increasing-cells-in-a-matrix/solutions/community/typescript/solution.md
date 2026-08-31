# TypeScript - Sorting + Binary Search. Easy to understand but not optimal

**Author:** parkr96
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3973823/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3973823/)

---

# Intuition
1) Sort the array's rows (**sortedRows**) and sort the array's columns (**sortedColumns**). We'll create a wrapper object that goes into these arrays that will point to the original index.

2) Build a dp[row][column] that stores the count for a cell so we don't revisit the same cell.

3) Visit every cell (This could be optimized. I think you only need to visit the smallest cell(s) in each row/column but I was to lazy to change that :/)

4) At at each cell we need to make sure we've never visited it before, if we have haven't we +1 our count for this run, and visit the next highest cell in the same row, or same column. Note, there could be duplicates hence we may need to visit more than one for each row or column. We retain the max of these visits.

# Complexity
- time complexity
O(n*m log (n*m)

- Space complexity:
n*m)

# Code
```
interface ValueNode {
    row: number;
    column: number;
    value: number;
}

function maxIncreasingCells(mat: number[][]): number {
    const rows = mat.length;
    const columns = mat[0].length;
    const dp: number[][] = [];
    const sortedRows: ValueNode[][] = [];
    const sortedColumns: ValueNode[][] = [];

    for (let i = 0; i < rows; i++) {
        dp.push(new Array(columns).fill(undefined));
        sortedRows.push([]);
    }

    for (let i = 0; i < columns; i++) {
        sortedColumns.push([]);
    }

    for (let i = 0; i < rows; i++) {
        const sortedRow: ValueNode[] = sortedRows[i];
        for (let j = 0; j < columns; j++) {
            const sortedColumn: ValueNode[] = sortedColumns[j];
            const valueNode: ValueNode = {
                row: i,
                column: j,
                value: mat[i][j]
            }
            sortedRow.push(valueNode);
            sortedColumn.push(valueNode);
        }
        sortedRow.sort((a, b) => a.value - b.value);
    }

    for (let i = 0; i < columns; i++) {
        sortedColumns[i].sort((a, b) => a.value - b.value);
    }


    // Iterate over every cell. 
    // Not optimal. We probably only need to iterate the smallest cell in each row, column (which there could be duplicate smallest values)
    let max = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const result = maxIncreasingCellsDP(i, j, dp, sortedRows, sortedColumns, mat);
            max = Math.max(max, result);
        }
    }

    return max;
};

function binarySearch(nums: ValueNode[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
  
    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);
  
      if (nums[mid].value === target) return mid;
      if (target < nums[mid].value) right = mid - 1;
      else left = mid + 1;
    }
  
    return -1;
  }


function maxIncreasingCellsDP(row: number, column: number, dp: number[][], sortedByRow: ValueNode[][], sortedByColumn: ValueNode[][], mat: number[][]): number {
    if (dp[row][column] !== undefined) {
        return dp[row][column];
    }

    const value = mat[row][column];
    const sortedRow = sortedByRow[row];
    const sortedColumn = sortedByColumn[column];

    let result = 1;

    let indexInSortedRow = binarySearch(sortedRow, value);
    while (indexInSortedRow < sortedRow.length && sortedRow[indexInSortedRow].value === value) {
        indexInSortedRow++;
    }
    if (indexInSortedRow < sortedRow.length) {
        const firstlargerNode = sortedRow[indexInSortedRow];
        while (indexInSortedRow < sortedRow.length && sortedRow[indexInSortedRow].value === firstlargerNode.value) {
            const node = sortedRow[indexInSortedRow];
            result = Math.max(result, 1 + maxIncreasingCellsDP(node.row, node.column, dp, sortedByRow, sortedByColumn, mat));
            indexInSortedRow++;
        }
    }

    let indexInSortedColumn = binarySearch(sortedColumn, value);
    while (indexInSortedColumn < sortedColumn.length && sortedColumn[indexInSortedColumn].value === value) {
        indexInSortedColumn++;
    }
    if (indexInSortedColumn < sortedColumn.length) {
        const firstlargerNode = sortedColumn[indexInSortedColumn];
        while (indexInSortedColumn < sortedColumn.length && sortedColumn[indexInSortedColumn].value === firstlargerNode.value) {
            const node = sortedColumn[indexInSortedColumn];
            result = Math.max(result, 1 + maxIncreasingCellsDP(node.row, node.column, dp, sortedByRow, sortedByColumn, mat));
            indexInSortedColumn++;
        }
    }

    dp[row][column] = result;
    return result;
}

```