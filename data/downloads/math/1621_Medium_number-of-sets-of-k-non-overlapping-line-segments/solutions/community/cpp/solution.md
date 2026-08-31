# Slow Memoized Approach but Easy and Intuitive

**Author:** ojha1111pk
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/1027613/](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/solutions/1027613/)

---

Lets say we have a state [n, k] where n is no of points and k is no of non-overlapping line segments we want to draw.
dp[n][k]--stores the said answer as above
```
const int m = 1e9 + 7;
class Solution{
    int dp[1111][1111];
public:
    int solver(int n, int k){
        if(k>=n)
            return 0; // if no of points is less than or equal to no of segments
        
        if(k<=0)
            return 1; // if no of segments is 0 (or negative) only 1 way dont draw any segment
        
        if(dp[n][k]!=-1)
            return dp[n][k]; // if already solved
        
        dp[n][k] = solver(n-1, k); // if current poinnt is not chosen in any segment
        
        for(int len=1;len<n;len++)
            dp[n][k] = (dp[n][k] + solver(n-len, k-1))%m; // if 1st segment has length len so remaining points - [n-len, k-1]
        
        return dp[n][k];
    }
    
    int numberOfSets(int n, int k){
        memset(dp, -1, sizeof(dp));
        for(int i=2;i<n;i++)
            dp[i][i-1] = 1;    
        return solver(n, k);
    }
};
```