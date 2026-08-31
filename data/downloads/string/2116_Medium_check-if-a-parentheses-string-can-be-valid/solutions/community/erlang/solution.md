# Forward and Backward 2-Passes in Erlang, O(N)

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4946414/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/4946414/)

---

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Only $O(1)$ auxilary space when tail recursion is applied. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec can_be_valid(S :: unicode:unicode_binary(), Locked :: unicode:unicode_binary()) -> boolean().
can_be_valid(S, Locked) -> solve(binary_to_list(S), binary_to_list(Locked), 0, 0, 0) andalso 
solve([flip(X) || X <- lists:reverse(binary_to_list(S))], lists:reverse(binary_to_list(Locked)), 0, 0, 0).

flip(X) when X == $( -> $);
flip(X) when X == $) -> $(.

solve([], [], 0, _, _) -> true;
solve([], [], Balance, Left, Right) when Balance rem 2 /= 0 -> false;
solve([], [], Balance, Left, Right) when Balance < 0 -> Right * 2 >= -Balance;
solve([], [], Balance, Left, Right) when Balance > 0 -> Left * 2 >= Balance;
solve([H1|T1], [H2|T2], Balance, Left, Right) -> 
    {NewBalance, NewLeft, NewRight} = case H1 of
        $( -> {Balance + 1, Left + (1 - (H2 - $0)), Right};
        $) -> {Balance -1, Left, Right + (1 - (H2 - $0))}
    end,
    case NewBalance < 0 of
        true -> 
            case NewRight * 2 + NewBalance >= 0 of
                true -> solve(T1, T2, NewBalance + 2, NewLeft, NewRight - 1);
                false -> false
            end;
        false -> solve(T1, T2, NewBalance, NewLeft, NewRight)
    end.
```