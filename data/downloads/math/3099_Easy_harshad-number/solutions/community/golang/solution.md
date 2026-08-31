# Don't Convert into string. But why ? Let me explain in detail.

**Author:** muhammadfarhankt
**Votes:** 3
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4949996/](https://leetcode.com/problems/harshad-number/solutions/4949996/)

---

# Intuition
- To determine whether a number is a Harshad number, we need to find the sum of its digits. If the number is divisible by the sum of its digits, then it is a Harshad number. Otherwise, it is not.

## Don't Convert into string. But why ?
- Converting the integer into a string to solve the Harshad Number problem would introduce some additional overhead, affecting the time and space complexity. Let's analyze how:

### Time Complexity
- Conversion to String:  Converting an integer to a string usually has a complexity of O(log(x)), where x is the number. This is because the number of digits grows proportionally to the logarithm of the number.
- Iteration over String: You'd need to iterate over the characters in the string, which is another O(log(x)) operation.
- Calculations: The calculations themselves (extracting digits, summing) would remain roughly the same.
- Overall, the time complexity would increase slightly due to the string conversion and iteration steps.

### Space Complexity
- String Storage: You would need to store the string representation of the number, which takes O(log(x)) space. This increases the space complexity compared to directly manipulating the integer.
### Practical Implications
- While the string manipulation approach can solve the problem, it's generally less efficient than direct integer arithmetic for the following reasons:
- Number-Specific Problem: This problem is centered around the digits of a number, which are more naturally manipulated using integer arithmetic.
- LeetCode Focus: LeetCode solutions often favor efficiency, and string conversion would add a slight overhead in comparison.
Let me know if you'd like a similar analysis for any other LeetCode problems!

# Approach
1. Calculate Sum of Digits:
    1. Initialize digitSum to store the sum.
    2. Use a loop to extract digits:
    3. Extract the last digit using the modulo operator (% 10) and add it to digitSum.
    4. Remove the last digit by integer division (temp /= 10).
2. Check Divisibility:
    1. Use the modulo operator (%) to check if x is divisible by digitSum.
    2. If divisible, return digitSum (the answer).
    3. If not divisible, return -1.

# Complexity
- Time complexity: O(log(x)), where x is the input number. The number of iterations in the loop is roughly equal to the number of digits in the number.
    - When we iterate through the digits of the integer to calculate their sum, the number of iterations depends on the number of digits in the integer, not the integer value itself. Since the number of digits in an integer x is approximately log(x) (with base 10), the time complexity becomes logarithmic, O(log(x)), not linear, O(x).
- Space complexity: O(1). We use a few variables, and the space used doesn't grow with the input size.

# Code

```javascript []
/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let digitSum = 0;
    let temp = x;
    while (temp > 0) {
        digitSum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (x % digitSum === 0) {
        return digitSum;
    }
    return -1;
};
```
```python []
class Solution:
    def sumOfTheDigitsOfHarshadNumber(self, x: int) -> int:
        digit_sum = 0
        temp = x
        while temp > 0:
            digit_sum += temp % 10
            temp //= 10
        if x % digit_sum == 0:
            return digit_sum
        return -1

```
```java []
class Solution {
    public int sumOfTheDigitsOfHarshadNumber(int x) {
        int digitSum = 0;
        int temp = x;
        while (temp > 0) {
            digitSum += temp % 10;
            temp /= 10;
        }
        if (x % digitSum == 0) {
            return digitSum;
        }
        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int sumOfTheDigitsOfHarshadNumber(int x) {
        int digitSum = 0;
        int temp = x;
        while (temp > 0) {
            digitSum += temp % 10;
            temp /= 10;
        }
        if (x % digitSum == 0) {
            return digitSum;
        }
        return -1;
    }
};
```
```Dart []
int sumOfTheDigitsOfHarshadNumber(int x) {
    int digitSum = 0;
    int temp = x;
    while (temp > 0) {
        digitSum += temp % 10;
        temp /= 10;
    }
    if (x % digitSum == 0) {
        return digitSum;
    }
    return -1;
}
```
```C []
int sumOfTheDigitsOfHarshadNumber(int x) {
    int digitSum = 0;
    int temp = x;
    while (temp > 0) {
        digitSum += temp % 10;
        temp /= 10;
    }
    if (x % digitSum == 0) {
        return digitSum;
    }
    return -1;
}
```
```Golang []
func sumOfTheDigitsOfHarshadNumber(x int) int {
    digitSum := 0
    temp := x
    for temp > 0 {
        digitSum += temp % 10
        temp /= 10
    }
    if x % digitSum == 0 {
        return digitSum
    }
    return -1
}
```
# Pls upvote \u2B06\uFE0F  if you liked it