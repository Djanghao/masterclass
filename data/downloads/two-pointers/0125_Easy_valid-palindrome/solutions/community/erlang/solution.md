# Erlang 3 lines beats EVERYONE

**Author:** melkyWay
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/3068965/](https://leetcode.com/problems/valid-palindrome/solutions/3068965/)

---

# Code
```
-spec is_palindrome(S :: unicode:unicode_binary()) -> boolean().
is_palindrome(S) ->
  Str = [X || <<X>> <= S, (X>= $A andalso X=<$Z) orelse (X >= $0 andalso X =< $9) orelse (X >= $a andalso X =< $z)],
  Cleaned = string:lowercase(Str),
  Cleaned == lists:reverse(Cleaned).
```