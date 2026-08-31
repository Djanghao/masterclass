# Using bitwise operations without division multiplication and any other modifiers

**Author:** shille
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/4082645/](https://leetcode.com/problems/divide-two-integers/solutions/4082645/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 7ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


# Code
```
class Solution {

    /**
     * @param Integer $dividend
     * @param Integer $divisor
     * @return Integer
     */
    function divide(&$dividend, $divisor) {
      if ($dividend == -2147483648 && $divisor == -1) {
          return 2147483647;
      }
      $sign = ($dividend > 0) == ($divisor > 0);
      $dividend = $dividend < 0 ? (~$dividend) + 1: $dividend;
      $divisor = $divisor < 0 ? (~$divisor) + 1 : $divisor;
      $quotient = 0;
      for ($i = 31; $i >= 0; $i--) {
          if ($dividend >= ($divisor << $i)) {
              $dividend -= ($divisor << $i);
              $quotient |= (1 << $i);
          }
      }
      return $sign ? $quotient : -$quotient;
    }
}
```