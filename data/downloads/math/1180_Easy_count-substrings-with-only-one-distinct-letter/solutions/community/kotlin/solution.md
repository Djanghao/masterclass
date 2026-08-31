# Kotlin

**Author:** amit33
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/5258128/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/5258128/)

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
    fun countLetters(s: String): Int {
        var total = 0
        var start = 0
        var end = 0
        while(end < s.length) {
            val next = end + 1
            if (next == s.length || s[end] != s[next]) {
                var size = end - start + 1
                total += (size * (size + 1)) / 2
                start = next
            } 
            end++
        }

        return total
    }
}

```