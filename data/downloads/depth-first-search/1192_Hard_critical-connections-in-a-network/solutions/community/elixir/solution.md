# Elixir solution 2 ways

**Author:** stevensonmt
**Votes:** 1
**Link:** [https://leetcode.com/problems/critical-connections-in-a-network/solutions/2073394/](https://leetcode.com/problems/critical-connections-in-a-network/solutions/2073394/)

---

Resources I had to lean on to implement these solutions:
https://stackoverflow.com/questions/15877819/functional-implementation-of-tarjans-strongly-connected-components-algorithm
https://nthomas.org/2020-05-16-critical-connections-leetcode/
https://leetcode.com/problems/critical-connections-in-a-network/discuss/382638/DFS-detailed-explanation-O(orEor)-solution

These state-heavy algorithms are really challenging in a functional language. In Elixir whenever I think of managing shared state I pull in GenServer, but inevitably for these problems that runs into time limit exceeded for the largest test cases. So I have to remind myself that GenServers are basically reducers and then reimplement the algorithm such that the state is passed around in the result of the recursive algorithm.

```elixir
defmodule Solution do
  @spec critical_connections(n :: integer, connections :: [[integer]]) :: [[integer]]
  def critical_connections(n, connections) do
    graph = build_graph(connections)
    
    #tarjan_stack = 
     # 0..n - 1
     # |> Enum.reduce(Map.new(), fn i, m -> Map.put(m, i, 0) end)
    
    #tarjan_state = %{time: 0, dfs_num: tarjan_stack, dfs_low: tarjan_stack, bridges: []}
    #tarjan(0, -1, graph, tarjan_state) |> Map.get(:bridges)
                                                             
    bridges = connections |> Enum.map(&MapSet.new(&1)) |> MapSet.new()

    kaiwensun_stack = 
      0..n - 1
      |> Enum.reduce(Map.new(), fn i, m -> Map.put(m, i, -2) end)
    
                                                                 
    kaiwensun_state = %{rank: kaiwensun_stack, bridges: bridges}
                                                                    
    
    kaiwensun(0, 0, n - 1, graph, kaiwensun_state)
    |> elem(1)
    |> Map.get(:bridges)
    |> Enum.map(&MapSet.to_list(&1))
  end
    
  def build_graph(edges) do 
    edges
    |> Enum.reduce(Map.new(), fn [a,b], m ->
           m 
           |> Map.update(a, MapSet.new([b]), fn c -> MapSet.put(c, b) end)
           |> Map.update(b, MapSet.new([a]), fn c -> MapSet.put(c, a) end)
         end)  
    end
  
  def kaiwensun(node, depth, max, graph, state) do 
    cond do
      state.rank[node] >= 0 -> {state.rank[node], state}
      true ->
          rank = state.rank |> Map.put(node, depth)
          min_back_depth = max
          graph[node]
          |> Enum.reject(fn neighbor -> rank[neighbor] == depth - 1 end)
          |> Enum.reduce({min_back_depth, %{state | rank: rank}}, fn neighbor, {min_back_depth, state} ->
                     {back_depth, state} = kaiwensun(neighbor, depth + 1, max, graph, state)
                     bridges = 
                       if back_depth <= depth do 
                         state.bridges |> MapSet.delete(MapSet.new([node, neighbor]))
                       else
                         state.bridges
                       end
                       min_back_depth = Enum.min([min_back_depth, back_depth])
                       {min_back_depth, Map.put(state, :bridges, bridges)}
                     end)
    end
  end
      
  def tarjan(node, parent, graph, state) do 
    time = state.time + 1
    new_state = 
      state
      |> Map.put(:time, time)
      |> Map.update!(:dfs_num, fn map -> Map.put(map, node, time) end)
      |> Map.update!(:dfs_low, fn map -> Map.put(map, node, time) end)
    
    neighbors = graph[node]

    neighbors
    |> Enum.reject(fn n -> n == parent end)
    |> Enum.reduce(new_state, fn n, curr_state -> 
                       curr_state = 
                           if curr_state.dfs_num[n] == 0 do
                             tarjan(n, node, graph, curr_state)
                           else
                             curr_state
                           end
                       tarjan_helper(node, n, curr_state)
                  end)


  end
      
  def tarjan_helper(node, n, curr_state) do
    low_node = curr_state.dfs_low[node]
    low_neighb = curr_state.dfs_low[n]
    min_node = Enum.min([low_node, low_neighb])
    path_node = curr_state.dfs_num[node]
    bridges =
      if low_neighb > path_node do 
             [ [node, n] | curr_state.bridges]
      else
        curr_state.bridges
      end
    %{curr_state | bridges: bridges, dfs_low: curr_state.dfs_low |> Map.put(node, min_node)}
  end    
end
```