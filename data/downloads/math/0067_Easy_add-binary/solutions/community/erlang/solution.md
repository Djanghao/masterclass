# Erlang Solution

**Author:** jofahduhs
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-binary/solutions/3702843/](https://leetcode.com/problems/add-binary/solutions/3702843/)

---

# Code
```
-spec add_binary(A :: unicode:unicode_binary(), B :: unicode:unicode_binary()) -> unicode:unicode_binary().
add_binary(A, B) ->
    % Convert a binary string to an integer (specify base 2)
    A_int = binary_to_integer(A, 2),
    B_int = binary_to_integer(B, 2),
    % Find the sum of integers
    Sum_int = A_int + B_int,
    % Convert an integer to a binary string (specify base 2)
    Sum_bin = integer_to_binary(Sum_int, 2),
    % return a result
    Sum_bin.
```