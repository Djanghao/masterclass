# ✅[c++] || prefix-sum + DP

**Author:** xor09
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/3488017/](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/solutions/3488017/)

---

```
#define ll long long
class Solution {
public:
    
    ll dp[20002][4];
    ll solve(vector<int>& prefix, int k, int i, int t){
        int n = prefix.size();
        if(i>=n){
            if(t==0) return 0;
            return INT_MIN;
        }
        if(t<0) return INT_MIN;
        
        if(dp[i][t] != -1) return dp[i][t];
        
        ll inc = prefix[i] + solve(prefix, k, i+k, t-1);
        ll exc = solve(prefix, k, i+1, t);
        
        return dp[i][t] = max(inc, exc);
    }
    
    
    void dfs(vector<int>& prefix, int k, int i, int t, vector<int>& res){
        int n = prefix.size();
        if(i>=n || t==0){
            return;
        }
        
        ll inc = prefix[i] + solve(prefix, k, i+k, t-1);
        ll exc = solve(prefix, k, i+1, t);
        
        if(inc>=exc){
            res.push_back(i);
            dfs(prefix, k, i+k, t-1, res);
        }else{
            dfs(prefix, k, i+1, t, res);
        }
    }
    
    
    vector<int> maxSumOfThreeSubarrays(vector<int>& nums, int k) {
        vector<int> prefix;
        ll i=0, n=nums.size(), j=0, sum=0;
        for( ; i<k; ++i){
            sum+=nums[i];
        }
        prefix.push_back(sum);
        
        for( ; i<n; ++i, ++j){
            sum += nums[i];
            sum -= nums[j];
            prefix.push_back(sum);
        }
        
        memset(dp, -1, sizeof(dp));
        solve(prefix, k, 0, 3);
        
        vector<int> res;
        dfs(prefix, k, 0, 3, res);
        return res;
    }
};
```
please **UPVOTE**