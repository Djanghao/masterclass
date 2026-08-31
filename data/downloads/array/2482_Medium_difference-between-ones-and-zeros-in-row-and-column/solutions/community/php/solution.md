# Easy PHP Solution || But not optimize one.

**Author:** bharatiyaa10
**Votes:** 0
**Link:** [https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4422157/](https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/solutions/4422157/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Step 1: Counts Array length for (mxn) dimension
- Step 2: Initialize Arrays for Row and Column Sums
- Step 3: Calculate Row and Column Sums
- Step 4: Calculate the Difference Matrix
# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m*n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer[][]
     */
    function onesMinusZeros($grid) {
        $m = count($grid);
        $n = count($grid[0]);

        // Initialize arrays for row and column sums
        $onesRow = array_fill(0, $m, 0);
        $zerosRow = array_fill(0, $m, 0);
        $onesCol = array_fill(0, $n, 0);
        $zerosCol = array_fill(0, $n, 0);

        // Calculate row and column sums
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid[$i][$j] == 1) {
                    $onesRow[$i]++;
                    $onesCol[$j]++;
                } else {
                    $zerosRow[$i]++;
                    $zerosCol[$j]++;
                }
            }
        }

        // Calculate the difference matrix
        $diff = [];
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                $diff[$i][$j] = $onesRow[$i] + $onesCol[$j] - $zerosRow[$i] - $zerosCol[$j];
            }
        }

        return $diff;
    }
}
```