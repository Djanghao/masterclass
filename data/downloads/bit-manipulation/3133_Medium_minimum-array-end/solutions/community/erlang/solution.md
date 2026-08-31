# Erlang | Bit Manipulation

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/6025994/](https://leetcode.com/problems/minimum-array-end/solutions/6025994/)

---

# Code
```erlang []
-spec iter(
  I :: integer(),
  Len :: integer(),
  N :: integer(), 
  X :: integer(),
  Result :: integer()) -> integer().
iter(Len, Len, N, X, Result) ->
  {N, Result};

iter(I, Len, N, X, Result) ->
  case (((X bsr I) band 1) bxor 1) =/= 0 of
    true -> iter(I + 1, Len, N bsr 1, X, Result bor ((N band 1) bsl I));
    false -> iter(I + 1, Len, N, X, Result)
  end.


-spec min_end(N :: integer(), X :: integer()) -> integer().
min_end(N, X) ->
  Limit = 31,
  {NewN, Result} = iter(0, Limit, N - 1, X, X),
  Result bor (NewN bsl Limit).
```