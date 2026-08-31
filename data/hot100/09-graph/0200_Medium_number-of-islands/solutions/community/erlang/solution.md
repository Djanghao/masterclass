# Elixir with ets module

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/3979670/](https://leetcode.com/problems/number-of-islands/solutions/3979670/)

---

Trying with the Erlang ets module.
# Code
```
defmodule Solution do
  @spec num_islands(grid :: [[char]]) :: integer
  def num_islands(grid) do
    table = :ets.new(:grid, [])
    Enum.with_index(grid)
    |> Enum.each(fn {row, i} ->
      Enum.with_index(row)
      |> Enum.filter(fn {x, _} -> x == ?1 end)
      |> Enum.each(fn {_, j} ->
        :ets.insert(table, {{i, j}})
      end)
    end)
    count(table, 0)
  end

  defp count(table, ans) do
    case :ets.first(table) do
      :"$end_of_table" -> ans
      {i, j} ->
        sink_island(table, {i, j})
        count(table, ans + 1)
    end
  end

  defp sink_island(table, {i, j}) do
    if :ets.member(table, {i, j}) do
      :ets.delete(table, {i, j})
      sink_island(table, {i - 1, j})
      sink_island(table, {i + 1, j})
      sink_island(table, {i, j - 1})
      sink_island(table, {i, j + 1})
    end
  end
end
```