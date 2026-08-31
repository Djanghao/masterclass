# Swift

**Author:** FlightyNEO
**Votes:** 1
**Link:** [https://leetcode.com/problems/available-captures-for-rook/solutions/398665/](https://leetcode.com/problems/available-captures-for-rook/solutions/398665/)

---

```
func numRookCaptures(_ board: [[Character]]) -> Int {
	var result = 0
	var (row, column) = (0, 0)
	for i in 0..<board.count {
		for j in 0..<board.count {
			if board[i][j] == "R" {
				row = i
				column = j
				break
			}
		}
	}

	// on right
	for column in stride(from: column + 1, to: board.count, by: 1) {
		guard board[row][column].isLetter else { continue }
		result += board[row][column].isLowercase ? 1 : 0
		break
	}

	// on left
	for column in stride(from: column - 1, through: 0, by: -1) {
		guard board[row][column].isLetter else { continue }
		result += board[row][column].isLowercase ? 1 : 0
		break
	}

	// on bottom
	for row in stride(from: row + 1, to: board.count, by: 1) {
		guard board[row][column].isLetter else { continue }
		result += board[row][column].isLowercase ? 1 : 0
		break
	}

	// on top
	for row in stride(from: row - 1, through: 0, by: -1) {
		guard board[row][column].isLetter else { continue }
		result += board[row][column].isLowercase ? 1 : 0
		break
	}

	return result
}
```