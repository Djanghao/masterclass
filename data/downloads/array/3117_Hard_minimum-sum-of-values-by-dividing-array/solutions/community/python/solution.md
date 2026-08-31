# Easy✅|| Simple and Beginner friendly🔥|| Python3 ||

**Author:** phanindra06
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5019797/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5019797/)

---



# Code
```
from functools import cache
from typing import List

class Solution:
    def minimumValueSum(self, nums: List[int], and_values: List[int]) -> int:
        # Get the lengths of the input lists
        n = len(nums)
        m = len(and_values)
        
        # Define a recursive function to calculate the minimum sum
        @cache
        def calculate_min_sum(mask, j, k): 
            """Return min sum at nums[j] and and_values[k] with given mask."""
            # Base case: if both lists are exhausted
            if k == m and j == n:
                return 0
            # Base case: if either list is exhausted
            if k == m or j == n:
                return float('inf')
            
            # Update the mask with bitwise AND operation
            mask &= nums[j]
            
            # If the updated mask is less than the corresponding and_value, return infinity
            if mask < and_values[k]:
                return float('inf')
            
            # If the updated mask equals the corresponding and_value
            if mask == and_values[k]:
                # Return the minimum of two cases:
                # 1. Increment j to move to the next element in nums
                # 2. Add nums[j] to the sum and increment both j and k
                return min(calculate_min_sum(mask, j+1, k), nums[j] + calculate_min_sum((1<<32)-1, j+1, k+1))
            
            # If the updated mask is greater than the corresponding and_value
            if mask > and_values[k]:
                # Increment j to move to the next element in nums
                return calculate_min_sum(mask, j+1, k)
            
        # Initialize the calculation with all bits set to 1 in the mask
        ans = calculate_min_sum((1<<32)-1, 0, 0)
        
        # Return the result if it's finite, otherwise return -1
        return ans if ans < float('inf') else -1

```
\uD83D\uDC7D
