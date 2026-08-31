# Grouped && Count

**Author:** vnt-83
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011218/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6011218/)

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
```scala []
object Solution {
    def minChanges(s: String): Int = {
        s.grouped(2).count(p => p(0) != p(1))
    }
}
```