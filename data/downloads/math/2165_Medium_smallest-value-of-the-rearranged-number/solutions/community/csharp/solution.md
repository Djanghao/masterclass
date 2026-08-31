# C# Greedy Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5887924/](https://leetcode.com/problems/smallest-value-of-the-rearranged-number/solutions/5887924/)

---

# Intuition
- <!-- Describe your first thoughts on how to solve this problem. -->When approaching this problem, my first thought was to consider that the smallest possible number would be achieved by rearranging the digits in a certain order. Since sorting is the simplest way to rearrange elements, I considered sorting the digits.
- For positive numbers, sorting the digits in ascending order would give the smallest number, but I also needed to ensure that the smallest digit wasn't zero (to avoid leading zeros). This led me to consider how to move the first non-zero digit to the front if necessary.
- For negative numbers, the goal was to create the most negative (smallest) value. This can be achieved by sorting the digits in descending order, so the largest digits come first, increasing the magnitude of the negative number.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  For Positive Numbers:
//  *Convert the number to a character array of digits using ToString().
//  *Sort the digits using Array.Sort().
//  *If the smallest digit is 0, find the first non-zero digit and swap it with the first digit to avoid leading zeros.
//  *Convert the sorted array of digits back into a number using long.Parse().
//  For Negative Numbers:
//  *Exclude the minus sign by using Substring(1).
//  *Sort the digits in non-increasing order by sorting the array and then reversing it.
//  *Convert the sorted digits back into a number and add a negative sign.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(d log d), where 'd' is the number of digits in the number.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(d), where 'd' is the number of digits.
___

# Code
```csharp []
public class Solution {
    public long SmallestNumber(long num) {
        // Handle positive numbers
        if (num >= 0) {
            // Convert number to a char array of digits
            char[] digits = num.ToString().ToCharArray();
            // Sort digits in non-decreasing order
            Array.Sort(digits);
            
            // Ensure no leading zero by moving the first non-zero digit to the start
            if (digits[0] == '0') {
                for (int i = 1; i < digits.Length; i++) {
                    if (digits[i] != '0') {
                        // Swap the first zero with the first non-zero digit
                        char temp = digits[0];
                        digits[0] = digits[i];
                        digits[i] = temp;
                        break;
                    }
                }
            }
            
            // Return the rearranged number as a long
            return long.Parse(new string(digits));
        } 
        // Handle negative numbers
        else {
            // Convert number to a char array of digits, excluding the minus sign
            char[] digits = num.ToString().Substring(1).ToCharArray();
            // Sort digits in non-increasing order
            Array.Sort(digits);
            Array.Reverse(digits);
            
            // Return the rearranged number with a negative sign
            return -long.Parse(new string(digits));
        }
    }
}
```