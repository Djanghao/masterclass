# Erlang solution in O(n) time and O(1) space

**Author:** giacomocavalieri
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3668384/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/3668384/)

---

# Complexity
- Time complexity: `do` performs a step for each element in `Prices` and performs a fixed amount of constant time operation each step. Thus the time complexity is $O(n)$.
- Space complexity: there is no need for an extra list and `do` only requires 2 additional values `Hold` and `Free`; moreover `do` can be tail call optimized so the stack doesn't blow up. So, the space complexity is $O(1)$.

# Code
```
-spec max_profit(Prices :: [integer()], Fee :: integer()) -> integer().

max_profit(Prices, Fee) ->
    [Price | _] = Prices,
    do(Prices, Fee, -Price, 0).

% Hold is the maximum profit so far obtained while still holding a stock
% Free is the maximum profit so far obtained while not holding a stock
do([], _, Hold, Free) -> max(Hold, Free);
do([Price | Prices], Fee, Hold, Free) ->
    NewHold = max(Hold, Free - Price),
    NewFree = max(Free, Hold + Price - Fee),
    do(Prices, Fee, NewHold, NewFree).

```