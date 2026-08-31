# ✅2 Method's || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 1835
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/3651712/](https://leetcode.com/problems/palindrome-number/solutions/3651712/)

---

# Intuition:
The intuition behind this code is to reverse the entire input number and check if the reversed number is equal to the original number. If they are the same, then the number is a palindrome.

# Approach 1: Reversing the Entire Number
# Explanation:
1. We begin by performing an initial check. If the input number `x` is negative, it cannot be a palindrome since palindromes are typically defined for positive numbers. In such cases, we immediately return `false`.

2. We initialize two variables:
   - `reversed`: This variable will store the reversed value of the number `x`.
   - `temp`: This variable is a temporary placeholder to manipulate the input number without modifying the original value.

3. We enter a loop that continues until `temp` becomes zero:
   - Inside the loop, we extract the last digit of `temp` using the modulo operator `%` and store it in the `digit` variable.
   - To reverse the number, we multiply the current value of `reversed` by 10 and add the extracted `digit`.
   - We then divide `temp` by 10 to remove the last digit and move on to the next iteration.

4. Once the loop is completed, we have reversed the entire number. Now, we compare the reversed value `reversed` with the original input value `x`.
   - If they are equal, it means the number is a palindrome, so we return `true`.
   - If they are not equal, it means the number is not a palindrome, so we return `false`.

The code uses a `long long` data type for the `reversed` variable to handle potential overflow in case of large input numbers.

# Code

```C++ []
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        long long reversed = 0;
        long long temp = x;

        while (temp != 0) {
            int digit = temp % 10;
            reversed = reversed * 10 + digit;
            temp /= 10;
        }

        return (reversed == x);
    }
};

```
```Java []
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0) {
            return false;
        }

        long reversed = 0;
        long temp = x;

        while (temp != 0) {
            int digit = (int) (temp % 10);
            reversed = reversed * 10 + digit;
            temp /= 10;
        }

        return (reversed == x);
    }
}

```
```Python3 []
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        reversed_num = 0
        temp = x

        while temp != 0:
            digit = temp % 10
            reversed_num = reversed_num * 10 + digit
            temp //= 10

        return reversed_num == x

```

# Approach 2: Reversing Half of the Number
Instead of reversing the entire number, we can reverse only the last half of the number. This approach is tricky because when we reverse the last half of the number, we don't want the middle digit to be reversed back to its original value. This can happen if the number has an odd number of digits. To resolve this, we can compare the first half of the number with the reversed second half of the number.
# Explanation:
1. We begin with an initial check to handle special cases:
   - If the input number `x` is negative, it cannot be a palindrome since palindromes are typically defined for positive numbers. In such cases, we immediately return `false`.
   - If `x` is non-zero and ends with a zero, it cannot be a palindrome because leading zeros are not allowed in palindromes. We return `false` for such cases.

2. We initialize two variables:
   - `reversed`: This variable will store the reversed second half of the digits of the number.
   - `temp`: This variable is a temporary placeholder to manipulate the input number without modifying the original value.

3. We enter a loop that continues until the first half of the digits (`x`) becomes less than or equal to the reversed second half (`reversed`):
   - Inside the loop, we extract the last digit of `x` using the modulo operator `%` and add it to the `reversed` variable after multiplying it by 10 (shifting the existing digits to the left).
   - We then divide `x` by 10 to remove the last digit and move towards the center of the number.

4. Once the loop is completed, we have reversed the second half of the digits. Now, we compare the first half of the digits (`x`) with the reversed second half (`reversed`) to determine if the number is a palindrome:
   - For an even number of digits, if `x` is equal to `reversed`, then the number is a palindrome. We return `true`.
   - For an odd number of digits, if `x` is equal to `reversed / 10` (ignoring the middle digit), then the number is a palindrome. We return `true`.
   - If none of the above conditions are met, it means the number is not a palindrome, so we return `false`.

The code avoids the need for reversing the entire number by comparing only the necessary parts. This approach reduces both time complexity and memory usage, resulting in a more efficient solution.

# Code

```C++ []
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int reversed = 0;
        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }
        return (x == reversed) || (x == reversed / 10);
    }
};
```
```Java []
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int reversed = 0;
        int original = x;

        while (x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }

        return (x == reversed) || (x == reversed / 10);
    }
}
```
```Python3 []
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x != 0 and x % 10 == 0):
            return False

        reversed_num = 0
        original = x

        while x > reversed_num:
            reversed_num = reversed_num * 10 + x % 10
            x //= 10

        return x == reversed_num or x == reversed_num // 10
```

![CUTE_CAT.png](./images/0.png)

**If you are a beginner solve these problems which makes concepts clear for future coding:**
1. [Two Sum](https://leetcode.com/problems/two-sum/solutions/3619262/3-method-s-c-java-python-beginner-friendly/)
2. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/solutions/3651672/best-method-c-java-python-beginner-friendly/)
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/)
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/solutions/3666304/beats-100-c-java-python-beginner-friendly/)
5. [Remove Element](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/)
6. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/solutions/3672475/4-method-s-c-java-python-beginner-friendly/)
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)
8. [Majority Element](https://leetcode.com/problems/majority-element/solutions/3676530/3-methods-beats-100-c-java-python-beginner-friendly/)
9. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/)
10. **Practice them in a row for better understanding and please Upvote for more questions.**



**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

