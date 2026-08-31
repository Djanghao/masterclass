# 【Video】Using remainder

**Author:** niits
**Votes:** 465
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/5428589/](https://leetcode.com/problems/reverse-integer/solutions/5428589/)

---

# Intuition
Convert input to string or use remainders.

# Solution Video

https://youtu.be/Y_NCKgC3BiM

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,253
Thank you for your support!

---

# Approach

This question doesn't allow us to use 64-bit integer, so the first two solution are wrong but I think it's good to have multiple solutions for real interview. I'll show you three ways to solve this question.

# Solution 1 - Convert to string 

**We may use 64 bit integers.**

Simply, if we convert input number to string, we can reverse the string number then convert it to integer again.

```
Input: x = 123
```
Convert to string.
```
123 \u2192 "123"
```
Then reverse "123".
```
"123" \u2192 "321"
```
Then Convert it to integer again.

```
"321" \u2192 321
```
```
return 321
```

Be careful! We have also negative case. In that case, start reversing the string from `index 1`, not `index 0`.

Easy!\uD83D\uDE04
Let's see a solution codes and step by step algorithm!

---

\u2B50\uFE0F I recently created a video on how I've been using LeetCode to learn.

https://youtu.be/bU_dXCOWHls

---

```python []
class Solution:
    def reverse(self, x: int) -> int:
        res = 0
        if x < 0:
            res = int(str(x)[1:][::-1]) * -1
        else:
            res = int(str(x)[::-1])
        
        if res > 2 ** 31 - 1 or res < -2 ** 31:
            return 0
        
        return res
```
```javascript []
var reverse = function(x) {
    let res = 0;
    if (x < 0) {
        res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
    } else {
        res = parseInt(String(x).split('').reverse().join(''));
    }

    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
        return 0;
    }

    return res;    
};
```
```java []
class Solution {
    public int reverse(int x) {
        int res = 0;
        boolean isNegative = x < 0;
        String strX = String.valueOf(Math.abs(x));
        StringBuilder sb = new StringBuilder(strX).reverse();
        
        try {
            res = Integer.parseInt(sb.toString());
        } catch (NumberFormatException e) {
            return 0;
        }
        
        return isNegative ? -res : res;       
    }
}
```

## Step by step algorithm

1. **Initialize the result variable `res`**:
    ```python
    res = 0
    ```
    - We start by initializing the variable `res` to store the reversed integer.

2. **Check if the input number `x` is negative**:
    ```python
    if x < 0:
    ```
    - We check if the given integer `x` is negative.

3. **Reverse the digits of the integer**:
    ```python
    res = int(str(x)[1:][::-1]) * -1
    ```
    - If `x` is negative, we convert it to a string, remove the negative sign (`str(x)[1:]`), reverse the string (`[::-1]`), convert it back to an integer, and then multiply by -1 to keep the sign negative.

4. **Handle positive integers**:
    ```python
    else:
        res = int(str(x)[::-1])
    ```
    - If `x` is positive, we simply convert it to a string, reverse the string, and then convert it back to an integer.

5. **Check for overflow**:
    ```python
    if res > 2 ** 31 - 1 or res < -2 ** 31:
        return 0
    ```
    - We check if the reversed integer `res` is within the range of a 32-bit signed integer. If it exceeds this range, we return 0 to indicate overflow.

6. **Return the reversed integer**:
    ```python
    return res
    ```
    - Finally, we return the reversed integer.

Overall, the code efficiently reverses the digits of the given integer while handling negative numbers and checking for overflow. It demonstrates a concise approach to solve the problem.


---

# Solution 2 - Using remainder

**We may use 64 bit integers.**

Let me use the same input.

```
Input: x = 123
```
In the end, we want to return `321`, so how we can move `3` to the first position?

My strategy is to use remainder divided by `10`.

```
123 % 10 = 3
```
We can get `3` easily and add `3` to result variable(=`res`).

```
res = 3
```
But the next question is "How can we get `2` from `123`?"

My answer is to divide `123` by `10` so that we can get `12` for the next process. This time not remainder, we use the answer.

```
123 // 10 = 12
x = 12
```
We will get remainder of
```
12 % 10 = 2
```
The next problem is now `res = 3` and we got `2`. We want to create `32` right? Because in the end we want to return `321`. How can we create `32` with `3` and `2`?

My answer is to multiply `10` with `res`, then add remainder(= `2`) to it.


---


\u2B50\uFE0F Points
```
res = (res * 10) + (x % 10)
```
```
res = (3 * 10) + (12 % 10)
= 32
```
---

We got `32`. Next, we want `1` to create `321`, so devide `12` by `10`.
```
12 // 10 = 1
x = 1
```
Then we use the same formula above.
```
res = (res * 10) + (x % 10)
res = (32 * 10) + (1 % 10)
= 321

x(= 1) // 10 = 0
```
When we reach `0`, we finish iteration.
```
return 321
```

Of course, we handle negative case, but I believe you can understand it easily if you see the solution codes. Just convert a negative to a positive, reverse numbers, then convert the positive to a negative before we return output.

```python []
class Solution:
    def reverse(self, x: int) -> int:
        is_negative = False

        if x < 0:
            is_negative = True
            x *= -1
        
        res = 0
        while x > 0:
            res = (res * 10) + (x % 10)
            x //= 10
        
        if res > 2 ** 31 - 1:
            return 0
        
        return res * -1 if is_negative else res
                
```
```javascript []
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;

    if (x < 0) {
        isNegative = true;
        x *= -1;
    }
    
    let res = 0;
    while (x > 0) {
        res = (res * 10) + (x % 10);
        x = Math.floor(x / 10);
    }
    
    if (res > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    return isNegative ? -res : res;    
};
```
```java []
class Solution {
    public int reverse(int x) {
        int reversed = 0;
        while (x != 0) {
            int digit = x % 10;
            x /= 10;
            if (reversed > Integer.MAX_VALUE / 10 || (reversed == Integer.MAX_VALUE / 10 && digit > 7)) return 0;
            if (reversed < Integer.MIN_VALUE / 10 || (reversed == Integer.MIN_VALUE / 10 && digit < -8)) return 0;
            reversed = reversed * 10 + digit;
        }
        return reversed;       
    }
}
```

## Step by step algorithm

1. **Initialize a boolean variable to track negativity**:
    ```python
    is_negative = False
    ```
    - We initialize a boolean variable `is_negative` to keep track of whether the input integer `x` is negative.

2. **Check if the input number `x` is negative**:
    ```python
    if x < 0:
        is_negative = True
        x *= -1
    ```
    - If the input integer `x` is negative, we set `is_negative` to `True` and make `x` positive by multiplying it by -1.

3. **Reverse the digits of the integer**:
    ```python
    res = 0
    while x > 0:
        res = (res * 10) + (x % 10)
        x //= 10
    ```
    - We initialize a variable `res` to store the reversed integer.
    - Inside the `while` loop, we repeatedly extract the last digit of `x` using the modulo operator `%`, add it to the current value of `res` multiplied by 10, and then update `x` by removing its last digit using integer division `//`.

4. **Check for integer overflow**:
    ```python
    if res > 2 ** 31 - 1:
        return 0
    ```
    - We check if the reversed integer `res` exceeds the range of a 32-bit signed integer. If it does, we return 0 to indicate integer overflow.

5. **Return the reversed integer**:
    ```python
    return res * -1 if is_negative else res
    ```
    - If the original input integer `x` was negative, we return the reversed integer with a negative sign. Otherwise, we return the reversed integer as is.

The code efficiently reverses the digits of the given integer while handling negative numbers and checking for integer overflow. It demonstrates a concise approach to solve the problem.

---

# Solution 3

To aovid 64 bit integer, let me modify solution 2. We use almost the same logic. Just we check the current `res` before we create the next digit with `res`.

```python []
class Solution:
    def reverse(self, x: int) -> int:
        is_negative = False
        if x < 0:
            is_negative = True
            x *= -1

        res = 0
        while x > 0:
            digit = x % 10
            x //= 10
            if (res > (2 ** 31 - 1) // 10) or (res == (2 ** 31 - 1) // 10 and digit > 7):
                return 0
            res = (res * 10) + digit

        return -res if is_negative else res
                
```
```javascript []
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        x = -x;
    }

    let res = 0;
    while (x > 0) {
        let digit = x % 10;
        x = Math.floor(x / 10);
        if (res > Math.floor((2 ** 31 - 1) / 10) || (res === Math.floor((2 ** 31 - 1) / 10) && digit > 7)) {
            return 0;
        }
        res = (res * 10) + digit;
    }

    return isNegative ? -res : res;    
};
```
```java []
class Solution {
    public int reverse(int x) {
        boolean isNegative = false;
        if (x < 0) {
            isNegative = true;
            x = -x;
        }

        int res = 0;
        while (x > 0) {
            int digit = x % 10;
            x /= 10;
            if (res > (Integer.MAX_VALUE - digit) / 10) {
                return 0;
            }
            res = (res * 10) + digit;
        }

        return isNegative ? -res : res;        
    }
}
```

---


Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ


\u2B50\uFE0F Related Question - Palindrome Number #9

https://youtu.be/CijisxopxqM