# just a variant

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-egg-drop/solutions/4625921/](https://leetcode.com/problems/super-egg-drop/solutions/4625921/)

---

# Code
```
class Solution {
    fun superEggDrop(k: Int, n: Int): Int = Array(n+1) { IntArray(k+1) } .let {dp ->
        generateSequence(0) { m -> 
                (1..k).forEach { j -> dp[m+1][j] = dp[m][j-1] + dp[m][j] +1 }
                m+1 
        }.find { dp[it][k]>=n }!! }
}
```