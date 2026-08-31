# Go | Golang Solution

**Author:** d901203
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2451229/](https://leetcode.com/problems/minimum-number-of-refueling-stops/solutions/2451229/)

---

```
func minRefuelStops(target int, startFuel int, stations [][]int) int {
    N, dp := len(stations), make([]int, len(stations)+1)
	for i := range dp {
		dp[i] = startFuel
	}
	for i := 0; i < N; i++ {
		for j := i; j >= 0 && dp[j] >= stations[i][0]; j-- {
			dp[j+1] = max(dp[j+1], dp[j]+stations[i][1])
		}
	}
	for i := range dp {
		if dp[i] >= target {
			return i
		}
	}
	return -1
}

func max(i, j int) int {
	if i >= j {
		return i
	}
	return j
}
```