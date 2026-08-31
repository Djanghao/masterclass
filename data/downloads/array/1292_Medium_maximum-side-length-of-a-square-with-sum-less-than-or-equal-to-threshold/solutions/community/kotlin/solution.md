# :: Kotlin :: Dynamic Programming

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4663759/](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/solutions/4663759/)

---

```
class Solution {
    fun maxSideLength(mat: Array<IntArray>, threshold: Int): Int {
        var result = 0
        val h = mat.size
        val w = mat[0].size
        val dp = Array(h){ IntArray(w) }

        for (r in 0 until h) {
            for (c in 0 until w) {
                dp[r][c] = mat[r][c]

                if (r > 0) {
                    dp[r][c] += dp[r - 1][c]
                }

                if (c > 0) {
                    dp[r][c] += dp[r][c - 1]
                }

                if (r > 0 && c > 0) {
                    dp[r][c] -= dp[r - 1][c - 1]
                }

                // print("${dp[r][c]} ")
            }

            // println()
        }

        for (r in 0 until h) {
            for (c in 0 until w) {
                var n = result + 1
                while(r - n >= -1 && c - n >= -1) {

                    var curr = dp[r][c]
                    if (r - n >= 0) curr -= dp[r - n][c] 
                    if (c - n >= 0) curr -= dp[r][c - n]
                    if (r - n >= 0 && c - n >= 0)curr += dp[r - n][c - n]

                    if (curr <= threshold) {
                        // println("$r $c $n")
                        result = maxOf(result, n)
                        n += 1
                    }
                    else break
                }
            }
        }

        return result
    }
}
```