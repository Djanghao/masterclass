# 👍Runtime 34 ms Beats 100.00%

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5504364/](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y/solutions/5504364/)

---

# Code
```
func numberOfSubmatrices(A [][]byte) int {
	n, m := len(A), len(A[0])
	res := 0
	X := make([][]int, n+1)
	Y := make([][]int, n+1)
	for i := range X {
		X[i] = make([]int, m+1)
		Y[i] = make([]int, m+1)
	}

	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			X[i+1][j+1] = X[i][j+1] + X[i+1][j] - X[i][j] + boolToInt(A[i][j] == 'X')
			Y[i+1][j+1] = Y[i][j+1] + Y[i+1][j] - Y[i][j] + boolToInt(A[i][j] == 'Y')
			if X[i+1][j+1] == Y[i+1][j+1] && X[i+1][j+1] > 0 {
				res++
			}
		}
	}
	return res
}

func boolToInt(b bool) int {
	if b {
		return 1
	}
	return 0
}
```