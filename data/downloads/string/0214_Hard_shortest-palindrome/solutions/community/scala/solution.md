# Scala in-bilt function substring and it's range and also time and memory optimised .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/5194646/](https://leetcode.com/problems/shortest-palindrome/solutions/5194646/)

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
    def shortestPalindrome(s: String): String = {
        val reversedStr = s.reverse
        val n = s.length
        val i = (0 until n).find(i => s.substring(0, n - i) == reversedStr.substring(i)).getOrElse(n)
        reversedStr.substring(0, i) + s
    }
}

```