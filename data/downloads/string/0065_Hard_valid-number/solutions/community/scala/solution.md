# Scala solution with regular

**Author:** egssor
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-number/solutions/5898719/](https://leetcode.com/problems/valid-number/solutions/5898719/)

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
    def isNumber(s: String): Boolean = {
        s.matches("^([+-]?(((\\\\d+\\\\.\\\\d*)|(\\\\.\\\\d+))|(\\\\d+))([eE][+-]?\\\\d+)?)$")
    }
}
```