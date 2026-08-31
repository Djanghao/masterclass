# 405: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 27
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/3262505/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/3262505/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Define the function toHex that takes an integer num as input and returns a string representing its hexadecimal representation.
2. Check if the input number is zero. If so, return '0' as its hexadecimal representation.
3. If the input number is negative, convert it to its corresponding positive value using two's complement. This is achieved by adding 2^32 to the input number, since we are dealing with 32-bit integers.
4. Define the string hex_digits that contains the hexadecimal digits from '0' to 'f'.
5. Initialize an empty string hex_num to store the hexadecimal representation of the input number.
6. Repeatedly divide the input number by 16 and convert the remainder to its corresponding hexadecimal digit until the quotient becomes zero. We can use integer division // to obtain the quotient.
7. For each remainder obtained in step 6, convert it to its corresponding hexadecimal digit using the hex_digits string and add it to the beginning of the hex_num string using string concatenation.
8. Return the hex_num string as the hexadecimal representation of the input number.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
  def toHex(self, num: int) -> str:
    # If the input number is zero, return '0'
    if num == 0:
        return '0'
    # If the input number is negative, convert it to its corresponding positive value using two's complement
    if num < 0:
        num = (1 << 32) + num
    
    hex_digits = '0123456789abcdef'  # The hexadecimal digits
    
    hex_num = ''  # Initialize an empty string to store the hexadecimal representation of the input number
    
    # Repeatedly divide the input number by 16 and convert the remainder to its corresponding hexadecimal digit until the quotient becomes zero
    while num > 0:
        digit = num % 16  # Get the remainder of dividing the input number by 16
        hex_digit = hex_digits[digit]  # Convert the remainder to its corresponding hexadecimal digit
        hex_num = hex_digit + hex_num  # Add the hexadecimal digit to the beginning of the hexadecimal representation
        num //= 16  # Update the input number by dividing it by 16
    
    return hex_num

```