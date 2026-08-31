# Elixir solution highlighting difficulties of this sort of problem in functional lang

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2052717/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2052717/)

---

```elixir
defmodule Solution do
  @neighbors [{1, 1}, {1, 0}, {0, 1}, {-1, 1}, {1, -1}, {0, -1}, {-1, 0}, {-1, -1}]
  @empty_q :gb_sets.empty()

  @spec shortest_path_binary_matrix(grid :: [[integer]]) :: integer
  def shortest_path_binary_matrix(grid) do
    n = length(grid) -1
    valid_pts = 
      grid 
      |> Enum.with_index() 
      |> Enum.flat_map(fn {row, i} ->  
                           row 
                           |> Enum.with_index() 
                           |> Enum.reject(fn {v, _} -> v == 1 end) 
                           |> Enum.map(fn {_, j} -> {j, i} end) 
                        end) 
      |> Enum.reduce(Map.new(), fn pt, map -> Map.put(map, pt, -1) end)

    if [{0,0}, {n, n}] |> Enum.any?(fn pt -> not Map.has_key?(valid_pts, pt) end) do
      -1
    else
      visited = MapSet.new()
      q = :gb_sets.insert({1, 0, 0}, @empty_q)
      path_finder(Map.put(valid_pts, {0, 0}, 1), visited, q, n, 1)
    end
  end
      
  def path_finder(_, _, @empty_q, _, distance), do: -1    
  def path_finder(pts, visited, queue, target, distance) do
    {{d, x, y}, sub_q} = :gb_sets.take_smallest(queue)
    cond do
      MapSet.member?(visited, {x, y}) ->
        path_finder(pts, visited, sub_q, target, distance)
      {x, y} == {target, target} ->
        #IO.inspect(visited, label: "path in the end")
        d
      true ->
        v = MapSet.put(visited, {x, y})
        ns = neighbors({x,y}, target) |> Enum.reject(&MapSet.member?(visited, &1))
        {pts, queue} = 
          ns 
          |> Enum.reduce({pts, sub_q}, fn {a, b} = n, {map, q} -> 
                            case map[n] do 
                              x when x == -1 ->
                                  { 
                                   Map.put(map, n, d + 1),
                                   :gb_sets.add_element({d + 1, a, b}, q)
                                  }
                              _ -> { map, q }
                            end
                          end)
        path_finder(pts, v, queue, target, d + 1)
      end
    end
      
  def neighbors({x,y}, n) do
    @neighbors
    |> Enum.map(fn {a, b} -> {a + x, y + b} end)
    |> Enum.reject(fn {a, b} -> a > n or b > n end)
    |> Enum.reject(fn {a, b} -> a < 0 or b < 0 end)
  end
end
```