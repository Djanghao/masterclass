# Go beats 100%

**Author:** virtyaluk
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/661862/](https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/solutions/661862/)

---

```go
import "sort"

func maxArea(h int, w int, horizontalCuts []int, verticalCuts []int) int {
    horizontalCuts = append(horizontalCuts, []int{0, h}...)
    verticalCuts = append(verticalCuts, []int{0, w}...)
    
    sort.Ints(horizontalCuts)
    sort.Ints(verticalCuts)
    
    maxH, maxV := 0, 0
    
    for i := 1; i < len(horizontalCuts); i++ {
        maxH = max(maxH, horizontalCuts[i] - horizontalCuts[i - 1])
    }
    
    for i := 1; i < len(verticalCuts); i++ {
        maxV = max(maxV, verticalCuts[i] - verticalCuts[i -1 ])
    }
    
    return (maxH * maxV) % 1000000007
}

func max(a, b int) int {
    if a > b { return a }
    return b
}
```