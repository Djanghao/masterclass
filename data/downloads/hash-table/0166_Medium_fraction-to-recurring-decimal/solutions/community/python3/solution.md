# 166: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 28
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/3208837/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/3208837/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This solution also handles the edge cases of a zero numerator and a zero denominator, and also checks for the negative sign at the beginning. It then calculates the integer part of the result by doing an integer division of the numerator by the denominator, and checks if there is a fractional part by checking if the remainder of this division is zero. If there is a fractional part, it adds a decimal point to the result.

The main optimization in this solution is the use of a dictionary to store the position of each remainder in the result. This way, we can easily check if a remainder has already appeared in the result, and if it has, we know that we have found a repeating part. We can then insert the opening and closing parentheses at the appropriate positions in the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def fractionToDecimal(self, numerator: int, denominator: int) -> str:
        # Handle edge cases
        if numerator == 0:
            return "0"
        if denominator == 0:
            return ""

        # Initialize result and check for negative sign
        result = ""
        if (numerator < 0) ^ (denominator < 0):
            result += "-"
        numerator, denominator = abs(numerator), abs(denominator)

        # Integer part of the result
        result += str(numerator // denominator)

        # Check if there is a fractional part
        if numerator % denominator == 0:
            return result

        result += "."

        # Use a dictionary to store the position of each remainder
        remainder_dict = {}
        remainder = numerator % denominator

        # Keep adding the remainder to the result until it repeats or the remainder becomes 0
        while remainder != 0 and remainder not in remainder_dict:
            remainder_dict[remainder] = len(result)
            remainder *= 10
            result += str(remainder // denominator)
            remainder %= denominator

        # Check if there is a repeating part
        if remainder in remainder_dict:
            result = result[:remainder_dict[remainder]] + "(" + result[remainder_dict[remainder]:] + ")"

        return result

```