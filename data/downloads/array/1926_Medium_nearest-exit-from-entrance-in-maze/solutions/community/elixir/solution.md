# Elixir BFS Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2835064/](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/solutions/2835064/)

---

```elixir
defmodule Solution do
  @spec nearest_exit(maze :: [[char]], entrance :: [integer]) :: integer
  def nearest_exit(maze, [x, y]) do
    m = maze |> length()
    n = maze |> hd() |> length()

    g =
      maze
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {row, i}, acc ->
        row
        |> Enum.with_index()
        |> Enum.reduce(acc, fn {x, j}, acc ->
          Map.put(acc, {i, j}, x)
        end)
      end)

    bfs(:queue.from_list([{x, y, 0}]), {g, m, n}, MapSet.new(), [x, y])
  end

  def bfs(q, {g, m, n} = grid, vistied, entrance) do
    if :queue.is_empty(q) do
      -1
    else
      {x, y, ct} = :queue.head(q)
      q = :queue.tail(q)

      cond do
        exit?(grid, x, y) && [x, y] != entrance ->
          ct

        {x, y} in vistied ->
          bfs(q, grid, vistied, entrance)

        true ->
          vistied = MapSet.put(vistied, {x, y})

          [{-1, 0}, {0, 1}, {1, 0}, {0, -1}]
          |> Enum.reduce(q, fn {dx, dy}, acc ->
            if valid?(grid, x + dx, y + dy) do
              :queue.snoc(acc, {x + dx, y + dy, ct + 1})
            else
              acc
            end
          end)
          |> bfs(grid, vistied, entrance)
      end
    end
  end

  def exit?({_, m, n}, x, y) do
    x == 0 || x == m - 1 || y == 0 || y == n - 1
  end

  def valid?({g, m, n}, x, y) do
    x >= 0 && x < m && y >= 0 && y < n && g[{x, y}] == ?.
  end
end
```