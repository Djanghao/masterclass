# Go area of triangle

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/1832393/](https://leetcode.com/problems/valid-boomerang/solutions/1832393/)

---

[Area of Triangle in Coordinate Geometry](https://www.cuemath.com/geometry/area-of-triangle-in-coordinate-geometry/)

```(\u0394ABC) =  (1/2) | x1 (y2 \u2013 y3 ) + x2 (y3 \u2013 y1 ) + x3(y1 \u2013 y2) |```

If the three coordinates are along the same line, the area of the three coordinates must be zero.

```
func isBoomerang(points [][]int) bool {
    x1, x2, x3 := points[0][0], points[1][0], points[2][0]
    y1, y2, y3 := points[0][1], points[1][1], points[2][1]
    area := x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2)

    return area != 0
}
```