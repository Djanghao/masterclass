# Erlang | DFS

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931416/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931416/)

---

# Code
```erlang []
-spec dfs(
  Index :: integer(), 
  Limit :: integer(), 
  CurrValue :: integer(), 
  MaxValue :: integer(), 
  Data :: dict:dict(), 
  Count :: integer()) -> integer().
dfs(Limit, Limit, CurrValue, MaxValue, Data, Count) ->
  case CurrValue =:= MaxValue of
    true -> Count + 1;
    false -> Count
  end;

dfs(Index, Limit, CurrValue, MaxValue, Data, Count) ->
  A = dfs(Index + 1, Limit, CurrValue, MaxValue, Data, Count),

  {Value, _} = dict:take(Index, Data),
  B = dfs(Index + 1, Limit, CurrValue bor Value, MaxValue, Data, Count),
  
  A + B.


-spec count_max_or_subsets(Nums :: [integer()]) -> integer().
count_max_or_subsets(Nums) ->
  Data = dict:from_list(lists:enumerate(Nums)),
  MaxValue = lists:foldl(fun(Value, MaxValue) -> MaxValue bor Value end, 0, Nums),
  dfs(1, length(Nums) + 1, 0, MaxValue, Data, 0).
```