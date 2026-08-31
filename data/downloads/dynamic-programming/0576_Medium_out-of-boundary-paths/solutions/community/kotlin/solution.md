# Kotlin. Beats 100% (115 ms). Memoization using a static IntArray.

**Author:** mobdev778
**Votes:** 1
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/4628282/](https://leetcode.com/problems/out-of-boundary-paths/solutions/4628282/)

---

![image.png](./images/0.png)

# Code
```
class Solution {
    fun findPaths(m: Int, n: Int, maxMove: Int, startRow: Int, startColumn: Int): Int {
        M = m
        N = n
        MN = M * N
        map = IntArray(MN * maxMove + MN) { -1 }
        return rec(startColumn, startRow, maxMove * MN)
    }

    private fun rec(x: Int, y: Int, moveOffset: Int): Int = when {
        y < 0 || y == M || x < 0 || x == N -> 1
        moveOffset <= 0 -> 0
        else -> getOrPut(moveOffset + y * N + x) {
            val newMoveOffset = moveOffset - MN
            var sum = 0
            for (i in 0..3) {
                sum += rec(x + dxs[i], y + dys[i], newMoveOffset)
                sum %= 1_000_000_007
            }
            sum
        }
    }

    private inline fun getOrPut(key: Int, computation: () -> Int): Int {
        val result = map[key]
        return when {
            result != -1 -> result
            else -> computation().apply {
                map[key] = this
            }
        }
    }

    companion object {
        var M = 0
        var N = 0
        var MN = 0
        var map = IntArray(0)
        val dys = intArrayOf(0, -1, 0, 1)
        val dxs = intArrayOf(-1, 0, 1, 0)
    }
}
```