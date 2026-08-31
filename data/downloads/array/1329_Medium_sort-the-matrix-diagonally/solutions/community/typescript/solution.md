# Easy to understand Javascript/Typescript

**Author:** Atomix
**Votes:** 2
**Link:** [https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1673236/](https://leetcode.com/problems/sort-the-matrix-diagonally/solutions/1673236/)

---

Start with each column in the top row to get and sort each of those diagonals.
Then go down the first (leftmost) row to get and sort each of those columns. 

After you get and sort each column, set the sorted diagonals in the same way we got them. To traverse on diagonal we just increase row + 1 and column + 1 until we reach the end.

```
function diagonalSort(mat: number[][]): number[][] {
    
    const sortedMat = Array(mat.length).fill(0).map(a => []);
    
    function getDiag(r, c) {
        const out = [];
        while (r < mat.length && c < mat[0].length) {
            out.push(mat[r++][c++]);
        }
        return out;
    }
    
    function setDiag(r, c, cells) {
        while (r < mat.length && c < mat[0].length) {
            sortedMat[r++][c++] = cells.shift();
        }
    }
    
    for (let c = 0; c < mat[0].length; c++) {
        const diag = getDiag(0, c);
        setDiag(0, c, diag.sort((a,b) => a - b));
    }
    
    for (let r = 0; r < mat.length; r++) {
        const diag = getDiag(r, 0);
        setDiag(r, 0, diag.sort((a,b) => a - b));
    }
    
    return sortedMat;
};
```