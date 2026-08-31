# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/3130756/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/3130756/)

---

Transform `nums` to a "modulo prefix-sum" list and then use `Enum.reduce()`.
# Code
```elixir
defmodule Solution do
  @spec min_subarray(nums :: [integer], p :: integer) :: integer
  def min_subarray(nums, p) do
    mod = rem(Enum.sum(nums), p)
    rev = rem(p - mod, p)
    find(nums, rev, p)
  end

  defp find(_, 0, _), do: 0
  defp find(nums, rev, p) do
    n = length(nums)
    Stream.scan(nums, &(&1 + &2))
    |> Stream.map(&(rem(&1, p)))
    |> Stream.with_index()
    |> Enum.reduce({n, %{0 => -1}}, fn {x, i}, {ans, map} ->
      j = Map.get(map, rem(x + rev, p), -n)
      ans = min(ans, i - j)
      map = Map.put(map, x, i)
      {ans, map}
    end)
    |> then(fn {ans, _} ->
      if ans == n, do: -1, else: ans
    end)
  end
end
```