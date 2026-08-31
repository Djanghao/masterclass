# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/3581032/](https://leetcode.com/problems/count-numbers-with-unique-digits/solutions/3581032/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countNumbersWithUniqueDigits(n: Int): Int = {
      if (n == 0) 1
      else {
        var tmp = n
        var res = 10
        var uniqueDigits = 9
        var availableNumber = 9
        while (tmp > 1 && availableNumber > 0) {
          uniqueDigits *= availableNumber
          res += uniqueDigits
          availableNumber -= 1
          tmp -= 1
        }
        res
      }
    }
}
```