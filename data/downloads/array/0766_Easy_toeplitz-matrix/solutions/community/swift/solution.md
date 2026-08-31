# Easy Swift solution. Faster than 100%

**Author:** kripkenstein
**Votes:** 4
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/1494741/](https://leetcode.com/problems/toeplitz-matrix/solutions/1494741/)

---

Compare each cell to the cell diagonally right and below it. Don't compare if you are on last row or column.  

```
class Solution {
    func isToeplitzMatrix(_ matrix: [[Int]]) -> Bool {
        
        let colLast =  matrix[0].count - 1 
        let rowLast = matrix.count - 1 
        
        for c in (0..<colLast) {
            for r in (0..<rowLast) {
                if matrix[r][c] != matrix[r+1][c+1] {
                    return false
                }
            } 
        }
        
        return true
    }
}

```