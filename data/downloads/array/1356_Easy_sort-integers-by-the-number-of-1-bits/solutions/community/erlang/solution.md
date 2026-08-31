# 숫자를 늘려가며, 비트수를 센 후, list에 더합니다.

**Author:** junhyk2
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4227132/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4227132/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec sort_by_bits(Arr :: [integer()]) -> [integer()].
sort_by_bits(Arr) ->
    Arr2 = lists:sort(Arr),
    % io:format("Arr2 ~p  ~n", [Arr2]),
    solution(Arr2, 0, []).

solution([], 0, _) ->
    [0];
solution([], _, Result) ->
    Result;
solution(T, N, Result) ->
    % io:format("solution ~p  ~n", [T]),
    Fun = fun(XX) ->
            %  io:format("integer_to_list(XX, 2) ~p  ~n", [integer_to_list(XX, 2)]),
             %  io:format("L ~p  ~n", [L]),
             L = lists:map(fun(X) -> X - 48 end, integer_to_list(XX, 2)),
             lists:sum(L)
          end,
    T1 = [X || X <- T, Fun(X) == N],
    % io:format("solution1 ~p  ~n", [T]),
    solution(lists:subtract(T, T1), N + 1, Result ++ T1).

```