# Min-max approach

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/3190900/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/3190900/)

---

# Intuition
Find maximums by row and columns, store them in lists then find minimum value by coordinates and subract from them respective grid values. Finally sum up.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n^2)$$ (tranversing by 2 indices)

- Space complexity:
$$O(n^2)$$ (used Cartesian product in list comprehension)

# Code
```
-spec max_increase_keeping_skyline(Grid :: [[integer()]]) -> integer().
max_increase_keeping_skyline(Grid) ->
  Row_max = lists:map(fun(X)-> lists:max(X) end, Grid),
  Col_max = lists:map(fun(X)-> lists:max(X) end, transpose(Grid)),
  L = length (Grid),
  Y = [min_of_max(I, J, Row_max, Col_max) - get_at(I, J, Grid) || 
        I <- lists:seq(1, L), 
        J <- lists:seq(1, L)],
  X = lists:flatten(Y),
  lists:sum(X).
min_of_max(I, J, Lst1, Lst2) ->
  E1 = lists:nth(I, Lst1),
  E2 = lists:nth(J, Lst2),
  lists:min([E1, E2]).
get_at(I, J, Xs) -> lists:nth(J, lists:nth(I, Xs)).
transpose([[]|_]) -> [];
transpose(M) -> [lists:map(fun hd/1, M) | transpose(lists:map(fun tl/1, M))].
  
```