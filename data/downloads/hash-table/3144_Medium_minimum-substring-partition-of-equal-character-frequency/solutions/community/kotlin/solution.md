# Kotlin  DP solution

**Author:** YuanRuQian
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5176859/](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/solutions/5176859/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n^2)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```



class Solution {
    fun minimumSubstringsInPartition(s: String): Int {
        val n = s.length
        val dp = IntArray(n) { n }
        for (end in s.indices) {
            val counter = IntArray(26)
            for (start in end downTo 0) {
                counter[s[start] - 'a']++
                if (isValidSubstring(counter, n)) {
                    dp[end] = if (start == 0) 1 else minOf(dp[end], dp[start - 1] + 1)
                }
            }
        }
        return dp.last()
    }

    private fun isValidSubstring(counter: IntArray, n: Int): Boolean {
        var minVal = n + 1
        var maxVal = 0
        counter.forEach {
            if (it > 0) {
                minVal = minOf(minVal, it)
                maxVal = maxOf(maxVal, it)
            }
        }
        return minVal == maxVal
    }
}
```