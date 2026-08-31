# ✔️ CPP || EXPLAINED || CLEAN ✔️

**Author:** karan_8082
**Votes:** 148
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/2111583/](https://leetcode.com/problems/n-queens-ii/solutions/2111583/)

---

**UPVOTE IF HELPFUL**
We first create a **( n X n )** chess board and assign **0** to every index.
Whenever a queen will be placed, index will be made **1**.

In this approach ,

Whenever a queen is placed, at first it is checked if it satisfies the conditions given that it is not under attack.

**validMove** function.
First it check there are no other queen in row the queen is filled.
As we are putting queen column wise so no need to check for column.
Then there are two diagonals to check for.
* **COLUMN_WISE** FILLING = Only left part of the diagonals are checked as positions to the right of the present column are still unfilled.
*  **ROW_WISE** FILLING = Only upper part of the diagonals are checked as positions below of the present column are still unfilled.

If conditions satisfied, Queen is placed and we move to next column.
If no queen satisfy the problem, we backtrack and try to change the position of previous queen.

**UPVOTE IF HELPFUL**
```
class Solution {
public:
    int totalNQueens(int n) {
	vector<bool> col(n), diag(2*n-1), anti_diag(2*n-1);
	return solve(col, diag, anti_diag, 0);
}
   
int solve(vector<bool>& col, vector<bool>& diag, vector<bool>& anti_diag, int row) {
	int n = size(col), count = 0;
    if(row == n) return 1;
	for(int column = 0; column < n; column++)           
		if(!col[column] && !diag[row + column] && !anti_diag[row - column + n - 1]){ 
			col[column] = diag[row + column] = anti_diag[row - column + n - 1] = true;
			count += solve(col, diag, anti_diag, row + 1); 
			col[column] = diag[row + column] = anti_diag[row - column + n - 1] = false; 
		}                                
	return count;
}
};
```
![image](./images/0.jpeg)
