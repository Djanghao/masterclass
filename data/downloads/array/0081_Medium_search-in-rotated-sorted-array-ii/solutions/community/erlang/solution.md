# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3929597/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3929597/)

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
-spec search([integer()], integer()) -> boolean().
search(Nums, Target) ->
    searchHelper(Nums, Target, 0, length(Nums) - 1).

-spec searchHelper([integer()], integer(), integer(), integer()) -> boolean().
searchHelper(Nums, Target, Low, High) when Low > High ->
    false;
searchHelper(Nums, Target, Low, High) ->
    Mid = (Low + High) div 2,
    MidVal = lists:nth(Mid + 1, Nums),
    HighVal = lists:nth(High + 1, Nums),
    LowVal = lists:nth(Low + 1, Nums),
    case MidVal of
        Target -> 
            true;
        _ when MidVal < HighVal ->
            if Target > MidVal andalso Target =< HighVal ->
                searchHelper(Nums, Target, Mid + 1, High);
            true ->
                searchHelper(Nums, Target, Low, Mid - 1)
            end;
        _ when MidVal > HighVal ->
            if Target >= LowVal andalso Target < MidVal ->
                searchHelper(Nums, Target, Low, Mid - 1);
            true ->
                searchHelper(Nums, Target, Mid + 1, High)
            end;
        _ when LowVal == MidVal andalso MidVal == HighVal ->
            searchHelper(Nums, Target, Low, Mid - 1) orelse
            searchHelper(Nums, Target, Mid + 1, High);
        _ ->
            searchHelper(Nums, Target, Low, Mid - 1) orelse
            searchHelper(Nums, Target, Mid + 1, High)
    end.
```