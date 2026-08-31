# Easy Hash in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-meals/solutions/4928630/](https://leetcode.com/problems/count-good-meals/solutions/4928630/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
With a hash `H` that counts seen elements, for a new element `v`, sum up all `H[p - v]` for `p` in $[2^0, 2^{21}]$.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec count_pairs(Deliciousness :: [integer()]) -> integer().
count_pairs(Deliciousness) -> solve(Deliciousness, #{}).

solve([], Hash) -> 0;
solve([H|T], Hash) -> (sum(H, Hash, 1) + solve(T, Hash#{H => maps:get(H, Hash, 0) + 1})) rem 1000000007. 

sum(T, Hash, D) when D == 16#200000 -> maps:get(D - T, Hash, 0);
sum(T, Hash, D) when D >= T -> maps:get(D - T, Hash, 0) + sum(T, Hash, D + D);
sum(T, Hash, D) -> sum(T, Hash, D + D).
```