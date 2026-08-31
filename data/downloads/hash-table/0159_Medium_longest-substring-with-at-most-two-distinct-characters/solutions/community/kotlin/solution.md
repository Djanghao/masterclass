# Kotlin - Sliding Window / Hash Table

**Author:** MohiFayden
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/5845626/](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/solutions/5845626/)

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
```kotlin []
class Solution {
    fun lengthOfLongestSubstringTwoDistinct(s: String): Int {

        // Intuition: 
        // The goal is to find the longest substring with at most two distinct characters.
        // We use a sliding window approach with two pointers (left, right) and a hashmap 
        // to keep track of the frequency of characters within the window.

        var ans = 0
        val counts = mutableMapOf<Char, Int>()
        var left = 0

        for (right in s.indices) {
            counts[s[right]] = counts.getOrDefault(s[right], 0) + 1
            while (counts.size > 2) {
                val leftCount = counts[s[left]]!!
                if (leftCount == 1) {
                    counts.remove(s[left])
                } else {
                    counts[s[left]] = leftCount - 1
                }
                left++
            }

            ans = maxOf(ans, right - left + 1)
        }

        return ans
    }
}
```