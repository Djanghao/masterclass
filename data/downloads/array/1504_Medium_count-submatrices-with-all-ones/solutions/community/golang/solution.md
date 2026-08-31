# GO | Solution

**Author:** AKP828
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/4317228/](https://leetcode.com/problems/count-submatrices-with-all-ones/solutions/4317228/)

---


# Code
```
import "math"
func numSubmat(mat [][]int) int {
	rows, cols := len(mat), len(mat[0])
	dp := make([][]int, rows)
	for i := 0; i < rows; i++ {
		dp[i] = make([]int, cols)
		count := 0
		for j := cols - 1; j >= 0; j-- {
			if mat[i][j] == 1 {
				count++
			} else {
				count = 0
			}
			dp[i][j] = count
		}
	}
	res := 0
	for i := 0; i < rows; i++ {
		for j := 0; j < cols; j++ {
			mini := math.MaxUint32
			for k := i; k < rows; k++ {
				// get the min of consecutive 1s
				mini = min(mini, dp[k][j])
				res += mini
			}
		}
	}
	return res
}
func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}
```