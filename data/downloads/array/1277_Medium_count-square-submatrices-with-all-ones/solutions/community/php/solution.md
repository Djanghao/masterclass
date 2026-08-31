# PHP solution beats 100% working 27/10/2024

**Author:** kimduong322
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5976288/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5976288/)

---

# Intuition
The problem is about counting the total number of square submatrices within a binary grid. Each cell containing `1` in the grid can be the bottom-right corner of several squares, depending on the continuity of `1`s around it. The goal is to utilize dynamic programming to efficiently calculate and sum up all possible squares in the grid.

# Approach
1. **Dynamic Programming Array (`dp`)**: We define a 2D `dp` array where each `dp[i][j]` will store the size of the largest square that can end at cell `(i, j)` in the original grid.
  
2. **Recurrence Relation**:
   - If `grid[i][j]` is `0`, `dp[i][j]` is `0` (since no square can end at this cell).
   - If `grid[i][j]` is `1`, then `dp[i][j]` depends on three neighbors:
     - The cell above (`dp[i-1][j]`)
     - The cell to the left (`dp[i][j-1]`)
     - The top-left diagonal cell (`dp[i-1][j-1]`)
   - We compute `dp[i][j]` as `1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])`, representing the largest square that can end at `(i, j)`.

3. **Result Accumulation**: Each `dp[i][j]` stores the count of squares that end at `(i, j)`. Summing up all values in `dp` gives the total number of square submatrices.

4. **Edge Cases**: Cells in the first row or first column only contribute squares of size 1, so they are initialized directly.

# Complexity
- **Time Complexity**: \\(O(m \	imes n)\\), where \\(m\\) is the number of rows and \\(n\\) is the number of columns in the grid. We iterate over each cell in the grid once and update the `dp` array in constant time per cell.
- **Space Complexity**: \\(O(m \	imes n)\\), for storing the `dp` array. 

# Code
```php
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    public function countSquares($grid) {
        $rows = count($grid);
        $cols = count($grid[0]);
        $dp = array_fill(0, $rows, array_fill(0, $cols, 0));
        $totalSquares = 0;

        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                // Only consider cells with a 1
                if ($grid[$i][$j] == 1) {
                    // If on the first row or first column, square can only be 1x1
                    if ($i == 0 || $j == 0) {
                        $dp[$i][$j] = 1;
                    } else {
                        $dp[$i][$j] = 1 + min($dp[$i-1][$j], $dp[$i][$j-1], $dp[$i-1][$j-1]);
                    }
                    // Add to total squares
                    $totalSquares += $dp[$i][$j];
                }
            }
        }

        return $totalSquares;
    }
}
