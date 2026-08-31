# Swift | easy

**Author:** alexgood
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/2812075/](https://leetcode.com/problems/number-of-ships-in-a-rectangle/solutions/2812075/)

---

```
// (3)        (4)
//   *  *|  *
//  ----------
//   *  *|  *
//   *  *|  *
// (1)       (2)

class Solution {
    func countShips(_ sea: Sea, _ topRight: [Int], _ bottomLeft: [Int]) -> Int {
        guard sea.hasShips(topRight, bottomLeft) else { return 0 }
        if topRight.x == bottomLeft.x && topRight.y == bottomLeft.y {
            return 1
        }
        
        let halfX = bottomLeft.x + (topRight.x - bottomLeft.x) / 2
        let halfY = bottomLeft.y + (topRight.y - bottomLeft.y) / 2
        
        return 
        countShips(sea, [halfX,           halfY],                   bottomLeft) +    // (1)
        countShips(sea, [topRight.x,      halfY], [halfX + 1,    bottomLeft.y]) +    // (2)
        countShips(sea, [halfX,      topRight.y], [bottomLeft.x,    halfY + 1]) +    // (3)
        countShips(sea, topRight,                 [halfX + 1,       halfY + 1])      // (4)
    }
}

extension Array where Element == Int {
    var x: Int { self[0] }
    var y: Int { self[1] }
}
```