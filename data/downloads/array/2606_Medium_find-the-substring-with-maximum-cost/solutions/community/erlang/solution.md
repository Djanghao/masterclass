# Kadane's Algorithm in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/4934435/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/4934435/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This problem is exactly the classical maximum subarray problem. You only need to assign the value of each alphabet. My solution is implemented Erlang with recursion. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$ for the stack in the recursion. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec maximum_cost_substring(S :: unicode:unicode_binary(), Chars :: unicode:unicode_binary(), Vals :: [integer()]) -> integer().
maximum_cost_substring(S, Chars, Vals) ->
    solve(binary_to_list(S), cost(binary_to_list(Chars), Vals, #{}), 0).

cost([], [], Cost) -> Cost;
cost([C|CT], [V|VT], Cost) -> cost(CT, VT, Cost#{C => V}).

solve([], Cost, S) -> S;
solve([C|CT], Cost, S) when S < 0 -> solve([C|CT], Cost, 0);
solve([C|CT], Cost, S) -> max(S, solve(CT, Cost, S + maps:get(C, Cost, C - $a + 1))).
```