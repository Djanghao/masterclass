# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5346408/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5346408/)

---

```
class Solution {
    func canMakeSquare(_ grid: [[Character]]) -> Bool {

        let grid = grid.map { $0.map { $0 == "B" ? 1 : 0 } }

        func check(_ i: Int, _ j: Int) -> Bool {
            let val = grid[i][j] + grid[i + 1][j] + grid[i][j + 1] + grid[i + 1][j + 1]
            return val != 2
        }
        
        return check(0, 0) || check(0, 1) || check(1, 0) || check(1, 1)
    }
}
```