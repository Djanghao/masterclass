# Beats 84% | Easy To Understand 🚀🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 6
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4197578/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/4197578/)

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
class Solution {
public:

    // TC - O(Exponential) and SC - O(N)
    int getMoneyAmountRec(int start, int end)
    {
        if(start >= end)
            return 0;
        
        int ans = INT_MAX;

        for(int i = start; i <= end; i++)
        {
            ans = min(ans,i + max(getMoneyAmountRec(start,i-1),getMoneyAmountRec(i+1,end)));
        }

        return ans;
    }

    // TC - O(N*3) and SC - O(N*2)
    int getMoneyAmountMem(int start, int end, vector<vector<int>>& dp)
    {
        if(start >= end)
            return 0;
        if(dp[start][end] != -1)
            return dp[start][end];
        
        int ans = INT_MAX;

        for(int i = start; i <= end; i++)
        {
            ans = min(ans,i + max(getMoneyAmountMem(start,i-1,dp),getMoneyAmountMem(i+1,end,dp)));
        }

        dp[start][end] = ans;
        return dp[start][end];
    }

    // TC - O(N*3) and SC - O(N*2)
    int getMoneyAmountTab(int n)
    {
        vector<vector<int>> dp(n+2,vector<int>(n+2,0));

        for(int start = n; start >= 1; start--)
        {
            for(int end = 1; end <= n; end++)
            {
                if(start >= end)
                    continue;
                
                int ans = INT_MAX;

                for(int i = start; i <= end; i++)
                {
                    ans = min(ans,i + max(dp[start][i-1],dp[i+1][end]));
                }

                dp[start][end] = ans;
            }
        }
        return dp[1][n];
    }

    int getMoneyAmount(int n) {
        // 1. Recursion
        // return getMoneyAmountRec(1,n);

        // 2. Top Down Approach
        // vector<vector<int>> dp(n+1,vector<int>(n+1,-1));
        // return getMoneyAmountMem(1,n,dp);

        // 3. Bottom Up Approach
        return getMoneyAmountTab(n);
    }
};
```