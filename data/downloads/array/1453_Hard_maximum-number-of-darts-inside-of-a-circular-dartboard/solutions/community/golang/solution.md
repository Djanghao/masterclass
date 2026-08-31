# 17 ms Beats 100.00% Memory 6.73 MB

**Author:** rafatgofers
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/4878952/](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/solutions/4878952/)

---

**Intuition:**

To maximize the number of points covered by the dartboard, we aim to find the center of the circle that covers the maximum number of points.
**Approach:**

For each point, calculate the angles between it and all other points.
For each angle, determine the entry and exit points of the circle with radius r centered at the current point.
Sort the angles and iterate through them, updating the count of points covered by the circle.
Return the maximum count of points covered.
**Complexity**:
Time complexity: O(n^2 * log(n)) - Sorting angles and iterating through points.
Space complexity: O(n) - Storing angles.

# Code
```
func numPoints(points [][]int, r int) int {
	ans := 1
	for _, p := range points {
		x, y := p[0], p[1]
		angles := make([][2]float64, 0)
		for _, q := range points {
			x1, y1 := q[0], q[1]
			if (x1 != x || y1 != y) {
				d := math.Sqrt(float64((x1-x)*(x1-x) + (y1-y)*(y1-y)))
				if d <= 2*float64(r) {
					angle := math.Atan2(float64(y1-y), float64(x1-x))
					delta := math.Acos(d / (2 * float64(r)))
					angles = append(angles, [2]float64{angle - delta, 1}) // entry
					angles = append(angles, [2]float64{angle + delta, -1}) // exit
				}
			}
		}
		sort.Slice(angles, func(i, j int) bool {
			if angles[i][0] == angles[j][0] {
				return angles[i][1] > angles[j][1]
			}
			return angles[i][0] < angles[j][0]
		})
		val := 1
		for _, entry := range angles {
			ans = max(ans, val+int(entry[1]))
			val += int(entry[1])
		}
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
```