# Erlang tail call recursion.

**Author:** newraze
**Votes:** 0
**Link:** [https://leetcode.com/problems/climbing-stairs/solutions/4423930/](https://leetcode.com/problems/climbing-stairs/solutions/4423930/)

---

Complexity
Time complexity:
O(n)

Space complexity:
O(1)

# Code
```
-spec climb_stairs(N :: integer()) -> integer().
climb_stairs(0) -> 0;
climb_stairs(1) -> 1;
climb_stairs(2) -> 2;
climb_stairs(N) ->
    count(1, 2, N - 2).

count(A, B, N) when N > 0 -> count(B, A + B, N - 1);
count(_A, B, _N) -> B.
```