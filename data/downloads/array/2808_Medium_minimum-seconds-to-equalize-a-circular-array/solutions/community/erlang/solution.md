# 5 Lines Min-Max in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/4915610/](https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/solutions/4915610/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Let $D(v)$ be the longest distance of the element $v$ in the circular array. The solution is simply the smallest $\\lfloor \\frac{D(v)}{2} \\rfloor $ for all $v$ in the array. 

Therefore, my algorithm scans each element in the array with two hashtables, one for storing the latest position of each value, and the other for storing the maximum distance of each value. Finally, get the smallest one and divide it by 2. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec minimum_seconds(Nums :: [integer()]) -> integer().
minimum_seconds(Nums) -> solve(Nums ++ Nums, 0, #{}, #{}) div 2.
solve([], _, _, Distance) -> lists:min(maps:values(Distance));
solve([H|T], I, Counter, Distance) -> 
    D = I - maps:get(H, Counter, I),
    solve(T, I+1, Counter#{H => I}, Distance#{H => max(D, maps:get(H, Distance, 0))}).
```