# Bit Manipulation || Get sum(j | k) in O(log M) time

**Author:** zsq007
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sized-array/solutions/6020893/](https://leetcode.com/problems/maximum-sized-array/solutions/6020893/)

---

# Intuition
1. Trivial parts: binary search on `range(s)`, extract `sum(i) == n * (n-1) // 2`.
2. Key part: compute `sum(j | k)` efficiently: For each bit, count pairs `(j,k)` where that bit is set, and sum them up.

# Approach

- For each bit position, calculate `cnt`, the count of numbers from `0` to `n-1` with that bit set.
- For each bit, the count of `(j | k)` pairs with that bit set is `n**2 - (n - cnt)**2`.
- Multiply by `1 << bit` (the bit\u2019s value) and add to the total sum.

# Complexity
- Time complexity: $O(\\log^2 M)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxSizedArray(self, s: int) -> int:
        def check(n: int) -> int:
            res = 0
            for bit in range(n.bit_length()):
                cnt = n >> bit+1 << bit
                if n & 1<<bit:
                    cnt += n & (1<<bit) - 1
                res += (n**2 - (n-cnt)**2) << bit
            res *= n * (n-1) // 2
            return res
        
        return bisect_right(range(s+1), s, key=check)-1 if s else 1
```