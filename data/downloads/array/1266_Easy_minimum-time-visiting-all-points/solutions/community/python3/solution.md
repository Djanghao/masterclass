# Python 3 -> 81.86% faster

**Author:** mybuddy29
**Votes:** 47
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/832252/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/832252/)

---

**Suggestions to make it better are always welcomed.**

Solving this problem taught me how distances work between 2 points.
Simple solution, just needs little math.

```
def minTimeToVisitAllPoints(self, points: List[List[int]]) -> int:
	steps = 0
	for i in range(len(points)-1):
		point = points[i]
		next_point = points[i+1]
		steps += max(abs(next_point[0] - point[0]), abs(next_point[1] - point[1]))
	return steps
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**