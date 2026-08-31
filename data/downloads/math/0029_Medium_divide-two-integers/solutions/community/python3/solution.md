# Python3 - easiest solution

**Author:** mpoberezhniy
**Votes:** 61
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/2871168/](https://leetcode.com/problems/divide-two-integers/solutions/2871168/)

---

1) Define the result's sign and operate with positive dividend and divisor.
2) Calculate the result using the length of range.
3) Apply the sign.
4) Apply the 32-bit integer limitations.

No multiplication, division, or mod used.


```
class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        sign = -1 if (dividend >= 0 and divisor < 0) or (dividend < 0 and divisor >= 0) else 1
        dividend = abs(dividend)
        divisor = abs(divisor)
        result = len(range(0, dividend-divisor+1, divisor))
        if sign == -1:
            result = -result
        minus_limit = -(2**31)
        plus_limit = (2**31 - 1)
        result = min(max(result, minus_limit), plus_limit)
        return result

