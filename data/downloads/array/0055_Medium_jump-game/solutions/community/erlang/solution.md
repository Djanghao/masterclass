# Erlang O(n)

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game/solutions/3906857/](https://leetcode.com/problems/jump-game/solutions/3906857/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec can_jump(Nums :: [integer()]) -> boolean().
can_jump([E|Nums]) ->
  do(Nums, 1, E).


do([E|Nums], Index, Maxindex) when Index=<Maxindex  ->
    do(Nums, Index+1, max(Index+E, Maxindex));
do([], Index, MaxIndex) when MaxIndex>=Index-1 ->
    true;
do(_, _, _) ->
    false.

```