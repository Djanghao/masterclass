# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-number/solutions/3934317/](https://leetcode.com/problems/single-number/solutions/3934317/)

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
-spec single_number(Nums :: [integer()]) -> integer().
single_number(Nums) ->
    %% using lists:foldl to calculate the xor of all elements in the list
    lists:foldl(fun(X, Acc) -> X bxor Acc end, 0, Nums).
```