# Erlang | via Dictionary 📔

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5860022/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5860022/)

---

# Code
```erlang []
-spec array_rank_transform(Arr :: [integer()]) -> [integer()].
array_rank_transform(Arr) ->
  SortedArr = lists:sort(Arr),

  Ranker = fun(Value, {Storage, Index}) ->
    case dict:find(Value, Storage) of 
      {ok, _} -> {Storage, Index}; 
      error -> {dict:store(Value, Index, Storage), Index + 1}
    end
  end,

  {Rank, _} = lists:foldl(Ranker, {dict:new(), 1}, SortedArr),

  Finder = fun(Value, Result) ->
    case dict:find(Value, Rank) of 
      {ok, Index} -> [Index | Result]; 
      error -> Result
    end
  end,

  lists:foldr(Finder, [], Arr).

```