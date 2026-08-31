# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/3624663/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/3624663/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findSubstringInWraproundString(s: String): Int = {
      val base = "abcdefghijklmnopqrstuvwxyz"
      val count = Array.fill(26)(0)
      var maxLength = 0
      for (i <- s.indices) {
        if (i > 0 && (s(i-1)+1) % 26 == s(i) % 26) maxLength += 1
        else maxLength = 1
        val index = s(i) - 'a'
        count(index) = math.max(count(index), maxLength)
      }
      count.sum
    }
}
```