# Simple Solution 100% ✅

**Author:** ProbablyLost
**Votes:** 2
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4401510/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4401510/)

---

# Code
```
class Solution {
    func numSpecial(_ mat: [[Int]]) -> Int {
        var rowCounts = [Int](repeating: 0, count: mat.count)
        var colCounts = [Int](repeating: 0, count: mat[0].count)
        var count = 0

        for i in 0..<mat.count {
            for j in 0..<mat[i].count {
                if mat[i][j] == 1 {
                    rowCounts[i] += 1
                    colCounts[j] += 1
                }
            }
        }
        
        for i in 0..<mat.count {
            for j in 0..<mat[i].count {
                if mat[i][j] == 1 && rowCounts[i] == 1 && colCounts[j] == 1 {
                    count += 1
                }
            }
        }
        
        return count
    }
}

```