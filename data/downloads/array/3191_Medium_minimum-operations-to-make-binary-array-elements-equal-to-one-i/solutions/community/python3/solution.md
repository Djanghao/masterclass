# ✅Simple and Clear Python3 Code✅

**Author:** moazmar
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5411509/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i/solutions/5411509/)

---


# Intuition
To make all elements of the list `nums` equal to 1, flip segments of three consecutive elements starting from the left whenever we encounter a 0.

# Approach
1. Iterate through `nums` up to the third last element.
2. Whenever a 0 is encountered, flip it and the next two elements, and count this operation.
3. After processing, check if the last two elements are both 1. If so, return the operation count; otherwise, return -1.

# Complexity
- Time complexity: $$O(n)$$, where `n` is the length of `nums`, because we iterate through the list once.
- Space complexity: $$O(1)$$, as we only use a constant amount of extra space.

# Code
```
from typing import List

class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        res = 0
        
        for i in range(n - 2):
            if nums[i] == 0:
                res += 1
                nums[i] = 1
                nums[i+1] = 1 - nums[i+1]
                nums[i+2] = 1 - nums[i+2]
        
        if nums[-1] == 1 and nums[-2] == 1:
            return res
        else:
            return -1

```