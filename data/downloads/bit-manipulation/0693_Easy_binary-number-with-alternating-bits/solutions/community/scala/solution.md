# Easy FP Scala solution

**Author:** Dostoevskiy
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4259683/](https://leetcode.com/problems/binary-number-with-alternating-bits/solutions/4259683/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I decided to do it by functional programming

# Approach
<!-- Describe your approach to solving the problem. -->
Just div and mod the number and compare it by helper function

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def hasAlternatingBits(n: Int): Boolean = {
        helper(n / 2, n % 2)
    }

    def helper(n: Int, acc: Int): Boolean = {
        if (n == 0) return true
        if ((n % 2) == acc) return false
        helper(n / 2, n % 2)
    }
}
```