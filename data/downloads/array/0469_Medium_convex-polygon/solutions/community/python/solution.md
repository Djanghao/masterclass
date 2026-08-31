# Python, 100% faster, O(n)

**Author:** ndvbd
**Votes:** 1
**Link:** [https://leetcode.com/problems/convex-polygon/solutions/2025110/](https://leetcode.com/problems/convex-polygon/solutions/2025110/)

---

```
"""
Polygon is convex if we travel along its edges, and always turn to the same direction, either left or right.
to find the turning angle, if positive or negative, cos won't help as it is symmetrical,
so we need sin which is anti symmetrical.
we can use cross product which is a vector perependicaul to X-Y plane,
in the size of |a|*|b|*sin(alpha), so we just need to take it's sign
"""

class Solution(object):
	
	def isConvex(self, points):
		"""
		:type points: List[List[int]]
		:rtype: bool
		Nadav B
		"""
		import math
		def turningSign(a, b, c):  # returns 1 if turned left, -1, right, 0 straight line
			v1x, v1y = b[0] - a[0], b[1] - a[1]  # first vector
			v2x, v2y = c[0] - b[0], c[1] - b[1]  # second vector
			mag = (v1x * v2y - v1y * v2x)
			dir = 0
			if mag > 0:
				dir = 1
			elif mag < 0:
				dir = -1
			return dir
			
		sign = 0
			
		for i in range(0, len(points)):  # we shouldn't forget the first angles too.
			new_sign = turningSign(points[i - 2], points[i - 1], points[i])
			if sign == 0:  # We don't care about straight lines...
				sign = new_sign
			elif new_sign == 0:  # We don't care about straight lines...
				continue
			elif sign != new_sign:
					return False
		
		return True
```