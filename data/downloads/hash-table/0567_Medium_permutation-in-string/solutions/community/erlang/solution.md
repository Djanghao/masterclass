# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/5875238/](https://leetcode.com/problems/permutation-in-string/solutions/5875238/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If permutations of```S1``` is substring of ```S2``` return true

I compared maps made by ```S1``` and substring which has same length of ```S1``` of ```S2```

When making map of substring of ```S2```, I used sliding window to avoid TLE. -> ```make_sublist_maps``` is that.


# Code
```erlang []
make_sublist_maps(List, TargetLen, [H | T], TargetLen, TmpMap, Result) -> 
    NewMap = case maps:get(H, TmpMap) of
        1 -> maps:remove(H, TmpMap);
        Value -> maps:update(H, Value - 1, TmpMap);
        _ -> TmpMap
    end,
    make_sublist_maps(List, TargetLen, T, TargetLen - 1, NewMap, Result ++ [maps:to_list(TmpMap)]);
make_sublist_maps([], _, _, _, _, Result) -> Result;
make_sublist_maps([H | T], TargetLen, Tmp, TmpLen, TmpMap, Result) ->
    NewMap = case maps:find(H, TmpMap) of
        {ok, Value} -> maps:update(H, Value + 1, TmpMap);
        _ -> maps:put(H, 1, TmpMap)
    end,
    make_sublist_maps(T, TargetLen, Tmp ++ [H], TmpLen + 1, NewMap, Result).

check([], _) -> false;
check([H | T], Map) ->
    case H =:= Map of
        true -> true;
        _ -> check(T, Map)
    end.

-spec check_inclusion(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary()) -> boolean().
check_inclusion(S1, S1) -> true;
check_inclusion(S1, S2) ->
    {SS1, SS2} = {binary_to_list(S1), binary_to_list(S2)},
    check(
        make_sublist_maps(SS2, length(SS1), [], 0, maps:new(), []), 
        maps:to_list(lists:foldl(
            fun(X, Map) ->
                case maps:find(X, Map) of
                    {ok, Value} -> maps:update(X, Value + 1, Map);
                    _ -> maps:put(X, 1, Map)
                end
            end, maps:new(), SS1
        )
    )).
    
```