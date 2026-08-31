# Dynamic Programming approach Golang solution

**Author:** ziurin
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-color/solutions/2116285/](https://leetcode.com/problems/shortest-distance-to-target-color/solutions/2116285/)

---

1. Create dynamic programming map of minimum distances for each color from each cell
2. Do left-to-right and right-to-left runs and find minimum distances
3. Consult with the map for each query. If the distance is maxInt32, then the color does not exist -> returning -1
```
func min(a int, b int) int {
    if a < b {
        return a
    }
    return b
}


func shortestDistanceColor(colors []int, queries [][]int) []int {
    dp := make([][]int, len(colors))
    for i := 0; i < len(dp); i++ {
        dp[i] = make([]int, 4)
        for j := 0; j < 4; j++ {
            dp[i][j] = math.MaxInt32
        }
    }
    
    dp[0][colors[0]] = 0;
    
    for i := 1; i < len(colors); i++ {
        dp[i][colors[i]] = 0
        for j := 1; j < 4; j++ {
            dp[i][j] = min(dp[i][j], dp[i - 1][j] + 1)
        }
    }
    
    for i := len(colors) - 2; i >= 0; i-- {
        for j := 1; j < 4; j++ {
            dp[i][j] = min(dp[i][j], dp[i + 1][j] + 1)
        }
    }
    
    var ans []int
    for i := 0; i < len(queries); i++ {
        if dp[queries[i][0]][queries[i][1]] != math.MaxInt32 {
            ans = append(ans, dp[queries[i][0]][queries[i][1]])  
        } else {
            ans = append(ans, -1)
        }
    }
    
    return ans
}
```
