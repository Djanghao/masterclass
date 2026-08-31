# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-number/solutions/3934291/](https://leetcode.com/problems/missing-number/solutions/3934291/)

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
-spec missing_number(Nums :: [integer()]) -> integer().
missing_number(Nums) ->
    N = length(Nums),
    TotalSum = N * (N + 1) div 2,
    Sum = lists:sum(Nums),
    TotalSum - Sum.
```