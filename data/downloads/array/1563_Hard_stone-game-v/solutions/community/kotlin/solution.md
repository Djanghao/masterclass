# :: Kotlin :: Dynamic Programming Solution

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-v/solutions/3577070/](https://leetcode.com/problems/stone-game-v/solutions/3577070/)

---

# Code
```
class Solution {
    fun stoneGameV(stoneValue: IntArray): Int {
        val n = stoneValue.size
        val dp = Array(n){ IntArray(n){ -1 } }

        val sums = IntArray(n){ stoneValue[it] }
        for (i in 1 until n) {
            sums[i] += sums[i - 1]
        }

        fun dfs(left: Int, right: Int): Int{
            if (dp[left][right] >= 0) return dp[left][right]
            if (left >= right) return 0

            var result = Int.MIN_VALUE
            for (pivot in left until right) {
                var ls = sums[pivot] - (if (left == 0) 0 else sums[left - 1])
                var rs = sums[right] - sums[pivot]

                if (ls > rs) {
                    result = Math.max(result, rs + dfs(pivot + 1, right))
                } else if (ls < rs) {
                    result = Math.max(result, ls + dfs(left, pivot))
                } else {
                    result = Math.max(Math.max(result, ls + dfs(left, pivot)), rs + dfs(pivot + 1, right))
                }
            }

            dp[left][right] = result
            return result
        }

        return dfs(0, n - 1)
    }
}
```