# Maximizing Stock Profit with Up to Two Transactions Using Dynamic Programming

**Author:** authxth
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/5652873/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/solutions/5652873/)

---

# Intuition
The function calculates the maximum profit from up to two stock transactions, where each transaction involves buying and selling one share of stock. The problem is approached using dynamic programming, where we track the best outcomes for various states throughout the stock prices.


# Approach
1. State Variables:
    - `f1`: Maximum profit after the first buy.
    - `f2`: Maximum profit after the first sell.
    - `f3`: Maximum profit after the second buy.
    - `f4`: Maximum profit after the second sell.
2. Dynamic Programming Transition:
    - First Buy (`f1`): The maximum profit after buying the stock for the first time, which is the maximum of the previous state or buying at the current price.
    - First Sell (`f2`): The maximum profit after selling the stock for the first time, which is the maximum of the previous state or selling at the current price after the first buy.
    - Second Buy (`f3`): The maximum profit after buying the stock for the second time, which is the maximum of the previous state or buying at the current price after the first sell.
    - Second Sell (`f4`): The maximum profit after selling the stock for the second time, which is the maximum of the previous state or selling at the current price after the second buy.
3. Final Result: The value in `f4` after iterating through the prices array gives the maximum possible profit with at most two transactions.

# Complexity
- Time complexity: $\uD835\uDC42(\uD835\uDC5B)$, where \uD835\uDC5B is the length of the prices array. Each price is processed once.

- Space complexity: $\uD835\uDC42(1)$, since only a fixed number of variables are used.

# Code
```
function maxProfit(prices: number[]): number {
    let [f1, f2, f3, f4] = [-prices[0], 0, -prices[0], 0];
    for (let i = 1; i < prices.length; i++) {
        f1 = Math.max(f1, -prices[i]);
        f2 = Math.max(f2, f1 + prices[i]);
        f3 = Math.max(f3, f2 - prices[i]);
        f4 = Math.max(f4, f3 + prices[i]);
    }
    return f4;
}
```