# Swift Easy O(N) solution

**Author:** KshitijSChauhan
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/4315920/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/4315920/)

---

# Code
```
class Solution {
    func diagonalSum(_ mat: [[Int]]) -> Int {
        var i = 0
        var j = mat.count - 1
        var sum: Int = 0
        while j >= 0 {
            sum += mat[i][j]
            if i != j {
                sum += mat[i][i]
            }
            i += 1
            j -= 1
        }
        return sum
    }
}
```