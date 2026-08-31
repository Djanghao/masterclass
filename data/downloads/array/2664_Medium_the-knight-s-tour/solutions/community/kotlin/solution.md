# Simple backtracking solution, Beats 100% 🚀

**Author:** DmitryNekrasov
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-knights-tour/solutions/5951654/](https://leetcode.com/problems/the-knights-tour/solutions/5951654/)

---

# Code
```kotlin []
class Solution {
    fun tourOfKnight(n: Int, m: Int, r: Int, c: Int): Array<IntArray> {
        val ans = Array(n) { IntArray(m) { -1 } }
        val directions = arrayOf(1 to 2, 2 to 1, 2 to -1, 1 to -2, -1 to -2, -2 to -1, -2 to 1, -1 to 2)
        var count = 0

        fun backtrack(i: Int, j: Int, step: Int) {
            if (i !in 0..<n || j !in 0..<m || ans[i][j] != -1) return
            ans[i][j] = step
            count++
            for ((di, dj) in directions) backtrack(i + di, j + dj, step + 1)
            if (count != n * m) {
                ans[i][j] = -1
                count--
            }
        }

        backtrack(r, c, 0)

        return ans
    }
}
```