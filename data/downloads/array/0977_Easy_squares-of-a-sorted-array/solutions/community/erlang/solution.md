# Erlang Solution

**Author:** learning_code_0
**Votes:** 2
**Link:** [https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1698643/](https://leetcode.com/problems/squares-of-a-sorted-array/solutions/1698643/)

---

```
-spec sorted_squares(Nums :: [integer()]) -> [integer()].
sorted_squares(Nums) ->
    Negative_nums = [X * X || X <- Nums, X < 0],
    Positive_nums = [X * X || X <- Nums, X >= 0],
    % Not using inbuilt function
    % lists:merge(lists:reverse(Negative_nums), Positive_nums).
    merge(lists:reverse(Negative_nums), Positive_nums).

merge(List1, List2) ->
    merge(List1, List2, []).

merge(List1, List2, Output) when length(List1) == 0; length(List2) == 0 ->
    lists:append([Output, List1, List2]);

merge(List1 = [H1|T1], List2 = [H2|T2], Output) ->
    if
        H1 < H2 -> merge(T1, List2, Output ++ [H1]);
        true -> merge(List1, T2, Output ++ [H2])
    end.
```