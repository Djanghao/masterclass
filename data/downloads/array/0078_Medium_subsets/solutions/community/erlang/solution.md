# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsets/solutions/5973559/](https://leetcode.com/problems/subsets/solutions/5973559/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

make subsets has each length between ```[0, N]``` and merge that lists

# Code
```erlang []
-spec subsets(Nums :: [integer()]) -> [[integer()]].

make(N, _, Tmp, Cnt) when Cnt =:= N -> [Tmp];
make(_, [], _, _) -> [];
make(N, [H | T], Tmp, Cnt) -> 
    make(N, T, Tmp ++ [H], Cnt + 1) ++
    make(N, T, Tmp, Cnt).

subsets(Nums) ->
    lists:foldl(
        fun(N, Ans) ->
            Ans ++ make(N, Nums, [], 0)
        end, [], lists:seq(0, length(Nums))
    ).
```