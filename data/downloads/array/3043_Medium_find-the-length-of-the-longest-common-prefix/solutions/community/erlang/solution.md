# Erlang | Hash Table

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5827774/](https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/solutions/5827774/)

---

# Code
```erlang []
-spec arr1(I :: integer(), N :: integer(), Acc :: sets:set()) -> sets:set().
arr1(I, N, Acc) when I =:= N -> Acc;
arr1(I, N, Acc) -> arr1(I, N div 10, sets:add_element(N, Acc)).


-spec arr2(I :: integer(), N :: integer(), Acc :: integer(), Prefixes :: sets:set()) -> integer().
arr2(I, N, Acc, Prefixes) when I =:= N -> Acc;
arr2(I, N, Acc, Prefixes) ->
  case sets:is_element(N, Prefixes) of
    true -> max(Acc, trunc(math:log10(N)) + 1);
    false -> arr2(I, N div 10, Acc, Prefixes)
  end.


-spec longest_common_prefix(Arr1 :: [integer()], Arr2 :: [integer()]) -> integer().
longest_common_prefix(Arr1, Arr2) ->
  Prefixes = lists:foldl(fun (N, Acc) -> arr1(0, N, Acc) end, sets:new(), Arr1),
  lists:foldl(fun (N, Acc) -> arr2(0, N, Acc, Prefixes) end, 0, Arr2).
```