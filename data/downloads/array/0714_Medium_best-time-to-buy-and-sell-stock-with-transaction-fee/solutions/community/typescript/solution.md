# DP Solution

**Author:** astiksarathe
**Votes:** 3
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/2966787/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/2966787/)

---


# Code
```
function maxProfit(prices: number[], fee: number): number {
    const m = prices.length
    const firstDay = 0, hold = 0;
    //memoization
    const dp = new Array(m)

    for(let i=0;i<m;i++){
        dp[i] = new Array(2).fill(-1)
    }

    return manageStocks(firstDay, hold, fee, prices, dp)
};

const manageStocks = (ind:number, hold:number, fee:number, prices:number[], dp:number[][]) => {

    if(ind >= prices.length)  return 0

    if(dp[ind][hold] !== -1)  return dp[ind][hold]

    let buyStock = 0, sellStock = 0, skipDay = 0;
    // purchase stock;
    if(hold === 0){
        buyStock = -prices[ind] + manageStocks(ind+1, 1, fee, prices, dp)
    }else if(hold === 1){ //sell stock
        sellStock = prices[ind] - fee + manageStocks(ind+1, 0, fee, prices, dp)
    }
    //skip current day 
    skipDay = manageStocks(ind+1, hold, fee, prices, dp)

    return dp[ind][hold] = Math.max(buyStock, sellStock, skipDay)
} 
```