# Using lambdas to access the list

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/3133582/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/3133582/)

---

# Intuition
Find minimum of two digit sums

# Approach
Split to digits, then sort and find minimum of two numbers. Used lambda functions as a shortcut to index the list of digits.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
-spec minimum_sum(Num :: integer()) -> integer().
minimum_sum(Num) ->
  D = lists:sort(digitize(Num, 10)),
  I = fun(N) -> lists:nth(N, D) end,
  N1 = 10 * (I(1) + I(2)) + I(3) + I(4),
  N2 = 10 * (I(1) + I(3)) + I(2) + I(4),
  lists:min([N1, N2]).

digitize(N, Base) when N < Base -> [N];
digitize(N, Base) when N >= Base -> digitize(N div Base, Base)++[N rem Base].
```