# Two O(N) Solutions in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4920527/](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/solutions/4920527/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This is a variation of the prefix sum problem. At position `i`, looking up if `j < i` exists so that `sum(nums[0:j+1]) == sum(nums[0:i+1]) - (target % sum(nums))`. In my implementation in Erlang, `maps` is used as the hashtable. 

This problem can also be solved with a two-point approach. The distance $i-j$ can be a potential solution if `sum(nums[j:i]) == target`. Increase `i` when `sum(nums[j:i]) < target`, Increase `j` when `sum(nums[j:i]) > target`. This approach without the need of mutable data structure is thus more *functional programming*.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

## Prefix Sum Solution
```
-spec min_size_subarray(Nums :: [integer()], Target :: integer()) -> integer().
min_size_subarray(Nums, Target) -> 
    Ans = solve(Nums++Nums, length(Nums), Target, sum(Nums), 0, 1, #{0=>0}),
    case Ans > 1000000000 of
        true -> -1;
        false -> Ans
    end.

sum([]) -> 0;
sum([H|T]) -> H + sum(T).

solve(_, Len, Target, Sum, _, _, _) when (Target rem Sum) == 0 -> (Target div Sum) * Len;
solve([], _, _, _, _, _, _) -> 2000000000;
solve([H|T], Len, Target, Sum, Acc, I, M) -> 
    min(distance(Len, Target, Sum, Acc + H, I, M), solve(T, Len, Target, Sum, Acc + H, I+1, M#{(Acc+H) => I})).

distance(Len, Target, Sum, Acc, I, M) ->
    (Target div Sum) * Len + I - maps:get(Acc - (Target rem Sum), M, -2000000000).
```

## Two-Point Solution
```
-spec min_size_subarray(Nums :: [integer()], Target :: integer()) -> integer().
min_size_subarray(Nums, Target) -> 
    Sum = sum(Nums),
    Len = length(Nums),
    case Target rem Sum of
        0 -> (Target div Sum) * Len;
        _ -> 
            Arr = Nums ++ Nums,
            Ans = solve([0|Arr], Arr, (Target div Sum) * Len, (Target rem Sum), 0, 0, 1),
            case Ans > 1000000000 of
                true -> -1;
                false -> Ans
            end
    end.

sum([]) -> 0;
sum([H|T]) -> H + sum(T). 

solve(_, [], _, _, _, J, I) -> 2000000000;
solve([H1|T1], [H2|T2], Repeat, Target, Sum, J, I) when Sum == Target -> 
    min(Repeat + I - J, solve(T1, T2, Repeat, Target, Sum - H1 + H2, J + 1, I + 1));
solve([H1|T1], [H2|T2], Repeat, Target, Sum, J, I) when Sum > Target -> 
    solve(T1, [H2|T2], Repeat, Target, Sum - H1, J + 1, I);
solve([H1|T1], [H2|T2], Repeat, Target, Sum, J, I) when Sum < Target -> 
    solve([H1|T1], T2, Repeat, Target, Sum + H2, J, I + 1).
```