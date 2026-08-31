# Erlang | Greedy

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-swap/solutions/5925892/](https://leetcode.com/problems/maximum-swap/solutions/5925892/)

---

# Code
```erlang []
-spec init_indexes(I :: integer(), Indexes :: dict:dict(), Data :: orddict:orddict()) -> dict:dict().
init_indexes(0, Indexes, Data) -> 
  Indexes;

init_indexes(I, Indexes, Data) ->
  {MaxIndex, _} = dict:take(I + 1, Indexes),
  {Value1, _} = orddict:take(I, Data),
  {Value2, _} = orddict:take(MaxIndex, Data),
  case Value1 =< Value2 of
    true -> init_indexes(I - 1, dict:store(I, MaxIndex, Indexes), Data);
    false -> init_indexes(I - 1, Indexes, Data)
  end.


-spec find_maximum(I :: integer(), Len :: integer(), Indexes :: dict:dict(), Data :: orddict:orddict()) -> orddict:orddict().
find_maximum(Len, Len, _, Data) -> 
  Data;

find_maximum(I, Len, Indexes, Data) ->
  {J, _} = dict:take(I, Indexes),
  {Value1, _} = orddict:take(I, Data),
  {Value2, _} = orddict:take(J, Data),
  case Value1 < Value2 of
    true -> orddict:store(J, Value1, orddict:store(I, Value2, Data));
    false -> find_maximum(I + 1, Len, Indexes, Data)
  end.


-spec maximum_swap(Num :: integer()) -> integer().
maximum_swap(Num) ->
  IndexedNum = lists:enumerate(integer_to_list(Num)),
  Len = length(IndexedNum),
  Data = orddict:from_list(IndexedNum),
  Indexes = init_indexes(Len - 1, dict:from_list(lists:enumerate(lists:seq(1, Len))), Data),

  Result = [Value || {_, Value} <- orddict:to_list(find_maximum(1, Len, Indexes, Data))],
  list_to_integer(Result).

```