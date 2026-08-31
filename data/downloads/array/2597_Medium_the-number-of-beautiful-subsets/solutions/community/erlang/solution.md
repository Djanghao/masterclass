# Backtracking in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/4930023/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/4930023/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem can be easily solved by using backtracking because of the small input size, 20 items only. 

# Approach
<!-- Describe your approach to solving the problem. -->
Examing each item recursively and try both to select and not to select it. The typical depth-first search. 

# Complexity
- Time complexity: $O(2^N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec beautiful_subsets(Nums :: [integer()], K :: integer()) -> integer().
beautiful_subsets(Nums, K) -> solve(Nums, K, sets:new()) - 1.
solve([], K, S) -> 1;
solve([H|T], K, S) -> solve(T, K, S) + 
    case sets:is_element(H - K, S) orelse sets:is_element(H + K, S) of
        true -> 0;
        false -> solve(T, K, sets:add_element(H, S))
    end.
```