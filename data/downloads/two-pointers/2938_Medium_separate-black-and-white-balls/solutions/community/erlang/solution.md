# Erlang | kinda Greedy

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5915969/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5915969/)

---

# Code
```erlang []
-spec finder(Value :: integer(), {Steps :: integer(), Ones :: integer(), Index :: integer(), Len :: integer()}) -> integer().
finder(Value, {Steps, Ones, Index, Len}) ->
  case Value =:= $1 of
    true -> {Steps + Len - Index - Ones, Ones + 1, Index - 1, Len};
    false -> {Steps, Ones, Index - 1, Len}
  end.


-spec minimum_steps(S :: unicode:unicode_binary()) -> integer().
minimum_steps(S) ->
  Data = binary:bin_to_list(S),
  Len = length(Data),

  {Result, _, _, _} = lists:foldr(fun finder/2, {0, 0, Len, Len}, Data),
  Result.
```