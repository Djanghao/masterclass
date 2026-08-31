# Elixir - BFS

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/5057575/](https://leetcode.com/problems/open-the-lock/solutions/5057575/)

---

# Approach
Transform strings in tuples. ex: "0000" -> {0, 0, 0, 0}
Then BFS from 0000 -> Destination, checking for visited values or deadends.



# Code
```
defmodule Solution do
  @spec open_lock(deadends :: [String.t], target :: String.t) :: integer
  def open_lock(deadends, target) do
    target = target |> String.graphemes() |> Enum.map(&String.to_integer/1) |> List.to_tuple()
    start = {0, 0, 0, 0}
    
    deadends = Enum.map(deadends, fn n -> 
      n |> String.graphemes() |> Enum.map(&String.to_integer/1) |> List.to_tuple()
    end)
    |> MapSet.new()

    if MapSet.member?(deadends, target) or
       MapSet.member?(deadends, start) do
      -1
    else
      bfs(MapSet.new(), [start], deadends, 0, target)
    end
  end


  defp bfs(_visited, [], _deadends, _step, _target), do: -1
  defp bfs(visited, level, deadends, step, target) do
    level =  MapSet.new(level)
    if MapSet.member?(level, target) do
      step
    else
      visited = MapSet.union(visited, level)
      next_level = Enum.flat_map(level, fn n ->
        build_next(n, visited, deadends)
      end)
      bfs(visited, next_level, deadends, step + 1, target)
    end
  end

  @nexts [{0, 1}, {1, 1}, {2, 1}, {3, 1}, {0, -1}, {1, -1}, {2, -1}, {3, -1}]
  defp build_next(n, visited, deadends) do
    Enum.map(@nexts, fn {i, change} -> 
      digit = elem(n, i) + change + 10 
      digit = rem(digit, 10)
      new_n = put_elem(n, i, digit)
      if MapSet.member?(deadends, new_n) or MapSet.member?(visited, new_n) do
        nil
      else
        new_n
      end
    end) |> Enum.reject(&is_nil/1)
  end
end
```