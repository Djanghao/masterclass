# Using if and rem

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/3120488/](https://leetcode.com/problems/smallest-even-multiple/solutions/3120488/)

---


# Intuition
If odd then multiply by `2`, if even return as is.

# Approach
Using `if` conditional and `rem` operator. 

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
-spec smallest_even_multiple(N :: integer()) -> integer().
smallest_even_multiple(N) ->
    if N rem 2 == 0 -> 
        N; 
    true -> 
        2 * N 
   end.
```