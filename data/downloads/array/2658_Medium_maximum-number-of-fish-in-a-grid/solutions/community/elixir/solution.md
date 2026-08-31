# Elixir solution.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/4945900/](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/solutions/4945900/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 702ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 72.38MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec find_max_fish(grid :: [[integer]]) :: integer
  def find_max_fish(grid) do
    {_, m_grid} =
      Enum.reduce(grid, {0, %{}}, fn row, {i, m_grid} ->
        {_, m_grid} =
          Enum.reduce(row, {0, m_grid}, fn col, {j, m_grid} ->
            if col != 0 do
              {j + 1, Map.put(m_grid, {i, j}, col)}
            else
              {j + 1, m_grid}
            end
          end)
        {i + 1, m_grid}
      end)
    {m, n} = {Enum.count(grid), Enum.count(grid |> hd)}
    Enum.reduce(Map.keys(m_grid), {m_grid, 0}, fn {i, j}, {m_grid, ans} ->
      if Map.has_key?(m_grid, {i, j}) do
        {m_grid, cnt} = dfs(m_grid, m, n, i, j, m_grid[{i, j}])
        {m_grid, max(ans, cnt)}
      else
        {m_grid, ans}
      end
    end)
    |> elem(1)
  end

  def dfs(m_grid, m, n, i, j, cnt) do
    m_grid = Map.delete(m_grid, {i, j})
    Enum.reduce([{1, 0}, {-1, 0}, {0, 1}, {0, -1}], {m_grid, cnt}, fn {di, dj}, {m_grid, cnt} ->
      {ni, nj} = {i + di, j + dj}
      cond do
        ni < 0 or m <= ni or nj < 0 or n <= nj ->
          {m_grid, cnt}
        Map.has_key?(m_grid, {ni, nj}) ->
          {m_grid, n_cnt} = dfs(m_grid, m, n, ni, nj, m_grid[{ni, nj}])
          {m_grid, cnt + n_cnt}
        true ->
          {m_grid, cnt}
      end
    end)
  end
end

```