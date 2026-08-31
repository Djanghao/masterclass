# Elixir solution use :gb_set and MapSet.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4945211/](https://leetcode.com/problems/detect-cycles-in-2d-grid/solutions/4945211/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 2780ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 287.73MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec contains_cycle(grid :: [[char]]) :: boolean
  def contains_cycle(grid) do
    {_, m_grid} =
      Enum.reduce(grid, {0, %{}}, fn row, {i, m_grid} ->
        {_, m_grid} =
          Enum.reduce(row, {0, m_grid}, fn col, {j, m_grid} ->
            {j + 1, Map.put(m_grid, {i, j}, col)}
          end)
        {i + 1, m_grid}
        end)

    {m, n} = {Enum.count(grid), Enum.count(grid |> hd)}
    Enum.reduce_while(0..m-1, {false, MapSet.new()}, fn i, {_res, visited} ->
      {res, visited} =
        Enum.reduce_while(0..n-1, {false, visited}, fn j, {_res, visited} ->
          if not MapSet.member?(visited, {i, j}) do
            {res, visited} = bfs(m_grid, m, n, i, j, -1, -1, visited)
            if res do
              {:halt, {true, visited}}
            else
              {:cont, {false, visited}}
            end
          else
            {:cont, {false, visited}}
          end
        end)
      if res do
        {:halt, {true, visited}}
      else
        {:cont, {false, visited}}
      end
    end)
    |> elem(0)
  end

  @spec bfs(m_grid :: %{}, m :: integer, n :: integer, i :: integer, j :: integer, x :: integer, y :: integer, visited :: %{}) :: {Boolean, %{}}
  def bfs(m_grid, m, n, i, j, x, y, visited) do
    visited = Map.put(visited, {i, j}, true)
    que = :gb_sets.new()
    bfs_while(m_grid, m, n, i, j, x, y, :gb_sets.add_element({0, i, j, x, y}, que), visited, false)
  end

  @empty_q :gb_sets.empty()
  @spec bfs_while(m_grid :: %{}, m :: integer, n :: integer, i :: integer, j :: integer, x :: integer, y :: integer, que :: any, visited :: %{}, res :: boolean()) :: {Boolean, %{}}
  def bfs_while(_m_grid, _m, _n, _i, _j, _x, _y, @empty_q, visited, res) do
    {res, visited}
  end

  def bfs_while(m_grid, m, n, i, j, x, y, que, visited, _res) do
    ch = m_grid[{i, j}]
    l = :gb_sets.size(que)
    {res, que, visited} =
      Enum.reduce_while(0..l-1, {false, que, visited}, fn _k, {_res, que, visited} ->
        {{cnt, cur_i, cur_j, cur_x, cur_y}, que} = :gb_sets.take_smallest(que)
        {res, _cnt, que, visited} =
          Enum.reduce_while([{0, 1}, {1, 0}, {0, -1}, {-1, 0}], {false, cnt, que, visited}, fn {di, dj}, {_res, cnt, que, visited} ->
            {ni, nj} = {cur_i + di, cur_j + dj}
            cond do
              ni < 0 or ni >= m or nj < 0 or nj >= n or m_grid[{ni, nj}] != ch ->
                {:cont, {false, cnt, que, visited}}
              ni == cur_x and nj == cur_y ->
                {:cont, {false, cnt, que, visited}}
              MapSet.member?(visited, {ni, nj}) ->
                {:halt, {true, cnt, que, visited}}
              true ->
                {:cont, {false, cnt + 1, :gb_sets.add_element({cnt + 1, ni, nj, cur_i, cur_j}, que), MapSet.put(visited, {ni, nj})}}
            end
        end)
        if res do
          {:halt, {true, que, visited}}
        else
          {:cont, {false, que, visited}}
        end
      end)
    if res do
      {true, visited}
    else
      bfs_while(m_grid, m, n, i, j, x, y, que, visited, false)
    end
  end
end

```