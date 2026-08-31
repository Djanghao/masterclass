# Beats 91.15% in Python3 (DP with explanation)

**Author:** Angielf
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/5257042/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/5257042/)

---

# Approach
This solution is using dynamic programming because it is using previously calculated values to calculate the maximum profit on the current day.

The key insight behind this solution is that the maximum profit can be achieved by either not buying a stock on a given day (in which case we can either not own a stock or own a stock from the previous day) or by buying a stock on a given day and selling it on the next day (in which case we can either not own a stock or own a stock from the previous day and sell it today)

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the prices list. This is because we are iterating through each day in the loop.

- Space complexity:
$$O(1)$$, as we are only using a constant number of variables to keep track of the maximum profit that can be achieved on each day.



# Code
``` python3 []
class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        # Initialize variables to keep track of the maximum profit that can be achieved
        # by not owning a stock and owning a stock respectively
        buy, sell = -prices[0], 0
        
        # Loop through each day, starting from the second day
        for price in prices[1:]:
            # Calculate the maximum profit that can be achieved by not buying a stock on the current day
            new_buy = max(buy, sell - price)
            
            # Calculate the maximum profit that can be achieved by buying a stock on the current day
            # and selling it on the next day. We have to pay a fee when buying the stock.
            new_sell = max(sell, buy + price - fee)
            
            # Update the variables to reflect the maximum profit that can be achieved on the current day
            buy, sell = new_buy, new_sell
        
        # Return the maximum profit that can be achieved by not owning a stock on the last day
        return sell
```
``` javascript []
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    // Initialize variables to keep track of the maximum profit that can be achieved
    // by not owning a stock and owning a stock respectively
    let buy = -prices[0];
    let sell = 0;

    // Loop through each day, starting from the second day
    for (let i = 1; i < prices.length; i++) {
        // Calculate the maximum profit that can be achieved by not buying a stock on the current day
        const newBuy = Math.max(buy, sell - prices[i]);

        // Calculate the maximum profit that can be achieved by buying a stock on the current day
        // and selling it on the next day. We have to pay a fee when buying the stock.
        const newSell = Math.max(sell, buy + prices[i] - fee);

        // Update the variables to reflect the maximum profit that can be achieved on the current day
        buy = newBuy;
        sell = newSell;
    }

    // Return the maximum profit that can be achieved by not owning a stock on the last day
    return sell;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $prices
     * @param Integer $fee
     * @return Integer
     */
    function maxProfit($prices, $fee) {
        // Initialize variables to keep track of the maximum profit that can be achieved
        // by not owning a stock and owning a stock respectively
        $buy = -$prices[0];
        $sell = 0;

        // Loop through each day, starting from the second day
        for ($i = 1; $i < count($prices); $i++) {
            // Calculate the maximum profit that can be achieved by not buying a stock on the current day
            $newBuy = max($buy, $sell - $prices[$i]);

            // Calculate the maximum profit that can be achieved by buying a stock on the current day
            // and selling it on the next day. We have to pay a fee when buying the stock.
            $newSell = max($sell, $buy + $prices[$i] - $fee);

            // Update the variables to reflect the maximum profit that can be achieved on the current day
            $buy = $newBuy;
            $sell = $newSell;
        }

        // Return the maximum profit that can be achieved by not owning a stock on the last day
        return $sell;
    }
}
```