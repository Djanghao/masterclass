# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2962318/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/2962318/)

---

```
class Solution {
    func checkXMatrix(_ grid: [[Int]]) -> Bool {
        
        for i in grid.indices {
            for j in grid[i].indices {
                if i == j || i + j == grid.count - 1 {
                    if grid[i][j] == 0 { return false }
                }
                else {
                    if grid[i][j] != 0 { return false }
                }
            }
        }
        
        return true
    }
}
```