# JavaScript Solution - Compare to Previous Diagonal Cell

**Author:** Deadication
**Votes:** 19
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/1196821/](https://leetcode.com/problems/toeplitz-matrix/solutions/1196821/)

---

I think the trap or mistake that one can fall into trying to solve this problem is trying to write an algorithm to move diagonally. This makes it confusing. However, instead, we can move the normally way to usually do through a matrix and just compare the value of the current cell to the one diagonal of it. Since we can't compare outside the boundary of the matrix, we need to start our row at 1 and the column for each row at 1 also.

```
var isToeplitzMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] != matrix[i - 1][j - 1]) return false;
        }     
    }
	
    return true;
};
```