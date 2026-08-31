# Elixir solution use Map.

**Author:** spring555
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5203885/](https://leetcode.com/problems/check-if-grid-satisfies-conditions/solutions/5203885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: 394ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 71.94MB
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
defmodule Solution do
  @spec satisfies_conditions(grid :: [[integer]]) :: boolean
  def satisfies_conditions(grid) do
    {m, n} = {Enum.count(grid), Enum.count(grid |> hd)}
    m_grid =
      Enum.reduce(grid, {0, %{}}, fn row, {i, m_grid} ->
        {_j, m_grid} =
          Enum.reduce(row, {0, m_grid}, fn col, {j, m_grid} ->
            {j + 1, Map.put(m_grid, {i, j}, col)}
          end)
        {i + 1, m_grid}
      end)
      |> elem(1)
    Enum.reduce_while(0..m-1, true, fn i, _res ->
      res =
        Enum.reduce_while(0..n-1, true, fn j, _res ->
          cond do
            j < n-1 and m_grid[{i, j}] == m_grid[{i, j + 1}] ->
              {:halt, false}
            i < m-1 and m_grid[{i, j}] != m_grid[{i + 1,j}] ->
              {:halt, false}
            true ->
              {:cont, true}
          end
        end)
      if res do
        {:cont, res}
      else
        {:halt, res}
      end
    end)
  end
end

```