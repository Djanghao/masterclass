# Erlang intersection of sorted lists

**Author:** aozeritsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/1508663/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/1508663/)

---

```
-spec find_restaurant(List1 :: [unicode:unicode_binary()], List2 :: [unicode:unicode_binary()]) -> [unicode:unicode_binary()].

f(_,[],Acc)->Acc;
f([],_,Acc)->Acc;
f([{T,I1}|N1],[{T,I2}|N2],Acc)->
    f(N1,N2,[{T,I1+I2}|Acc]);
f([{T1,I1}|N1],[{T2,I2}|N2],Acc) when T1<T2 -> f(N1,[{T2,I2}|N2],Acc);
f([{T1,I1}|N1],[{T2,I2}|N2],Acc) when T1>T2 -> f([{T1,I1}|N1],N2,Acc).

top(_,[],Acc)->Acc;
top(null,[{T,I}|N],Acc)->top(I,N,[T|Acc]);
top(Prev,[{T,Prev}|N],Acc)->top(Prev,N,[T|Acc]);
top(_,_,Acc)->Acc.

find_restaurant(List1, List2) ->
    L1=length(List1),
    L2=length(List2),
    M=f(
      lists:sort(lists:zip(List1,lists:seq(1,L1))),
      lists:sort(lists:zip(List2,lists:seq(1,L2))),[]),
    M1=lists:sort(fun({_,I1},{_,I2}) -> I1<I2 end, M),
    top(null,M1,[]).
```