# Erlang | String

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/circular-sentence/solutions/5998622/](https://leetcode.com/problems/circular-sentence/solutions/5998622/)

---

# Code
```erlang []
-spec iter(I :: integer(), Len :: integer(), Sentence :: unicode:unicode_binary()) -> boolean().
iter(Len, Len, Sentence) -> true;

iter(I, Len, Sentence) ->
  case (binary:at(Sentence, I) =:= 32) andalso (binary:at(Sentence, I - 1) =/= binary:at(Sentence, I + 1)) of
    true -> false;
    false -> iter(I + 1, Len, Sentence)
  end.


-spec is_circular_sentence(Sentence :: unicode:unicode_binary()) -> boolean().
is_circular_sentence(Sentence) ->
  Len = byte_size(Sentence),
  case binary:at(Sentence, 0) =/= binary:at(Sentence, Len - 1) of
    true -> false;
    false -> iter(1, Len, Sentence)
  end.
```