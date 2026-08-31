# HashMap solution

**Author:** ekondrashkov
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/6119700/](https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/6119700/)

---

# Approach
Create HashMap for matrix values
Go through the arr and check if column or row for added value is fully painted

# Complexity
- Time complexity:
O(N + M)


# Code
```typescript []
interface IMatrix {
    row: number;
    col: number;
}

function firstCompleteIndex(arr: number[], mat: number[][]): number {
    const rowsMap = new Map<number, number>();
    const columnsMap = new Map<number, number>();
    const matMap = new Map<number, IMatrix>()

    // create hash map for matrix values
    for(let row = 0; row < mat.length; row++) {
        const rowArr = mat[row];
        for(let column = 0; column < rowArr.length; column++) {
            matMap.set(rowArr[column], {
                row: row,
                col: column
            })
        }
    }

    // go through the arr and check if column or row for added value is painted
    for(let move = 0; move < arr.length; move++) {
        const { row, col } = matMap.get(arr[move]);

        // increment length for row
        let rowCount = rowsMap.get(row) ?? 0;
        rowCount++;
        if(rowCount === mat[0].length) {
            return move;
        } 

        // increment length for column
        let columnCount = columnsMap.get(col) ?? 0;
        columnCount++;
        if(columnCount === mat.length) {
            return move;
        } 

        rowsMap.set(row, rowCount);
        columnsMap.set(col, columnCount);
    }
};
```