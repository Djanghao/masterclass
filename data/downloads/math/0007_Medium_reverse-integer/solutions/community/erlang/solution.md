# An opportunity for some Standard Recursion in Erlang

**Author:** ninjapanzer
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-integer/solutions/5029455/](https://leetcode.com/problems/reverse-integer/solutions/5029455/)

---

# Intuition
I knew the name of the game here was recursion. My first thought was to turn the number into a string and reverse it but I figured the challenger here was to do some arithmatic operations so I didn't have to fight with the sign of the number.

# Approach
By using the mod 10 operation I can get the left most side of the integer and after shifting my current integer to the left with 10s based multiplication I can begin to consume my source number with 10s division. Effectively we draw a value from the left and then insert it to the left of a new number through addition.

This can be done in a single operation and when our Input value X is exhausted and becomes zero we can produce our Work.

The caveat here is how soon to address the out of bounds nature of the 32 bit signed integer.

Erlang has arbitrary precision so it can hold the values until it runs out of memory. Making it nearly as important to check during recursion or at the end. We could save some stack depth by checking more often at the cost of additional checks per iteration. Likely, the logical operation is more costly than the arithmatic here so it was relegated to an output constraint.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(2n)$$

# Code
```
-spec reverse(X :: integer()) -> integer().
reverse(X) -> reverse(X, 0).
reverse(0, Work) ->
  case abs(Work) > 2147483647 of
    true -> reverse(0,0);
    false -> Work
  end;
reverse(X, Work) -> reverse(trunc(X/10), (Work*10) + X rem 10).
```