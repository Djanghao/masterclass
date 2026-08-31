# Elixir Greedy Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2447725/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2447725/)

---

```elixir
defmodule Solution do
  @spec is_possible(nums :: [integer]) :: boolean
  def is_possible(nums) do
    to_place =
      nums
      |> Enum.reduce(%{}, fn n, acc ->
        Map.update(acc, n, 1, &(&1 + 1))
      end)

    aux(nums, to_place, %{})
  end

  def aux([], _, _), do: true

  def aux([n | ns], to_place, splitted) do
    if to_place[n] == 0 do
      aux(ns, to_place, splitted)
    else
      to_place = Map.update!(to_place, n, &(&1 - 1))

      cond do
        Map.get(splitted, n - 1, 0) > 0 ->
          aux(
            ns,
            to_place,
            splitted |> Map.update(n, 1, &(&1 + 1)) |> Map.update!(n - 1, &(&1 - 1))
          )

        Map.get(to_place, n + 1, 0) > 0 && Map.get(to_place, n + 2, 0) > 0 ->
          aux(
            ns,
            to_place |> Map.update!(n + 1, &(&1 - 1)) |> Map.update!(n + 2, &(&1 - 1)),
            splitted |> Map.update(n + 2, 1, &(&1 + 1))
          )

        true ->
          false
      end
    end
  end
end
```