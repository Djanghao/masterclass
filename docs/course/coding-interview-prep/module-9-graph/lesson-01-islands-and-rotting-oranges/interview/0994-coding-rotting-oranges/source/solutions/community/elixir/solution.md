# Elixir - BFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/rotting-oranges/solutions/3785495/](https://leetcode.com/problems/rotting-oranges/solutions/3785495/)

---

# Code
```
defmodule Solution do
  @empty_queue :queue.new()

  @spec oranges_rotting(grid :: [[integer]]) :: integer
  def oranges_rotting(grid) do
    m = length(grid)
    n = length(hd(grid))

    {grid, rotten} =
      for {row, i} <- Stream.with_index(grid),
          {val, j} <- Stream.with_index(row),
          reduce: {%{}, []} do
        {grid, rotten} ->
          case val do
            0 -> {grid, rotten}
            1 -> {Map.put(grid, {i, j}, 9999), rotten}
            2 -> {Map.put(grid, {i, j}, 0), [{i, j} | rotten]}
          end
      end

    grid = for coord <- rotten, reduce: grid do
      grid ->
        queue = enqueue(@empty_queue, coord, 0)
        update(grid, queue, MapSet.new())
    end

    grid
    |> Map.values()
    |> Enum.max(fn -> 0 end)
    |> case do
      9999 -> -1
      n -> n
    end
  end

  defp update(grid, @empty_queue, _seen), do: grid

  defp update(grid, queue, visited) do
    {{i, j} = coord, steps, queue} = dequeue(queue)

    if coord in visited do
      update(grid, queue, visited)
    else
      visited = MapSet.put(visited, coord)

      case grid[coord] do
        nil ->
          update(grid, queue, visited)

        n ->
          grid = if n <= steps do
            grid
          else
            Map.put(grid, coord, steps)
          end

          new_steps = steps + 1
          
          queue =
            queue
            |> enqueue({i - 1, j}, new_steps)
            |> enqueue({i + 1, j}, new_steps)
            |> enqueue({i, j - 1}, new_steps)
            |> enqueue({i, j + 1}, new_steps)

          update(grid, queue, visited)
      end
    end    
  end

  defp enqueue(queue, coord, steps), do: :queue.in({coord, steps}, queue)
  
  defp dequeue(queue) do
    {{:value, {coord, steps}}, queue} = :queue.out(queue)
    {coord, steps, queue}
  end
end
```