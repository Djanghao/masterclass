# Easy Video Solution 🔥 || How to 🤔 in Interview || Sorting + Recursion + Memoization 🔥

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282063/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282063/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dry Run few examples and observe how you can choose max value



# ***Easy Video Explanation***

https://youtu.be/1b2I9kEH4kQ

# Code


```C++ []
class Solution {
public:
    int ans;
    int solve(int i,int n,int r,vector<int>&v,vector<vector<int>>&dp) {
        if(i==n) {
            return r;
        }
        if(dp[i][r]!=-1)
            return dp[i][r];
        int include=r;
        if(v[i]>r) {
            include=solve(i+1,n,r+v[i],v,dp);
        }
        int exclude=solve(i+1,n,r,v,dp);
        return dp[i][r]=max(include,exclude);
    }
    int maxTotalReward(vector<int>& v) {
        sort(v.begin(),v.end());
        int n=v.size();
        vector<vector<int>>dp(2001,vector<int>(4001,-1));
        ans=solve(0,n,0,v,dp);
        return ans;
    }
};
```
```python []
from typing import List

class Solution:
    def solve(self, i: int, n: int, r: int, v: List[int], dp: List[List[int]]) -> int:
        if i == n:
            return r
        if dp[i][r] != -1:
            return dp[i][r]
        include = r
        if v[i] > r:
            include = self.solve(i + 1, n, r + v[i], v, dp)
        exclude = self.solve(i + 1, n, r, v, dp)
        dp[i][r] = max(include, exclude)
        return dp[i][r]

    def maxTotalReward(self, v: List[int]) -> int:
        v.sort()
        n = len(v)
        dp = [[-1] * 4001 for _ in range(2001)]
        return self.solve(0, n, 0, v, dp)

```
```Java []
import java.util.Arrays;

class Solution {
    public int solve(int i, int n, int r, int[] v, int[][] dp) {
        if (i == n) {
            return r;
        }
        if (dp[i][r] != -1) {
            return dp[i][r];
        }
        int include = r;
        if (v[i] > r) {
            include = solve(i + 1, n, r + v[i], v, dp);
        }
        int exclude = solve(i + 1, n, r, v, dp);
        return dp[i][r] = Math.max(include, exclude);
    }

    public int maxTotalReward(int[] v) {
        Arrays.sort(v);
        int n = v.length;
        int[][] dp = new int[2001][4001];
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }
        return solve(0, n, 0, v, dp);
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00