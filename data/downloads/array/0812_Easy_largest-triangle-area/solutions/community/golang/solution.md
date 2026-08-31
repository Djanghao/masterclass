# Golang Solution Brute Force Using Heron's formula

**Author:** kinfinity
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/2151115/](https://leetcode.com/problems/largest-triangle-area/solutions/2151115/)

---

Time: **O(N^3)**
Space: **O(1)**

```golang
func largestTriangleArea(points [][]int) float64 {

    // Heron's formula
    // triangle's lengths a, b, c
    // S = sqrt((a+b+c) * (a+b-c) * (a+c-b) * (b+c-a)) / 4
    md := make(map[int]float64)
    
    var res float64 = 0
    for i := 0; i < len(points); i++ {
        for j := i + 1; j < len(points); j++ {
            mask := (1<<i)|(1<<j)
            x := md[mask]
            if x == 0 {
                x = distance(points[i], points[j])
                md[mask] = x
            }
            for k := j + 1; k < len(points); k++ {
                mask = (1<<i)|(1<<k)
                y := md[mask]
                if y == 0 {
                    y = distance(points[i], points[k])
                    md[mask] = y
                }
                mask = (1<<j)|(1<<k)
                z := md[mask]
                if z == 0 {
                    z = distance(points[j], points[k])
                    md[mask] = z
                }
                
                if x + y < z || x + z < y || y + z < x {
                    continue
                }
                
                if v := (x+y+z)*(x+y-z)*(x+z-y)*(y+z-x); v > res {
                    res = v
                }
            }
        }
    }
    
    return math.Sqrt(res) / 4.0
}

func distance(p1 []int, p2 []int) float64 {
    x := p1[0] - p2[0]
    y := p1[1] - p2[1]
    return math.Sqrt(float64(x*x + y*y))
}
```

Another way to caculate triangle area when you only get 3 points's position: https://www.mathopenref.com/coordtrianglearea.html
`S = |Ax(By \u2212 Cy) + Bx(Cy \u2212 Ay) + Cx(Ay \u2212 By)| / 2`

when 3 points on one line, S = 0

