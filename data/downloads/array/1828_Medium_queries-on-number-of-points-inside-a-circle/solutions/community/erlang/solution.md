# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/5838950/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/5838950/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. define distance function: $$\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}$$
2. count every points is in circle with distance function for each circle (query)
3. fin


# Code
```erlang []
-spec count_points(Points :: [[integer()]], Queries :: [[integer()]]) -> [integer()].

dist([X1 | [Y1 | R1]], [X2 | [Y2 | []]]) -> {hd(R1), math:sqrt(math:pow(X1-X2, 2) + math:pow(Y1-Y2, 2))}.

count_points(Points, Queries) ->
    lists:map(
        fun (Y) ->
            lists:foldl(
                fun (X, Cnt) ->
                    {R1, Dist} = dist(Y, X),
                    case R1 < Dist of
                        true -> Cnt;
                        false -> Cnt + 1
                    end
                end,
                0, Points
            )
        end, Queries
    ).
```