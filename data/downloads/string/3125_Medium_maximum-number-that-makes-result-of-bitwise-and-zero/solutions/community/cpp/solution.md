# C++ | Consider the Most Significant Bit

**Author:** codeworm96
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5081504/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5081504/)

---

# Intuition
Let us consider the most significant bit in `n` (**1**x...x). To make the final result be 0, we must have some number that has a 0 on that bit. The maximum one (x <= n) is `mask - 1` (**0**1...1).

We do not need to worry about other bits, because **0**1...1 < **1**0...0 <= **1**x...x So that other bits in the final result are already cleared by **1**0...0

# Complexity
- Time complexity: $$O(1)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
public:
    long long maxNumber(long long n) {
        long long mask = 0x4000000000000000LL;
        while ((mask & n) == 0) {
            mask >>= 1;
        }
        return mask - 1;
    }
};
```