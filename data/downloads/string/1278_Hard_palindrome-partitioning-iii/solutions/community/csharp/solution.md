# DP

**Author:** linda2024
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5954881/](https://leetcode.com/problems/palindrome-partitioning-iii/solutions/5954881/)

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
```csharp []
public class Solution {
    public int PalindromePartition(string s, int k) {
        int len = s.Length;
        if(len == k)
            return 0;
          
        int[,] cost = new int[len, len];
        for(int i = len-2; i >= 0; i--)
        {
            for(int j = i+1; j < len; j++)
            {
                cost[i,j] = cost[i+1,j-1] + (s[i] == s[j] ? 0 : 1); // track how many chars should be modified to make sure s[i,j] is palindrome
            }
        }

        int[,] dp = new int[len+1, k+1];
        for(int i = 0; i < len+1; i++)
        {
            for(int j = 0; j < k+1; j++)
            {
                dp[i,j] = len;
            }
        }

        dp[0, 0] = 0;
        for(int i = 1; i <= len; i++)
        {
            for(int j = 1; j <= k; j++)
            {
                for(int pre = 0; pre < i; pre++)
                {
                    dp[i,j] = Math.Min(dp[i,j], dp[pre,j-1]+ cost[pre, i-1]); // update dp with pre costs
                }
            }
        }

        return dp[len, k];
    }
}
```