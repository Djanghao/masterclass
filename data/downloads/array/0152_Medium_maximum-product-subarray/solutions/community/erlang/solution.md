# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/3933967/](https://leetcode.com/problems/maximum-product-subarray/solutions/3933967/)

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
-spec max_product(Nums :: [integer()]) -> integer().
max_product(Nums) ->
    max_product(Nums, 1, 1, -(1 bsl 31)).

-spec max_product(Nums :: [integer()], integer(), integer(), integer()) -> integer().
max_product([], _, _, MaxProduct) ->
    MaxProduct;
max_product([H|T], MaxCurrent, MinCurrent, MaxProduct) ->
    % The new maximum and minimum products are derived by comparing
    % the current number, its product with the maximum so far, and its product with the minimum so far
    NewMaxCurrent = max(max(H, H * MaxCurrent), H * MinCurrent),
    NewMinCurrent = min(min(H, H * MaxCurrent), H * MinCurrent),
    NewMaxProduct = max(MaxProduct, NewMaxCurrent),
    max_product(T, NewMaxCurrent, NewMinCurrent, NewMaxProduct).
```