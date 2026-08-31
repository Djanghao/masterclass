# Just Kotlin

**Author:** evgeniy091993
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/5565392/](https://leetcode.com/problems/string-matching-in-an-array/solutions/5565392/)

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
    fun stringMatching(words: Array<String>): List<String> {
        return words.filter{ word-> words.any{it.contains(word) && it != word } }
    }
}
```