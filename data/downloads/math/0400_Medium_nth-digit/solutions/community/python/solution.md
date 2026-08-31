# 400: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 7
**Link:** [https://leetcode.com/problems/nth-digit/solutions/3258538/](https://leetcode.com/problems/nth-digit/solutions/3258538/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Check if n is a single digit number, return n if true.
2. Set the base value for the digit count to 9 and the initial number of digits to 1.
3. Use a while loop to iterate as long as n is greater than the product of the base and digits.
4. Inside the loop, subtract the count of digits from n, increase the base value by a factor of 10, and increase the number of digits by 1.
5. Calculate the number where the nth digit is located by using the formula: num = 10 ** (digits - 1) + (n - 1) // digits.
6. Calculate the index of the nth digit in the number by using the formula: idx = (n - 1) % digits.
7. Return the nth digit as an integer by converting the character at the calculated index to an integer.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def findNthDigit(self, n: int) -> int:
        if n <= 9:  # If n is a single digit, return n
            return n
        
        base = 9  # Set the base value for the digit count
        digits = 1  # Set the initial number of digits to 1
        while n > base * digits:
            n -= base * digits  # Subtract the count of digits from n
            base *= 10  # Increase the base value by a factor of 10
            digits += 1  # Increase the number of digits by 1
            
        num = 10 ** (digits - 1) + (n - 1) // digits  # Calculate the number where the nth digit is located
        idx = (n - 1) % digits  # Calculate the index of the nth digit in the number
        
        return int(str(num)[idx])  # Return the nth digit as an integer

```