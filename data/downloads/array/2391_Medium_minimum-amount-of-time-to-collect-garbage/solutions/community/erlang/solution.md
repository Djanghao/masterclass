# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/5841933/](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/solutions/5841933/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First, Count each unit in every house and make list like [#Metal, #Paper, #Glass].
And collect each type of garbage from houses.
Finally, sum all of time taken to collect garbage.

# Code
```erlang []
-spec garbage_collection(Garbage :: [unicode:unicode_binary()], Travel :: [integer()]) -> integer().

%% Travel
%% time taken to go to next house
%% i -> i + 1 = travel[i]

%% Garbage
%% M: Metal, P: Paper, G: Glass
%% Picking one unit of any type of garbage takes 1
get_type_count(List, Type) ->
    case Type of
        $M -> hd(List);
        $P -> hd(tl(List));
        $G -> hd(tl(tl(List)))
    end.

unbinarize(List) -> lists:map(fun binary_to_list/1, List).
%% # of Garbages Left after
%% [0,2,4]
count_garbages(List) -> lists:map(
        fun (Type) ->
            lists:foldl(
                fun (House, Acc) ->
                    Acc + length([X || X <- House, X =:= Type])
                end, 
                0, List  
            )
        end, 
        [$M, $P, $G]  
    ).
    

%% garbage_collection_impl(Garbage, Travel, Left, CurType, AmountTime, ResultGarbage)
garbage_collection_impl(Unbinarized, Travel, Left, Type) -> garbage_collection_impl(Unbinarized, Travel, Left, Type, 0).
garbage_collection_impl([], _, _, _, AmountTime) -> AmountTime;
garbage_collection_impl(_, _, Left, _, AmountTime) when Left =:= 0 -> AmountTime;
garbage_collection_impl([CurHouse | T], [Time | T2], Left, CurType, AmountTime) ->
    Count = length([X || X <- CurHouse, X =:= CurType]),
    garbage_collection_impl(T, T2, Left - Count, CurType, AmountTime + Time + Count).
    

garbage_collection(Garbage, Travel) ->
    Unbinarized = unbinarize(Garbage),
    Count = count_garbages(Unbinarized),

    lists:foldl(
        fun (Type, Acc) ->
            Acc + garbage_collection_impl(Unbinarized, [0] ++ Travel, get_type_count(Count, Type), Type)
        end,
        0, [$M, $P, $G]
    ).

```