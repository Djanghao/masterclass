# Swift | Good Interview Answer

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/4782514/](https://leetcode.com/problems/modify-the-matrix/solutions/4782514/)

---

**Columnwise approach (accepted answer)**
```
class Solution {
    func modifiedMatrix(_ matrix: [[Int]]) -> [[Int]] {
        var matrix = matrix
        for x in matrix[0].indices {
            var fixupIndices = [Int]()
            var maxValue = -1
            for y in matrix.indices {
                let val = matrix[y][x]
                if val == -1 {
                    fixupIndices.append(y)
                } 
                maxValue = max(maxValue, val)
            }
            for y in fixupIndices {
                matrix[y][x] = maxValue
            }
        }
        return matrix
    }
}
```