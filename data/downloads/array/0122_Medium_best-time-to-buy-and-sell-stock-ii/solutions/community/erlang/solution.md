# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/3934417/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/3934417/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
-spec max_profit(Prices :: [integer()]) -> integer().
max_profit(Prices) ->
    max_profit(Prices, 0).

% helper function for recursion
max_profit([], Profit) ->
    Profit;  % return the accumulated profit when there are no more prices left
max_profit([_], Profit) ->
    Profit;  % return the accumulated profit when there's only 1 price left
max_profit([Price1, Price2 | Rest], Profit) when Price2 > Price1 ->
    % if the next price is higher, buy at current price and sell at next price
    max_profit([Price2 | Rest], Profit + Price2 - Price1);
max_profit([_Price1, Price2 | Rest], Profit) ->
    % if the next price is not higher, just move to the next day
    max_profit([Price2 | Rest], Profit).
```