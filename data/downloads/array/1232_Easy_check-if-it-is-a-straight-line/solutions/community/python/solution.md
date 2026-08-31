# Python Soln by checking Slopes w/ Explanation

**Author:** IdealYuvi
**Votes:** 87
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/2404442/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/2404442/)

---

1. Find slope for first two points, point1 and point2
2. Then compare the slopes of all other points to this slope
3. Slope of point1 (x1, y1) and point2 (x2, y2) is:
	`(y2 - y1) / (x2 - x1)`
4. Slope of point1 (x1, y1) and point3 (x3, y3) is:
   `(y3 - y1) / (x3 - x1)`
5. For all three points to be on the same line, the slopes should be equal, in other words:
   `(y2 - y1) / (x2 - x1) = (y3 - y1) / (x3 - x1)`
6. To avoid the 'divide by zero' error, use cross multiplication to find slope:
   `(y2 - y1) * (x3 - x1) = (y3 - y1) * (x2 - x1)`
```
def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
	(x1, y1), (x2, y2) = coordinates[0], coordinates[1]

	for x3, y3 in coordinates[2:]:
		if (y2 - y1) * (x3 - x1) != (y3 - y1) * (x2 - x1):
			return False

	return True
```

![image](./images/0.png)
