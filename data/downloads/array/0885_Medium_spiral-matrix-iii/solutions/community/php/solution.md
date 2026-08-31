# Solution beat 100% | PHP

**Author:** tanhongit
**Votes:** 3
**Link:** [https://leetcode.com/problems/spiral-matrix-iii/solutions/5606322/](https://leetcode.com/problems/spiral-matrix-iii/solutions/5606322/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- To traverse all the cells in a grid of size `rows * cols` starting from a specific position (`rStart`, `cStart`) in a spiral order, we can use an array of directions and a variable to keep track of the number of steps needed in each direction.
- We will move in sequential directions: **right, down, left, and up**, increasing the number of steps after every two directions (one complete cycle).
# Approach
<!-- Describe your approach to solving the problem. -->
- Initialize necessary variables such as the direction array, total number of cells, starting position, initial step count, and direction index.
- Use a while loop to continue until we have added all the cells to the result array.
- Inside the while loop, use a nested for loop. The outer loop runs twice for each direction (to ensure we change direction after every two edges), and the inner loop moves the required number of steps in the current direction.
- Check if the new position is within the grid bounds, and if so, add that position to the result array.
- After every two directions, increment the number of steps required.
# Complexity
- Time complexity: **O(n\xD7m)**

We will traverse all cells in the grid once, so the time complexity is linear with respect to the number of cells in the grid, or `O(n\xD7m)`, where `n` is the number of rows and `m` is the number of columns.

- Space complexity: **O(n\xD7m)**

The result array `ans` will contain all positions of the grid, so the space complexity is also linear with respect to the number of cells in the grid, or `O(n\xD7m)`.
# Code
```
class Solution
{
    /**
     * @param Integer $rows
     * @param Integer $cols
     * @param Integer $rStart
     * @param Integer $cStart
     * @return Integer[][]
     */
    public static function spiralMatrixIII($rows, $cols, $rStart, $cStart) {
        $directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        $totalCells = $rows * $cols;
        $r = $rStart;
        $c = $cStart;
        $steps = 1;
        $directionIndex = 0;
        $ans = [[$r, $c]];
        
        while (count($ans) < $totalCells) {
            for ($i = 0; $i < 2; $i++) {
                for ($j = 0; $j < $steps; $j++) {
                    $r += $directions[$directionIndex][0];
                    $c += $directions[$directionIndex][1];
                    if ($r >= 0 && $r < $rows && $c >= 0 && $c < $cols) {
                        $ans[] = [$r, $c];
                    }
                }
                $directionIndex = ($directionIndex + 1) % 4;
            }
            $steps++;
        }
        return $ans;
    }
}

```