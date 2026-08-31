# 🔥 [UPDATED for the latest test examples] Go Solution | DFS 🔥

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5551784/](https://leetcode.com/problems/check-if-the-rectangle-corner-is-reachable/solutions/5551784/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If the top/left border to the bottom/right border of the rectangle is blocked by a group of connected circles, then the answer will be `false`.

# Approach
<!-- Describe your approach to solving the problem. -->
DFS.

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

// inCircle returns whether Point (x, y) is located inside Circle (ox, oy, r) (including the border)
func inCircle(ox, oy, r, x, y int) bool {
	return (ox-x)*(ox-x)+(oy-y)*(oy-y) <= r*r
}

func canReachCorner(X, Y int, circles [][]int) bool {
	vis := make([]bool, len(circles))
	var dfs func(i int) bool
	dfs = func(i int) bool {
		x1, y1, r1 := circles[i][0], circles[i][1], circles[i][2]
		if y1 <= Y && abs(x1-X) <= r1 || x1 <= X && y1 <= r1 || x1 > X && inCircle(x1, y1, r1, X, 0) { // Circle i intersects with the bottom or right border of the rectangle
			return true
		}
		vis[i] = true
		for j, circle := range circles {
			x2, y2, r2 := circle[0], circle[1], circle[2]
			// Let Point A which |O1A| / |O1O2| = r1 / (r1+r2). If two circles are connected to each other then A must be inside the intersection
			// And its coordinate is: (x1\xB7r2+x2\xB7r1)/(r1+r2), (y1\xB7r2+y2\xB7r1)/(r1+r2)
			if !vis[j] && (x1-x2)*(x1-x2)+(y1-y2)*(y1-y2) <= (r1+r2)*(r1+r2) && x1*r2+x2*r1 < (r1+r2)*X && y1*r2+y2*r1 < (r1+r2)*Y && dfs(j) {
				return true
			}
		}
		return false
	}
	for i, circle := range circles {
		x, y, r := circle[0], circle[1], circle[2]
		if inCircle(x, y, r, 0, 0) || inCircle(x, y, r, X, Y) || !vis[i] && (x <= X && abs(y-Y) <= r || y <= Y && x <= r || y > Y && inCircle(x, y, r, 0, Y)) && dfs(i) { // DFS starts from circles which intersects the left/top border of the rectangle
			return false
		}
	}
	return true
}
```