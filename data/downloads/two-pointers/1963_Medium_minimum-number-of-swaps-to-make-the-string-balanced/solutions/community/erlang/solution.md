# Erlang | Greedy

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/5886087/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/5886087/)

---

# Code
```erlang []
-spec counter(C :: integer(), OpenBrackets :: integer()) -> integer().
counter(C, OpenBrackets) ->
  case C =:= $[ of
    true -> OpenBrackets + 1;
    false ->
      case OpenBrackets > 0 of
        true -> OpenBrackets - 1;
        false -> OpenBrackets
      end
  end.


-spec min_swaps(S :: unicode:unicode_binary()) -> integer().
min_swaps(S) ->
  OpenBrackets = lists:foldl(fun counter/2, 0, binary:bin_to_list(S)),

  (OpenBrackets + 1) div 2.
```