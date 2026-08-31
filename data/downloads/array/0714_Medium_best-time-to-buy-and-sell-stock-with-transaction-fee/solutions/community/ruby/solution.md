# Simple Recursive Memo Solution

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/4430353/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/4430353/)

---


# Code
```
# @param {Integer[]} prices
# @param {Integer} fee
# @return {Integer}
def max_profit(prices, fee)
    @prices = prices
    @fee = fee
    @cache = {}
    dfs 0
end

def dfs i, buy = true

    if @cache[[i, buy]]
        return @cache[[i, buy]]
    end

    if i == @prices.size
        return 0
    end

    if buy
        # We have two choices, choose the max outcome.
        # Buy or skip to next index.
        @cache[[i, buy]] = [dfs(i + 1, false) - @prices[i], dfs(i + 1, true)].max
    else
        # We have two choices, choose the max outcome.
        # Sell or skip to next index.
        @cache[[i, buy]] = [dfs(i + 1, true) - @fee + @prices[i], dfs(i + 1, false)].max
    end
end
```