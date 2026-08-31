# Go, 0ms + 2.2MB, using divide and conquer with recursion

**Author:** JonLim
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/689315/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/689315/)

---

Fairly straightforward - recursively divides the sea into halves, and returns the cumulative result.

```golang
func countShips(sea Sea, topRight, bottomLeft []int) int {
    if bottomLeft[0] > topRight[0] || bottomLeft[1] > topRight[1] || !sea.hasShips(topRight, bottomLeft) {
        return 0
    }
    
    if bottomLeft[0] == topRight[0] && bottomLeft[1] == topRight[1] {
        return 1
    }
    
    var midX int = (bottomLeft[0] + topRight[0]) / 2
    var midY int = (bottomLeft[1] + topRight[1]) / 2
    
    var result int
    result += countShips(sea, topRight, []int{midX+1, midY+1})
    result += countShips(sea, []int{midX, midY}, bottomLeft)
    result += countShips(sea, []int{topRight[0], midY}, []int{midX+1, bottomLeft[1]})
    result += countShips(sea, []int{midX, topRight[1]}, []int{bottomLeft[0], midY+1})
    
    return result
}
```