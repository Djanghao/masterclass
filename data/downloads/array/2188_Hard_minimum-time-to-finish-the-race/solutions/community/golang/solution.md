# Golang DP solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1803553/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1803553/)

---

```go
func minimumFinishTime(tires [][]int, changeTime int, numLaps int) int {
	// 2^20 > 100000, enough for this Problem
	magicNumber := 20
	dp := make([]int, numLaps+1)
	noChangeCost := make([]int, len(tires))
	noChangeTotal := make([]int, len(tires))
	for i := range noChangeCost {
		noChangeCost[i] = tires[i][0]
		noChangeTotal[i] += noChangeCost[i]
	}
	dp[0] = tires[0][0]
	for lap := 1; lap <= numLaps; lap++ {
		if lap >= magicNumber {
			dp[lap] = math.MaxInt64
			continue
		}
		dp[lap] = dp[lap-1] + dp[1] + changeTime
		for idx := 0; idx < len(tires); idx++ {
			if noChangeCost[idx] > changeTime+dp[1] {
				// change tire is better
				continue
			}
			if noChangeTotal[idx] < dp[lap] {
				dp[lap] = noChangeTotal[idx]
			}
			noChangeCost[idx] *= tires[idx][1]
			noChangeTotal[idx] += noChangeCost[idx]
		}
	}
	for lap := 2; lap <= numLaps; lap++ {
		for more := 1; more < magicNumber && more < lap; more++ {
			if v := dp[more]+dp[lap-more]+changeTime; v < dp[lap] {
				dp[lap] = v
			}
		}
	}
	return dp[numLaps]
}
```