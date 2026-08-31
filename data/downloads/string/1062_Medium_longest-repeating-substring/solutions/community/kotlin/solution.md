# how about this?

**Author:** MyungsungJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-repeating-substring/solutions/6112486/](https://leetcode.com/problems/longest-repeating-substring/solutions/6112486/)

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
    fun longestRepeatingSubstring(s: String): Int {
        var max = 0
        for (i in 0 .. s.length - 1) {
            for (j in s.length - 1 downTo i) {
                val text = s.substring(i, j + 1)
                if (s.drop(i + 1).contains(text)) {
                    max = maxOf(max, text.length)
                    break
                }
            }
        }

        return max
    }
}
```