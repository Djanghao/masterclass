# LINQ, one-line, O(n) with short circuit.

**Author:** deljohnson
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4532919/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4532919/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
public bool HasTrailingZeros(int[] nums)
    => nums.Where(x => (x & 1) == 0).Take(2).Count() == 2;
```