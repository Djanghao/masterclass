# Python 4-ary Tree, O(logn) Time

**Author:** wzmao
**Votes:** 9
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/440924/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/440924/)

---

Intuition:
Leaves are single grid points, either containing ships or not. Our goal is to count all the leaves containing ships.
```
def countShips(self, sea, topRight, bottomLeft):
	x1, y1 = bottomLeft.x, bottomLeft.y
	x2, y2 = topRight.x, topRight.y
	if x1 > x2 or y1 > y2 or not sea.hasShips(topRight, bottomLeft): 
		return 0
	if x1 == x2 and y1 == y2:
		return 1
	x, y = (x1+x2)//2, (y1+y2)//2
	return self.countShips(sea, Point(x,y2), Point(x1,y+1)) + \\
		   self.countShips(sea, Point(x2,y2), Point(x+1,y+1)) + \\
		   self.countShips(sea, Point(x,y), Point(x1,y1)) + \\
		   self.countShips(sea, Point(x2,y), Point(x+1,y1))