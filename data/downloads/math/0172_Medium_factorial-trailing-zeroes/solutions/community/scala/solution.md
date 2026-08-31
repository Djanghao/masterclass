# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3499007/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3499007/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log_5 n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def trailingZeroes(n: Int): Int = {
        var count = 0
        var num = n
        while (num > 0) {
            count += num / 5
            num /= 5
        }
        count
    }
}
```