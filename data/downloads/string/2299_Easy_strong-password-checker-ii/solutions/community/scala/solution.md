# Scala pattern matching

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker-ii/solutions/3319452/](https://leetcode.com/problems/strong-password-checker-ii/solutions/3319452/)

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
    def strongPasswordCheckerII(password: String): Boolean = {
      def isDuplicate(s: String): Boolean = {
        for (i<-0 until s.length-1) {
          if (s(i) == s(i+1)) return false
        }
        true
      }
      password match {
        case x if x.length < 8 => false
        case x if x.count(_.isLower) < 1 => false
        case x if x.count(_.isUpper) < 1 => false
        case x if x.count(_.isDigit) < 1 => false
        case x if x.intersect("!@#$%^&*()-+").isEmpty => false
        case _ => isDuplicate(password)
      }
    }
}
```