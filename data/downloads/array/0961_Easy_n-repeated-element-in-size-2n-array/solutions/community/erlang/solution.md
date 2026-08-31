# 100% solution using lists:filter

**Author:** mpinter
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5521426/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/5521426/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
This solution iterates though the list and checks if the first element of the list is present in the list N times or not.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec repeated_n_times(Nums :: [integer()]) -> integer().
repeated_n_times(Nums) ->
  repeated_n_times_helper(Nums, length(Nums) div 2).

repeated_n_times_helper(Nums, N) ->
  [H | T] = Nums,
  case freq_of_head(Nums, N) of
    true -> H;
    _ -> repeated_n_times_helper(T, N)
  end.

freq_of_head(List, N) ->
  [Number | T] = List,
  Count = fun(V,L) -> length(lists:filter(fun(E) -> E == V end, L)) end,
  Count(Number, List) == N.
```