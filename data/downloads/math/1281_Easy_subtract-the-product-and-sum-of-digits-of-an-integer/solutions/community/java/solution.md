# ✅ Beats 100 % || ☑️ Best C++/Java/Python and JavaScript Solution || Complete Explanation

**Author:** amanrathore48
**Votes:** 14
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3457223/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3457223/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
*The problem simply asks to find the product and sum of the digits of the input integer, and then return the difference between the product and sum.*

---

# Approach : *Using Modulo (%)*
<!-- Describe your approach to solving the problem. -->
1. Initialize prod to 1 and sum to 0, which will be used to accumulate the product and sum of digits, respectively.

1. Use a while loop to iterate through the digits of the input integer n. The loop continues as long as n is not equal to zero.

1. In each iteration, extract the last digit of n by taking the modulus of n with 10, and assign it to a variable lastDigit.

1. Multiply prod by lastDigit to accumulate the product of digits, and add lastDigit to sum to accumulate the sum of digits.

1. Divide n by 10 to remove the last digit and move on to the next digit.

1. Once the loop completes, return the difference between prod and sum.

> This approach uses a simple iterative process to extract the digits of n, compute their product and sum, and then return the difference between the two.

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []
class Solution {
public:
    int subtractProductAndSum(int n) {
        int prod = 1;
        int sum = 0;
        while(n != 0){
            int lastDigit = n%10;
            prod = prod * lastDigit;
            sum = sum + lastDigit;
            n = n/10;
        }
        return prod - sum;
    }
};
```
```java []
class Solution {
    public int subtractProductAndSum(int n) {
        int prod = 1;
        int sum = 0;
        while(n != 0){
            int lastDigit = n%10;
            prod = prod * lastDigit;
            sum = sum + lastDigit;
            n = n/10;
        }
        return prod - sum;
    }
}
```
```Python []
class Solution(object):
    def subtractProductAndSum(self, n):
        prod = 1
        sum = 0
        while n != 0:
            lastDigit = n % 10
            prod *= lastDigit
            sum += lastDigit
            n = n // 10
        return prod - sum
```
```JavaScript []
var subtractProductAndSum = function(n) {
    let prod = 1;
    let sum = 0;
    while(n !== 0){
        let lastDigit = n % 10;
        prod *= lastDigit;
        sum += lastDigit;
        n = Math.floor(n / 10);
    }
    return prod - sum;
};
```
\uD83D\uDE80 Try it out for yourself and see how it performs!


---


# Approach : *Using String*
<!-- Describe your approach to solving the problem. -->
- The optimized solution converts the input integer to a string using the to_string() function. This makes it easy to iterate over each digit of the number using a for loop.

- In the for loop, we iterate over each character in the string and convert it to an integer by subtracting the character '0'. This works because in the ASCII table, the character '0' has a value of 48, and the characters '1' to '9' have consecutive values from 49 to 57.

- We then update the product and sum variables by multiplying and adding the current digit to them respectively.

- Finally, we return the difference between the product and sum.

> This approach avoids the expensive modulo and division operations used in the previous solution, which can be slow for large integers.

# Complexity
- Time complexity: O(d)
> d -> Number of Digits 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(d)
> Since here we have used a string of length d
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```C++ []
class Solution {
public:
    int subtractProductAndSum(int n) {
        int prod = 1, sum = 0;
        string s = to_string(n);
        for (char c : s) {
            int digit = c - '0';
            prod *= digit;
            sum += digit;
        }
        return prod - sum;
    }
};
```
```java []
class Solution {
    public int subtractProductAndSum(int n) {
        int prod = 1, sum = 0;
        String s = Integer.toString(n);
        for (char c : s.toCharArray()) {
            int digit = c - '0';
            prod *= digit;
            sum += digit;
        }
        return prod - sum;
    }
}
```
```Python []
class Solution(object):
    def subtractProductAndSum(self, n):
        prod = 1
        sum = 0
        s = str(n)
        for c in s:
            digit = int(c)
            prod *= digit
            sum += digit
        return prod - sum
```
```JavaScript []
var subtractProductAndSum = function(n) {
    let prod = 1;
    let sum = 0;
    let s = n.toString();
    for (let i = 0; i < s.length; i++) {
        let digit = parseInt(s[i]);
        prod *= digit;
        sum += digit;
    }
    return prod - sum;
};
```
\uD83D\uDE80 Try it out for yourself and see how it performs!

---

![upvote.jpeg](./images/0.jpeg)

