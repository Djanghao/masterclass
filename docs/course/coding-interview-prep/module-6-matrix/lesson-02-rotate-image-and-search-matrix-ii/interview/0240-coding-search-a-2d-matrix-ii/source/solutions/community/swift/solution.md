# Swift Solution best approach O(m+n) faster than 100%

**Author:** leahxia5
**Votes:** 3
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/1445493/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/1445493/)

---

If we start from the left bottom corner, we can make binary decisions to either **increase in value(go right)** or **decrease in value(go up)**

Going left ro down are not options since it's either the edge or we checked/eliminated those values already
```
class Solution {
    func searchMatrix(_ matrix: [[Int]], _ target: Int) -> Bool {
        guard !matrix.isEmpty, !matrix[0].isEmpty else {
            return false
        }
        let rows = matrix.count
        let cols = matrix[0].count
        var row = rows - 1
        var col = 0
        while row >= 0, col <= cols - 1 {
            let current = matrix[row][col]
            if current == target {
                return true
            } else if current > target {
                row -= 1
            } else {
                col += 1
            }
        }
        return false
    }
}
```