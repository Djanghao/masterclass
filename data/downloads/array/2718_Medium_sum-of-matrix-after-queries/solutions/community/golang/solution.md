# Golang solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3958523/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/3958523/)

---

# Code
```go
func matrixSumQueries(n int, queries [][]int) int64 {
	rowFlush, colFlush := make([][2]int, n), make([][2]int, n)
	for i := 0; i < n; i++ {
		rowFlush[i] = [2]int{-1, 0}
		colFlush[i] = [2]int{-1, 0}
	}
	for i, q := range queries {
		switch q[0] {
		case 0:
			rowFlush[q[1]] = [2]int{i, q[2]}
		case 1:
			colFlush[q[1]] = [2]int{i, q[2]}
		}
	}
	summation := 0
	for r := 0; r < n; r++ {
		for c := 0; c < n; c++ {
			if rowFlush[r][0] > colFlush[c][0] {
				summation += rowFlush[r][1]
			} else {
				summation += colFlush[c][1]
			}
		}
	}
	return int64(summation)
}
```