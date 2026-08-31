# Easy Step-Step Video Solution 🔥 || DP + Memo 🔥 || 0/1 Knapsack 🔥

**Author:** ayushnemmaniwar12
**Votes:** 8
**Link:** [https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4218743/](https://leetcode.com/problems/length-of-the-longest-subsequence-that-sums-to-target/solutions/4218743/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to think from 0/1 knapsack **take & not take**. By observing the constraints we can come up with Dynamic Programming Solution

# ***Detailed and easy Video Solution***

https://youtu.be/dyeV3pVzioE

# Approach
<!-- Describe your approach to solving the problem. -->
The code defines a class, "Solution," which computes the length of the longest subsequence of an integer array "v" with a sum less than or equal to a target value "t." It uses dynamic programming with memoization to recursively calculate the length of the longest subsequence. The "solve" function handles the recursive calculations, while "lengthOfLongestSubsequence" initializes the memoization table and returns the computed result. If no valid subsequence is found, it returns -1. The code can be converted from C++ to Java and Python while maintaining the same functionality.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)

```C++ []
class Solution {
public:
    int dp[1001][1001];
    int solve(int i,vector<int>&v,int t)
    {   
        if(t==0)
            return 0;
        if(t<0 || i>=v.size())
            return INT_MIN;
        if(dp[i][t]!=-1)
            return dp[i][t];
        int a=1+solve(i+1,v,t-v[i]);
        int b=solve(i+1,v,t);
        return dp[i][t]=max(a,b);
    }
    int lengthOfLongestSubsequence(vector<int>& v, int t) {
        int n=v.size();
        memset(dp,-1,sizeof(dp));
        int ans=solve(0,v,t);
        if(ans<=0)
            return -1;
        return ans;
    }
};
```
```python []
class Solution:
    def __init__(self):
        self.dp = []

    def solve(self, i, v, t):
        if t == 0:
            return 0
        if t < 0 or i >= len(v):
            return float('-inf')
        if self.dp[i][t] != -1:
            return self.dp[i][t]
        a = 1 + self.solve(i + 1, v, t - v[i])
        b = self.solve(i + 1, v, t)
        self.dp[i][t] = max(a, b)
        return self.dp[i][t]

    def lengthOfLongestSubsequence(self, v, t):
        n = len(v)
        self.dp = [[-1] * (t + 1) for _ in range(n + 1)]
        ans = self.solve(0, v, t)
        if ans <= 0:
            return -1
        return ans
```
```java []
import java.util.Arrays;

class Solution {
    int[][] dp;

    public int solve(int i, int[] v, int t) {
        if (t == 0)
            return 0;
        if (t < 0 || i >= v.length)
            return Integer.MIN_VALUE;
        if (dp[i][t] != -1)
            return dp[i][t];
        int a = 1 + solve(i + 1, v, t - v[i]);
        int b = solve(i + 1, v, t);
        return dp[i][t] = Math.max(a, b);
    }

    public int lengthOfLongestSubsequence(int[] v, int t) {
        int n = v.length;
        dp = new int[n + 1][t + 1];
        for (int[] row : dp)
            Arrays.fill(row, -1);
        int ans = solve(0, v, t);
        if (ans <= 0)
            return -1;
        return ans;
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
*It Motivates me to record more videos*

*Thank you* \uD83D\uDE00