# Erlang O(n)

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/3745086/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/3745086/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  $$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec find_length_of_lcis(Nums :: [integer()]) -> integer().
find_length_of_lcis([]) ->
    0;
find_length_of_lcis([E|Nums]) ->
  do(Nums, E, 1, 1).

do([], _, Max, _) ->
    Max;
do([E|Nums], Last, Max, Acc) when E > Last ->
  do(Nums, E, max(Max, Acc+1), Acc+1);
    
do([E|Nums], Last, Max, Acc) ->
  do(Nums, E, Max, 1).

```