# Simple Javascript

**Author:** ShashwatBangar
**Votes:** 20
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/1580783/](https://leetcode.com/problems/diagonal-traverse/solutions/1580783/)

---

Explanation
1. We're given a matrix, we need to diagonally traverse the matrix and return the result

2. We create an empty matrix of same size as the given matrix but in this matrix we will
   fill the values according to the desired result and atlast we will use Javascript pre build
   function flat() which flatten multi-dimentional array into single array.
3. We'll be required two for loops to loop through the given matrix as obvious.
4. The "if" condition states that if (rowIndex + colIndex) % 2 === 0, i.e, if we we will push
the               element which is at (rowIndex, colIndex) to the position [rowIndex + colIndex], to the starting of the matrix.
WHY ?
Notice that whenever we're at even position we are moving in downwards direction
in the matrix and whenever we are at odd position we are moving upwards in the matrix




```
var findDiagonalOrder = function(mat) {
    let rows = mat.length;
    let cols = mat[0].length;
    let result = new Array(rows + cols - 1).fill(null).map(() => []);

    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if((row + col) % 2 === 0) result[row + col].unshift(mat[row][col]);
            else result[row + col].push(mat[row][col]);   
        }
    }
    return result.flat();
};
```