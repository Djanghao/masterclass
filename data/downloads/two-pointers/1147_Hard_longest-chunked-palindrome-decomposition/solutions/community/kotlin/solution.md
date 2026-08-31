# 100% Beats || DP || Memoization || Recursive

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/6101796/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/6101796/)

---

# Intuition
For every index we have multiple choice hence we can solve using DP.

# Approach
Take all possible prefeix and suffic matching and take their max.

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```kotlin []
import kotlin.math.max

class Solution {
    //ghiabcdefhelloa
    // damhelloabcdefghi
    fun longestDecomposition(text: String): Int {
        val dp = Array(text.length) { arrayOfNulls<Int>(text.length) }
        return enumerate(text, 0, text.length - 1, dp)
    }

    fun enumerate(text: String, start: Int, end: Int, dp: Array<Array<Int?>>): Int {
        if (start > end) {
            return 0
        }
        if (dp[start][end] != null) {
            return dp[start][end]!!
        }
        var result = 1
        val mid = (start + end + 2) / 2
        for (i in mid..end) {
            var pointer1 = i
            while (pointer1 <= end) {
                if (text[pointer1] != text[start + pointer1 - i]) break
                pointer1++
            }
            if (pointer1 == end + 1) {//found valid suffix and prefix
                result = max(result, 2 + enumerate(text, text.length - i, i - 1, dp))
            }
        }
        dp[start][end] = result
        return dp[start][end]!!
    }
}
```