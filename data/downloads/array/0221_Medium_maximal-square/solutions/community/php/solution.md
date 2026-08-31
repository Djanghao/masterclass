# 2D DP (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-square/solutions/5494678/](https://leetcode.com/problems/maximal-square/solutions/5494678/)

---

# Approach
This solution uses dynamic programming.

1. Create a DP matrix with dimensions one greater than the input matrix to simplify boundary checks.
2. Initialize the maximum side length of the square seen so far to 0.
3. Iterate over the matrix starting from the second row and column.
For each cell in the matrix:
- If the current cell is '1':
- - Update the DP cell with the minimum of the values from the cell above, left, and diagonally above-left, plus 1. This represents the size of the largest square ending at that cell.
- - Update the maximum side length if needed.
4. The result is the maximum side length squared, as this represents the area of the largest square.

# Complexity
- Time complexity:
$$O(mn)$$, where m is the number of rows and n is the number of columns in the input matrix. This is because the solution iterates over each cell in the matrix once.

- Space complexity:
$$O(m)$$, where m is the number of rows in the input matrix. This is because the solution uses a DP matrix with dimensions m+1 x n+1, where n is the number of columns in the input matrix.

# Code
``` python3 []
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        if not matrix:
            return 0
        
        rows = len(matrix)
        cols = len(matrix[0])
        
        # Initialize the dp array with 0s and an extra row and column for boundary conditions
        dp = [[0 for _ in range(cols + 1)] for _ in range(rows + 1)]
        
        max_side = 0
        
        for i in range(1, rows + 1):
            for j in range(1, cols + 1):
                # If the cell is 1, update the dp array with the minimum of the 2 choices below plus 1
                if matrix[i - 1][j - 1] == '1':
                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
                    # Update the maximum side if the current dp value is greater
                    max_side = max(max_side, dp[i][j])
        
        # Return the area of the largest square
        return max_side * max_side
```
``` javascript []
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix || matrix.length === 0) {
        return 0;
    }
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // Initialize the dp array with 0s and an extra row and column for boundary conditions
    const dp = new Array(rows + 1).fill(0).map(() => new Array(cols + 1).fill(0));
    
    let maxSide = 0;
    
    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < cols + 1; j++) {
            // If the cell is 1, update the dp array with the minimum of the 2 choices below plus 1
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                // Update the maximum side if the current dp value is greater
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    
    // Return the area of the largest square
    return maxSide * maxSide;
};
```
``` php []
class Solution {

    /**
     * @param String[][] $matrix
     * @return Integer
     */
    function maximalSquare($matrix) {
        if (empty($matrix) || count($matrix) === 0) {
            return 0;
        }
        
        $rows = count($matrix);
        $cols = count($matrix[0]);
        
        // Initialize the dp array with 0s and an extra row and column for boundary conditions
        $dp = array_fill(0, $rows + 1, array_fill(0, $cols + 1, 0));
        
        $maxSide = 0;
        
        for ($i = 1; $i < $rows + 1; $i++) {
            for ($j = 1; $j < $cols + 1; $j++) {
                // If the cell is 1, update the dp array with the minimum of the 2 choices below plus 1
                if ($matrix[$i - 1][$j - 1] === '1') {
                    $dp[$i][$j] = min($dp[$i-1][$j], $dp[$i][$j-1], $dp[$i-1][$j-1]) + 1;
                    // Update the maximum side if the current dp value is greater
                    $maxSide = max($maxSide, $dp[$i][$j]);
                }
            }
        }
        
        // Return the area of the largest square
        return $maxSide * $maxSide;
    }
}
```