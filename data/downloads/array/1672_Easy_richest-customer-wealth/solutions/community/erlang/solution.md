# Map then Reduce

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/3099516/](https://leetcode.com/problems/richest-customer-wealth/solutions/3099516/)

---

# Intuition
First caculate `sum` of rows, it is Map, then find maximimum. Maximum is associative binary operations, hence - Reduce.

# Approach
Used `lists:mapfoldl` one-liner.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
-spec maximum_wealth(Accounts :: [[integer()]]) -> integer().
maximum_wealth(Accounts) ->
    {_, Res} = lists:mapfoldl(fun(Row, Max) -> 
        {lists:sum(Row), max(Max, lists:sum(Row))} end, -1, Accounts), Res.
```