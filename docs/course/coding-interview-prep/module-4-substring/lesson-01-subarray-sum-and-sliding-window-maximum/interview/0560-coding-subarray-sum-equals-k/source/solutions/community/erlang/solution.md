# Erlang $$O(n)$$

**Author:** MPMPMP88
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/3726977/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/3726977/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
-spec subarray_sum(Nums :: [integer()], K :: integer()) -> integer().
subarray_sum(Nums, K) ->
  Ets = ets:new(subarray, []),
  ets:insert(Ets, {0,1}),
  do(Nums, K, Ets, 0, 0).

ets_lookup(Ets, Key) ->
  case ets:lookup(Ets, Key) of 
    [] ->
      0;
    [{Key, Val}] ->
      Val
  end.

do([Num|Nums], K, Ets, Sum, Count) ->
    NSum = Sum + Num,
    SumMinusK = NSum - K,
    NCount = ets_lookup(Ets, SumMinusK) + Count,
    ets:insert(Ets, {NSum, ets_lookup(Ets, NSum)+1}),
    do(Nums, K, Ets, NSum, NCount);

do([], _, _, _, Count) ->
    Count.
```