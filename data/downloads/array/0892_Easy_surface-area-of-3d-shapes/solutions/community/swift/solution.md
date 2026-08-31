# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/2986131/](https://leetcode.com/problems/surface-area-of-3d-shapes/solutions/2986131/)

---

```
class Solution {
    func surfaceArea(_ grid: [[Int]]) -> Int {
        
        var floorsCount = grid
            .map { $0.reduce(0, max) }
            .reduce(0, max)
        
        var floors = (1...floorsCount).map { f in grid.map { $0.map { $0 >= f ? 1 : 0 } } }
        
        var walls = 0
        for floor in floors {
            for i in floor.indices {
                for j in floor[i].indices where floor[i][j] == 1 {
                    for x in (i - 1)...(i + 1) {
                        for y in (j - 1)...(j + 1) where abs(x - i) + abs(y - j) == 1 {
                            if x < 0 || x >= floor.count || y < 0 || y >= floor.count || floor[x][y] == 0 {
                                walls += 1
                            }
                        }
                    }
                }
            }
        }
        
        let ceiling = grid
            .map {
                $0
                    .map { $0 > 0 ? 1 : 0 }
                    .reduce(0, +)
            }
            .reduce(0, +)
        
        return walls + ceiling * 2
    }
}
```