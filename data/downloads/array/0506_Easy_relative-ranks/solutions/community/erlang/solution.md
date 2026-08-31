# Filthy Erlang Solution

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5132339/](https://leetcode.com/problems/relative-ranks/solutions/5132339/)

---

### Erlang
```erlang
-spec find_relative_ranks(Score :: [integer()]) -> [unicode:unicode_binary()].
find_relative_ranks(Score) ->
    {_, IndexMap} = lists:foldl(fun(X, {Index, IMap}) -> {Index + 1, IMap#{X => Index}} end, {1, #{}}, Score),
    {_, Rankings} = lists:foldl(fun(X, {Rank, Ranks}) -> {Rank + 1, Ranks#{maps:get(X, IndexMap) => Rank}} end, {1, #{}}, lists:reverse(lists:sort(Score))),
    Strings = lists:map(fun(X) -> case Rankings of #{ X := 1 } -> "Gold Medal"; #{ X := 2 } -> "Silver Medal"; #{ X := 3 } -> "Bronze Medal"; #{ X := Val } -> integer_to_list(Val) end end, lists:seq(1, length(Score))),
    lists:map(fun(X) -> unicode:characters_to_binary(X) end, Strings).
```