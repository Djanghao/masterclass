# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/5957901/](https://leetcode.com/problems/arithmetic-subarrays/solutions/5957901/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

1. Make subarray with ```{ L[i], R[i] }```
2. Sort subarray to check it can be rearranged (if intervals between every element from sorted array are exactly same, it can be rearranged)
3. Get ```s[1] - s[0]``` from sorted array
4. Loop sorted array and check ```s[i + 1] - s[i] =:= s[1] - s[0]```
5. done

# Code
```erlang []
-spec check_arithmetic_subarrays(Nums :: [integer()], L :: [integer()], R :: [integer()]) -> [boolean()].

skip(_, 0, 0) -> [];
skip([H | T], 0, Len) -> [H] ++ skip(T, 0, Len - 1);
skip([_ | T], L, Len) -> skip(T, L - 1, Len).

check([_ | []], _) -> true;
check([H | T], Diff) ->
    case hd(T) - H =:= Diff of
        true -> check(T, Diff);
        false -> false
    end.

check_arithmetic_subarrays(Nums, L, R) ->
    lists:map(
        fun({L, R}) ->
            [H | T] = lists:sort(skip(Nums, L, R - L + 1)),
            check([H | T], hd(T) - H)
        end, lists:zip(L, R)
    ).
```