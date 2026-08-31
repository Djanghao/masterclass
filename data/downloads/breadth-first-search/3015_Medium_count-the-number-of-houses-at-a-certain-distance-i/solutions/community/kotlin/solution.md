# DFS memo beat 100%

**Author:** zmk161
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4605649/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4605649/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
n*n/2

- Space complexity:
N*N

# Code
```
class Solution {
    fun countOfPairs(n: Int, x: Int, y: Int): IntArray {

        val array = Array(n + 1) { Array(n + 1) { 0 } }
        val ans = Array(n) { 0 }
        fun dfs(c: Int) {
            if (c !in 1..array.lastIndex) return
            for (r in 1..array.lastIndex) {
                if (r == c) continue
                if (array[r][c] != 0) continue
                if (array[c][r] != 0) {
                    array[r][c] = array[c][r]
                    continue
                }
                array[r][c] = minOf(
                    abs(r - c),
                    abs(r - y) + abs(x - c) + 1,
                    abs(r - x) + abs(y - c) + 1
                )
            }
            dfs(c + 1)
        }

        dfs(1)
        for (i in 1..array.lastIndex) {
            for (j in 1..array.lastIndex) {
                if (i != j && array[i][j] != 0) {
                    ans[array[i][j] - 1]++
                }
            }
        }
        return ans.toIntArray()
    }
}
```