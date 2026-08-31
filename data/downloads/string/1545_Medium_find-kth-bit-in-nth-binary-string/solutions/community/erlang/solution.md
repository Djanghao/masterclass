# Erlang | 0 ms

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5936820/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5936820/)

---

# Code
```erlang []
-spec invert_bit(X :: char()) -> char().
invert_bit(X) ->
  case X =:= $1 of
    true -> $0;
    false -> $1
  end.


-spec find_kth_bit(N :: integer(), K :: integer()) -> char().
find_kth_bit(1, K) -> 
  $0;

find_kth_bit(N, K) ->
  MidIndex = trunc(math:pow(2, N - 1)),
  case K =:= MidIndex of
    true -> $1;
    false ->
      case K < MidIndex of
        true -> find_kth_bit(N - 1, K);
        false -> invert_bit(find_kth_bit(N - 1, MidIndex * 2 - K))
      end
  end.
```