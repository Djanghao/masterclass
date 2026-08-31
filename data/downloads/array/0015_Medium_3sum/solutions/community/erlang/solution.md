# Erlang

**Author:** Guy29
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum/solutions/5928715/](https://leetcode.com/problems/3sum/solutions/5928715/)

---

Each of the output triplets has either no zeroes, one zero, or three zeroes.

If a triplet has no zeroes, it must be composed of two numbers which have the same sign (both positive or both negative) and a third of the opposite sign.

If it has one zero, the other two numbers in the triplet must be the same number with different signs.

I start by splitting the numbers into three groups according to their sign (zeroes go into their own group), and separately construct the triplets for each of the three cases mentioned above, then I concatenate them.

(Initially I used the `sets` module for some of these operations but it was too slow so I dropped that.)

# Code
```erlang []
-spec three_sum(Nums :: [integer()]) -> [[integer()]].

three_sum(Nums) ->
    NumsSet     = sets:from_list(Nums),

    GroupedNums = maps:groups_from_list(fun(N)->if N>0->1; N<0->-1; true->0 end end, Nums),
    Negatives   = maps:get(-1, GroupedNums, []),
    Zeroes      = maps:get( 0, GroupedNums, []),
    Positives   = maps:get( 1, GroupedNums, []),
    NumZeroes   = length(Zeroes),

    {UniquePositive, UniquePositivePairs} = unique_pairs(Positives),
    {             _, UniqueNegativePairs} = unique_pairs(Negatives),

    SameSign     =  UniquePositivePairs ++ UniqueNegativePairs,

    NonZeroTriplets = [[A,B,-A-B] || {A,B} <- SameSign, sets:is_element(-A-B,NumsSet)],
    OneZeroTriplets =
        if NumZeroes>0 -> [[A,-A,0] || A <- UniquePositive, sets:is_element(-A,NumsSet)];
           true -> []
        end,
    ZeroTriplets = if NumZeroes>2 -> [[0,0,0]]; true-> [] end,
    NonZeroTriplets ++ OneZeroTriplets ++ ZeroTriplets.

unique_pairs(Nums) ->
    NumGroups    = maps:groups_from_list(fun(N)->N end, Nums),
    UniqueNums   = maps:keys(NumGroups),
    RepeatedNums = [{N,N} || N<-UniqueNums, length(maps:get(N,NumGroups))>1],
    {UniqueNums, pairs(UniqueNums,[]) ++ RepeatedNums}.

pairs([],Acc) -> lists:append(Acc);
pairs([H|T],Acc) -> pairs(T, [[{H,X}||X<-T]|Acc]).
```