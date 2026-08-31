# Erlang Solution

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/4750498/](https://leetcode.com/problems/subsets-ii/solutions/4750498/)

---

#### Erlang

```erlang
-spec subsets_with_dup(Nums :: [integer()]) -> [[integer()]].

subsets_with_dup(Nums) ->
    subsets(lists:sort(Nums)).

subsets([]) -> [[]];
subsets([H|T]) ->
    S1 = subsets(T),
    All = [ [X|Y] || X <- [H], Y <- S1 ],
    S2 = [ X || X <- All, not lists:member(X, S1)],
    S1 ++ S2.
```