# Erlang | String

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-compression-iii/solutions/6007763/](https://leetcode.com/problems/string-compression-iii/solutions/6007763/)

---

# Code
```erlang []
-spec count(
  I :: integer(), 
  J :: integer(), 
  Len :: integer(), 
  Word :: unicode:unicode_binary(), 
  Count :: integer()) -> unicode:unicode_binary().
count(I, J, Len, Word, Count) ->
  case (J < Len) andalso (binary:at(Word, J) =:= binary:at(Word, I)) andalso (Count < 9) of
    true -> count(I, J + 1, Len, Word, Count + 1);
    false -> {J, list_to_binary(integer_to_list(Count))}
  end.


-spec iter(
  I :: integer(), 
  J :: integer(), 
  Len :: integer(), 
  Word :: unicode:unicode_binary(), 
  Result :: integer()) -> unicode:unicode_binary().
iter(I, J, Len, Word, Result) -> 
  {Index, Count} = count(I, J, Len, Word, 0),
  Value = binary:at(Word, I),
  NewResult = <<Result/binary, Count/binary, <<Value>>/binary>>,
  if 
    Index < Len -> 
      iter(Index, Index, Len, Word, NewResult);
    true -> 
      NewResult
  end.


-spec compressed_string(Word :: unicode:unicode_binary()) -> unicode:unicode_binary().
compressed_string(Word) ->
  iter(0, 0, byte_size(Word), Word, <<>>).
```