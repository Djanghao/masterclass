# Python one-liner with Counter and max with default

**Author:** trpaslik
**Votes:** 5
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/2932768/](https://leetcode.com/problems/largest-unique-number/solutions/2932768/)

---

# Intuition
Use `Counter()`

# Approach
Build `Counter()` and iterate over `(val, count)` pairs.
Take only vals for `count == 1`.
Get the `max()` for the values with default=-1 if no vals are unique.

Please up-vote if you find it somehow useful. Thanks!

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        return max((v for v, c in Counter(nums).items() if c == 1), default=-1)
```