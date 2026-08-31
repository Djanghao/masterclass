# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/where-will-the-ball-fall/solutions/2068754/](https://leetcode.com/problems/where-will-the-ball-fall/solutions/2068754/)

---

```elixir
defmodule Solution do
  @spec find_ball(grid :: [[integer]]) :: [integer]
  def find_ball(grid) do
    g =
      grid
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, m ->
        row
        |> Enum.with_index()
        |> Enum.reduce(m, fn {n, j}, m ->
          Map.put(m, {i, j}, n)
        end)
      end)

    r = Enum.count(grid)
    c = Enum.count(hd(grid))

    for i <- 0..(c - 1) do
      aux({g, r, c}, 0, i)
    end
  end

  def aux({g, r, c}, x, y) do
    cond do
      y < 0 || y == c ->
        -1

      x == r ->
        y

      g[{x, y}] == 1 ->
        if g[{x, y + 1}] == -1 do
          -1
        else
          aux({g, r, c}, x + 1, y + 1)
        end

      true ->
        if g[{x, y - 1}] == 1 do
          -1
        else
          aux({g, r, c}, x + 1, y - 1)
        end
    end
  end
end
```