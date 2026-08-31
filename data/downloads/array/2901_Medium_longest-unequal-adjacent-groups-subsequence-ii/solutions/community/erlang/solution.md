# O(N^2) LIS DP with Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4913665/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-ii/solutions/4913665/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This problem can be easily solved with the straightforward $O(N^2)$ algorithm for finding the longest increasing subsequence. I solve this problem in Erlang with recursion for finding the solution as well. No additional backtracking is required to construct the answer. Top-down DP (memoization) is used because of the nature of functional programming. 

# Complexity
- Time complexity: $O(N^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec get_words_in_longest_subsequence(Words :: [unicode:unicode_binary()], Groups :: [integer()]) -> [unicode:unicode_binary()].
get_words_in_longest_subsequence(Words, Groups) -> 
    erlang:erase(), 
    {_, R} = best([], -1, [binary_to_list(W) || W <- Words], Groups, 0), 
    R.

solve([], [], I) -> {0, []};
solve([W|Words], [G|Groups], I) -> 
    case erlang:get({'solve', I}) of
        R when is_tuple(R) -> R;
        _ -> 
            {L, Ans} = best(W, G, Words, Groups, I+1),
            R = {L + 1, [list_to_binary(W)|Ans]},
            erlang:put({'solve', I}, R),
            R
    end.

best(W, G, [Word|Words], [Group|Groups], I) -> 
    case check(W, Word, G, Group) of
        true -> max(solve([Word|Words], [Group|Groups], I), best(W, G, Words, Groups, I+1));
        false -> best(W, G, Words, Groups, I+1)
    end;
best(W, G, [], [], I) -> {0, []}.

check([], _, -1, _) -> true;
check(W, Word, G, Group) when G == Group -> false;
check([], [H2|T2], _, _) -> false;
check([H1|T1], [], _, _) -> false;
check([H1|T1], [H2|T2], G, Group) when H1 == H2 -> check(T1, T2, G, Group);
check([H1|T1], [H2|T2], _, _) -> T1 == T2.
```