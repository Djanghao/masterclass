# Elixir Recursive Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3033345/](https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3033345/)

---

```
defmodule Solution do
  @spec min_time(n :: integer, edges :: [[integer]], has_apple :: [boolean]) :: integer
  def min_time(n, edges, has_apple) do
    has_apple =
      has_apple
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {b, i}, acc -> Map.put(acc, i, b) end)

    edges
    |> Enum.reduce(%{}, fn [a, b], acc ->
      acc
      |> Map.update(a, [b], &[b | &1])
      |> Map.update(b, [a], &[a | &1])
    end)
    |> aux(0, has_apple, -1)
    |> :erlang.-(2)
    |> max(0)
  end

  def aux(tree, curr, has_apple, parent) do
    Map.get(tree, curr, [])
    |> Enum.reduce(0, fn child, acc ->
      acc + if child == parent, do: 0, else: aux(tree, child, has_apple, curr)
    end)
    |> then(fn ct ->
      cond do
        ct > 0 -> ct + 2
        has_apple[curr] -> 2
        true -> 0
      end
    end)
  end
end

```