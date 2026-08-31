# 1 Liner Kotlin Solution

**Author:** nasir_
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/4493136/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/4493136/)

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
    fun reverseWords(s: String): String {
         return s.split(" ").filter { it.isNotEmpty() }.reversed().joinToString(separator = " ")
    }
}
```