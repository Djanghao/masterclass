# C++ | DP | recursive easy approach

**Author:** armangupta48
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-sum-of-averages/solutions/1160161/](https://leetcode.com/problems/largest-sum-of-averages/solutions/1160161/)

---

```
class Solution {
public:
    vector < vector <double> > dp;
    double largestSumOfAverages(vector<int>& A, int K) {
        int n = A.size();
        dp=vector<vector<double>>(n,vector<double>(K+1,-1));
        return helper(A,0,K);      
    }
    double helper(vector<int>& a,int idx,int k)
    {
        if(idx >= a.size()) return 0;
        if(!k) return INT_MIN;
        if(dp[idx][k]!=-1) return dp[idx][k];
        double ans = INT_MIN;
        double sum = 0;
        for(int i = idx;i<a.size();i++)
        {
            sum = sum+a[i];
            ans = max(sum/(i-idx+1) + helper(a,i+1,k-1),ans);
        }
        return dp[idx][k] = ans;
    }
};
```
Queries? Feel free to ask!
Happy Coding : )