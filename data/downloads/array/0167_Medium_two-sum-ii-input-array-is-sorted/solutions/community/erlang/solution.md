# Erlang O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4056659/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4056659/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec two_sum(Nums :: [integer()], Target :: integer()) -> [integer()].
two_sum(Nums, Target) -> 
  Asc = lists:zip(lists:seq(1, length(Nums)), Nums),
  Dsc = lists:reverse(Asc),
  find(Asc, Dsc, Target).

find([{_, X}  | Asc],     [{_, Y}  | _] = Dsc, T) when X + Y < T -> find(Asc, Dsc, T);
find([{_, X}  | _] = Asc, [{_, Y}  | Dsc],     T) when X + Y > T -> find(Asc, Dsc, T);
find([{Xi, _} | _],       [{Yi, _} | _],      _)                 -> [Xi, Yi].  
```