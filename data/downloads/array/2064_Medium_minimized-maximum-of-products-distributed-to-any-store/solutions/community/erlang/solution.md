# Erlang | Binary Search

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043728/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6043728/)

---

# Code
```erlang []
-spec iter(
  Left :: integer(),
  Right :: integer(),
  N :: integer(), 
  Quantities :: [integer()]) -> integer().
iter(Left, Right, _, _) when Left >= Right ->
  Left;

iter(Left, Right, N, Quantities) ->
  Mid = (Left + Right) bsr 1,
  Count = lists:foldl(fun(Quantity, Result) -> Result + (Quantity + Mid - 1) div Mid end, 0, Quantities),

  if
    Count > N -> iter(Mid + 1, Right, N, Quantities);
    true -> iter(Left, Mid, N, Quantities)
  end.


-spec minimized_maximum(N :: integer(), Quantities :: [integer()]) -> integer().
minimized_maximum(N, Quantities) ->
  iter(1, 100000, N, Quantities).
```