# Enumerate then list comprehenision

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/3168670/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/3168670/)

---

# Intuition
Take element and check for condition one by one.

# Approach
Enumerate `Nums` list using `lists:mapfoldl` then use the function to check the conditions $$i \
e j$$ and $$n_i > n_j$$ using `lists:map`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
-spec smaller_numbers_than_current(Nums :: [integer()]) -> [integer()].
smaller_numbers_than_current(Nums) ->
    {Enum, _} = lists:mapfoldl(fun(T, Acc) -> {{Acc, T}, Acc + 1} end, 0, Nums),
    Count = fun({I, NI}) -> length([NI || 
        {J, NJ} <- Enum, I =/= J, NI > NJ]) end,
    lists:map(Count, Enum).
```