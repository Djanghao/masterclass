# Two Kotlin solutions for beginners

**Author:** ganesh2shiv
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/3081046/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/3081046/)

---

Approach 1:
```
class Solution {
/* 
    \u2022 Rotate 90\xB0 \u21BB = Reverse cols + T' or (T' + Reverse rows)
    \u2022 Rotate 90\xB0 \u21BA = T' + Reverse cols or (Reverse rows + T')
*/
    fun findRotation(mat: Array<IntArray>, target: Array<IntArray>): Boolean {
        val n = mat.size
        for (k in 1..4) {
            if (Arrays.deepEquals(mat, target)) return true
            else if (k < 4) {
                var i = 0
                var j = n - 1
                while (i < j) {
                    val temp = mat[i]
                    mat[i] = mat[j]
                    mat[j] = temp
                    ++i
                    --j
                }

                for (i in 0..n-1) {
                    for (j in 0..i) {
                        val temp = mat[i][j]
                        mat[i][j] = mat[j][i]
                        mat[j][i] = temp
                    }
                }
            }
        }
        return false
    }
}
```
Approach 2:
```
class Solution {
    fun findRotation(mat: Array<IntArray>, target: Array<IntArray>): Boolean {
        val m = mat.size
        val n = mat[0].size
        val arr = BooleanArray(4) { true }
        for (i in 0..m-1) {
            for (j in 0..n-1) {
                if (mat[i][j] != target[i][j]) arr[0] = false
                if (mat[i][j] != target[j][m-i-1]) arr[3] = false
                if (mat[i][j] != target[m-i-1][n-j-1]) arr[2] = false
                if (mat[i][j] != target[n-j-1][i]) arr[1] = false
            }
        }
        return arr[0] || arr[1] || arr[2] || arr[3]
    }
}
```