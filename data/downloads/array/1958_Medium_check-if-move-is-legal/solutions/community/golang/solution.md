# Runtime 2 ms Beats 80.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-move-is-legal/solutions/4916380/](https://leetcode.com/problems/check-if-move-is-legal/solutions/4916380/)

---

# Code
```
func checkMove(board [][]byte, rMove int, cMove int, color byte) bool {
	direction := [][]int{{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}}

	for _, d := range direction {
		if dfs(board, rMove, cMove, color, d, 1) {
			return true
		}
	}
	return false
}

func dfs(board [][]byte, r int, c int, color byte, direcn []int, length int) bool {
	nr := r + direcn[0]
	nc := c + direcn[1]

	if nr < 0 || nc < 0 || nr >= len(board) || nc >= len(board[0]) {
		return false
	}

	if board[nr][nc] == color {
		if length >= 2 {
			return true
		} else {
			return false
		}
	} else {
		if board[nr][nc] == '.' {
			return false
		}
		return dfs(board, nr, nc, color, direcn, length+1)
	}
}
```