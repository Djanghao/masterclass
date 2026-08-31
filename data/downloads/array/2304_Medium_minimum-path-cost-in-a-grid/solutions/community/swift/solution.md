# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/3299400/](https://leetcode.com/problems/minimum-path-cost-in-a-grid/solutions/3299400/)

---

```
class Solution {
    func minPathCost(_ grid: [[Int]], _ moveCost: [[Int]]) -> Int {
        
        var res = [grid.last!]

        for r in grid.indices.dropLast().reversed() {

            res.append([])
            
            for c in grid[r].indices {
            
                res[res.count - 1].append(
                    grid[r][c] + grid[r]
                        .indices
                        .map { moveCost[grid[r][c]][$0] + res[res.count - 2][$0] }
                        .min()!
                )
            }
        }

        return res.last!.min()!
    }
}
```