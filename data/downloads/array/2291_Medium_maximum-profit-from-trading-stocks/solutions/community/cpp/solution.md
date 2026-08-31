# [CPP✅✅] KnapSack Solution

**Author:** superstone
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3556075/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/3556075/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
General knapsack.
It is a problem to pack maximum value with limited budget.
cost is present[i] 
an value is future[i] - present[i]

# Approach
<!-- Describe your approach to solving the problem. -->
dp[index][budget] is maxmimum value available with current `budget` at `index`th (cost, value).


```
for all possible budget.(cost ~ maximum budget)
dp[index][budget] = 
    max(dp[index][budget], dp[index-1][budget-cost]+value)
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int maximumProfit(vector<int>& present, vector<int>& future, int budget) {
        int n = present.size();

        vector<vector<int>> profits(n, vector<int>(2,0));
        for (int i=0; i<n; i++) {
            profits[i] = {present[i], future[i]-present[i]};
        }

        vector<int> dp(budget+1, 0);
        vector<int> prev_dp(budget+1, 0);

        for (int i=0; i<n; i++) {
            int cost = profits[i][0];
            int profit = profits[i][1];
            for (int j=cost; j<=budget; j++) {
                dp[j] = max(prev_dp[j], prev_dp[j-cost]+profit);
            } 
            prev_dp = dp;
        }

        return dp[budget];

    }
};
```