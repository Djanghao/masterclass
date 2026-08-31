# Golang 0ms solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1751465/](https://leetcode.com/problems/minimum-cost-to-set-cooking-time/solutions/1751465/)

---

```go
func minCostSetTime(startAt int, moveCost int, pushCost int, targetSeconds int) int {
	minutes1, seconds1, cost1, cost2 := targetSeconds/60, targetSeconds%60, math.MaxInt32, math.MaxInt32
	if minutes1 < 100 {
		// I got WA here, minutes1 must less than 100 :(
		cost1 = minCostSetTimeHelper(startAt, moveCost, pushCost, minutes1, seconds1)
	}
	if seconds1 <= 39 && minutes1 > 0 {
		minutes2, seconds2 := minutes1-1, seconds1+60
		cost2 = minCostSetTimeHelper(startAt, moveCost, pushCost, minutes2, seconds2)
	}
	return min(cost1, cost2)
}

func minCostSetTimeHelper(fingerAt, moveCost, pushCost, targetMinutes, targetSeconds int) int {
	cost := 0
	if targetMinutes > 0 {
		high, low := targetMinutes/10, targetMinutes%10
		if high != 0 {
			if high != fingerAt {
				cost += moveCost
				fingerAt = high
			}
			cost += pushCost
		}
		if low != fingerAt {
			cost += moveCost
			fingerAt = low
		}
		cost += pushCost
	}
	high, low := targetSeconds/10, targetSeconds%10
	if high != 0 || (high == 0 && targetMinutes != 0) {
		if high != fingerAt {
			cost += moveCost
			fingerAt = high
		}
		cost += pushCost
	}
	if low != fingerAt {
		cost += moveCost
		fingerAt = low
	}
	cost += pushCost
	return cost
}

func min(values ...int) int {
	minValue := math.MaxInt64
	for _, v := range values {
		if v < minValue {
			minValue = v
		}
	}
	return minValue
}
```