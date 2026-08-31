# The most readable kotlin solution

**Author:** jakobakoba
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983670/](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/solutions/3983670/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minTaps(n: Int, ranges: IntArray): Int {
        val dp = IntArray(n+1){n + 1}

        dp[0] = 0
        for (i in 0..n) {
        val start = maxOf(0, i - ranges[i])
        val end = minOf(n, i + ranges[i])
        for (j in start..end) {
            dp[j] = minOf(dp[j], dp[start] + 1)
        }
    }

    return if (dp[n] <= n) dp[n] else -1
    }
}
```