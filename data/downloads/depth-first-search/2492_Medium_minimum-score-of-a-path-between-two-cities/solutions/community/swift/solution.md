# Swift | Union Find

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3326695/](https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/solutions/3326695/)

---

**Union Find (accepted answer)**
```
class Solution {
    func minScore(_ n: Int, _ roads: [[Int]]) -> Int {
        var groups = Array(0...n)
        var minCosts = Array(repeating: Int.max, count: n+1)
        
        func find(_ x: Int) -> Int {
            if x != groups[x] { 
                groups[x] = find(groups[x]) // path compression, if needed
            }  
            return groups[x]
        }
                        
        for road in roads {
            let (x,y) = (find(road[0]), find(road[1]))
            let (minXY, maxXY) = (min(x,y), max(x,y))
            groups[maxXY] = minXY
            minCosts[minXY] = min(minCosts[x], minCosts[y], road[2])
        }
        
        return minCosts[find(1)]
    }
}
```