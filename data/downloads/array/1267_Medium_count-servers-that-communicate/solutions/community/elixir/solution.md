# Elixir solution

**Author:** JJamesWWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-servers-that-communicate/solutions/1899636/](https://leetcode.com/problems/count-servers-that-communicate/solutions/1899636/)

---

Count number of servers in columns; try to add # of servers by row, but if only one server, then check if column has > 1 server.
```elixir
defmodule Solution do
  @spec count_servers(grid :: [[integer]]) :: integer
  def count_servers(grid) do
    col_freqs = grid |> Enum.reduce(%{}, fn row, map -> row |> Enum.with_index() |> Enum.reduce(map, fn col, map -> Map.put(map, col, Map.get(map, col, 0) + 1) end) end)
    grid |> Enum.reduce(0, fn row, acc -> 
      freqs = Enum.frequencies(row)                              
      case Map.get(freqs, 1, 0) do                                   
        0 -> acc
        1 -> if Map.get(col_freqs, {1, Enum.find_index(row, &(&1 == 1))}, 0) > 1, do: acc + 1, else: acc
        _ -> acc + Map.get(freqs, 1)
      end
    end)
  end
end
```