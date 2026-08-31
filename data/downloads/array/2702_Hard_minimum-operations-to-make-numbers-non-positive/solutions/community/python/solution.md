# Good binary search application | Python

**Author:** wxy0925
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3563119/](https://leetcode.com/problems/minimum-operations-to-make-numbers-non-positive/solutions/3563119/)

---

```
"""
Method: binary search

The ops is equivalent to the following: Let delta = x - y

decrement all numbers by y, and then select a number in the
result and decrement it by delta.

The main logic is encoded in the can_finish fn.

The goal is to find  min k such that can_finish is True.

"""

class Solution:
    def minOperations(self, nums: List[int], x: int, y: int) -> int:
        
        def can_finish(k, x, y):
            delta = x - y
            aux = [item - k * y for item in nums]
            n_ops = 0
            for y in aux:
                if y > 0:
                    n_ops += math.ceil(y / delta)
                    if n_ops > k:
                        return False
            return True
        
        # find min k s.t. can_finish(k) is True
        low, high = 0, math.ceil(max(nums) / y) + 1
        while low < high:
            mid = low + (high - low) // 2
            if can_finish(mid, x, y):
                high = mid
            else:
                low = mid + 1
        return high
            
```