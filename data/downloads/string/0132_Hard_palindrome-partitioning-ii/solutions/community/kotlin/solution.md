# DP || Memoized || Simple || Easy

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-ii/solutions/6078116/](https://leetcode.com/problems/palindrome-partitioning-ii/solutions/6078116/)

---

# Intuition
Can be solved using DP as we have multiple choices for first palidrome

# Approach
Take all possible first palindrom and rest can be solved using DP subproblem

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```kotlin []
class Solution {
    fun minCut(s: String): Int {
        val dp = Array<Int?>(s.length + 1) { -1 }
        return enumerate(s, 0, dp) ?: 0
    }

    /**
     * "ABCDEF"
     * "BB"
     */
    fun enumerate(s: String, index: Int, dp: Array<Int?>): Int? {
        if (index == s.length) {
            return null
        }
        if (dp[index] != -1) return dp[index]
        var result: Int? = null
        for (i in index..s.lastIndex) {
            if (isPalindrome(s, index, i)) {
                enumerate(s, i + 1, dp)?.let {
                    result = listOfNotNull(result, 1 + it).minOrNull()
                } ?: run {
                    result = listOfNotNull(result, 0).minOrNull()
                }
            }
        }
        dp[index] = result ?: 0
        return dp[index]
    }

    /**
     * "a"
     * "ab"
     */
    fun isPalindrome(s: String, start: Int, end: Int): Boolean {
        var i = start
        var j = end
        while (i < j) {
            if (s[i] == s[j]) {
                i++
                j--
            } else {
                return false
            }
        }
        return true
    }
}
```