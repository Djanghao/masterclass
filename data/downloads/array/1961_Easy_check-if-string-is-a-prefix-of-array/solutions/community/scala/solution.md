# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/3416316/](https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/solutions/3416316/)

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
    def isPrefixString(s: String, words: Array[String]): Boolean = {
      var prefix = ""
      for (word <- words) {
        prefix += word
        if (s == prefix) return true
        if (!s.startsWith(prefix)) return false
      }
      false
    }
}
```