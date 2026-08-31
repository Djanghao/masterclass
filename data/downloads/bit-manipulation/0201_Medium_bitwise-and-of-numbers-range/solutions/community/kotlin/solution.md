# [Kotlin] Optimized Range Bitwise AND Algorithm

**Author:** teogor
**Votes:** 7
**Link:** [https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/5050648/](https://leetcode.com/problems/bitwise-and-of-numbers-range/solutions/5050648/)

---

# Intuition
We are required to find the bitwise AND of all numbers in the range `[left, right]`. If there are any bits that differ between `left` and `right`, the AND of these bits will be 0. We aim to find the common prefix of the binary representations of `left` and `right`.

# Approach
- Initialize two variables `n` and `m` with `left` and `right` respectively.
- We'll iterate while `n` is less than `m`.
  - For each iteration, we right shift `n` and `m` by 1 bit to check for common prefixes.
  - We also keep track of the number of right shifts in `shifts`.
- After the loop, we left shift `n` by `shifts` bits to get the common prefix of `left` and `right`.
- The result will be the bitwise AND of `left` and `right` with the common prefix.

# Complexity
- Time complexity: O(log N), where N is the maximum of `left` and `right`. The number of iterations in the while loop is determined by the number of bits in the binary representation of `N`.
- Space complexity: O(1), as we are using constant extra space.

# Code
```
class Solution {
    fun rangeBitwiseAnd(left: Int, right: Int): Int {
        var n = left
        var m = right

        var shifts = 0
        while (n < m) {
            n = n shr 1
            m = m shr 1
            shifts++
        }

        return n shl shifts
    }
}

```

This solution efficiently finds the bitwise AND of all numbers in the range `[left, right]`.