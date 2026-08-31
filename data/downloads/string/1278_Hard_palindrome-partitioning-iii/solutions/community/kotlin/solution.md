# Beat 100% || Kotlin || DP || Memoization || Simple

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/6105992/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/6105992/)

---

# Intuition
Choices are multiple hence can be solved using DP.

# Approach
Take all possible for first cut and rest solve using recursive

# Complexity
- Time complexity:
O(m*n)

- Space complexity:
O(m*n)

# Code
```kotlin []
class Solution {
    fun palindromePartition(s: String, k: Int): Int {
        val dp = Array(s.length + 1) { Array<Int?>(k + 1) { -1 } }
        return enumerate(s, k, 0, dp) ?: -1
    }

    fun enumerate(s: String, k: Int, index: Int, dp: Array<Array<Int?>>): Int? {
        if (k == 0) {
            return if (index == s.length) 0
            else null
        }
        if (index == s.length) return null
        if (dp[index][k] != -1) return dp[index][k]
        var result: Int? = null
        for (i in index..s.lastIndex) {
            val requiredChange = getChangedCharCount(s, index, i)
            enumerate(s, k - 1, i + 1, dp)?.let {
                result = listOfNotNull(result, requiredChange + it).minOrNull()
            }
        }

        dp[index][k] = result
        return dp[index][k]
    }

    fun getChangedCharCount(s: String, start1: Int, end1: Int): Int {
        var start = start1
        var end = end1
        var count = 0
        while (start < end) {
            if (s[start] != s[end]) {
                count++
            }
            start++
            end--
        }
        return count
    }
}
```