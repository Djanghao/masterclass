# [Go] Bottom-up DP

**Author:** sebnyberg
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2531663/](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/solutions/2531663/)

---

The recursion is given by:

```
next[i] = curr[i-1] + curr[i+1]
```

The quirky part is to calculate the window of viable positions for each iteration, and the size of the array. In the contest submission, I used large margins for good measure. Below is an exact solution.

```go
func numberOfWays(startPos int, endPos int, k int) int {
	// Bottom-up DP with clever indexing
	const offset = 500
	var curr [2002]int
	var next [2002]int
	const mod = 1e9 + 7
	startPos += offset
	endPos += offset
	curr[startPos] = 1
	for i := 1; i <= k; i++ {
		l := max(startPos-i, endPos-(k-i))
		r := min(startPos+i, endPos+(k-i))
		for j := l; j <= r; j++ {
			next[j] = (curr[j-1] + curr[j+1]) % mod
		}
		curr, next = next, curr
	}
	return curr[endPos]
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

```
