# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/4705602/](https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/solutions/4705602/)

---

# Code
```
class Solution {
    fun earliestAndLatest(n: Int, firstPlayer: Int, secondPlayer: Int): IntArray {
        val res = intArrayOf(Int.MAX_VALUE, Int.MIN_VALUE)

        fun dfs(l: Int, r: Int, n: Int, rn: Int) {
            if (l == r) {
                res[0] = minOf(res[0], rn)
                res[1] = maxOf(res[1], rn)
            }
            val (l,r) = if (l<r) l to r else r to l
            (1..<l + 1).forEach { i ->
                (l - i + 1..minOf(r, (n + 1) / 2) - i).forEach { j ->
                    if (l + r - j - i <= n / 2) dfs(i, j, (n + 1) / 2, rn + 1) } }
        }

        dfs(firstPlayer, n - secondPlayer + 1, n, 1)
        return res
    }
}
```