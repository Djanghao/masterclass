# Simple Solution with Java || Python3 || c++ || c#😊

**Author:** sagarsindhu36
**Votes:** 14
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/4704849/](https://leetcode.com/problems/string-to-integer-atoi/solutions/4704849/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to convert a given string to an integer, considering leading whitespaces, signs, and possible overflow conditions. The approach involves iterating through the characters of the string, handling sign, and converting digits to an integer. We need to be cautious about overflow conditions and return the appropriate result.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Trim the input string to remove leading and trailing whitespaces.
2. Initialize variables `i` (iterator), `num` (resulting integer), and `sign` (to handle positive or negative numbers).
3. Check for the sign at the beginning of the string. If present, update the sign and move the iterator.
4. Iterate through the remaining characters, converting each digit to an integer and updating the result.
5. Check for overflow conditions during the conversion and return the result accordingly.

# Complexity
- Time complexity: ***O(n)***
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ***O(1)***
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int myAtoi(String s) {
        s = s.trim();
        if (s.length() == 0) {
            return 0;
        }

        int i = 0;
        long num = 0;
        int sign = 1;

        // Check for sign
        if (s.charAt(i) == '+' || s.charAt(i) == '-') {
            sign = (s.charAt(i++) == '-') ? -1 : 1;
        }

        // Process digits
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            int digit = s.charAt(i++) - '0';

            // Check for overflow
            if (num > (Integer.MAX_VALUE - digit) / 10) {
                return (sign == 1) ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            num = num * 10 + digit;
        }

        return (int) (sign * num);
    }
}

```
```c++ []
class Solution {
public:
    int myAtoi(string s) {
        s.erase(0, s.find_first_not_of(' '));
        if (s.empty()) return 0;

        int i = 0, num = 0, sign = 1;

        if (s[0] == '+' || s[0] == '-') {
            sign = (s[0] == '-') ? -1 : 1;
            i++;
        }

        while (i < s.length() && isdigit(s[i])) {
            int digit = s[i] - '0';
            if (num > (INT_MAX - digit) / 10) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }
            num = num * 10 + digit;
            i++;
        }

        return sign * num;
    }
};
```
```python3 []
class Solution:
    def myAtoi(self, s: str) -> int:
        s = s.strip()
        if not s:
            return 0

        i, num, sign = 0, 0, 1

        if s[0] == '+' or s[0] == '-':
            sign = -1 if s[0] == '-' else 1
            i += 1

        while i < len(s) and s[i].isdigit():
            digit = int(s[i])
            if num > (2**31 - 1 - digit) // 10:
                return 2**31 - 1 if sign == 1 else -2**31
            num = num * 10 + digit
            i += 1

        return sign * num
```
```c# []
public class Solution {
    public int MyAtoi(string s) {
        s = s.Trim();
        if (string.IsNullOrEmpty(s)) {
            return 0;
        }

        int i = 0, num = 0, sign = 1;

        if (s[0] == '+' || s[0] == '-') {
            sign = (s[0] == '-') ? -1 : 1;
            i++;
        }

        while (i < s.Length && Char.IsDigit(s[i])) {
            int digit = s[i] - '0';
            if (num > (Int32.MaxValue - digit) / 10) {
                return (sign == 1) ? Int32.MaxValue : Int32.MinValue;
            }
            num = num * 10 + digit;
            i++;
        }

        return sign * num;
    }
}
```