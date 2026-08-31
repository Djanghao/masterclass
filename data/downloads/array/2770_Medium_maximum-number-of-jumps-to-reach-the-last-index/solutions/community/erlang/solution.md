# O(N^2) Memoization in Single Recursion in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/4925013/](https://leetcode.com/problems/maximum-number-of-jumps-to-reach-the-last-index/solutions/4925013/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This $O(N^2)$ solution uses only one recursion but spends more space from $O(N)$ to $O(N^2)$.

# Complexity
- Time complexity: $O(N^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N^2)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec maximum_jumps(Nums :: [integer()], Target :: integer()) -> integer().
maximum_jumps([H|T], Target) -> 
    erlang:erase(), 
    case solve(T, 1, Target, H) of 
        Ret when Ret =< 0 -> -1;
        Ret -> Ret
    end.

solve([H], I, Target, Prev) when abs(H - Prev) =< Target -> 1;
solve([H], I, Target, Prev) -> -1000000000;
solve([H|T], I, Target, Prev) ->
    State = {I, Prev},
    case erlang:get(State) of
        'undefined' ->
            Ret = case abs(H - Prev) =< Target of
                true -> max(1 + solve(T, I+1, Target, H), solve(T, I+1, Target, Prev));
                false -> solve(T, I+1, Target, Prev)
            end,
            erlang:put(State, Ret),
            Ret;
        Ret -> Ret
    end.
```