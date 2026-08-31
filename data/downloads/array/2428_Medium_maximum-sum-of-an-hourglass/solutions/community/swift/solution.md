# Swift brute force solution O(n*m)

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2650498/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2650498/)

---

```
class Solution {
    func maxSum(_ grid: [[Int]]) -> Int {
        var res = 0
        for y in 1..<grid.count - 1 {
            for x in 1..<grid[0].count - 1 {
                let sum = grid[y][x]
                + grid[y - 1][x - 1] + grid[y - 1][x] + grid[y - 1][x + 1]
                + grid[y + 1][x - 1] + grid[y + 1][x] + grid[y + 1][x + 1]
                res = max(res, sum)
            }
        }
        return res
    }
}
```