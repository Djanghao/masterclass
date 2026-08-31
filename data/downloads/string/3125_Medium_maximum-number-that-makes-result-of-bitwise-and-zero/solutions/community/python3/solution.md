# Two exponentiation approaches Implicit and explicit

**Author:** roberluc
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5069625/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5069625/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

The idea is that `n` could be any positive integer and eventually as we go down we will encounter a power of 2, say $2^x$. The value $2^x-1$ when &-ed with $2^x$ will be zero so we stop here. 

Therefore the largest power of 2 less than `n` less 1 is the answer. We can do this two ways. The first way is to explicitly calculate the logarithm base 2 and then explicitly exponentiate and sibtract 1. I call this approach explicit because you need to write all the arithmetic. 

In contrast, provided our computer is base 2 and supports bitwise shifts we can use the implicit exponentiation by operating on the bit level and perform the bitwise operations. I refer to this as the implict approach. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(logn) where n is the size of the integer.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(logn) where n is the number of bits in the integer. 
# Code

Approach 1 explicit exponentiation

from math import floor, log2

```python []
    def maxNumber(self, n: int) -> int:
        return 2 ** floor(log2(n)) - 1
```
``` javascript []
var maxNumber = function(n) {
    return 2**Math.floor(Math.log2(n)) - 1;
};
```


Approach 2 implicit exponentiation

```python []
class Solution:
    def maxNumber(self, n: int) -> int:
        msb = 1
        while n > 1:
            msb <<= 1
            n >>= 1
        return msb - 1
```

Note the implicit version will not work in js because the bitwise
operations are limited to 32 bits. One of the later test cases will fail `n=971417117793`.  So I omit the implicit version for js. 
