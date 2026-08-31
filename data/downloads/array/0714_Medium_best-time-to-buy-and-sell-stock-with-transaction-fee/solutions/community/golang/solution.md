# golang DP solution with explanation

**Author:** JieBai
**Votes:** 10
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/1113471/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/1113471/)

---

```
func maxProfit(prices []int, fee int) int {
    dp := make([][2]int, len(prices))
    dp[0][0] = 0 //0 stands for hold cash on day 0 
    dp[0][1] = -prices[0]//1 stands for hold stock on day 0
    
    for i := 1; i < len(prices); i++ {
        //if the decision is to hold cash on day i, there are 2 options
        //option 1: sell the stock held from previous day
        //option 2: do nothing, keep on holding cash like previous day
        //max profit of day i with cash is max(option1, option2)
        dp[i][0] = max(prices[i] + dp[i-1][1] - fee, dp[i-1][0])
        
        //if the decision is to hold stock on day i, there are also 2 options
        //option 1: buy stock, based on previous day's cash profit
        //option 2: do nothing, keep on holding stock like previous day
        //max profit of day i with stock is max(option1, option2)
        dp[i][1] = max(dp[i-1][0] - prices[i], dp[i-1][1])
    }
    
    return dp[len(prices) - 1][0]
}

func max(a, b int) int {
    if a > b {
        return a
    } else {
        return b
    }
}
```