# Erlang | String

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008490/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008490/)

---

# Code
```erlang []
-spec iter(
  I :: integer(), 
  Len :: integer(), 
  S :: unicode:unicode_binary(), 
  Changes :: integer()) -> integer().
iter(I, Len, S, Changes) when I > Len ->
  Changes;

iter(I, Len, S, Changes) ->
  case binary:at(S, I - 1) =/= binary:at(S, I) of
    true  -> iter(I + 2, Len, S, Changes + 1);
    false -> iter(I + 2, Len, S, Changes)
  end.


-spec min_changes(S :: unicode:unicode_binary()) -> integer().
min_changes(S) ->
  iter(1, byte_size(S), S, 0).
```