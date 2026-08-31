# Erlang | String

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5993395/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5993395/)

---

# Code
```erlang []
-spec iter(
  I :: integer(), 
  Len :: integer(), 
  S :: unicode:unicode_binary(), 
  Result :: unicode:unicode_binary()) -> unicode:unicode_binary().
iter(Len, Len, S, Result) ->
  Result;

iter(I, Len, S, Result) ->
  ResultLen = byte_size(Result),
  Curr = binary:at(S, I),
  case (ResultLen > 1) andalso (binary:at(Result, ResultLen - 1) =:= Curr) andalso (binary:at(Result, ResultLen - 2) =:= Curr) of
    true -> iter(I + 1, Len, S, Result);
    false -> iter(I + 1, Len, S, <<Result/binary, <<Curr>>/binary>>)
  end.


-spec make_fancy_string(S :: unicode:unicode_binary()) -> unicode:unicode_binary().
make_fancy_string(S) ->
  iter(0, byte_size(S), S, <<>>).
```