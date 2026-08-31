# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4257148/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4257148/)

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
    def checkString(s: String): Boolean = {
        !s.contains("ba")
    }
}
```