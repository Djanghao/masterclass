# DP concept used here..... Fast and accurate to the expected output

**Author:** Success_Code
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5244211/](https://leetcode.com/problems/find-subarray-with-bitwise-or-closest-to-k/solutions/5244211/)

---



# Code
```
from functools import cache

class Solution:
    def minimumDifference(self, nums: List[int], k: int) -> int:
        n = len(nums)
        
        # Recursive funtion with the current index and past bitwise AND value 
        @cache
        def solve(idx, curr_and):
            # If index reached at the end simply pass inf
            if idx >= n:
                return inf
            
            # No need to check the other case since if we include curr_and it will always give us 0 value
            if curr_and & nums[idx] == 0:
                return min(abs(0-k), abs(nums[idx]-k), solve(idx+1, nums[idx]))
            
            return min(abs((curr_and & nums[idx]) - k), abs(nums[idx]-k), solve(idx+1, nums[idx]), solve(idx+1, curr_and&nums[idx]))
            
        return solve(0, nums[0])
```