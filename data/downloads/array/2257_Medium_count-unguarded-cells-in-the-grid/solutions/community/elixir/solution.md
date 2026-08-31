# Elixir - Just do it!

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/6067395/](https://leetcode.com/problems/count-unguarded-cells-in-the-grid/solutions/6067395/)

---

Well, Elixir does not perform well in such use cases. Took ~2.5s to finish.

#### UPDATE

Added a binary search solution which still takes ~1.6s to run.
The idea is that, for each section in between two walls, if there is one or more guards standing in that section, then the whole section is guarded. For simplicity, I just surrounded the whole area with walls.

# Code
```elixir [Straight]
defmodule Solution do
  @spec count_unguarded(m :: integer, n :: integer, guards :: [[integer]], walls :: [[integer]]) :: integer
  def count_unguarded(m, n, guards, walls) do
    guards = MapSet.new(guards, &List.to_tuple/1)
    walls = MapSet.new(walls, &List.to_tuple/1)
    obstacles = MapSet.union(guards, walls)

    guards
    |> Enum.map(fn {i, j} ->
      [
        {i, j + 1}
        |> Stream.iterate(fn {i, j} -> {i, j + 1} end)
        |> Enum.take_while(fn {_i, j} = tile ->
          (j < n) and (tile not in obstacles)
        end),

        {i, j - 1}
        |> Stream.iterate(fn {i, j} -> {i, j - 1} end)
        |> Enum.take_while(fn {_i, j} = tile ->
          (j >= 0) and (tile not in obstacles)
        end),

        {i + 1, j}
        |> Stream.iterate(fn {i, j} -> {i + 1, j} end)
        |> Enum.take_while(fn {i, _j} = tile ->
          (i < m) and (tile not in obstacles)
        end),

        {i - 1, j}
        |> Stream.iterate(fn {i, j} -> {i - 1, j} end)
        |> Enum.take_while(fn {i, _j} = tile ->
          (i >= 0) and (tile not in obstacles)
        end)
      ]
    end)
    |> List.flatten()
    |> MapSet.new()
    |> then(fn guarded ->
      m * n - MapSet.size(obstacles) - MapSet.size(guarded)
    end)
  end
end
```

```elixir [Binary Search]
defmodule Solution do
  @spec count_unguarded(m :: integer, n :: integer, guards :: [[integer]], walls :: [[integer]]) :: integer
  def count_unguarded(m, n, guards, walls) do
    guards_by_x =
      guards
      |> Enum.group_by(&hd/1, &List.last/1)
      |> Map.new(fn {k, v} ->
        {k, List.to_tuple(Enum.sort(v))}
      end)

    guards_by_y =
      guards
      |> Enum.group_by(&List.last/1, &hd/1)
      |> Map.new(fn {k, v} ->
        {k, List.to_tuple(Enum.sort(v))}
      end)

    walls_by_x =
      walls
      |> Enum.group_by(&hd/1, &List.last/1)
      |> Map.new(fn {k, v} -> {k, Enum.sort([-1, n | v])} end)

    walls_by_y =
      walls
      |> Enum.group_by(&List.last/1, &hd/1)
      |> Map.new(fn {k, v} -> {k, Enum.sort([-1, m | v])} end)

    guarded_1 =
      0..m - 1
      |> Enum.map(&{&1, walls_by_x[&1] || [-1, n]})
      |> Enum.flat_map(fn {x, wall_ys} ->
        wall_ys
        |> Enum.chunk_every(2, 1, :discard)
        |> Enum.filter(fn [y1, y2] ->
          guarded?(y1 + 1, y2 - 1, guards_by_x[x])
        end)
        |> Enum.map(fn [y1, y2] ->
          (y1 + 1..y2 - 1//1)
          |> Enum.map(&{x, &1})
          |> MapSet.new()
        end)
      end)
      |> Enum.reduce(&MapSet.union/2)

    guarded_2 =
      0..n - 1
      |> Enum.map(&{&1, walls_by_y[&1] || [-1, m]})
      |> Enum.flat_map(fn {y, wall_xs} ->
        wall_xs
        |> Enum.chunk_every(2, 1, :discard)
        |> Enum.filter(fn [x1, x2] ->
          guarded?(x1 + 1, x2 - 1, guards_by_y[y])
        end)
        |> Enum.map(fn [x1, x2] ->
          (x1 + 1..x2 - 1//1)
          |> Enum.map(&{&1, y})
          |> MapSet.new()
        end)
      end)
      |> Enum.reduce(&MapSet.union/2)

    guarded = MapSet.union(guarded_1, guarded_2)

    m * n - length(walls) - MapSet.size(guarded)
  end

  defp guarded?(_, _, nil), do: false

  defp guarded?(low, high, _) when low > high, do: false

  defp guarded?(low, high, guards) do
    found = binary_search_min(guards, low, 0, tuple_size(guards))
    !!found && found <= high
  end

  defp binary_search_min(tuple, bound, i, i) do
    cond do
      i == tuple_size(tuple) -> nil
      elem(tuple, i) >= bound -> elem(tuple, i)
      true -> nil
    end
  end

  defp binary_search_min(tuple, bound, i, j) do
    m = div(i + j, 2)
    val = elem(tuple, m)

    cond do
      bound < val ->
        binary_search_min(tuple, bound, i, m)

      bound > val ->
        binary_search_min(tuple, bound, m + 1, j)

      true ->
        val
    end
  end
end
```