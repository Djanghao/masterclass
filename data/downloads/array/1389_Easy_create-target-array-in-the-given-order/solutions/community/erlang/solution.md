# Using foldl

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/3208786/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/3208786/)

---

# Intuition
Used insert value at position.

# Approach
Used `foldl` and `insert`.

# Complexity
- Time complexity:
 $$O(n^2)$$. Insert is $$O(n)$$ and traverse lists is $$O(n)$$.

- Space complexity:
$$O(n)$$ as list is constructed by `foldl`.

# Code
```
-spec create_target_array(Nums :: [integer()], Index :: [integer()]) -> [integer()].
create_target_array(Nums, Index) ->
  Zipped = lists:zip(Nums, Index),
  lists:foldl(fun({X, I}, Acc) -> insert(Acc, X, I) end, [], Zipped).
insert(S, X, I) -> 
  {Left, Right} = lists:split(I, S),
  Left ++ [X|Right].
```