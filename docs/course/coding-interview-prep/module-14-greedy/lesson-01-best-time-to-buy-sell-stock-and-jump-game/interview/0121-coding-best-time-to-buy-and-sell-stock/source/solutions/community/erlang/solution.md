# Erlang O(n)

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3826046/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/3826046/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec max_profit(Prices :: [integer()]) -> integer().
max_profit([E | Prices]) ->
  do(Prices, E, 0).


do([El|Prices], Min, Acc) when El> Min-> 
    do(Prices, Min, max(Acc, El-Min));
do([El|Prices], Min, Acc) -> 
    do(Prices, El, Acc);
do([], Min, Acc) ->
    Acc.
```