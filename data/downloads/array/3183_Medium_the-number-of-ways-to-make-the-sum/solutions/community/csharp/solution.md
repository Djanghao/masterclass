# Easy to understand dp solution

**Author:** VinithaNair
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/solutions/6096968/](https://leetcode.com/problems/the-number-of-ways-to-make-the-sum/solutions/6096968/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Top down , simple to understand

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```csharp []
public class Solution {
    public int NumberOfWays(int n) {
        int[] coins = new int[]{1,2,6};
        int[] dp =new int[n+1];
        dp[0]=1;
        if(n>=4)
        {
            dp[4]=1;
        }
        if(n>=8)
        {
            dp[8]=1;
        }
        int mod=1000000007;
        

        for(int i=0;i<coins.Length;i++)
        {
            for(int j=1;j<=n;j++)
            {
                if(coins[i]<=j)
                {
                    dp[j]+=dp[j-coins[i]]%mod;
                }
            }
        }
        return dp[n]%mod;
        
    }
}
```