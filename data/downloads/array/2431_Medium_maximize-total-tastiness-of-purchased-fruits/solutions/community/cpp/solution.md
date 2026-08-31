# [C++] Easy Recursive DP [Standard Knapsack]

**Author:** P3rf3ct0
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2675806/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2675806/)

---

```
class Solution {
public:
    
    int dp[101][1001][6];
    vector<int> price,taste;
    int mxa, mxc;
    
    int dfs(int i, int budget, int coup) {
        if(i==price.size()) return 0;
        if(dp[i][budget][coup]!=-1) return dp[i][budget][coup];
        int ans = dfs(i+1,budget,coup);
        if(budget-price[i]>=0)
            ans = max(ans,dfs(i+1,budget-price[i],coup)+taste[i]);
        if(budget-(price[i]/2)>=0 and coup > 0)
            ans = max(ans,dfs(i+1,budget-(price[i])/2,coup-1)+taste[i]);
        return dp[i][budget][coup]=ans;
    }
    
    int maxTastiness(vector<int>& price, vector<int>& tastiness, int maxAmount, int maxCoupons) {
        memset(dp,-1,sizeof(dp));
        this->price = price;
        this->taste = tastiness;
        mxa = maxAmount;
        mxc = maxCoupons;
        return dfs(0,maxAmount,maxCoupons);
    }
};
```