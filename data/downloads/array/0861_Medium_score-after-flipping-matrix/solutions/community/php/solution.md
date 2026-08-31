# Maximizing Binary Matrix Score

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5153006/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5153006/)

---

# Intuition
The problem aims to maximize the score of a binary matrix by toggling rows and columns. We first ensure that the leftmost column starts with all ones to maximize the score. Then, we toggle columns if necessary to achieve the maximum possible score.

# Approach
1. Ensure the leftmost column starts with all ones by toggling rows if needed.
2. Iterate through the remaining columns and toggle them if the number of ones is less than half of the total rows.
3. Convert each row to a binary number and sum them up to obtain the final score.


# Complexity
- Time complexity:
O(m\xD7n), where m is the number of rows and n is the number of columns in the grid.

- Space complexity:
O(1) since we modify the input matrix in place without using any additional space.

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function matrixScore($grid) {
        $m = count($grid);
        $n = count($grid[0]);
        
        // Step 1: Ensure the leftmost column starts with all ones
        for ($i = 0; $i < $m; $i++) {
            if ($grid[$i][0] == 0) {
                // Toggle the row
                for ($j = 0; $j < $n; $j++) {
                    $grid[$i][$j] ^= 1;
                }
            }
        }
        
        // Step 2: Toggle columns if necessary
        for ($j = 1; $j < $n; $j++) {
            $countOnes = 0;
            for ($i = 0; $i < $m; $i++) {
                if ($grid[$i][$j] == 1) {
                    $countOnes++;
                }
            }
            // If the number of ones is less than half, toggle the column
            if ($countOnes < ($m + 1) / 2) {
                for ($i = 0; $i < $m; $i++) {
                    $grid[$i][$j] ^= 1;
                }
            }
        }
        
        // Step 3: Convert each row to a binary number and sum them up
        $score = 0;
        foreach ($grid as $row) {
            $score += bindec(implode('', $row));
        }
        
        return $score;
    }
}
```