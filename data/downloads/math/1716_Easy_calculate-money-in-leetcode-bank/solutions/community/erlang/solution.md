# Erlang solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4371221/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4371221/)

---

# Code
```
-spec total_money(N :: integer()) -> integer().
total_money(N) when N =< 7 -> summation(N);
total_money(N) ->
    M = N div 7,
    L = N rem 7,
    total_money(M, L, 0, 0).

total_money(0, L, It, Res) ->
    Res + summation(L + It) - summation(It);
total_money(M, L, It, Res) when M > 0 ->
    total_money(M - 1, L, It + 1, Res + summation(7 + It) - summation(It)).

-spec summation(N :: integer()) -> integer().
summation(N) ->
    (N * N + N) div 2.

```