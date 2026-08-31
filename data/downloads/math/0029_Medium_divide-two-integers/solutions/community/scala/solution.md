# Easy Scala Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/5092920/](https://leetcode.com/problems/divide-two-integers/solutions/5092920/)

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
    def divide(dividend: Int, divisor: Int): Int = {
        if    (divisor== -1   &&   dividend==Int.MinValue)   Int.MaxValue
        else   dividend/divisor
    }
}
```