# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3682541/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/3682541/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def longestDecomposition(text: String): Int = {
      val n = text.length
      var result = 0
      var i = 0
      var found = false

      while (i < n/2 && !found) {
        if (text.substring(0, i + 1) == text.substring(n-1-i, n)) {
          result = 2 + longestDecomposition(text.substring(i+1, n-1-i))
          found = true
        }
        i += 1
      }

      if (!found) if (n == 0) 0 else 1
      else result
    }
}
```