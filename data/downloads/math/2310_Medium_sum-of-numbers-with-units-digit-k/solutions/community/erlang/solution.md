# Top-Down DP (Memoization) in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/4915880/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/4915880/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
To minimize $S_v$, exploring all $t$ so that $S_v = 1 + \\min_{t} S_{v - (10t + k)}$. In Erlang, the recurison can be easily speedup by using memoization.


# Code
```
-spec minimum_numbers(Num :: integer(), K :: integer()) -> integer().
minimum_numbers(Num, K) -> 
    erlang:erase(),
    R = solve(Num, K), 
    case R >= 1000000000 of 
        true -> -1;
        false -> R
    end.

solve(0, K) -> 0;
solve(Num, K) when Num < 0 -> 1000000000;
solve(Num, K) -> 
    case erlang:get({'solve', Num}) of
        R when is_integer(R) -> R;
        _ -> R = solve(Num, K, 0), erlang:put({'solve', Num}, R), R
    end.
solve(Num, K, T) when Num < K + T * 10 -> 1000000000;
solve(Num, 0, 0) -> solve(Num, 0, 1);
solve(Num, K, T) -> min(solve(Num - (K + T * 10), K) + 1, solve(Num, K, T + 1)).
```