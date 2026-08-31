# Erlang Solution

**Author:** learning_code_0
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/1698479/](https://leetcode.com/problems/search-insert-position/solutions/1698479/)

---

```
-spec search_insert(Nums :: [integer()], Target :: integer()) -> integer().
search_insert(Nums, Target) ->
  search_insert(Nums, Target, 1, length(Nums)) - 1.

search_insert(Nums, Target, Low, High) when Low > High ->
    Low;

search_insert(Nums, Target, Low, High) ->
    Mid = Low + (High - Low) div 2,
    Mid_value = lists:nth(Mid, Nums),
    Result = if
                 Mid_value == Target -> Mid;
                 Mid_value > Target -> search_insert(Nums, Target, Low, Mid - 1);
                 true -> search_insert(Nums, Target, Mid + 1, High)
            end.
```