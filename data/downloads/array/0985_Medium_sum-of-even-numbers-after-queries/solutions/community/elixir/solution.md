# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2879466/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/2879466/)

---

# Code
```elixir
defmodule Solution do
  @spec sum_even_after_queries(nums :: [integer], queries :: [[integer]]) :: [integer]
  def sum_even_after_queries(nums, queries) do
    even_sum =
      Enum.filter(nums, &(rem(&1, 2) == 0))
      |> Enum.sum()
    map = for {x, i} <- Enum.with_index(nums), into: %{}, do: {i, x}
    Enum.scan(queries, {even_sum, map}, &do_scan/2)
    |> Enum.map(&(elem(&1, 0)))
  end

  defp do_scan([val, index], {even_sum, map}) do
    old = Map.get(map, index)
    map = Map.update!(map, index, &(&1 + val))
    case {abs(rem(val, 2)), abs(rem(old, 2))} do
      {0, 0} -> {even_sum + val, map}
      {0, 1} -> {even_sum, map}
      {1, 0} -> {even_sum - old, map}
      {1, 1} -> {even_sum + old + val, map}
    end
  end
end
```