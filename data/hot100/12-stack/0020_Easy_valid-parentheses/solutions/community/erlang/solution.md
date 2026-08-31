# [Erlang] Hilariously concise solution, using macros, pattern matching & recursion

**Author:** lvsz
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/3399023/](https://leetcode.com/problems/valid-parentheses/solutions/3399023/)

---

# Intuition

Do a single pass over the string via tail recursion, keeping track of the appropriate parens using a second string.

# Approach

Wrote down the pattern matching declarations, noticed a lot of repetition, so wrote down some macros. Only two rules were needed to make it look ridiculous.

# Code

```erlang []
-define(OK(L,R), go([L|_1],[R|_2]) -> go(_1,_2); go(_1,[L|_2]) -> go([L|_1],_2)).
-define(NO(_), go([],[]) -> true; go(_,_) -> false).

?OK($(,$));
?OK($[,$]);
?OK(${,$});
?NO(_).

-spec is_valid(S :: unicode:unicode_binary()) -> boolean().
is_valid(S) -> go([], unicode:characters_to_list(S)).

```

## Without macros

Reordered the declarations for legibility. In the macro, the lines are paired up by type (2 for parentheses, 2 for brackets, 2 for braces).

```erlang []
go([$(|L], [$)|R]) -> go(L, R);
go([$[|L], [$]|R]) -> go(L, R);
go([${|L], [$}|R]) -> go(L, R);
go(L, [$(|R]) -> go([$(|L], R);
go(L, [$[|R]) -> go([$[|L], R);
go(L, [${|R]) -> go([${|L], R);
go([], []) -> true;
go(_, _) -> false.

-spec is_valid(S :: unicode:unicode_binary()) -> boolean().
is_valid(S) -> go([], unicode:characters_to_list(S)).

```

# Complexity
No worse or better than stack-based solutions using a while-loop.
- Time: $$O(n)$$
- Space: $$O(n)$$
