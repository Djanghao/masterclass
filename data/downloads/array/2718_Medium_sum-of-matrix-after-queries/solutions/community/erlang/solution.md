# Short and Concise Erlang Solution

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/4929738/](https://leetcode.com/problems/sum-of-matrix-after-queries/solutions/4929738/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
The answer can be constructed in the reversed direction because of the fact that the previous update that will be repalced by a latter query does not matter. So, beginning from the last query, ignore seen rows/cols and sum up the values. 


# Complexity
- Time complexity: $O(Q)$ where $Q$ is the number of queries. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$ where $n$ is the width (height) of the matrix. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec matrix_sum_queries(N :: integer(), Queries :: [[integer()]]) -> integer().
matrix_sum_queries(N, Queries) -> solve(lists:reverse(Queries), N, #{}, 0, #{}, 0).

solve([], N, Rows, RC, Cols, CC) -> 0;
solve(_, N, Rows, _, Cols, N) -> 0;
solve(_, N, Rows, N, Cols, _) -> 0;
solve([[0, Index, Val]|T], N, Rows, RC, Cols, CC) -> 
    case sets:is_element(Index, Rows) of
        true -> solve(T, N, Rows, RC, Cols, CC);
        false -> (N - CC) * Val + solve(T, N, sets:add_element(Index, Rows), RC + 1, Cols, CC)
    end;
solve([[1, Index, Val]|T], N, Rows, RC, Cols, CC) -> 
    case sets:is_element(Index, Cols) of
        true -> solve(T, N, Rows, RC, Cols, CC);
        false -> (N - RC) * Val + solve(T, N, Rows, RC, sets:add_element(Index, Cols), CC + 1)
    end.
```