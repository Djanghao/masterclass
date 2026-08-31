# 3D-DP | Beats 100 % ✅ ✅ | All possibilties

**Author:** ram_tanniru
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-sum/solutions/6077815/](https://leetcode.com/problems/minimum-array-sum/solutions/6077815/)

---

# Intuition
The problem involves reducing an array's elements under specific constraints using recursion and memoization to minimize the total sum. Key insights include leveraging operations selectively for optimal reductions.

# Approach
- Use recursion with memoization (3D DP array).
- For each element, consider skipping it, applying `op1`, applying `op2`, or both if conditions allow.
- Compute the minimum sum recursively for all options, storing results to avoid redundant calculations.

# Complexity
- **Time complexity:** $$O(n \\cdot op1 \\cdot op2)$$, where \\(n\\) is the array size.
- **Space complexity:** $$O(n \\cdot op1 \\cdot op2)$$ due to the DP table.

# Code
```python
class Solution:
    def minArraySum(self, nums: List[int], k: int, op1: int, op2: int) -> int:
        from math import ceil, inf
        
        def rec(i=0, w1=op1, w2=op2):
            if i == len(nums):  # Base case
                return 0
            if dp[i][w1][w2] != -1:  # Check memoization
                return dp[i][w1][w2]

            # Skip current element
            skip = nums[i] + rec(i + 1, w1, w2)
            
            # Apply operations
            o1 = o2 = both = inf
            if w1 > 0:
                o1 = ceil(nums[i] / 2) + rec(i + 1, w1 - 1, w2)
            if w2 > 0 and nums[i] >= k:
                o2 = nums[i] - k + rec(i + 1, w1, w2 - 1)
            if w1 > 0 and w2 > 0:
                temp = rec(i + 1, w1 - 1, w2 - 1)
                if nums[i] >= k:
                    both = ceil((nums[i] - k) / 2) + temp
                if ceil(nums[i] / 2) >= k:
                    both = min(both, ceil(nums[i] / 2) - k + temp)

            dp[i][w1][w2] = min(skip, o1, o2, both)  # Store the result
            return dp[i][w1][w2]

        # Initialize DP table
        dp = [[[-1] * (op2 + 1) for _ in range(op1 + 1)] for _ in range(len(nums))]
        return rec()
```