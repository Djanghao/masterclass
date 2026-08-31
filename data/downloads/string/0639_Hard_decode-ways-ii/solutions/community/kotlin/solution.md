# 100% Beats || DP || Memoization || Kotlin

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/6055831/](https://leetcode.com/problems/decode-ways-ii/solutions/6055831/)

---

# Intuition
We can solve this problem using DP becasuse for every index in S we have multiple options like: we want to use single number or want to append it with another number(ex: 12 -> (1, 2) or (12))

# Approach
Approach is very simple either include single or double also handle for * which means we need number of possible types for below cases ex: ("1", "*", "*1", "1*", "**")

# Complexity
- Time complexity:
O(n*9^k)

- Space complexity:
O(n+9^k)

# Code
```kotlin []
import kotlin.math.min

class Solution {
    val MOD = 1_000_000_007
    val mapTypes = HashMap<String, Int>()
    fun numDecodings(s: String): Int {
        val dp = Array<Int?>(s.length + 1) { null }
        return enumerate(s, 0, dp)
    }

    fun enumerate(s: String, index: Int, dp: Array<Int?>): Int {
        if (dp[index] != null) {
            return dp[index]!!
        }
        if (index == s.length) {
            return 1
        }
        if (s[index] == '0') return 0
        var result = 0
        for (i in index..min(index + 1, s.length - 1)) {
            val validTypes = getValidTypes(s.substring(index, i + 1), 0)
            if (validTypes > 0) {
                val resul1 = enumerate(s, i + 1, dp)
                for (j in 1..validTypes) {
                    result = (result + resul1) % MOD
                }
            }
        }
        dp[index] = result
        return dp[index]!!
    }


    //"1", "*", "*1", "1*", "**"
    fun getValidTypes(s: String, index: Int): Int {
        val key = "$s,$index"
        if (mapTypes.containsKey(key)) return mapTypes[key]!!
        if (index == s.length) return if (s.toInt() > 26) 0 else 1
        var result = 0
        if (s[index] == '*') {
            for (i in 1..9) {
                val modified = s.substring(0, index) + i + s.substring(index + 1)
                result += getValidTypes(modified, index + 1)
            }
        } else {
            result += getValidTypes(s, index + 1)
        }
        mapTypes[key] = result
        return mapTypes[key]!!
    }
}

```