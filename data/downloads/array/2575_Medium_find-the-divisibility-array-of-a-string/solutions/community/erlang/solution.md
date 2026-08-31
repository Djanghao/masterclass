# Easy 3-Line O(N) Solution in Erlang

**Author:** metaphysicalist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/4958753/](https://leetcode.com/problems/find-the-divisibility-array-of-a-string/solutions/4958753/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Shift the positions one by one, adding the remainder to the next position. 

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec divisibility_array(Word :: unicode:unicode_binary(), M :: integer()) -> [integer()].
divisibility_array(Word, M) ->
    solve(binary_to_list(Word), M, 0).

solve([], _, _) -> [];
solve([H|T], M, R) when (H - $0 + R * 10) rem M == 0 -> [1|solve(T, M, 0)];
solve([H|T], M, R) -> [0|solve(T, M, (H - $0 + R * 10) rem M)].
```