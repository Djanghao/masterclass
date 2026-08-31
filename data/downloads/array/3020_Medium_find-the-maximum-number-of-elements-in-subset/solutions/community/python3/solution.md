# 🔥🔥🔥 Python Simple Solution 🔥🔥🔥 | O(n logn) Time, O(n) Space

**Author:** hululu0405
**Votes:** 24
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4636714/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4636714/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sorted and find if the `num^2` is existing and number of `num` more than 1.
There is a possible answer that all of the number are `1` in the subset.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n\\log{n})$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        d = {}
        for num in sorted(nums)[::-1]:
            if num ** 2 in d and num in d and num != 1:
                d[num] = d[num ** 2] + 2
            else:
                d[num] = 1
        ones = nums.count(1)
        return max(max(d.values()), ones - (ones % 2 == 0))
```

# Note
Thanks for [@rajsinghsudhanshu930](https://leetcode.com/rajsinghsudhanshu930/) sharing his/her O(n) solution.
Here is the [link](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4646103/python-o-n-time-and-o-n-space-similar-to-128-longest-increasing-sequence/).