# Easy erlang solution

**Author:** wt2080
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-strings/solutions/4326297/](https://leetcode.com/problems/add-strings/solutions/4326297/)

---

# Code
```
-spec add_strings(Num1 :: unicode:unicode_binary(), Num2 :: unicode:unicode_binary()) -> unicode:unicode_binary().

unpack({Val, _}) -> Val.

add_strings(Num1, Num2) ->
    list_to_binary(
        integer_to_list(
            unpack(string:to_integer(binary_to_list(Num1))) + 
            unpack(string:to_integer(binary_to_list(Num2)))
        )
    ).
```