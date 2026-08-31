# c# easy dp

**Author:** rajeshkumar1130
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/5238655/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/5238655/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int FindLength(int[] nums1, int[] nums2) {
        int m = nums1.Length, n = nums2.Length;
        int[,] dp = new int[m+1,n+1];
        int ans = 0;
        for(int i = m-1;i>=0;i--)
        {
            for(int j = n-1;j>=0;j--)
            {
                if(nums1[i]==nums2[j])
                {
                    dp[i,j] = 1+dp[i+1,j+1];
                }
                ans = Math.Max(ans, dp[i,j]);
            }
        }

        return ans;
    }
}
```