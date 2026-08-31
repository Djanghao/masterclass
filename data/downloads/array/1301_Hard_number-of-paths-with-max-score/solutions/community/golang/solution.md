# Runtime 5 ms Beats 100.00%  Memory 4.68 MB Beats 100.00%

**Author:** rafatgofers
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-paths-with-max-score/solutions/4869206/](https://leetcode.com/problems/number-of-paths-with-max-score/solutions/4869206/)

---

# Intuition:

To find the maximum score and the number of paths leading to that score from the top-left cell, we iterate through each cell of the board, considering three possible directions (right, down, and diagonally down-right) to determine the maximum score and the number of paths leading to that score for each cell.

# Approach:

1. Initialize a 3-dimensional array `dp` to store the maximum score and the number of paths leading to that score for each cell on the board.
2. Iterate through each cell of the board from bottom-right to top-left.
3. Calculate the maximum score and the number of paths leading to that score by considering three possible directions: right, down, and diagonally down-right.
4. Update the `dp` array with the maximum score and the number of paths accordingly.
5. Return an array containing the maximum score and the number of paths leading to that score from the top-left cell of the board.

# Complexity:

Time complexity: \\(O(n^2)\\)
Space complexity: \\(O(n^2)\\)

# Code
```
func pathsWithMaxScore(board []string) []int {
	dp := make([][][2]int, len(board))
	for i := range dp {
		dp[i] = make([][2]int, len(board))
	}
	// initial source
	dp[len(board)-1][len(board)-1] = [2]int{0, 1}
	calculate := func(row, col, preRow, preCol, score int, dp [][][2]int) {
		if dp[preRow][preCol][1] == 0 {
			return
		}
		if newScore := dp[preRow][preCol][0] + score; newScore > dp[row][col][0] {
			dp[row][col][0] = newScore
			dp[row][col][1] = dp[preRow][preCol][1]
		} else if newScore == dp[row][col][0] {
			dp[row][col][1] += dp[preRow][preCol][1]
		}
	}
	for row := len(board) - 1; row >= 0; row-- {
		for col := len(board) - 1; col >= 0; col-- {
			if board[row][col] == 'X' {
				continue
			}
			score := 0
			if board[row][col] >= '1' && board[row][col] <= '9' {
				score = int(board[row][col] - '0')
			}
			// right
			if prevRow, prevCol := row, col+1; prevRow < len(board) && prevCol < len(board) {
				calculate(row, col, prevRow, prevCol, score, dp)
			}
			// down
			if prevRow, prevCol := row+1, col; prevRow < len(board) && prevCol < len(board) {
				calculate(row, col, prevRow, prevCol, score, dp)
			}
			// down-right
			if prevRow, prevCol := row+1, col+1; prevRow < len(board) && prevCol < len(board) {
				calculate(row, col, prevRow, prevCol, score, dp)
			}
			dp[row][col][1] %= 1000000007
		}
	}
	return []int{dp[0][0][0], dp[0][0][1]}
}
```