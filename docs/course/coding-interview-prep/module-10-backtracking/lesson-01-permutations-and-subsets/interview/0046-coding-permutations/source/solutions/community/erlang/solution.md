# Erlang Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations/solutions/4214909/](https://leetcode.com/problems/permutations/solutions/4214909/)

---

# Complexity
- Time complexity:$$O(n!)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n!)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec permute(Nums :: [integer()]) -> [[integer()]].
permute([])   -> [[]];
permute(List) -> [ [H | T]  ||  H <- List, T <- permute(List -- [H])].
```