# Erlang Solution by GPT-4

**Author:** LaDoger
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3929531/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3929531/)

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
-spec search(Nums :: [integer()], Target :: integer()) -> integer().


search(Nums, Target) ->
    search(Nums, Target, 0, length(Nums) - 1).

search(_, _, L, R) when L > R -> -1;
search(Nums, Target, L, R) ->
    Mid = (L + R) div 2,
    Val = lists:nth(Mid + 1, Nums),
    Start = lists:nth(L + 1, Nums),
    case Val of
        Target -> Mid;
        _ -> 
            if 
                (Val >= Start andalso Target >= Start andalso Target < Val) 
                orelse (Val < Start andalso (Target >= Start orelse Target < Val)) ->
                    search(Nums, Target, L, Mid - 1);
                true ->
                    search(Nums, Target, Mid + 1, R)
            end
    end.
```