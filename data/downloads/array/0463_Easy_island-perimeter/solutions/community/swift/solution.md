# Swift solution

**Author:** gianmarco
**Votes:** 3
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/1947299/](https://leetcode.com/problems/island-perimeter/solutions/1947299/)

---

```
class Solution {
    func islandPerimeter(_ grid: [[Int]]) -> Int {
        var islands = 0, neighbours = 0

        for (i, row) in grid.enumerated() {
            for (j, column) in row.enumerated() {
                if (grid[i][j] == 1) {
                    islands += 1
                    if (i < grid.count - 1 && grid[i + 1][j] == 1) { neighbours += 1 }
                    if (j < grid[i].count - 1 && grid[i][j + 1] == 1) { neighbours += 1 }
                }
            }
        }

        return islands * 4 - neighbours * 2
    }
}
```