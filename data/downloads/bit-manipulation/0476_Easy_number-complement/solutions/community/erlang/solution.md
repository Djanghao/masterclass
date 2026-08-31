# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-complement/solutions/4330001/](https://leetcode.com/problems/number-complement/solutions/4330001/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Make input Num to Binary List and flip each bits

# Code
```
-spec find_complement(Num :: integer()) -> integer().

f(E) when E == $0 -> $1;
f(E) when E == $1 -> $0.

flip(X) -> flip(X, []).
flip([], L) -> L;
flip([X | Xs], L) -> flip(Xs, L ++ [f(X)]).

find_complement(Num) ->
    list_to_integer(flip(integer_to_list(Num, 2)), 2).
```