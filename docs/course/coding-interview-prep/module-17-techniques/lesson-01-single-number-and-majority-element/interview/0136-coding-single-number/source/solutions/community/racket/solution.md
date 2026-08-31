# Simple Racket solution

**Author:** lgeorgiev
**Votes:** 2
**Link:** [https://leetcode.com/problems/single-number/solutions/3031588/](https://leetcode.com/problems/single-number/solutions/3031588/)

---

# Intuition
XOR has three really nice properties.
1) XOR is commutative (x XOR y == y XOR x).
2) x XOR x is 0 for every x
3) 0 XOR x is x for every x

So we can rearange all numbers like so:
a, a, b, b, c, c, ..., y, y, z
From (1) we know the result is the same.
After applying property (2) n/2 times we get:
0, z
And from (3) we know we get:
z
Which is the searched number.

*Note: this will also find the only number appearing odd number of times in the array (must be only one)*

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N) because in functional programming we generate new input instead of modifying it

# Like and follow me in LinkedIn if I was helpful
#### https://www.linkedin.com/in/lyuben-georgiev/

# Code
```
(define (single-number nums)
  (apply bitwise-xor nums)
  )
```