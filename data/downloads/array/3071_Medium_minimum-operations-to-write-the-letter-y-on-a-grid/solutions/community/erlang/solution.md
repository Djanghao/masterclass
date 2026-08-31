# Straightforward Erlang Solution

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4920302/](https://leetcode.com/problems/minimum-operations-to-write-the-letter-y-on-a-grid/solutions/4920302/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Scan the grid and count the distributions of Y cells and non-Y cells. After that, find the minimum cost from the 6 combinations.

Coding in Erlang, I try to use lists instead of arrays. The cell `(x, y)` is a Y cell if and only if `(x, y)` meets one of the following three cases: 

* `x >= n // 2` and `y == n // 2`
* `x < n // 2` and `x == y`
* `x < n // 2` and `n - x - 1 == y`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec minimum_operations_to_write_y(Grid :: [[integer()]]) -> integer().
minimum_operations_to_write_y(Grid) -> cost(count_row(Grid, length(Grid), 0)).

build(H) -> build(H, 0).
build(H, 6) -> [];
build(H, I) when H == I -> [1|build(H, I+1)];
build(H, I) -> [0|build(H, I+1)].

count_row([], _, _) -> build(-1);
count_row([H|T], N, X) -> merge(count_col(H, N, X, 0), count_row(T, N, X+1)).

count_col([], N, X, Y) -> build(-1);
count_col([H|T], N, X, Y) -> merge(classify(H, N, X, Y), count_col(T, N, X, Y+1)).

classify(H, N, X, Y) when X >= N div 2, Y == N div 2 -> build(H);
classify(H, N, X, Y) when X >= N div 2 -> build(H+3);
classify(H, N, X, Y) when X == Y; N-X-1 == Y -> build(H);
classify(H, N, X, Y) -> build(H+3).

merge([], []) -> [];
merge([H1|T1], [H2|T2]) -> [H1+H2|merge(T1, T2)].

cost([Y0, Y1, Y2, G0, G1, G2]) -> 
    Y = Y0 + Y1 + Y2,
    G = G0 + G1 + G2,
    lists:min([Y-Y0+G-G1, Y-Y0+G-G2, Y-Y1+G-G0, Y-Y1+G-G2, Y-Y2+G-G0, Y-Y2+G-G1]).
```