# O(N) DP in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4913200/](https://leetcode.com/problems/apply-operations-to-make-two-strings-equal/solutions/4913200/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Action 2 is better than Action 1, so we need to determine to flip or not to flip with Action 2 at each position. After that, for a position still `s1[i] != s2[i]`, we must to apply Action 1 to make `s1[i] == s2[i]` and need a later position `j` flipped. 
For this DP problem, I implemented in Erlang with memoization. The code explicitly shows the recursive relation. According to the [official document](https://www.erlang.org/doc/man/erlang#get-1), both `erlang:get/1` and `erlang:put/2` are $O(1)$, so the entire complexity is $O(N)$ since only $2\	imes2\	imes N$ states.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-define(INF, 1000000007).
-spec min_operations(S1 :: unicode:unicode_binary(), S2 :: unicode:unicode_binary(), X :: integer()) -> integer().
min_operations(S1, S2, X) -> 
    erlang:erase(),
    C = solve(binary_to_list(S1), binary_to_list(S2), X, 0, 0),
    case C >= ?INF of
        true -> -1;
        _ -> C
    end. 

solve([], [], X, Flipped, I) when Flipped == 0 -> 0;
solve([H1], [H2], X, Flipped, I) -> 
    case abs(H1 - H2) == Flipped of
        true -> 0;
        false -> ?INF
    end;
solve([H11,H12|T1], [H21,H22|T2], X, Flipped, I) ->
    State = {'solve', I, H11, Flipped},
    case erlang:get(State) of
        R when is_integer(R) -> R;
        _ -> 
            Cost1 = solve([H12|T1], [H22|T2], X, (Flipped + abs(H11 - H21)) rem 2, I+1) + abs(H11 - H21) * X * (1-Flipped),
            F1 = 1 - (H11 - 48) + 48,
            F2 = 1 - (H12 - 48) + 48,
            Cost2 = 1 + solve([F2|T1], [H22|T2], X, (Flipped + abs(F1 - H21)) rem 2, I+1) + abs(F1 - H21) * X * (1-Flipped),
            R = min(Cost1, Cost2),
            erlang:put(State, R),
            R
    end.
```