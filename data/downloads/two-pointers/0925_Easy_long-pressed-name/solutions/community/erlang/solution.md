# Greedy Matching in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/long-pressed-name/solutions/5555538/](https://leetcode.com/problems/long-pressed-name/solutions/5555538/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Matching both strings from left to right. Only a few cases to be considered in Erlang.

1. `i = i + 1`, `j = j + 1` if `name[i] == typed[j]`
2. `j = j + 1` if `name[i] != typed[j]` while `typed[j-1] == typed[j]`

The edge cases are all the characters in `name` should be matched in `typed`, and `typed` should not contain additional characters out of `name`. The algorithm can be handled by using the pattern matching in Erlang.


# Complexity
- Time complexity: $O(n+m)$ where $n$ and $m$ are the lengths of both strings.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ for additional space
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec is_long_pressed_name(Name :: unicode:unicode_binary(), Typed :: unicode:unicode_binary()) -> boolean().
is_long_pressed_name(Name, Typed) -> solve(binary_to_list(Name), binary_to_list(Typed), 0).

solve([], [], _) -> true;
solve([], [H2|T2], H2) -> solve([], T2, H2);
solve([], _, _) -> false;
solve(_, [], _) -> false;
solve([H|T1], [H|T2], _) -> solve(T1, T2, H);
solve([H1|T1], [H2|T2], H2) -> solve([H1|T1], T2, H2);
solve([H1|T1], [H2|T2], _) -> false.
```