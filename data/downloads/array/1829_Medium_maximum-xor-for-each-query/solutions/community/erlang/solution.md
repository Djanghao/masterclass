# Erlang | Prefix Sum | Bit Manipulation

**Author:** tyulpan
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021530/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021530/)

---

# Code
```erlang []
-spec get_maximum_xor(Nums :: [integer()], MaximumBit :: integer()) -> [integer()].
get_maximum_xor(Nums, MaximumBit) ->
  Value = lists:foldl(fun(N, Result) -> Result bxor N end, 0, Nums),
  Mask = (1 bsl MaximumBit) - 1,
  Iter = fun(Num, {Value, Result}) -> 
    {Value bxor Num, [(Value bxor Mask) | Result]}
  end,
  {_, Result} = lists:foldr(Iter, {Value, []}, Nums),
  lists:reverse(Result).
```