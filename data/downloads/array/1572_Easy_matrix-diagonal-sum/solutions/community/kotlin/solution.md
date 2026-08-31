# Runtime beats 88%, Memory beats 95%

**Author:** prodbyrotiez
**Votes:** 1
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/4085009/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/4085009/)

---

# Complexity
- Time complexity: O(n)

# Code
```
class Solution {
    fun diagonalSum(mat: Array<IntArray>): Int {
        var sum = 0
        for ((j, i) in mat.indices.withIndex()) {
            sum += mat[i][j] + mat[i][mat.size-1-j]
        }
        if (mat.size % 2 != 0)
            sum -= mat[mat.size/2][mat.size/2]
        return sum
    }
}
```