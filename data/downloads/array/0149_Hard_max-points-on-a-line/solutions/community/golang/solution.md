# Golang solution with illustration

**Author:** nathannaveen
**Votes:** 3
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/1734310/](https://leetcode.com/problems/max-points-on-a-line/solutions/1734310/)

---

The idea of this solution is that we start off with a point and then use all the other points to make a line from the start point to one of the other points. Then we can find the slope of the line. Then we can find which slope has the highest number of points.

<iframe src="https://giphy.com/embed/up5IJe4uhceN2rlkCg" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/up5IJe4uhceN2rlkCg">GIF via GIPHY</a></p>

In the GIF above I only have shown one point as the start point, but we can do this with all the other points to get the maximum number of points on a line.

``` go
func maxPoints(points [][]int) int {
    max := 0
    
    for i := 0; i < len(points); i++ {
        m := make(map[float64] int) // slope : number of points on the slope
        for j := 0; j < len(points); j++ {
            x1, x2, y1, y2 := points[i][0], points[j][0], points[i][1], points[j][1]
            
            slope := float64(y2 - y1) / float64(x2 - x1)
            m[slope]++
        }
        
        for _, b := range m {
            newB := (b + 1)
            if newB > max { max = newB }
        }
    }
    
    if len(points) == 1 { return 1 }
    
    return max
}
```