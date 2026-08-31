# Go | simple solution beats 100%

**Author:** uchihaXmadara
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4357301/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4357301/)

---

# Code
```Go
func minTimeToVisitAllPoints(points [][]int) int {
	ans := 0
	prev := points[0]

	for _, point := range points {
		ans += int(math.Max(math.Abs(float64(prev[0]-point[0])), math.Abs(float64(prev[1]-point[1]))))
		prev = point
	}

	return ans
}

```