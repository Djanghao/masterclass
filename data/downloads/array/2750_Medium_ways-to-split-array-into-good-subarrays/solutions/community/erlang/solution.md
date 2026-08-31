# Just do it in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5202438/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/5202438/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
My solution is simply to obtain the product of the lengths of all intervals between `1`. Single pass with Erlang is enough. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(1)$ for the auxiliary space. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec number_of_good_subarray_splits(Nums :: [integer()]) -> integer().
number_of_good_subarray_splits(Nums) -> solve(Nums, -1).
solve([], C) when C == -1 -> 0;
solve([], C) -> 1;
solve([H|T], C) when H == 1, C == -1 -> solve(T, 0);
solve([H|T], C) when H == 1 -> (C + 1) * solve(T, 0) rem 1000000007;
solve([H|T], C) when C == -1 -> solve(T, C);
solve([H|T], C) -> solve(T, C+1).
```