# Simple Erlang Sollution

**Author:** anhvuk13
**Votes:** 0
**Link:** [https://leetcode.com/problems/first-missing-positive/solutions/2095972/](https://leetcode.com/problems/first-missing-positive/solutions/2095972/)

---

```erlang
-spec first_missing_positive(Nums :: [integer()]) -> integer().
first_missing_positive(Nums) ->
    ets:new(hashmap, [named_table, ordered_set]),
    insert_to_hashmap(Nums),
    Res = find_1st_missing_pos(ets:tab2list(hashmap), 1),
    ets:delete(hashmap),
    Res.

insert_to_hashmap([]) ->
    ok;
insert_to_hashmap([H | T]) when H > 0 ->
    ets:insert(hashmap, {H, valid}),
    insert_to_hashmap(T);
insert_to_hashmap([_ | T]) ->
    insert_to_hashmap(T).

find_1st_missing_pos([], CurPos) ->
    CurPos;
find_1st_missing_pos([{H, valid} | T], H) ->
    find_1st_missing_pos(T, H + 1);
find_1st_missing_pos(_, CurPos) ->
    CurPos.
```