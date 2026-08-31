# Solution 100% beats in PHP with explanation

**Author:** tanhongit
**Votes:** 3
**Link:** [https://leetcode.com/problems/magic-squares-in-grid/solutions/5611092/](https://leetcode.com/problems/magic-squares-in-grid/solutions/5611092/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To determine how many `3x3` subgrids within a given grid are magic squares, we need to check each possible `3x3` subgrid.

A magic square is defined as a grid where the sums of rows, columns, and diagonals are all equal and contain the numbers from 1 to 9 exactly once.

# Approach

1. **Grid Size Check**:
   First, we check if the grid has fewer than 3 rows or columns.
   If it does, return 0 because no `3x3` subgrid can exist.

2. **Iterate Over Subgrids**:
   Use nested loops to iterate over all possible `3x3` subgrids in the grid.

3. **Helper Function**:
   For each subgrid, use a helper function to:
    - Ensure all numbers from 1 to 9 are present exactly once.
    - Check if the sums of all rows, columns, and diagonals are equal.

4. **Count Valid Subgrids**:
   Increment a counter for each valid magic square subgrid found.
    If the helper function returns true, increment the counter `res`.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m \	imes n)$$ where \\(m\\) is the number of rows and \\(n\\) is the number of columns in the grid. We iterate over each possible `3x3` subgrid and check if it is a magic square.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$, aside from the input grid, as I use a constant amount of extra space to store the set of numbers and the sums.

# Code
```php
class Solution {
    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    public static function numMagicSquaresInside($grid) {
        $m = count($grid);
        $n = count($grid[0]);
        $res = 0;
        if ($m < 3 || $n < 3) {
            return 0;
        }

        for ($row = 0; $row <= $m - 3; $row++) {
            for ($col = 0; $col <= $n - 3; $col++) {
                $set = array_fill(0, 10, 0);
                if (self::helper($grid, $row, $col, $set)) {
                    $res++;
                }
            }
        }

        return $res;
    }

    /**
     * @param Integer[][] $grid
     * @param Integer $row
     * @param Integer $col
     * @param Integer[] $set
     * @return Boolean
     */
    private static function helper($grid, $row, $col, &$set) {
        for ($i = 0; $i < 3; $i++) {
            for ($j = 0; $j < 3; $j++) {
                $val = $grid[$row + $i][$col + $j];
                if ($val > 9 || $val < 1 || $set[$val] > 0) {
                    return false;
                }
                $set[$val]++;
            }
        }

        $sum_row1 = $grid[$row][$col] + $grid[$row][$col + 1] + $grid[$row][$col + 2];
        $sum_row2 = $grid[$row + 1][$col] + $grid[$row + 1][$col + 1] + $grid[$row + 1][$col + 2];
        $sum_row3 = $grid[$row + 2][$col] + $grid[$row + 2][$col + 1] + $grid[$row + 2][$col + 2];

        if ($sum_row1 != $sum_row2 || $sum_row1 != $sum_row3) {
            return false;
        }

        $sum_col1 = $grid[$row][$col] + $grid[$row + 1][$col] + $grid[$row + 2][$col];
        $sum_col2 = $grid[$row][$col + 1] + $grid[$row + 1][$col + 1] + $grid[$row + 2][$col + 1];
        $sum_col3 = $grid[$row][$col + 2] + $grid[$row + 1][$col + 2] + $grid[$row + 2][$col + 2];

        if ($sum_col1 != $sum_col2 || $sum_col1 != $sum_col3) {
            return false;
        }

        $diag1 = $grid[$row][$col] + $grid[$row + 1][$col + 1] + $grid[$row + 2][$col + 2];
        $diag2 = $grid[$row][$col + 2] + $grid[$row + 1][$col + 1] + $grid[$row + 2][$col];

        if ($diag1 != $diag2) {
            return false;
        }

        if ($sum_col1 != $sum_row1 || $sum_row1 != $diag1) {
            return false;
        }

        return true;
    }
}
```

If it can help you, please give me a upvote. Thank you so for reading!
