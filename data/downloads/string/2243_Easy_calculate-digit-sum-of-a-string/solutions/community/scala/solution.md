# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/4314489/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/4314489/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log k n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def digitSum(s: String, k: Int): String = 
      if (s.length <= k) s
      else digitSum(s.grouped(k).toList.map(m=>m.map(_.asDigit).sum.toString).reduce(_ + _), k)
}
```