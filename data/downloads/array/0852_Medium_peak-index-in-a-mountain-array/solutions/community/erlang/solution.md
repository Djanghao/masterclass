# Erlang O(n)

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3752089/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3752089/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec peak_index_in_mountain_array(Arr :: [integer()]) -> integer().
peak_index_in_mountain_array([El |Arr]) ->
  do_increase(El, Arr,0).

do_increase(El2, [El|Arr],  N) when  El2 < El -> 
    do_increase(El, Arr, N+1);
do_increase(El2, Other, N) ->
    N.


```