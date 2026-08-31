# [C++] Top Down DP (Memoization) with explanation

**Author:** vipbaswan
**Votes:** 30
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/898932/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/898932/)

---

The problem looked like a typical 2-D DP problem to me.
Suppose we want to solve the problem for `n` points and `k` line segments. Then, we can break it into following subproblems:
1. Don't choose the current point as the end point (i.e Don't make a line segment). Then we are left with `n-1` points and `k` segments.
2. Choose the current point as the left-end of the line segment (i.e We are going to construct a line segment). Now, we have multiple choices for the length of the current line segment (because left-end point is fixed, we can change right-end point to get different length segments).
	So, now we have to solve the following subproblems:
	`n-1` points and `k-1` segments
	`n-2` points and `k-1` segments
	`n-3` points and `k-1` segments 
	....
	`2` points and `k-1` segments
	
The initial soultion I implemented did the part (2) using a for loop. This solution would pass only 62/68 test cases.
Now, we can optimize it further by observing that there is lot of repetitive work being done in the for-loop for (2). 
Take this example: 
[*(n,k) means solution of n points and k segments*] 
(6,3) reduces to (5,2) + (4,2) + (3,2) + (2,2). [This is only step 2]
(5,3) reduces to (4,2) + (3,2) + (2,2). [Again, this is only step 2]

So, now optimizing the for-loop is just another DP problem (a rather simple one)!

Here's the implementation which runs in 188ms and passes all test cases.

```
class Solution {
public:
    int MOD = 1e9+7;
    int sumDyp(int n, int k, vector<vector<int>> &dp, vector<vector<int>> &sumDp)
    {
        if(n < 2)
            return 0;
        
        if(sumDp[n][k] != -1)
            return sumDp[n][k];
        
        sumDp[n][k] = ((sumDyp(n-1, k, dp, sumDp)%MOD) + (dyp(n, k, dp, sumDp)%MOD))%MOD;
        return sumDp[n][k];
    }
        
    int dyp(int n, int k, vector<vector<int>> &dp, vector<vector<int>> &sumDp)
    {
        if(n < 2)
            return 0;
        
        if(dp[n][k] != -1)
            return dp[n][k];
        
        if(k == 1)
        {
            dp[n][k] = ((((n-1)%MOD) * (n%MOD))%MOD)/2;
            return dp[n][k];
        }
        
        
        int ans1 = dyp(n-1, k, dp, sumDp);
        int ans2 = sumDyp(n-1, k-1, dp, sumDp);
        
        int ans = ((ans1%MOD) + (ans2%MOD))%MOD;
        dp[n][k] = ans;
        return ans;
    }
    
    int numberOfSets(int n, int k) 
    {
        vector<vector<int>> dp(n+1, vector<int>(k+1, -1));
        vector<vector<int>> sumDp(n+1, vector<int>(k+1, -1));
        return dyp(n, k, dp, sumDp);
    }
};
```