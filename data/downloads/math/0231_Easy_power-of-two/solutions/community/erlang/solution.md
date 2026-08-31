# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-two/solutions/4324164/](https://leetcode.com/problems/power-of-two/solutions/4324164/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

To know about N is power of 2 (2^n), I thought that use log2 function and if return value of log2 and floored return value is same, we can say N is power of two like
```
Log2(N) == (float)((int)Log2(N))

```
And also negative numbers imports zero cannot be power of 2, so function checks it and returns false

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
-spec is_power_of_two(N :: integer()) -> boolean().
-import (math, [log2/1, floor/1]).

is_power_of_two(N) when N =< 0 ->
    false;
is_power_of_two(N) ->
    Real = log2(N),
    Exponent = floor(Real),
    Real =:= Exponent.

```