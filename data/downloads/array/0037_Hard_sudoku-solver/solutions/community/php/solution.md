# Optimized Backtracking Sudoku Solver

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/5170753/](https://leetcode.com/problems/sudoku-solver/solutions/5170753/)

---

# Intuition
Solving a Sudoku puzzle typically involves using backtracking, where we try different values in each cell until we find a valid solution.

# Approach
1. We'll use backtracking to try different values in each empty cell until we find a valid solution.
2. We'll maintain arrays $rows, $cols, and $boxes to keep track of which digits are already present in each row, column, and 3x3 sub-box
3. We'll start by initializing these arrays based on the initial state of the board.
4. We'll define a backtracking function backtrack that recursively tries different values for each empty cell:
- If we reach the end of the board without encountering any empty cells, we've found a valid solution, so we return true.
- Otherwise, for each empty cell, we try placing digits from 1 to 9 that satisfy the Sudoku rules. If placing a digit is valid, we recursively call backtrack on the next cell.
- If we can't find a valid digit for the current cell, we backtrack by restoring the cell to its original state and try a different digit.
5. We'll call the backtrack function initially with the first empty cell (row 0, column 0).

# Complexity
- Time complexity: O(9^m), where m is the number of empty cells to be filled. In the worst case, we need to try 9 options for each empty cell.

- Space complexity: O(3 * 9^2) = O(1), since we use arrays of constant size to keep track of digits in rows, columns, and boxes.

# Code
```
class Solution {

    /**
     * @param String[][] $board
     * @return NULL
     */
    function solveSudoku(&$board) {
        $rows = array_fill(0, 9, array_fill(0, 10, false));
        $cols = array_fill(0, 9, array_fill(0, 10, false));
        $boxes = array_fill(0, 9, array_fill(0, 10, false));
        
        // Initialize rows, cols, and boxes arrays with initial values
        for ($i = 0; $i < 9; $i++) {
            for ($j = 0; $j < 9; $j++) {
                if ($board[$i][$j] != '.') {
                    $num = intval($board[$i][$j]);
                    $rows[$i][$num] = true;
                    $cols[$j][$num] = true;
                    $boxIndex = (int)($i / 3) * 3 + (int)($j / 3);
                    $boxes[$boxIndex][$num] = true;
                }
            }
        }
        
        $this->backtrack($board, $rows, $cols, $boxes, 0, 0);
    }
    
    function backtrack(&$board, &$rows, &$cols, &$boxes, $row, $col) {
        if ($row == 9) {
            return true; // All rows filled successfully
        }
        
        // Move to the next row if current row is filled
        if ($col == 9) {
            return $this->backtrack($board, $rows, $cols, $boxes, $row + 1, 0);
        }
        
        // Skip filled cells
        if ($board[$row][$col] != '.') {
            return $this->backtrack($board, $rows, $cols, $boxes, $row, $col + 1);
        }
        
        // Try placing digits from 1 to 9
        for ($num = 1; $num <= 9; $num++) {
            if (!$rows[$row][$num] && !$cols[$col][$num] && !$boxes[(int)($row / 3) * 3 + (int)($col / 3)][$num]) {
                // Place the number
                $board[$row][$col] = strval($num);
                $rows[$row][$num] = true;
                $cols[$col][$num] = true;
                $boxes[(int)($row / 3) * 3 + (int)($col / 3)][$num] = true;
                
                // Proceed to the next cell
                if ($this->backtrack($board, $rows, $cols, $boxes, $row, $col + 1)) {
                    return true;
                }
                
                // Backtrack
                $board[$row][$col] = '.';
                $rows[$row][$num] = false;
                $cols[$col][$num] = false;
                $boxes[(int)($row / 3) * 3 + (int)($col / 3)][$num] = false;
            }
        }
        
        // Exhausted all options, backtrack
        return false;
    }
}
```