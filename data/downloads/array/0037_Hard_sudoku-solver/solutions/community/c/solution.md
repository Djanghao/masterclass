# Simple and clean backtrack

**Author:** Gh05t
**Votes:** 74
**Link:** [https://leetcode.com/problems/sudoku-solver/solutions/537173/](https://leetcode.com/problems/sudoku-solver/solutions/537173/)

---

Returning is required because we normally store the result in a vector in question of this type, but since it's a bactracking solution, intial and final states of the board will be same, so to avoid we return and stop it from backtracking after solution is made.
```
bool isValid(vector<vector<char>>& board, int row, int col, char c) {
    // row check
    for(int i = 0; i < 9; i++) 
		if(board[i][col] == c) 
			return false;
	// col check
    for(int i = 0; i < 9; i++) 
		if(board[row][i] == c) 
			return false;
    // box check
    int x0 = (row/3) * 3, y0 = (col/3) * 3;
    for(int i = 0; i < 3; i++) {
        for(int j = 0; j < 3; j++) {
            if(board[x0 + i][y0 + j] == c) return false;
        }
    }
    return true;
}

bool helper(vector<vector<char>> &board, int row, int col) {
    // done
    if(row == 9) 
		return true;
    // time for next row
    if(col == 9) 
		return helper(board, row + 1, 0);
    // already marked
    if(board[row][col] != '.') 
		return helper(board, row, col + 1);

    for(char c = '1'; c <= '9'; c++) {
        if(isValid(board, row, col, c)) {
            board[row][col] = c;
            // without return here, the board reverts to initial state
            if(helper(board, row, col + 1))
				return true;
            board[row][col] = '.';
        }
    }
    return false;
}

void solveSudoku(vector<vector<char>>& board) {
    helper(board, 0, 0);
}
```