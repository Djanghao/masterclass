# Erlang | Hash Table

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5855883/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5855883/)

---

# Code
```erlang []
-spec add_or_update_pair(Key :: integer(), NewValue :: integer(), Data :: dict:dict()) -> dict:dict().
add_or_update_pair(Key, NewValue, Data) ->
  case dict:find(Key, Data) of
    {ok, OldValue} -> dict:store(Key, OldValue + NewValue, Data); % update
    error -> dict:store(Key, NewValue, Data) % add
  end.


-spec check_pairs(I :: integer(), N :: integer(), Count :: dict:dict()) -> boolean().
check_pairs(I, N, _) when I >= N -> true;

check_pairs(I, N, Count) ->
  Value1 = case dict:take(I, Count) of {A, _} -> A; error -> a end,
  Value2 = case dict:take(N - I + 2, Count) of {B, _} -> B; error -> b end,
  case Value1 /= Value2 of
    true -> false;
    false -> check_pairs(I + 1, N, Count)
  end.


-spec can_arrange(Arr :: [integer()], K :: integer()) -> boolean().
can_arrange(Arr, K) ->
  Count = dict:from_list(lists:enumerate(lists:duplicate(K, 0))),
  Increment = fun(Num, Acc) -> 
    Index = (((Num rem K) + K) rem K) + 1,
    add_or_update_pair(Index, 1, Acc)
  end,
  
  Data = lists:foldl(Increment, Count, Arr),

  case check_pairs(2, K, Data) of
    true -> 
      case dict:take(1, Data) of
        {Value, _} -> (Value rem 2) =:= 0;
        error -> false
      end;
    false -> false
  end.
```