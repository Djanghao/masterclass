# Swift Solution

**Author:** danilovdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/4142286/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/4142286/)

---

# Intuition
Calculate distance for every cell and sort by this distance.

# Approach
Calculate distance from center cell for every other cell in matrix, and put to array along with each cell coordinates. Then sort array by distance and get only cells coordinates from this array.

# Complexity
- Time complexity:
O(rows X cols) Because we iterate all elements in matrix

- Space complexity:
O(rows X cols) Because we store all elements

# Code
```
class Solution {
    func allCellsDistOrder(_ rows: Int, _ cols: Int, _ rCenter: Int, _ cCenter: Int) -> [[Int]] {
        var cells: [(cell: [Int], dist: Int)] = [] 
        for i in 0..<rows {
            for j in 0..<cols {
                let dist = abs(i - rCenter) + abs(j - cCenter)
                cells.append(([i, j], dist))
            }
        }
        return cells.sorted(by: { $0.dist < $1.dist }).map { $0.cell }
    }
}
```