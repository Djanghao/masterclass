# JAVA EASIEST SOLUTION✅😎 || STEP BY STEP EXPLAINED🤯

**Author:** abhiyadav05
**Votes:** 107
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/3469400/](https://leetcode.com/problems/sudoku-solver/solutions/3469400/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(9^(n*n))

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2) 
![Screenshot_20230205_171246.png](./images/0.png)


# Code
```
class Solution {
    public void solveSudoku(char[][] board) {
        // Start solving sudoku from the first cell
        solve(board, 0, 0);
    }

    private boolean solve(char[][] board, int row, int col) {
        // Base case: If row is equal to board length, entire board has been filled
        if (row == board.length) {
            return true;
        }
        
        // Move to next row when current row is fully filled
        if (col == board[0].length) {
            return solve(board, row + 1, 0);
        }
        
        // Skip cells that are already filled
        if (board[row][col] != '.') {
            return solve(board, row, col + 1);
        }
        
        // Try different numbers in current cell
        for (char num = '1'; num <= '9'; num++) {
            if (isValidPlacement(board, row, col, num)) {
                board[row][col] = num; // Fill current cell with valid number
                
                // Move to next cell
                if (solve(board, row, col + 1)) {
                    return true;
                }
                
                // Backtrack to previous state if solution not found
                board[row][col] = '.';
            }
        }
        
        // No valid solution found
        return false;
    }

    private boolean isValidPlacement(char[][] board, int row, int col, char num) {
        // Check if num is already in the same row, column or 3x3 subgrid
        for (int i = 0; i < board.length; i++) {
            // Check row
            if (board[i][col] == num) {
                return false;
            }

            // Check column
            if (board[row][i] == num) {
                return false;
            }
 
            // Check 3x3 subgrid
            int subgridRow = 3 * (row / 3) + i / 3; // Calculate row index of subgrid
            int subgridCol = 3 * (col / 3) + i % 3; // Calculate column index of subgrid
 
            if (board[subgridRow][subgridCol] == num) {
                return false;
            }
        }

        // Placement is valid
        return true;
    }
}

```