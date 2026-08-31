# C++/Java/Python/JavaScript || 🚀✅ With Explanation ||🔥🔥Beats 99.81%

**Author:** devanshupatel
**Votes:** 23
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/3497114/](https://leetcode.com/problems/string-to-integer-atoi/solutions/3497114/)

---

# Intuition:
The problem is to reverse an integer value. For example, if the input is 123, then the output should be 321. Similarly, if the input is -123, then the output should be -321.

# Approach:
1. Initialize a variable 'reverse' to store the reversed number. Also, initialize a variable 'num' to store the input number 'x'.
2. Use a while loop to iterate until the input number 'x' becomes 0.
3. Inside the loop, find the last digit of the input number 'x' using the modulo operator and store it in a variable 'digit'.
4. Multiply the 'reverse' variable by 10 and add the 'digit' variable to it. This will reverse the number digit by digit.
5. Divide the input number 'x' by 10 and store the quotient back to 'x'. This will remove the last digit of 'x' in each iteration.
6. Check if the 'reverse' variable overflows the integer range or not. If it overflows, then return 0.
7. Return the 'reverse' variable as the output.

# Complexity:
- Time Complexity: O(log(x)), where x is the input number.
In each iteration, the input number is divided by 10, so the time complexity will be proportional to the number of digits in the input number, which is log(x).
- Space Complexity: O(1)
We are not using any extra data structure to store the input or output, so the space complexity is constant.
---
# C++
```
class Solution {
public:
    int myAtoi(string s) {
        int len = s.size();
        double num = 0;
        int i=0;
        while(s[i] == ' '){
            i++;
        }
        bool positive = s[i] == '+';
        bool negative = s[i] == '-';
        positive == true ? i++ : i;
        negative == true ? i++ : i;
        while(i < len && s[i] >= '0' && s[i] <= '9'){
            num = num*10 + (s[i]-'0');
            i++;
        }
        num = negative ? -num : num;
        num = (num > INT_MAX) ? INT_MAX : num;
        num = (num < INT_MIN) ? INT_MIN : num;
        return int(num);
    }
};
```
---
# JAVA
```
class Solution {
    public int myAtoi(String s) {
        int len = s.length();
        if (len == 0) {
            return 0; // Handle empty string case
        }
        double num = 0;
        int i = 0;
        while (i < len && s.charAt(i) == ' ') {
            i++;
        }
        if (i == len) {
            return 0; // All characters are whitespace
        }
        boolean positive = s.charAt(i) == '+';
        boolean negative = s.charAt(i) == '-';
        if (positive) {
            i++;
        }
        if (negative) {
            i++;
        }
        while (i < len && s.charAt(i) >= '0' && s.charAt(i) <= '9') {
            num = num * 10 + (s.charAt(i) - '0');
            i++;
        }
        num = negative ? -num : num;
        num = (num > Integer.MAX_VALUE) ? Integer.MAX_VALUE : num;
        num = (num < Integer.MIN_VALUE) ? Integer.MIN_VALUE : num;
        return (int) num;
    }
}

```
---
# Python
```
class Solution(object):
    def myAtoi(self, s):
        s = s.strip()  # Remove leading and trailing whitespace
        if not s:
            return 0  # Handle empty string case
        num = 0
        i = 0
        sign = 1  # 1 for positive, -1 for negative
        if s[i] == '+':
            i += 1
        elif s[i] == '-':
            i += 1
            sign = -1
        while i < len(s) and s[i].isdigit():
            num = num * 10 + int(s[i])
            i += 1
        num *= sign
        num = max(min(num, 2 ** 31 - 1), -2 ** 31)  # Check for integer overflow
        return num


```
---
# JavaScript
```
var myAtoi = function(s) {
    s = s.trim();  // Remove leading and trailing whitespace
    if (s.length === 0) {
        return 0;  // Handle empty string case
    }
    let num = 0;
    let i = 0;
    let sign = 1;  // 1 for positive, -1 for negative
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        i++;
        sign = -1;
    }
    while (i < s.length && /^\\d$/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
    }
    num *= sign;
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));  // Check for integer overflow
    return num;
}

```
