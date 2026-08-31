# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/6070286/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/6070286/)

---

**One-Liner (accepted answer)**
All rows have to be equal and if so, all adjacent elements have to be different.
```
import Algorithms
class Solution {
    func satisfiesConditions(_ grid: [[Int]]) -> Bool {
        Set(grid).count == 1 && grid[0].adjacentPairs().allSatisfy(!=)
    }
}
```