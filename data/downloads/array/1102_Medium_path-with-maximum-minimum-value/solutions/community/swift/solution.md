# Swift solution:  BFS+DP

**Author:** veenkene
**Votes:** 3
**Link:** [https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/613579/](https://leetcode.com/problems/path-with-maximum-minimum-value/solutions/613579/)

---

```
class Solution {
    func maximumMinimumPath(_ A: [[Int]]) -> Int {
        var a = A
        var maxRow = a.count
        var maxCol = a[0].count
        let rowDirections = [1,-1, 0, 0]
        let columnDirections = [0,0,1,-1]
        var queue = [(row: Int, col: Int)]()
        var dp = Array(repeating: Array(repeating: 0, count: maxCol ), count: maxRow)
        dp[0][0] = a[0][0]
        queue.append((0,0))
        while !queue.isEmpty {
                let item = queue.removeFirst()
                for index in 0..<rowDirections.count {
                    let dx = item.row + rowDirections[index]
                    let dy = item.col + columnDirections[index]
                    
                    if dx >= 0, dx < maxRow, dy >= 0, dy < maxCol {
                        let score = min(dp[item.row][item.col], a[dx][dy])
                        if score > dp[dx][dy] {
                            dp[dx][dy] = score
                            queue.append((dx,dy))
                        } 
                    }
                }
        }
        return dp[maxRow-1][maxCol-1]
    }
}
```