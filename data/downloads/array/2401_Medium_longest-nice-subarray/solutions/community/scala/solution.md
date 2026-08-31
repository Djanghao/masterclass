# Easy Optimal Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/5221353/](https://leetcode.com/problems/longest-nice-subarray/solutions/5221353/)

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
object Solution {
    def longestNiceSubarray(nums: Array[Int]): Int = {
        var maxLen = 0
        var currentLen = 0
        var currentAnd = 0
        var start = 0
        for (end <- nums.indices) {
            while ((currentAnd & nums(end)) != 0) {
                currentAnd ^= nums(start)
                start += 1
                currentLen -= 1
            }
            currentAnd |= nums(end)
            currentLen += 1
            maxLen = Math.max(maxLen, currentLen)
        }
        maxLen
    }
}
```