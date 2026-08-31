# Golang brute force solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/1072798/](https://leetcode.com/problems/minimum-area-rectangle-ii/solutions/1072798/)

---

```go
func minAreaFreeRect(points [][]int) float64 {
	hash := map[[2]int]struct{}{}
	for _, p := range points {
		hash[[...]int{p[0], p[1]}] = struct{}{}
	}
	minRect := 0.0
	for i := 0; i < len(points); i++ {
		for j := i+1; j < len(points); j++ {
			for k := 0; k < len(points); k++ {
                if k == i || k == j {
                    continue
                }
				if area, exist := getArea(points[i], points[j], points[k], hash); exist {
					if minRect == 0.0 || minRect > area {
						minRect = area
					}
				}
			}
		}
	}
	return minRect
}

func getArea(x, y, z []int, hash map[[2]int]struct{}) (float64, bool) {
	a := (x[1] - y[1]) * (y[1] - z[1])
	b := (x[0] - y[0]) * (y[0] - z[0])
    // a == -b means LineXY is perpendicular to lineYZ
	if a != -b {
		return 0.0, false
	}
    // calculate the other point q
	qx := x[0] + z[0] - y[0]
	qy := x[1] + z[1] - y[1]
    // q must exist in hash
	if _, exist := hash[[...]int{qx, qy}]; !exist {
		return 0.0, false
	}
	area := math.Hypot(float64(x[1]-y[1]), float64(x[0]-y[0])) * math.Hypot(float64(y[1]-z[1]), float64(y[0]-z[0]))
	return area, true
}
```