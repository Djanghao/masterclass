# O(N) Recursive in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4894582/](https://leetcode.com/problems/split-array-into-maximum-number-of-subarrays/solutions/4894582/)

---

# Approach
<!-- Describe your first thoughts on how to solve this problem. -->
The minimum sum of scores of the subarrays is the score of the entire `nums` because of the nature of `AND`. If the score of the entire `nums > 0`, then the answer is 1 because the sum of the subarrays' scores will be always greater than 1. If the score of the entire `nums` is 0, then we can try to split `nums` into `k` subarrays `nums[0:x1], nums[x1+1:x2], ..., nums[xk:n]` and the score of each subarrays is 0. The `k` is maximized. So we perform a recursive function to calculate the maximum split of zero-score subarrays. 

<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec max_subarrays(Nums :: [integer()]) -> integer().
max_subarrays(Nums) -> 
    [Ans, _] = solve(Nums),
    max(1, Ans).

solve([]) -> [0, 16#FFFFF];
solve([H|T]) -> 
    [Ans, V] = solve(T),
    case V band H == 0 of
        true -> [Ans + 1, 16#FFFFF];
        false -> [Ans, V band H]
    end.
```