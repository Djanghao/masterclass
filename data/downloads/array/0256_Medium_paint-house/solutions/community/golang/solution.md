# 🔴🟢🔵 RGB solution with O(1) space & O(n) time | Go

**Author:** GiovanniGiorgio
**Votes:** 1
**Link:** [https://leetcode.com/problems/paint-house/solutions/1747975/](https://leetcode.com/problems/paint-house/solutions/1747975/)

---

RGB sounds way cooler than RBG  \uD83D\uDC7B\uD83D\uDE0E
algo:
- init colors to their first row of houses
- for each next row,  update each color with min of 2 other **prev** colors
- return min of the colors
```go
func minCost(costs [][]int) int {

    r, g, b := costs[0][0], costs[0][1], costs[0][2]

    for h := 1; h < len(costs); h++ {
        r, g, b = costs[h][0] + min(b, g), costs[h][1] + min(r, b), costs[h][2] + min(r, g) 
    }
    
    return min(min(r, g),b)
}
```

also recursion with memoization
```go
var memo [][3]int

func minCost(costs [][]int) int {
    n := len(costs)
    memo = make([][3]int, n)
    
    return min(dp(costs, 0, 0, n),dp(costs, 0, 1, n),dp(costs, 0, 2, n)) // looks scary but memoization is the key
}

func dp(costs [][]int, house, color, n int) int {
    if house == n { return 0 }
    
    if memo[house][color] != 0 {
        return memo[house][color]
    }
    
    val := 0
    if color == 0 {
        val = min(dp(costs,house+1, 1, n), dp(costs,house+1, 2, n))
    } else if color == 1 {
        val = min(dp(costs,house+1, 0, n), dp(costs,house+1, 2, n))
    } else {
        val = min(dp(costs,house+1, 0, n), dp(costs,house+1, 1, n))
    }
// instead of doing the 3 checks above, we also can just once do
// val := min(dp(costs,house+1, (color+1)%3, n), dp(costs,house+1, (color+2)%3, n))
    memo[house][color] = val + costs[house][color]
    return memo[house][color]
}
```