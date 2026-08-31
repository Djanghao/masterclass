# Erlang Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4288993/](https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/solutions/4288993/)

---

# Code
```
-spec maximum_element_after_decrementing_and_rearranging(Arr :: [integer()]) -> integer().
maximum_element_after_decrementing_and_rearranging(Arr) ->
    N = length(Arr),
    SortedArr = lists:sort(Arr),
    {Maxi, _X} = lists:foldl(fun(Element, {Max, X}) ->
        if Element >= X ->
            {max(Max, X), X + 1};
        true ->
            {Max, X}
        end
    end, {0, 1}, SortedArr),
    Maxi.
```