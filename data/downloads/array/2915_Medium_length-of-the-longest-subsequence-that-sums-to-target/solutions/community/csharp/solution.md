# Classic dp solution. Beats 100%. 114 ms

**Author:** polondanto
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/5264001/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/5264001/)

---

# Intuition
Initially, I thought that we need to use as many numbers as possible to get the coveted target number. 
That's how it turned out.

# Approach
Try to take the largest number of elements without exceeding the target.

# Complexity
- Time complexity:O(N*target)

- Space complexity:O(target)

# Code
```
public class Solution {
    public int LengthOfLongestSubsequence(IList<int> nums, int target) {
        int[]dp=new int[target+1];
        Array.Fill(dp,-1);
        
        //setupping our dp array and starting from first element
        
        dp[0]=0;
        int n=nums.Count();

        for (int i=0;i<n;i++)
        {
            for (int j=target-nums[i];j>=0;j--)
            {
                if (dp[j]==-1)continue;   
                dp[j+nums[i]]=Math.Max(dp[j+nums[i]],dp[j]+1);
                //finding maximum subarray on each position
                // till we check all numbers in nums
            }
            

        }
        return dp[target];
        
    }
}
```