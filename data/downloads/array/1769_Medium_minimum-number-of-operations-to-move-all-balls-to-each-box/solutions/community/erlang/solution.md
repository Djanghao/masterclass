# Easy Erlang Solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5841577/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/5841577/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
$$O(n^2)$$ 
for each box in Boxes, calculate $$\\sum_j abs(i-j) $$ for current box $$i$$, box $$j$$ which has a ball. 
# Code
```erlang []
-spec min_operations(Boxes :: unicode:unicode_binary()) -> [integer()].


min_operations_impl(List) -> min_operations_impl(List, [], []).
min_operations_impl([], _, Moves) -> Moves;
min_operations_impl([{HIdx, H} | T], FrontList, Moves)-> 
    min_operations_impl(
        T, FrontList ++ [{HIdx, H}], 
        Moves ++ [lists:foldl(
            fun ({Idx, Val}, Sum) ->
                case Val of
                    $0 -> Sum;
                    $1 -> Sum + abs(HIdx - Idx)
                end
            end, 0, FrontList ++ T
        )]
    ).

min_operations(Boxes) ->
    min_operations_impl(lists:enumerate(binary_to_list(Boxes))).
```