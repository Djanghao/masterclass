# Erlang | Prefix Sum 🧮

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863411/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863411/)

---

# Code
```erlang []
-spec min_subarray(Nums :: [integer()], P :: integer()) -> integer().
min_subarray(Nums, P) ->
  Remainder = lists:foldl(fun(Num, Acc) -> (Acc + Num) rem P end, 0, Nums),
  case Remainder =:= 0 of
    true -> 0;
    false ->
      Size = length(Nums),
      PrefixToIndex = dict:store(0, -1, dict:new()),

      Finder = fun(Num, {Index, PrefixToIndex, Current, MinSize}) ->
        Prefix = (Current + Num) rem P,
        Target = (Prefix - Remainder + P) rem P,
        Result = case dict:find(Target, PrefixToIndex) of
          {ok, _} ->
            case dict:take(Target, PrefixToIndex) of
              {Value, _} -> min(MinSize, Index - Value);
              error -> MinSize
            end;
          error -> MinSize
        end,

        {Index + 1, dict:store(Prefix, Index, PrefixToIndex), Prefix, Result}
      end,

      {_, _, _, MinSize} = lists:foldl(Finder, {0, PrefixToIndex, 0, Size}, Nums),
      case MinSize =:= Size of
        true -> -1;
        false -> MinSize
      end
  end.
```