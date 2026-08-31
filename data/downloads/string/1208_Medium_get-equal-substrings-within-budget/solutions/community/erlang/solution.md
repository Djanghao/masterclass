# Two Point O(N) Scan in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5269983/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5269983/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Maintaining a sliding window with a total cost $\\le$ `MaxCost` and moving the window from left to right finding the maximum window size. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec equal_substring(S :: unicode:unicode_binary(), T :: unicode:unicode_binary(), MaxCost :: integer()) -> integer().
    equal_substring(S, T, MaxCost) -> 
    X = [abs(A - B) || {A, B} <- lists:zip(binary_to_list(S), binary_to_list(T))],
    solve(X, X, 0, 0, 0, MaxCost).

solve([], [], I, J, C, MaxCost) -> 0;
solve([H1|T1], [], I, J, C, MaxCost) when C > MaxCost -> solve(T1, [], I+1, J, C - H1, MaxCost);
solve([H1|T1], [], I, J, C, MaxCost) -> J - I;
solve([H1|T1], [H2|T2], I, J, C, MaxCost) when C > MaxCost -> solve(T1, [H2|T2], I+1, J, C - H1, MaxCost);
solve([H1|T1], [H2|T2], I, J, C, MaxCost) -> max(J - I, solve([H1|T1], T2, I, J+1, C + H2, MaxCost)).
```