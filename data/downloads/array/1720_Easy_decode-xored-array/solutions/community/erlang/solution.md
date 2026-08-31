# Using scanl (recursive implementation)

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/3207413/](https://leetcode.com/problems/decode-xored-array/solutions/3207413/)

---

# Intuition
Use `scanl` to store intermittent results. 

# Approach
Implemented `scanl` myself did not find in default function, then one-liner.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
-spec decode(Encoded :: [integer()], First :: integer()) -> [integer()].
decode(Encoded, First) ->
  scanl(fun(X, Sum) -> X bxor Sum end, First, Encoded).
scanl(_, Acc, []) -> [Acc];
scanl(Fun, Acc, [H|T]) -> [Acc| scanl(Fun, Fun(Acc, H), T)].





```