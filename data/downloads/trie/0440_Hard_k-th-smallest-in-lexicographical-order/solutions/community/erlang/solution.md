# Erlang | Prefix Tree

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5821583/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/5821583/)

---

# Code
```erlang []
-spec counter(A :: non_neg_integer(), B :: non_neg_integer(), N :: non_neg_integer(), Amount :: non_neg_integer()) -> non_neg_integer().
counter(A, B, N, Amount) ->
  case A =< N of
    true -> counter(A * 10, B * 10, N, Amount + min(B, N + 1) - A);
    false -> Amount
  end.


-spec kth_number(I :: non_neg_integer(), N :: non_neg_integer(), K :: non_neg_integer(), Result :: non_neg_integer()) -> non_neg_integer().
kth_number(I, N, K, Result) when I =:= K -> Result;

kth_number(I, N, K, Result) ->
  Amount = counter(Result, Result + 1, N, 0),
  case I + Amount =< K of
    true -> kth_number(I + Amount, N, K, Result + 1);
    false -> kth_number(I + 1, N, K, Result * 10)
  end.


-spec find_kth_number(N :: integer(), K :: integer()) -> integer().
find_kth_number(N, K) ->
  kth_number(1, N, K, 1).
```