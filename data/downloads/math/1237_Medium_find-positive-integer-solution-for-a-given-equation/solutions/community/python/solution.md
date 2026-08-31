# Python 3 -> 91.68% faster. O(n) time

**Author:** mybuddy29
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/933212/](https://leetcode.com/problems/find-positive-integer-solution-for-a-given-equation/solutions/933212/)

---

**Suggestions to make it better are always welcomed.**

We are working on 2 variables, x & y. Let's use 2 pointer approach.

```
def findSolution(self, customfunction: 'CustomFunction', z: int) -> List[List[int]]:
	x, y = 1, z
	pairs = []
	
	while x<=z and y>0:
		cf = customfunction.f(x,y)
		if cf==z:
			pairs.append([x,y])
			x, y = x+1, y-1
		elif cf > z:
			y -= 1
		else:
			x += 1
	return pairs
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**