# Golang iterative.

**Author:** baba_dro
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/2120833/](https://leetcode.com/problems/check-if-word-can-be-placed-in-crossword/solutions/2120833/)

---

```
func placeWordInCrossword(board [][]byte, word string) bool {
	rev := make([]byte, len(word))
	for i := range word {
		rev[len(rev)-1-i] = word[i]
	}
	reversed := string(rev)

	for y := range board {
		for x := 0; x <= len(board[y])-len(word); x++ {
			if checkRow(board[y], x, word) || checkRow(board[y], x, reversed) {
				return true
			}
		}
	}

	for x := range board[0] {
		for y := 0; y <= len(board)-len(word); y++ {
			if checkCol(board, x, y, word) || checkCol(board, x, y, reversed) {
				return true
			}
		}
	}

	return false
}

func checkRow(row []byte, x int, word string) bool {
	if x > 0 && row[x-1] != '#' {
		return false
	}

	for j := 0; j < len(word); j, x = j+1, x+1 {
		ch := row[x]
		if ch != ' ' && ch != word[j] {
			return false
		}
	}

	if x < len(row) && row[x] != '#' {
		return false
	}

	return true
}

func checkCol(board [][]byte, x, y int, word string) bool {
	if y > 0 && board[y-1][x] != '#' {
		return false
	}

	for j := 0; j < len(word); j, y = j+1, y+1 {
		ch := board[y][x]
		if ch != ' ' && ch != word[j] {
			return false
		}
	}

	if y < len(board) && board[y][x] != '#' {
		return false
	}

	return true
}
```