# [Golang] Single Pass O(N)

**Author:** vasakris
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-value-of-equation/solutions/2607089/](https://leetcode.com/problems/max-value-of-equation/solutions/2607089/)

---

```
func findMaxValueOfEquation(points [][]int, k int) int {
    queue := [][]int{}
    res := math.MinInt64
    
    // We can rewrite equation (y1-x1) + (y2+x2)
    // For each current (x2, y2), find prev (x1, y1) such (y1-x1) is max and x2-x1 <= k
    for i := 0; i < len(points); i++ {
        // Remove all invalid entries from front
        for len(queue) > 0 && points[i][0] - queue[0][0] > k {
            queue = queue[1:]
        }
        
        // Always entry at start is max (y-x)
        if len(queue) > 0 {
            res = max(res, queue[0][1] - queue[0][0] + points[i][1] + points[i][0])
        }
        
        // Remove all invalid entries, lesser elements from back
        // When current y-x is max, remove all entries which are lesser then y-x
        for len(queue) > 0 && 
            (queue[len(queue)-1][1] - queue[len(queue)-1][0]) < (points[i][1] - points[i][0]) {
                queue = queue[:len(queue)-1]
        }
        
        queue = append(queue, []int{points[i][0], points[i][1]})
    }
                                                        
    return res
}
                                                           
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```