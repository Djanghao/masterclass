# [Kotlin] DP Solution

**Author:** devle79
**Votes:** 1
**Link:** [https://leetcode.com/problems/uncrossed-lines/solutions/3512312/](https://leetcode.com/problems/uncrossed-lines/solutions/3512312/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Memorize optimal crossing in array dp that size of num2 (target).

The row in the array save the optimal (maximum) number that you can get when you select number at nums2 from the current nums1 pointer.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
    fun maxUncrossedLines(nums1: IntArray, nums2: IntArray): Int {
        val n = nums2.size

        var dp = IntArray(n + 1)

        for (i in 1 .. nums1.size) {
            val row = IntArray(n + 1)

            for (j in 1 .. n) {
                row[j] = if (nums1[i - 1] == nums2[j - 1]) {
                    dp[j - 1] + 1
                } else {
                    maxOf(dp[j], row[j - 1])
                }
            }

            dp = row
        }

        return dp[n]
    }
}
```