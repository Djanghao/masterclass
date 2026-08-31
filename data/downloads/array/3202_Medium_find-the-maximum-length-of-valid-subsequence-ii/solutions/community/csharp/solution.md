# DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5493400/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/solutions/5493400/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n**2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n*k)
# Code
```
public class Solution {
    public int MaximumLength(int[] nums, int k) {
        int res = 0, len = nums.Length;
        if(len == 0)
            return res;
            
        int[][] dp = new int[len][];
        for(int i = 0; i < len; i++)
        {
            dp[i] =  Enumerable.Repeat(1, k).ToArray();
        }

        for(int i = 1; i < len; i++)
        {
            for(int j = 0; j < i; j++)
            {
                int mod = (nums[i] + nums[j]) % k;
                dp[i][mod] = Math.Max(dp[i][mod], 1 + dp[j][mod]);
                res = Math.Max(res, dp[i][mod]);
            }
        }

        return res;
    }
}
```