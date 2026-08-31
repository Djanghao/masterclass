# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5842067/](https://leetcode.com/problems/partition-array-according-to-given-pivot/solutions/5842067/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just seperate list
[< Pivot], [== Pivot], [> Pivot]
and merge it

# Code
```erlang []
-spec pivot_array(Nums :: [integer()], Pivot :: integer()) -> [integer()].
pivot_array(Nums, Pivot) ->
    [X || X <- Nums, X < Pivot] ++ [X || X <- Nums, X =:= Pivot] ++ [X || X <- Nums, X > Pivot].
```