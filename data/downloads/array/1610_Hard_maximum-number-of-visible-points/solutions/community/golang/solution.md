# [Golang] Sliding Window

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-visible-points/solutions/2690919/](https://leetcode.com/problems/maximum-number-of-visible-points/solutions/2690919/)

---

```
func visiblePoints(points [][]int, angle int, location []int) int {
    res := 0
    
    degrees := []float64{}
    for _, point := range points {
        xDiff := point[0] - location[0]
        yDiff := point[1] - location[1]
        
        // if point is at given location, it is always visible
        if xDiff == 0 && yDiff == 0 {
            res++
            continue
        }
        
        // Add all degree of the remaining points
        degrees = append(degrees, getAngle(xDiff, yDiff))
    }
    
    sort.Float64s(degrees)
    
    // Add Just same points over again with adding 360 to form circle, so we can turn and see
    l := len(degrees)
    for i := 0; i < l; i++ {
        degrees = append(degrees, degrees[i]+360)
    }
    
    start := 0
    maxPoints := 0   
    
    // Sliding window
    // Get angle range which fits in given angle
    // Then increment end to expand window
    // And increase start correspondingly
    for end := 0; end < len(degrees); end++ {
        for degrees[end] - degrees[start] > float64(angle) {
            start++
        }
        maxPoints = max(maxPoints, end-start+1)
    }
    
    return res + maxPoints
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func getAngle(x, y int) float64 {
    d := math.Atan2(float64 (y), float64 (x))   // Gives angle in radians
    d *= float64(180) / math.Pi                 // Convert to degrees
    return d
}
```