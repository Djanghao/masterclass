# Elixir Greedy Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/2456481/](https://leetcode.com/problems/stamping-the-sequence/solutions/2456481/)

---

```elixir
defmodule Solution do
  @spec moves_to_stamp(stamp :: String.t(), target :: String.t()) :: [integer]
  def moves_to_stamp(stamp, target) do
    stamp_len = String.length(stamp)

    stamp = string_to_map(stamp)

    target_len = String.length(target)

    target = string_to_map(target)

    aux(stamp, stamp_len, target, target_len, [])
    |> then(fn {target, ans} ->
      ct = target |> Map.values() |> Enum.count(&(&1 == "?"))
      if ct == target_len, do: ans, else: []
    end)
  end

  def aux(stamp, stamp_len, target, target_len, ans) do
    for i <- 0..(target_len - stamp_len), reduce: {false, target, ans} do
      {continue, target, ans} ->
        {changed, target, ans} = change(stamp, stamp_len, target, i, ans)
        {changed || continue, target, ans}
    end
    |> then(fn {continue, target, ans} ->
      if continue do
        aux(stamp, stamp_len, target, target_len, ans)
      else
        {target, ans}
      end
    end)
  end

  def change(stamp, stamp_len, target, i, ans) do
    changed =
      0..(stamp_len - 1)
      |> Enum.reduce_while(false, fn j, acc ->
        cond do
          target[i + j] == "?" -> {:cont, acc}
          target[i + j] != stamp[j] -> {:halt, false}
          true -> {:cont, true}
        end
      end)

    if changed do
      target =
        for j <- 0..(stamp_len - 1), reduce: target do
          acc -> Map.put(acc, i + j, "?")
        end

      {changed, target, [i | ans]}
    else
      {changed, target, ans}
    end
  end

  def string_to_map(s) do
    s
    |> String.graphemes()
    |> Enum.with_index()
    |> Enum.reduce(%{}, fn {c, i}, acc ->
      Map.put(acc, i, c)
    end)
  end
end
```