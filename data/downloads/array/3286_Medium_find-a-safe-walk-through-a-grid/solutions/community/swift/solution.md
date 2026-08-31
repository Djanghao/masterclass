# Swift💯bfs

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5838054/](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/solutions/5838054/)

---

**BFS (accepted answer)**
```
import Algorithms

class Solution {
    func findSafeWalk(_ grid: [[Int]], _ health: Int) -> Bool {
        let (rows,cols) = (grid.count, grid[0].count)
        let deltas = [1, 0, -1, 0, 1].adjacentPairs()
		
        var dp = Array(repeating: Array(repeating: 0, count: cols), count: rows)
        dp[0][0] = health - grid[0][0]
		
        var bfs = [(0,0)]
        while !bfs.isEmpty {
            let (x,y) = bfs.removeFirst()
            let h = dp[y][x]
            if x == cols-1, y == rows-1, h>0 { return true }
            for (dx,dy) in deltas {
                let (x,y) = (x+dx, y+dy)
                guard 
                    0..<rows ~= y,
                    0..<cols ~= x,
                    h - grid[y][x] > dp[y][x]
                else { continue }
                dp[y][x] = h - grid[y][x]
                bfs.append((x,y))
            }
        }
        return false
    }
}
```