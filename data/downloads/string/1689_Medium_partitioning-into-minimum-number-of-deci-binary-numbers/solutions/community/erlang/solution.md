# Maximum digit approach

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/3078499/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/3078499/)

---

# Intuition
Maximum digit gives the number of summands. 

# Approach
Converted from unicode into numbers then folded with max function.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
-spec min_partitions(N :: unicode:unicode_binary()) -> integer().
min_partitions(N) -> 
    DigitsChar = unicode:characters_to_nfd_list(N),
    DigitsInt = lists:map(fun(X)->X  - 48 end, DigitsChar),
    lists:foldr(fun(X,Y)-> max(X, Y) end, 0, DigitsInt).
```