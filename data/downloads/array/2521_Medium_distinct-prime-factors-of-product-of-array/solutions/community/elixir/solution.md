# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3079464/](https://leetcode.com/problems/distinct-prime-factors-of-product-of-array/solutions/3079464/)

---

```
defmodule Solution do
  @spec distinct_prime_factors(nums :: [integer]) :: integer
  def distinct_prime_factors(nums) do
    nums
    |> Enum.reduce(%MapSet{}, fn n, st ->
      prime_factors(2, n, st)
    end)
    |> MapSet.size()
  end

  def prime_factors(p, n, st) when p > n, do: st

  def prime_factors(p, n, st) do
    if rem(n, p) === 0 do
      prime_factors(p, div(n, p), MapSet.put(st, p))
    else
      prime_factors(p + 1, n, st)
    end
  end
end

```