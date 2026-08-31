# 👍Runtime 211 ms Beats 100.00% of users with Go

**Author:** pvt2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/5292216/](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/solutions/5292216/)

---

# Code
```
func boxDelivering(A [][]int, portsCount int, B int, W int) int {
	n := len(A)
	need, j, lastj := 0, 0, 0
	dp := make([]int, n+1)

	for i := 0; i < n; i++ {
		for j < n && B > 0 && W >= A[j][1] {
			B -= 1
			W -= A[j][1]
			if j == 0 || A[j][0] != A[j-1][0] {
				lastj = j
				need++
			}
			dp[j+1] = 200000
			j++
		}
		dp[j] = int(math.Min(float64(dp[j]), float64(dp[i]+need+1)))
		dp[lastj] = int(math.Min(float64(dp[lastj]), float64(dp[i]+need)))
		B += 1
		W += A[i][1]
		if i == n-1 || A[i][0] != A[i+1][0] {
			need--
		}
	}
	return dp[n]
}
```