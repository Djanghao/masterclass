# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/3668517/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/3668517/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findLUSlength(a: String, b: String): Int = {
      if (a == b) -1
      else a.length.max(b.length)
    }
}
```