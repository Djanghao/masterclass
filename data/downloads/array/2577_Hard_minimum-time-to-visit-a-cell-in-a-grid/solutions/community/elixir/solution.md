# Elixir - Dijkstra

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6093279/](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/solutions/6093279/)

---

# Intuition
As long as you have visited one cell other than the initial cell, you can visit any cell by killing time going back and forth until the current time is greater than or equal to the cell's threshold.

# Complexity
- Time complexity: $$O(m \\cdot n \\log(m \\cdot n))$$ amortized.

- Space complexity: $$O(m \\cdot n)$$

# Code
```elixir [Dijkstra]
defmodule Solution do
  # Just for the syntax `grid[{i, j}]`
  # because I'm too lazy to refactor my code.
  defmodule Grid do
    @behaviour Access

    defstruct [:data, :ibound, :jbound]

    def new(list_2d) do
      tuple_2d =
        list_2d
        |> Enum.map(&List.to_tuple/1)
        |> List.to_tuple()
      
      %__MODULE__{
        data: tuple_2d,
        ibound: tuple_size(tuple_2d) - 1,
        jbound: tuple_size(elem(tuple_2d, 0)) - 1
      }
    end

    @impl true
    def fetch(grid, {i, j}) do
      if i < 0 or i > grid.ibound or j < 0 or j > grid.jbound do
        :error
      else
        {:ok, grid.data |> elem(i) |> elem(j)}
      end
    end

    @impl true
    def get_and_update(_, _, _) do
      raise RuntimeError, "Not implemented"
    end

    @impl true
    def pop(_, _) do
      raise RuntimeError, "Not implemented"
    end
  end

  # Pairing heap turns out to be quite optimal for Dijkstra algorithm,
  # both fast to run and easy to implement in an FP language,
  # though it does not guarantee FIFO for items with the same priority.
  defmodule PQ do
    def new(), do: nil

    def push(pq, value, priority) do
      meld(pq, {priority, value, []})
    end

    def pop({priority, value, children}) do
      {value, priority, pair(children)}
    end

    defp meld(nil, pq), do: pq
    defp meld(pq, nil), do: pq
    defp meld({p1, v1, c1} = pq1, {p2, v2, c2} = pq2) do
      if p1 < p2 do
        {p1, v1, [pq2 | c1]}
      else
        {p2, v2, [pq1 | c2]}
      end
    end

    defp pair([]), do: nil
    defp pair([pq]), do: pq
    defp pair([pq1, pq2 | rest]) do
      meld(meld(pq1, pq2), pair(rest))
    end
  end

  @spec minimum_time(grid :: [[integer]]) :: integer
  def minimum_time(grid) do
    grid = Grid.new(grid)

    if grid[{0, 1}] > 1 and grid[{1, 0}] > 1 do
      -1
    else
      pq = PQ.new() |> PQ.push({0, 0}, 0)

      dst = {grid.ibound, grid.jbound}

      dijkstra(pq, MapSet.new(), grid, dst)
    end
  end

  defp dijkstra(pq, visited, grid, dst) do
    {{i, j} = coord, t, pq} = PQ.pop(pq)

    cond do
      coord == dst ->
        t

      coord in visited ->
        dijkstra(pq, visited, grid, dst)

      true ->
        visited = MapSet.put(visited, coord)

        pq =
          for neighbor <- [{i - 1, j}, {i + 1, j}, {i, j - 1}, {i, j + 1}],
              thres = grid[neighbor],
              roundtrip = max(div(thres - t, 2) * 2, 0),
              eta = t + roundtrip + 1,
              reduce: pq do
            pq -> PQ.push(pq, neighbor, eta)
          end

        dijkstra(pq, visited, grid, dst)
    end
  end
end
```