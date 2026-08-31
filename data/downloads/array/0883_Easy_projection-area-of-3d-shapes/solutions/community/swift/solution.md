# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/2941639/](https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/2941639/)

---

```
class Solution {
    func projectionArea(_ grid: [[Int]]) -> Int {
        
        let x = grid
            .map { $0.filter({ $0 != 0 }).count }
            .reduce(0, +)
        
        let y = grid
            .map { $0.max()! }
            .reduce(0, +)
        
        let z = grid.indices
            .map { i in grid.map({ $0[i] }).max()! }
            .reduce(0, +)
        
        return x + y + z
    }
}
```