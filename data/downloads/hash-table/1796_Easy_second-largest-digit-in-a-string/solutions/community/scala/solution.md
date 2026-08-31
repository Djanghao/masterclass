# Easy Scala One Liner Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/5122387/](https://leetcode.com/problems/second-largest-digit-in-a-string/solutions/5122387/)

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
    def secondHighest(s: String): Int = {
        if   (s.filter(_.isDigit).distinct.sorted .length>1) s.filter(_.isDigit).distinct.sorted .init.last.asDigit else -1
    }
}
```