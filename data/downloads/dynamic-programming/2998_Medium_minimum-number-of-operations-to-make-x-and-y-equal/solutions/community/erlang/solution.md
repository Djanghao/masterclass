# Easy DP solution in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4866519/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4866519/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Dynamic programming in the following recursive relation $S(x, y)$:
$$
S(x, y) = \\begin{cases}
0   & \	ext{if $x = y$}\\\\
y - x & \	ext{if $y > x$}\\\\
1 + \\min \\begin{cases}
            S(x-1, y)\\\\
            S(\\lfloor \\frac{x}{5} \\rfloor, y) + x \\mod 5\\\\
            S(\\lfloor \\frac{x}{5} \\rfloor + 1, y) + 5 - x \\mod 5\\\\
            S(\\lfloor \\frac{x}{11} \\rfloor, y) + x \\mod 11\\\\
            S(\\lfloor \\frac{x}{11} \\rfloor + 1, y) + 11 - x \\mod 11\\\\
\\end{cases}
 & \	ext{otherwise}
\\end{cases}
$$

In Erlang, the recursive function can be written in a style very similar to the math definition. The only problem is the large search space that should be reduced by using dynamic programming. Given the recursive nature of Erlang, top-down DP, memoization, is handled by using a map. 
# Code
```
-spec minimum_operations_to_make_equal(X :: integer(), Y :: integer()) -> integer().
minimum_operations_to_make_equal(X, Y) ->  solve(X, Y).

solve(X, X) -> 0;
solve(X, Y) when X < Y -> Y - X;
solve(X, Y) -> 
    case erlang:get({'solve', X, Y}) of 
        V when is_integer(V) -> V;
        'undefined' -> 
            V = lists:min([solve(X - 1, Y), 
                           solve(X div 5, Y) + (X rem 5), 
                           solve(X div 5 + 1, Y) + 5 - (X rem 5),
                           solve(X div 11, Y) + (X rem 11),
                           solve(X div 11 + 1, Y) + 11 - (X rem 11)]) + 1,
            erlang:put({'solve', X, Y}, V),
            V
    end.
```