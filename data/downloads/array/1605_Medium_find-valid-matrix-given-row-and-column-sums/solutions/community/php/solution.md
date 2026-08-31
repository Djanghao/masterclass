# Just loops

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5507677/](https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums/solutions/5507677/)

---

# Approach
The approach of this solution is to create a matrix filled with zeros and then iteratively fill in each cell with the minimum of the remaining row sum and column sum. 
This process helps distribute the sum values provided in rowSum and colSum across the matrix cells effectively.

# Complexity
- Time complexity:
$$O(n * m)$$, where n is the number of rows and m is the number of columns in the matrix. This is because we iterate through each cell in the matrix once to fill in the values.

- Space complexity:
$$O(n * m)$$ because we create a matrix of size n * m to store the values, and no additional space is used that grows with the input size beyond this matrix.

# Code
``` python3 []
class Solution:
    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:
        n, m = len(rowSum), len(colSum)
    
        # Initialize the matrix with all zeros
        matrix = [[0] * m for _ in range(n)]
        
        for i in range(n):
            for j in range(m):
                # The value of the cell is the minimum of the remaining row sum 
                # and column sum
                matrix[i][j] = min(rowSum[i], colSum[j])
                
                # Subtract the value of the cell from the remaining row sum and column sum
                rowSum[i] -= matrix[i][j]
                colSum[j] -= matrix[i][j]
        
        return matrix
```
``` javascript []
/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function(rowSum, colSum) {
     const n = rowSum.length;
    const m = colSum.length;

    // Initialize the matrix with all zeros
    const matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // The value of the cell is the minimum of the remaining row sum 
            // and column sum
            matrix[i][j] = Math.min(rowSum[i], colSum[j]);

            // Subtract the value of the cell from the remaining row sum and column sum
            rowSum[i] -= matrix[i][j];
            colSum[j] -= matrix[i][j];
        }
    }

    return matrix;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $rowSum
     * @param Integer[] $colSum
     * @return Integer[][]
     */
    function restoreMatrix($rowSum, $colSum) {
        $n = count($rowSum);
        $m = count($colSum);

        // Initialize the matrix with all zeros
        $matrix = array_fill(0, $n, array_fill(0, $m, 0));

        for ($i = 0; $i < $n; $i++) {
            for ($j = 0; $j < $m; $j++) {
                // The value of the cell is the minimum of the remaining row sum 
                // and column sum
                $matrix[$i][$j] = min($rowSum[$i], $colSum[$j]);

                // Subtract the value of the cell from the remaining row sum and column sum
                $rowSum[$i] -= $matrix[$i][$j];
                $colSum[$j] -= $matrix[$i][$j];
            }
        }

        return $matrix;
    }
}
```