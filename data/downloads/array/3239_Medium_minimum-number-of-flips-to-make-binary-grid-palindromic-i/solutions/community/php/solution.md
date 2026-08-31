# Two pointers

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5596017/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5596017/)

---

# Approach
The solution uses two pointers approach.

In the first pass, the left and right pointers are used to compare the elements at the left and right indices of the row and increment the count of flips if they are different.

In the second pass, the left and right pointers are used to compare the elements at the left and right indices of the column and increment the count of flips if they are different.

# Complexity
- Time complexity:
$$O(mn)$$, where m is the number of rows and n is the number of columns. This is because the solution iterates over each element in the grid twice, once for counting the flips required for each row and once for counting the flips required for each column.

- Space complexity:
$$O(m+n)$$, where m is the number of rows and n is the number of columns. This is because the solution creates two arrays, row_flips and col_flips, to store the count of flips required for each row and column, respectively. The size of these arrays is equal to the number of rows and columns, respectively.

# Code
``` python3 []
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        # Number of rows
        m = len(grid)
        # Number of columns
        n = len(grid[0])

        # Initialize variables to count the number of flips required for each 
        # row and column
        row_flips = [0] * m
        col_flips = [0] * n

        # Count the number of flips required for each row
        for i in range(m):
            row = grid[i]
            left = 0
            right = n - 1
            while left < right:
                # If the elements at the left and right indices are different,
                # increment the count of flips required for the row
                if row[left] != row[right]:
                    row_flips[i] += 1
                left += 1
                right -= 1

        # Count the number of flips required for each column
        for j in range(n):
            # Get the elements of the jth column
            column = [grid[i][j] for i in range(m)]
            left = 0
            right = m - 1
            while left < right:
                # If the elements at the left and right indices are different,
                # increment the count of flips required for the column
                if column[left] != column[right]:
                    col_flips[j] += 1
                left += 1
                right -= 1

        return min(sum(row_flips), sum(col_flips))
```
``` javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function(grid) {
    // Number of rows
    let m = grid.length;
    // Number of columns
    let n = grid[0].length;

    // Initialize variables to count the number of flips required for each 
    // row and column
    let rowFlips = Array(m).fill(0);
    let colFlips = Array(n).fill(0);

    // Count the number of flips required for each row
    for (let i = 0; i < m; i++) {
        let row = grid[i];
        let left = 0;
        let right = n - 1;
        while (left < right) {
            // If the elements at the left and right indices are different,
            // increment the count of flips required for the row
            if (row[left] !== row[right]) {
                rowFlips[i]++;
            }
            left++;
            right--;
        }
    }

    // Count the number of flips required for each column
    for (let j = 0; j < n; j++) {
        // Get the elements of the jth column
        let column = grid.map(row => row[j]);
        let left = 0;
        let right = m - 1;
        while (left < right) {
            // If the elements at the left and right indices are different,
            // increment the count of flips required for the column
            if (column[left] !== column[right]) {
                colFlips[j]++;
            }
            left++;
            right--;
        }
    }

    return Math.min(rowFlips.reduce((sum, flip) => sum + flip, 0), colFlips.reduce((sum, flip) => sum + flip, 0));
};
```
``` php []
class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minFlips($grid) {
        // Number of rows
        $m = count($grid);
        // Number of columns
        $n = count($grid[0]);

        // Initialize variables to count the number of flips required for each row
        $row_flips = array_fill(0, $m, 0);
        // Initialize variables to count the number of flips required for each column
        $col_flips = array_fill(0, $n, 0);

        // Count the number of flips required for each row
        for ($i = 0; $i < $m; $i++) {
            $row = $grid[$i];
            $left = 0;
            $right = $n - 1;
            while ($left < $right) {
                if ($row[$left] != $row[$right]) {
                    $row_flips[$i]++;
                }
                $left++;
                $right--;
            }
        }

        // Count the number of flips required for each column
        for ($j = 0; $j < $n; $j++) {
            // Get the elements of the jth column
            $column = array_column($grid, $j);
            $left = 0;
            $right = $m - 1;
            while ($left < $right) {
                if ($column[$left] != $column[$right]) {
                    $col_flips[$j]++;
                }
                $left++;
                $right--;
            }
        }

        return min(array_sum($row_flips), array_sum($col_flips));
    }
}
```