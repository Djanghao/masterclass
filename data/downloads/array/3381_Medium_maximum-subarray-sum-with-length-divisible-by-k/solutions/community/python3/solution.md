# DP in 5 Lines of Python3

**Author:** metaphysicalist
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6124606/](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/solutions/6124606/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is a revision to the classical maximum subarray problem that can be solved by DP in $O(N)$.

# Approach
<!-- Describe your approach to solving the problem. -->
My solution is a revision to the classic [Kadane's algorithm](https://en.wikipedia.org/wiki/Maximum_subarray_problem). At the $i$-th position, the classic Kadane's algorithm can be formulated as follows:

$S_i = x_i + \\max(0, S_{i-1})$ 

In this problem, we need to maximize the sums in $k$-windows. Thus, the best score at the $i$-th positoin can be formulated as follows:

$S_i = \\sum_{i-k+1}^i x_i + \\max(0, S_{i-k})$ 

The calculation of $\\sum_{i-k+1}^i x_i$ can be maintained in $O(1)$ for each step, I am lazy so my solution uses one-line prefix sums. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def maxSubarraySum(self, nums: List[int], k: int) -> int:
        prefix_sums = list(accumulate(nums, initial=0))
        dp = [-inf] * (len(nums)+1)
        for i in range(k, len(nums)+1):
            dp[i] = (prefix_sums[i] - prefix_sums[i-k]) + max(0, dp[i-k])
        return max(dp)
```