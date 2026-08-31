# [Swift] Solution with DP (Memoization)

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/554439/](https://leetcode.com/problems/bomb-enemy/solutions/554439/)

---

```
class Solution {
    let rowDir:[Int] = [1,-1,0,0]
    let colDir:[Int] = [0,0,1,-1]
    var memo:[String:Int] = [:]
    
    func maxKilledEnemies(_ grid: [[Character]]) -> Int {
        let m = grid.count
        if m == 0 { return 0 }
        let n = grid[0].count
        var maxVal = 0
        for i in 0..<m{
            for j in 0..<n{
                if grid[i][j] == "0"{
                    var total = 0
                    for k in 0..<4{
                        total += count(grid, i+rowDir[k], j+colDir[k], m, n, k)
                    }
                    maxVal = max(total, maxVal)
                }
            }
        }
        return maxVal
    }
    
    func count(_ grid: [[Character]],_ i:Int,_ j:Int,_ m:Int,_ n:Int, _ dir:Int) -> Int {
        if i < 0 || j < 0 || i == m || j == n || grid[i][j] == "W" { return 0 }
        let key = i.description + "," + j.description + "," + dir.description
        if let exist = memo[key]{
            return exist
        }
        let item = grid[i][j] == "E" ? 1 : 0
        let res =  item + count(grid, i+rowDir[dir], j+colDir[dir], m, n, dir)
        memo[key] = res
        return res
    }
}
```