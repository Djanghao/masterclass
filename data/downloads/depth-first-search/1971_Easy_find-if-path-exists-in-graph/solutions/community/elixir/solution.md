# Elixir, BFS/DFS

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/4563647/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/4563647/)

---

# Complexity
- Time complexity:
O(e + n) where e is the number of edges and n is the number of nodes

- Space complexity:
O(e + n)
# BFS
```
defmodule Solution do
  @spec valid_path(n :: integer, edges :: [[integer]], source :: integer, destination :: integer) :: boolean
  def valid_path(_n, edges, source, destination) do 
    node_path_map = create_node_path_map(edges)
    do_valid_paths([source], MapSet.new(), destination, node_path_map, MapSet.new())
  end

  defp do_valid_paths([node | tl], child_nodes, destination, node_path_map, visited_nodes) do
    cond do
      node == destination -> true
      MapSet.member?(visited_nodes, node) -> do_valid_paths(tl, child_nodes, destination, node_path_map, visited_nodes)
      true -> child_nodes = Enum.reduce(node_path_map[node], child_nodes, fn x, acc -> MapSet.put(acc, x) end)
              do_valid_paths(tl, child_nodes, destination, node_path_map, MapSet.put(visited_nodes, node))
    end
  end
  defp do_valid_paths([], child_nodes, destination, node_path_map, visited_nodes) do
    MapSet.size(child_nodes) != 0 &&
    do_valid_paths(MapSet.to_list(child_nodes), MapSet.new(), destination, node_path_map, visited_nodes)
  end

   defp create_node_path_map(edges) do
    for [u, v] <- edges, reduce: %{} do
      map -> Map.update(map, u, [v], &[v | &1])
             |> Map.update(v, [u], &[u | &1])
    end
  end
end
```

# DFS
```
defmodule Solution do
  @spec valid_path(n :: integer, edges :: [[integer]], source :: integer, destination :: integer) :: boolean
  def valid_path(_n, edges, source, destination) do 
    node_path_map = create_node_path_map(edges)
    do_valid_paths([source], destination, node_path_map, MapSet.new()) |> elem(0)
  end

  defp do_valid_paths([path | tl], destination, node_path_map, visited_nodes) do
    cond do
      path == destination -> {true, visited_nodes}
      MapSet.member?(visited_nodes, path) -> do_valid_paths(tl, destination, node_path_map, visited_nodes)
      true -> visited_nodes = MapSet.put(visited_nodes, path)
              case do_valid_paths(node_path_map[path], destination, node_path_map, visited_nodes) do
                {false, visited_nodes} -> do_valid_paths(tl, destination, node_path_map, visited_nodes)
                x -> x
              end
    end
  end
  defp do_valid_paths(_, _, _, visited_nodes), do: {false, visited_nodes}

  defp create_node_path_map(edges) do
    for [u, v] <- edges, reduce: %{} do
      map -> Map.update(map, u, [v], &[v | &1])
             |> Map.update(v, [u], &[u | &1])
    end
  end
end
```
