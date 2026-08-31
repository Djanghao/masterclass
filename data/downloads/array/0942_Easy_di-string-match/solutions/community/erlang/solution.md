# Erlang | Two Pointers

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/di-string-match/solutions/5813562/](https://leetcode.com/problems/di-string-match/solutions/5813562/)

---

# Code
```erlang []
-spec di_string_match(S :: unicode:unicode_binary()) -> [integer()].
di_string_match(S) ->
  Data = binary_to_list(<<S/binary, <<"I">>/binary>>),
  Check = fun(X, {Acc, I, J}) ->
    case X =:= $I of 
      true -> {[I | Acc], I + 1, J}; 
      false -> {[J | Acc], I, J - 1} 
    end 
  end,
  
  {Result, _, _} = lists:foldl(Check, {[], 0, length(Data) - 1}, Data),
  lists:reverse(Result).

```