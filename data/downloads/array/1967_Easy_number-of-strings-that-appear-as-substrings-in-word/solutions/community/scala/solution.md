# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3313748/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/3313748/)

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
    def numOfStrings(patterns: Array[String], word: String): Int = {
        patterns.count(word.contains(_))
    }
}
```