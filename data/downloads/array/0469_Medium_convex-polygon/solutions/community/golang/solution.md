# Golang solution comparing a slope between points (u don't need to memorize cross product formula)

**Author:** redtree1112
**Votes:** 1
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/112101/](https://leetcode.com/problems/convex-polygon/solutions/112101/)

---

As others already referred, [this article](https://www.geeksforgeeks.org/orientation-3-ordered-points/) explains quite well how we can think to solve this. Get 3 adjacent points (p1, p2, p3) from given `points` and check if a slope of p1p2 is larger, smaller, or equal to a slope of p2p3. To make the given points *convex*, a slope should be monolithically increasing, or decreasing while iterating all points. 

```
func isConvex(points [][]int) bool {
	plen, negative, positive := len(points), false, false
	for i := 0; i < len(points); i++ {
		cur, next, nextNext := points[i%plen], points[(i+1)%plen], points[(i+2)%plen]
		if compareSlope(cur, next, nextNext) < 0 {
			negative = true
		} else if compareSlope(cur, next, nextNext) > 0 {
			positive = true
		}
		if negative && positive {
			return false
		}
	}
	return true
}

func compareSlope(p1, p2, p3 []int) int {
	switch diff := (p2[1]-p1[1])*(p3[0]-p2[0]) - (p3[1]-p2[1])*(p2[0]-p1[0]); {
	case diff > 0:
		return 1
	case diff < 0:
		return -1
	}
	return 0
}
```