# Erlang | DFS

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5816044/](https://leetcode.com/problems/lexicographical-numbers/solutions/5816044/)

---

# Code
```erlang []
-spec backtrack(Value :: non_neg_integer(), Max :: non_neg_integer()) -> non_neg_integer().
backtrack(Value, Max) when ((Value rem 10) /= 9) and ((Value + 1) =< Max) -> 
  Value + 1;

backtrack(Value, Max) -> 
  backtrack(Value div 10, Max).


-spec next_depth(I :: non_neg_integer(), Max :: non_neg_integer(), Value :: non_neg_integer()) -> [non_neg_integer()].
next_depth(I, Max, Value) when I =:= Max -> 
  [Value];

next_depth(I, Max, Value) ->
  [
    Value | 
    case Value * 10 =< Max of
      true -> next_depth(I + 1, Max, Value * 10);
      false -> next_depth(I + 1, Max, backtrack(Value, Max))
    end
  ].


-spec lexical_order(N :: integer()) -> [integer()].
lexical_order(N) ->
  next_depth(1, N, 1).

```