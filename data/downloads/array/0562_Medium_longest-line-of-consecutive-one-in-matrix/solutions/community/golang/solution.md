# Go: easy to understand solution

**Author:** mhef
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/5405985/](https://leetcode.com/problems/longest-line-of-consecutive-one-in-matrix/solutions/5405985/)

---

# Complexity
- Time complexity: $$O(m * n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m + n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func longestLine(mat [][]int) int {
	rowCount := make([]int, len(mat))
    rowMaxCount := 0

	colCount := make([]int, len(mat[0]))
    colMaxCount := 0

	diagonal := make(map[int]int)
    diagMaxCount := 0

	antiDiagonal := make(map[int]int)
    antiDiagMaxCount := 0

	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[i]); j++ {
			if mat[i][j] == 1 {
				rowCount[i]++
				colCount[j]++
				diagonal[i-j]++
				antiDiagonal[i+j]++
			} else {
				rowCount[i] = 0
				colCount[j] = 0  
				diagonal[i-j] = 0
				antiDiagonal[i+j] = 0
			}

            rowMaxCount = max(rowMaxCount, rowCount[i])
            colMaxCount = max(colMaxCount, colCount[j])
            diagMaxCount = max(diagMaxCount, diagonal[i-j])
            antiDiagMaxCount = max(antiDiagMaxCount, antiDiagonal[i+j])
		}
	}

	return max(rowMaxCount, colMaxCount, diagMaxCount, antiDiagMaxCount)
}
```