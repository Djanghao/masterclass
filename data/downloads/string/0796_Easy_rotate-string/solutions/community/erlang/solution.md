# Erlang | 1-line String Matching

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotate-string/solutions/6002762/](https://leetcode.com/problems/rotate-string/solutions/6002762/)

---

# Code
```erlang []
-spec rotate_string(S :: unicode:unicode_binary(), Goal :: unicode:unicode_binary()) -> boolean().
rotate_string(S, Goal) ->
  not ((byte_size(S) =/= byte_size(Goal)) orelse (binary:match(<<S/binary, S/binary>>, Goal) =:= nomatch)).
```