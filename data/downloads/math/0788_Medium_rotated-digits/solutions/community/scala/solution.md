# Scala solution

**Author:** malovig
**Votes:** 1
**Link:** [https://leetcode.com/problems/rotated-digits/solutions/4378126/](https://leetcode.com/problems/rotated-digits/solutions/4378126/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def rotatedDigits(n: Int): Int = (1 to n).count(getCount(_) > 0)

    def getCount(num: Int): Int = {
      val digits = num.toString.map(_.asDigit)
      if (digits.exists(e => e == 3 || e == 4 || e == 7)) 0
      else digits.count(c => c == 2 || c == 5 || c == 6 || c == 9)
    }
}
```