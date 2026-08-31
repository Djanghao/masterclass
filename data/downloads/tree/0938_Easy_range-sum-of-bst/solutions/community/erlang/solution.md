# Simple Erlang solution

**Author:** platon13
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/1735085/](https://leetcode.com/problems/range-sum-of-bst/solutions/1735085/)

---

```
range_sum_bst(null, Low, High) -> 0;
range_sum_bst(#tree_node{val = Val, left = Left, right = Right}, Low, High) when Val < Low ->
    range_sum_bst(Right, Low, High);
range_sum_bst(#tree_node{val = Val, left = Left, right = Right}, Low, High) when Val > High ->
    range_sum_bst(Left, Low, High);
range_sum_bst(#tree_node{val = Val, left = Left, right = Right}, Low, High) ->
    Val + range_sum_bst(Left, Low, High) + range_sum_bst(Right, Low, High).
```