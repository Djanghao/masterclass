# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/third-maximum-number/solutions/4326293/](https://leetcode.com/problems/third-maximum-number/solutions/4326293/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Make number list to distinct list and sort it and pick 3rd element from back.

# Code
```
-spec third_max(Nums :: [integer()]) -> integer().

third_max(Nums, Len) when Len < 3 -> lists:max(Nums);
third_max(Nums, Len) ->
    lists:nth(Len - 3 + 1, lists:sort(Nums)).
third_max(Nums) ->
    DistinctNums = sets:to_list(sets:from_list(Nums)),
    third_max(DistinctNums, length(DistinctNums)).
```