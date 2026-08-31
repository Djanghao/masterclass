# [Erlang] || Recursion || Linear Time || Constant Space

**Author:** ShraikRu
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4109028/](https://leetcode.com/problems/monotonic-array/solutions/4109028/)

---

# Approach
First we find out that the sequence increases or decreases.
Then we move until the end of the list, while this condition is emerging.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
-spec is_monotonic(Nums :: [integer()]) -> boolean().
is_monotonic([_H] = _Nums) ->
  true;
is_monotonic([A|[B|_T] = L]) ->
  is_monotonic_imp(L, A, undefined, true).

-spec is_monotonic_imp(L, Prev, Up, Acc) -> Result when
  L :: list(integer()),
  Prev :: integer(),
  Up :: boolean() | undefined,
  Acc :: boolean(),
  Result :: boolean().
is_monotonic_imp([], _Prev, _Up, Acc) ->
  Acc;
is_monotonic_imp([H|T], Prev, Up, _Acc) when H =:= Prev ->
  is_monotonic_imp(T, H, Up, true);
is_monotonic_imp([H|T], Prev, Up, _Acc) when Up =:= undefined ->
  is_monotonic_imp(T, H, Prev =< H, true);
is_monotonic_imp([H|T], Prev, Up, _Acc) when H >= Prev, Up =:= true ->
  is_monotonic_imp(T, H, Up, true);
is_monotonic_imp([H|T], Prev, Up, _Acc) when H =< Prev, Up =:= false ->
  is_monotonic_imp(T, H, Up, true);
is_monotonic_imp([H|_T], Prev, Up, _Acc) ->
  is_monotonic_imp([], H, Up, false).
```