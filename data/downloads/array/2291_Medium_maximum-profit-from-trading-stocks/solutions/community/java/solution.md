# Java | Bottom-Up 1D DP | Buy or Not Buy

**Author:** Student2091
**Votes:** 28
**Link:** [https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/2095843/](https://leetcode.com/problems/maximum-profit-from-trading-stocks/solutions/2095843/)

---

For each new stock, we can either buy or not buy, so for each budget, we check if we can buy or not buy.

This means that the outer for loop is the stock with the inner loop being the budget.
We will only buy a stock when doing so makes a profit.

Let `dp[i][j]` be the maximum profit that can be made with budget `j` and `0 ~ i`th stock.
Then, we have `dp[i][j] = max(dp[i-1][j - present[i]] + future[i] - present[i], dp[i-1][j])`

This dp only depends on the previous row, hence we have no need for 2D dp, let's write it in 1D && since `j - present[i]` is only ever smaller than `j`, we can loop it backward to get rid of the need to create a tmp 1D array.

(ps. I wrote this in my GE class so hopefully it makes sense)

**Time Complexity: O(budget * len of stock)**
**Space Complexity: O(budget)**
```
class Solution {
    public int maximumProfit(int[] present, int[] future, int budget) {
        int[] dp = new int[budget+1];
        for (int i = 0; i < present.length; i++){
            for (int j = budget; j >= 0; j--){
                if (j >= present[i] && present[i] < future[i]){
                    dp[j] = Math.max(dp[j], dp[j - present[i]] + future[i] - present[i]);
                }
            }
        }
        return dp[budget];
    }
}
```