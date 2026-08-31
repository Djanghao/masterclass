# Split, zipWith +/*, unzip, sum

**Author:** noobsenslaver
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5873006/](https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/solutions/5873006/)

---

# Code
```erlang []
-spec divide_players(Skill :: [integer()]) -> integer().
divide_players(L) ->
    {Left, Right} = lists:split(length(L) div 2, lists:sort(L)),
    {[S | _] = Sums, Prods} =
        lists:unzip(lists:zipwith(fun(A,B)-> {A+B,A*B} end, Left, lists:reverse(Right))),
    case lists:all(fun(X)-> X==S end, Sums) of
        true  -> lists:sum(Prods);
        false -> -1
    end.

```