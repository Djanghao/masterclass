# GO | Just apply the formula: ((x-a)^2 + (y-b)^2) <= r^2

**Author:** 2107mohitverma
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/5533231/](https://leetcode.com/problems/count-lattice-points-inside-a-circle/solutions/5533231/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type pair struct {
	x int
	y int
}

func countLatticePoints(circles [][]int) int {
	ans, seen := 0, make(map[pair]bool)
	for _, circle := range circles {
		x, y, r := circle[0], circle[1], circle[2]
		minX, minY, maxX, maxY := x-r, y-r, x+r, y+r

		rSquare := r * r
		for i := minX; i <= maxX; i++ {
			for j := minY; j <= maxY; j++ {
				newPoint := pair{x: i, y: j}
				if !seen[newPoint] {
					if ((i-x)*(i-x) + (j-y)*(j-y)) <= rSquare {
						seen[newPoint] = true
						ans++
					}
				}
			}
		}
	}
	return ans
}
```