# Simple erlang solution

**Author:** drizhiloda
**Votes:** 0
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1659476/](https://leetcode.com/problems/build-array-from-permutation/solutions/1659476/)

---

```
-spec build_array(Nums :: [integer()]) -> [integer()].
build_array(Nums) ->
    Result = [lists:nth(X +1, Nums) || X <- Nums],
    Result.
```