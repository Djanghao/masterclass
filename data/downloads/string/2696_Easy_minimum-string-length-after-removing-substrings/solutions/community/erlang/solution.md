# Binary replace recursion

**Author:** noobsenslaver
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5883316/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5883316/)

---

# Code
```erlang []
-spec min_length(S :: unicode:unicode_binary()) -> integer().
min_length(B0) ->
    B1 = binary:replace(B0, [<<"AB">>, <<"CD">>], <<"">>),
    if byte_size(B1) /= byte_size(B0) ->
            min_length(B1);
       true ->
            byte_size(B0)
    end.

```