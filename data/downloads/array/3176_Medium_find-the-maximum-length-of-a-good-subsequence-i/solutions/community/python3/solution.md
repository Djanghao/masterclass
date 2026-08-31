# Beats !00% 💯|Explained Dp Approach✅

**Author:** viresh_dev
**Votes:** 18
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5280618/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-i/solutions/5280618/)

---

## Here\u2019s a step-by-step breakdown of how to solve this problem using dynamic programming:

- Define the problem with Dynamic Programming (DP):

    - We'll use a DP array dp[i][j] where i is the index in the original array nums and j is the number of allowed different adjacent elements.
    - dp[i][j] will store the maximum length of a subsequence ending at index i with at most j differences between consecutive elements.
- Initialization:

    - dp[i][0] should be initialized to 1 for all i since a subsequence with no allowed differences can only have one element.
- DP Transition:

    - For each element nums[i], look at previous elements nums[l] (where l < i).
    - If nums[l] == nums[i], then dp[i][j] can be extended without using any difference quota.
    - If nums[l] != nums[i], then dp[i][j] can be extended by using one of the allowed differences (j > 0).
- Update DP table:

    - For each i from 0 to n-1, and each j from 0 to k, update dp[i][j] based on the conditions above.
- Extract the result:

    - The maximum value in the dp table will give the length of the longest "good" subsequence.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n^2*k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` python []
class Solution:
    def maximumLength(self, nums: List[int], k: int) -> int:
        n = len(nums)
        if n == 0:
            return 0
    
        # dp[i][j] means the longest subsequence ending at index i with at most j changes
        dp = [[1] * (k + 1) for _ in range(n)]
        
        for i in range(n):
            for j in range(k + 1):
                for l in range(i):
                    if nums[i] == nums[l]:
                        dp[i][j] = max(dp[i][j], dp[l][j] + 1)
                    elif j > 0:
                        dp[i][j] = max(dp[i][j], dp[l][j - 1] + 1)
    
        return max(max(row) for row in dp)
        
```