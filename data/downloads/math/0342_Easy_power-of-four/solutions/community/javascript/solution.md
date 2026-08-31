# 【Video】Give me 3 minutes - without bitwise operations - Python, JavaScript, Java, C++

**Author:** niits
**Votes:** 37
**Link:** [https://leetcode.com/problems/power-of-four/solutions/4197554/](https://leetcode.com/problems/power-of-four/solutions/4197554/)

---

# Intuition
Use math.log function

---

# Solution Video

https://youtu.be/dy_GA7sG22g

\u25A0 Timeline of the video
`0:05` Easy way to solve a constraint
`0:03` Example code with Bitwise Operations
`0:19` Solution with Build-in function
`1:23` Coding with Build-in function
`1:50` Time Complexity and Space Complexity with Build-in function
`2:15` Coding without Build-in function
`3:08` Time Complexity and Space Complexity without Build-in function

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 2,778
My initial goal is 10,000
Thank you for your support!

---

# Approach

### How we think about a solution

I think many posts use bitwise operations like this.

```
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0 and (n & 0x55555555) != 0
```

This is $$O(1)$$ time, but in real interviews, I've never seen someone who solved questions with bitwise operations, so I'll show you another way.


---

\u2B50\uFE0F Points

Use `math.log` function

---

I think each programming language has `math.log` function. We use it. For example, Python has `math.log(n, 4)` function. The `math.log(n, 4)` function in Python calculates the logarithm of `n to the base 4`. 

For example,

```
math.log(16, 4) == 2.0
math.log(15, 4) == 1.9534452978042594
```
because `4` raised to the power of `2` is `16`. In Python, we will get the answer with float(`2.0`). Simply, if the decimal part is `0`, we can return `True`, if not, return `False`. We can use `is_integer()` function to check it.


---



- Details of `is_integer()` ?

`is_integer` is a method in Python for `float` objects (floating-point numbers) that is used to check whether the floating-point number is an integer. This method determines if a floating-point number consists of an integer part and a decimal part.

Specifically, the `is_integer` method checks if the floating-point number meets the following conditions:

1. The floating-point number itself is accurately represented as an integer.
2. The decimal part of the floating-point number is `0.0` (i.e., all decimal parts are zero).

For example, consider the following code:

```python
x = 10.0
y = 10.5
```

`x` is an integer and has a decimal part of `0.0`, so `x.is_integer()` will return `True`. On the other hand, `y` is not an integer, and its decimal part is `0.5`, so `y.is_integer()` will return `False`.

This method can be useful in scenarios where you need to ensure that a floating-point number is an integer before performing certain operations.


---



Let's see a real algorithm!

### Algorithm Overview:
This algorithm checks whether an input integer `n` is a power of 4.

### Detailed Explanation:
1. Check if `n` is less than or equal to 0.
    - If `n` is less than or equal to 0, return `False` because numbers less than or equal to 0 cannot be powers of 4.

2. Calculate the logarithm of `n` to the base 4 using `math.log(n, 4)`.
    - The `math.log(n, 4)` function computes the logarithm of `n` to the base 4. This logarithm represents the exponent to which 4 must be raised to obtain `n`. For example, `math.log(16, 4)` would return 2 because 4^2 = 16.

3. Check if the result from step 2 is an integer using `.is_integer()`.
    - The `.is_integer()` method checks whether the result of `math.log(n, 4)` is a whole number (integer). If it is, this means that `n` is a power of 4.
    - If the result is an integer, return `True`; otherwise, return `False`.

In summary, the algorithm first checks if the input is a non-positive integer (returning `False` if it is), then it calculates the logarithm of the input to the base 4 and checks if the result is an integer. If the result is an integer, the function returns `True`, indicating that the input is a power of 4; otherwise, it returns `False`.

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

```python []
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False
            
        return math.log(n, 4).is_integer()
```
```javascript []
var isPowerOfFour = function(n) {
    if (n <= 0) {
        return false;
    }
    return Number.isInteger(Math.log(n) / Math.log(4));    
};
```
```java []
class Solution {
    public boolean isPowerOfFour(int n) {
        if (n <= 0) {
            return false;
        }
        return Math.log(n) / Math.log(4) % 1 == 0;        
    }
}
```
```C++ []
class Solution {
public:
    bool isPowerOfFour(int n) {
        if (n <= 0) {
            return false;
        }
        return fmod(log(n) / log(4), 1.0) == 0.0;        
    }
};
```

# Bonus Code
If you must write a solution code without build-in function in real interviews(ask interviewers), this is one of examples.

```python []
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False
        if n == 1:
            return True

        while n > 1:
            if n % 4 != 0:
                return False
            n //= 4

        return True        
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4201364/video-give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

video
https://youtu.be/0fnMZvFM4p8

\u25A0 Timeline of the video
`0:05` Two difficulties
`0:29` How can you keep max value at a single level? (the first difficulty)
`1:10` Points of the first difficulty
`1:32` How can you keep nodes at the next down level (the second difficulty)
`2:09` Demonstrate how it works
`6:23` Points of the second difficulty
`6:45` What if we use normal array instead of deque
`7:35` Coding with BFS
`9:31` Time Complexity and Space Complexity
`10:25` Explain DFS solution briefly

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/maximum-score-of-a-good-subarray/solutions/4196248/video-give-me-10-minutes-how-we-think-about-a-solution-python-javascript-java-c/

video
https://youtu.be/ZiO47ctvu6w

\u25A0 Timeline of the video
`0:05` Easy way to solve a constraint
`2:04` How we can move i and j pointers
`3:59` candidates for minimum number and max score
`4:29` Demonstrate how it works
`8:25` Coding
`11:04` Time Complexity and Space Complexity

