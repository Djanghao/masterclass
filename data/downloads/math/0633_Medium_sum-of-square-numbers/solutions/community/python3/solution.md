# 💹2 Easy Approaches 🔰📊 || Beats 70% || 🚀 Efficient Sum of Squares Check for Integer `c`.

**Author:** laggerk
**Votes:** 110
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5324311/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5324311/)

---

This question is extension of [Square root](https://leetcode.com/problems/sqrtx/description/) and [2 sum](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/).


# Intuition:
#### The problem asks us to determine if a given number `c` can be expressed as the sum of two squares, i.e., `a^2 + b^2 = c`.
#### An efficient way to solve this problem is to use the two-pointer technique. First, we need to find the integer square root of `c`.
#### Then, using two pointers, we can check if the sum of the squares of the two pointers equals `c`.

# Approach 1:
1. Iterate through all possible values of `a` from 0 to the integer square root of `c`.
2. For each value of `a`, compute `b` as the square root of `c - a^2`.
3. Check if `b` is an integer.
   - If `b` is an integer, return true.
   - If no such pair `(a, b)` is found after the loop, return false.

# Complexity:
- Time complexity: 
  The time complexity is O(\u221Ac) because we iterate from 0 to the integer square root of `c` and perform constant-time operations within the loop.
- Space complexity: 
  The space complexity is O(1) as we only use a constant amount of extra space.

```Java []
class Solution {
    public boolean judgeSquareSum(int c) {
        for (long a = 0; a * a <= c; a++) {   // Iterate through all possible values of `a`
            double b = Math.sqrt(c - a * a);  // Compute `b` as the square root of `c - a^2`
            if (b == (int)b) {                 // Check if `b` is an integer
                return true;                   // If `b` is an integer, return true
            }
        }
        return false;                          // If no such pair `(a, b)` is found, return false
    }
}
```
```python []
from math import sqrt

class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        for a in range(int(sqrt(c)) + 1):  # Iterate through all possible values of `a`
            b = sqrt(c - a * a)  # Compute `b` as the square root of `c - a^2`
            if b == int(b):  # Check if `b` is an integer
                return True  # If `b` is an integer, return true
        return False  # If no such pair `(a, b)` is found, return false
```
```C++ []
class Solution {
public:
    bool judgeSquareSum(int c) {
        for (long a = 0; a * a <= c; a++) {  // Iterate through all possible values of `a`
            double b = sqrt(c - a * a);      // Compute `b` as the square root of `c - a^2`
            if (b == (int)b) {                // Check if `b` is an integer
                return true;                  // If `b` is an integer, return true
            }
        }
        return false;                         // If no such pair `(a, b)` is found, return false
    }
};
```




# Approach 2:
1. Find the integer square root of `c`.
2. Use two pointers, one starting from 0 and the other from the integer square root of `c`.
3. Calculate the sum of the squares of the two pointers.
   - If the sum equals `c`, return true.
   - If the sum is greater than `c`, move the right pointer one step left.
   - If the sum is less than `c`, move the left pointer one step right.
4. Continue this process until the two pointers meet.
5. If no such pair is found, return false.

# Complexity:
- Time complexity: 
  The time complexity is O(\u221Ac) because we iterate from 0 to the integer square root of `c`.
- Space complexity: 
  The space complexity is O(1) as we only use a constant amount of extra space.

Using In built methods to calculate the square root in c++ and python,
Refer JAVA code to see how to find the square root(integer) of a number.


```JAVA []
class Solution {
    public boolean judgeSquareSum(int c) {
        long root = 0;  // Initialize variable to store the largest possible root
        long l = 1;     // Left pointer starts at 1
        long r = c;     // Right pointer starts at c
        
        // Binary search to find the integer square root of c
        while (l <= r) {
            long mid = l + (r - l) / 2;  // Calculate mid point
            long prod = mid * mid;       // Calculate square of mid
            if (prod == c) return true;  // If square of mid equals c, return true
            if (prod > c) {
                r = mid - 1;             // If square of mid is greater than c, move right pointer left
            } else {
                root = mid;              // Update root to mid
                l = mid + 1;             // Move left pointer right
            }
        }
        
        l = 0;           // Reset left pointer to 0
        r = root;        // Set right pointer to the found root
        
        // Two-pointer approach to find if two squares sum to c
        while (l <= r) {
            long prod = l * l + r * r;  // Calculate sum of squares of the two pointers
            if (prod == c) return true; // If sum equals c, return true
            if (prod > c) {
                r--;                    // If sum is greater than c, move right pointer left
            } else {
                l++;                    // If sum is less than c, move left pointer right
            }
        }
        
        return false;  // If no such pair is found, return false
    }
}
```
```Python []
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        left = 0  # Left pointer starts at 0
        right = int(c**0.5)  # Right pointer starts at the integer square root of c
        
        while left <= right:
            curr_sum = left * left + right * right  # Calculate sum of squares of the two pointers
            if curr_sum == c:
                return True  # If sum equals c, return true
            elif curr_sum < c:
                left += 1  # If sum is less than c, move left pointer right
            else:
                right -= 1  # If sum is greater than c, move right pointer left
        
        return False  # If no such pair is found, return false
```
```C++ []
#include <cmath>  // For sqrt

class Solution {
public:
    bool judgeSquareSum(int c) {
        long left = 0;  // Left pointer starts at 0
        long right = static_cast<long>(sqrt(c));  // Right pointer starts at the integer square root of c
        
        while (left <= right) {
            long curr_sum = left * left + right * right;  // Calculate sum of squares of the two pointers
            if (curr_sum == c) return true;  // If sum equals c, return true
            if (curr_sum < c) {
                left++;  // If sum is less than c, move left pointer right
            } else {
                right--;  // If sum is greater than c, move right pointer left
            }
        }
        
        return false;  // If no such pair is found, return false
    }
};
```

Please upvote for Anya chan if you read it till here !!!
Sayonara!!

![image.png](./images/0.png)
