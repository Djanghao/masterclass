# ✅🚀Complete & easy guide in JavaScript!  -- ANY LANGUAGE! -- ✅🚀

**Author:** sam_avanesov
**Votes:** 4
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/4758118/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/4758118/)

---

# Intuition
The problem "Best Time to Buy and Sell Stock" requires us to maximize the profit from transactions involving a single stock over several days. Intuitively, we want to buy low and sell high. However, the twist here is that we can conduct as many transactions as we want, but we can only hold one share at a time. This means we should capture every profitable opportunity from day to day. If the price tomorrow is higher than today, we should buy today and sell tomorrow.

# Approach
The approach is quite straightforward once we realize that the total maximum profit is simply the sum of all positive differences between consecutive days. In essence, we `"buy"` on day `i` and `"sell"` on day `i+1` if the price on day `i+1` is higher than on day `i`. We iterate through the price array, continuously calculating the profit by subtracting the price of the current day from the price of the next day, and add this to our total profit if the result is positive. This way, we are effectively capturing the profit of every upward trend in the stock prices.

# Complexity
- Time complexity: $$O(n)$$
We pass through the array a single time, with `n` being the number of days (or length of the prices array). Each day is considered only once in a single pass, making the time complexity `linear`.

- Space complexity: $$O(1)$$
We use only a fixed number of variables (`buy`, `sell`, `profit`), regardless of the input size. Thus, the space complexity is `constant`.

# Code
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy, sell, profit; // define vars
    buy = sell = profit = 0; // init all to zero
    while(++sell < prices.length){
        // only count positive profit
        profit += Math.max(prices[sell] - prices[buy++], 0); 
    }
    return profit;
};
```