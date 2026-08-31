# Erlang Solution

**Author:** hjrand1005
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-and-earn/solutions/4802630/](https://leetcode.com/problems/delete-and-earn/solutions/4802630/)

---

#### Erlang

```erlang
-spec delete_and_earn(Nums :: [integer()]) -> integer().

delete_and_earn(Nums) ->
    M = init_sums(Nums, #{}),
    L = lists:sort(maps:keys(M)),
    del_and_earn(0, 0, L, M).

init_sums([], M) -> M;
init_sums([H|T], M) ->
    NewMap = case M of
                #{ H := Sum } -> M#{ H := Sum + H };
                _ -> M#{ H => H }
            end,
    init_sums(T, NewMap).

del_and_earn(B2, B1, [], _) -> max(B2, B1);
del_and_earn(B2, B1, [H|T], Sums) ->
    S = maps:get(H, Sums, 0),
    Prev = maps:get(H-1, Sums, 0),
    del_and_earn(B1, max(B2 + S, B1 + S - Prev), T, Sums).
```