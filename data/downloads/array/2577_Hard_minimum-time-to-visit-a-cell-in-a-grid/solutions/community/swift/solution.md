# Swift💯

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6095385/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6095385/)

---

**Modified Dijkstra (accepted answer)**
We cannot "idle" on a node waiting for access to a neighbor, instead we must hop back and forth with a previous node. This is calculated, not simulated, so to do that, we must factor in the parity of the difference of time `t` arriving at node `P` and `t+Q.minT` of node `Q`. This is calculated as `((Q.minT - t) & 1 + 1)&1`, or more simply, `((Q.minT-t)&1^1)`
```
import Algorithms
import Collections
class Solution {
    struct HeapItem: Comparable {
        var t,x,y:Int
        var tuple: (Int,Int,Int) {(t,x,y)}
        public static func <(a:Self, b:Self)->Bool {a.t<b.t}
    }

    func minimumTime(_ grid: [[Int]]) -> Int {
        guard min(grid[1][0], grid[0][1]) < 2 else { return -1 }
        let deltas = [0,1,0,-1,0].adjacentPairs()
        let (rows, cols) = (grid.count, grid[0].count)
        var visited = Array(repeating: Array(repeating: false, count: cols), count: rows)
        var heap = Heap([HeapItem(t:grid[0][0],x:0,y:0)])
        
        while let (time, c, r) = heap.popMin()?.tuple {
            guard !visited[r][c] else { continue }
            guard (r,c) != (rows-1, cols-1) else { return time }
            for (x,y) in deltas.lazy.map{dx,dy in (c+dx, r+dy)}
              where 0..<cols ~= x && 0..<rows ~= y && !visited[y][x] {
                let t = max(grid[y][x] + ((grid[y][x]-time)&1^1), time+1)
                heap.insert(HeapItem(t:t,x:x,y:y))
            }
            visited[r][c] = true
        }
        return -1
    }
}
```