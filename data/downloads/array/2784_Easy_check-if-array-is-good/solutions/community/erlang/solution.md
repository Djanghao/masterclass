# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3934331/](https://leetcode.com/problems/check-if-array-is-good/solutions/3934331/)

---

# Intuition
Ask GPT-4

# Approach
Ask GPT-4

# Complexity
- Time complexity:
I have no idea. GPT-4 solved it for me.

- Space complexity:
I have no idea. GPT-4 solved it for me.

# Code
```
-spec is_good(Nums :: [integer()]) -> boolean().
is_good(Nums) ->
    Max = lists:max(Nums),
    MaxCount = length([X || X <- Nums, X == Max]),
    if 
        MaxCount /= 2 orelse length(Nums) /= Max + 1 -> 
            false;
        true -> 
            lists:all(fun(X) -> length([Y || Y <- Nums, Y == X]) == 1 end, lists:seq(1, Max - 1))
    end.
```