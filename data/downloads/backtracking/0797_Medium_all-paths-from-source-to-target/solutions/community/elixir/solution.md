# Elixir solution

**Author:** dfj3js
**Votes:** 0
**Link:** [https://leetcode.com/problems/all-paths-from-source-to-target/solutions/3207433/](https://leetcode.com/problems/all-paths-from-source-to-target/solutions/3207433/)

---



# Code
```
defmodule Solution do
    @spec all_paths_source_target(graph :: [[integer]]) :: [[integer]]
    def all_paths_source_target(graph) do
        {_, {len, graph}} = Enum.map_reduce(graph, {0, %{}}, fn e, {i, map}-> {e, {i + 1, Map.put(map, i, e)}} end)
        set = MapSet.new()
        MapSet.to_list(find_paths(graph,0, [], set, len - 1))
    end

    def find_paths(graph, vertex, path_so_far, set, vertex) do 
        MapSet.put(set, path_so_far++[vertex])
    end
    def find_paths(graph, curr, path_so_far, set, dest) do
        edges = Map.get(graph, curr, nil)
        case edges do
            []-> set
            _->
                {_, set} = Enum.map_reduce(edges, set, fn edge, acc -> 
                    {edge, find_paths(graph, edge, path_so_far++[curr], acc, dest)}
                end)
                set
        end
    end
end
```