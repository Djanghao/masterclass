# Erlang | Greedy

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5891686/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5891686/)

---

# Code
```erlang []
-spec counter(C :: integer(), {Total :: integer(), Extra :: integer()}) -> {integer(), integer()}.
counter(C, {Total, Extra}) ->
  case C =:= $( of
    true -> {Total + 1, Extra};
    false ->
      case Total > 0 of
        true -> {Total - 1, Extra};
        false -> {Total, Extra + 1}
      end
  end.


-spec min_add_to_make_valid(S :: unicode:unicode_binary()) -> integer().
min_add_to_make_valid(S) ->
  {Total, Extra} = lists:foldl(fun counter/2, {0, 0}, binary:bin_to_list(S)),
  Total + Extra.
```