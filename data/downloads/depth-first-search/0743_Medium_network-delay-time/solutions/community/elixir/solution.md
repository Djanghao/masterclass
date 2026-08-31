# Elixir Djikstra solution

**Author:** stevensonmt
**Votes:** 0
**Link:** [https://leetcode.com/problems/network-delay-time/solutions/2042948/](https://leetcode.com/problems/network-delay-time/solutions/2042948/)

---

```elixir
def network_delay_time(times, n, k) do
    received_at = 1..n |> Enum.reduce(Map.new(), fn i, map -> 
                                       if i == k do
                                         Map.put(map, i, 0)
                                       else 
                                         Map.put(map, i, :not_yet) 
                                       end
                                     end)
    weights = times |> Enum.reduce(%{}, fn [n1, n2, d], acc -> 
                                   Map.update(acc, n1, %{n2 => d}, fn m -> Map.put(m, n2, d) end) 
                                   end)
    pq = :gb_trees.enter(0, [k], :gb_trees.empty())
    djikstra = djikstra(received_at, weights, pq)
    if is_atom(djikstra) do 
      -1
    else
      djikstra
    end
  end
      
  def djikstra(received_at, weights, pq) do
    if :gb_trees.is_empty(pq) do 
      received_at |> Map.values() |> Enum.max()
    else
      {next_time, next_starts, new_q} = :gb_trees.take_smallest(pq)
      next_edges = 
        next_starts
        |> Enum.flat_map(fn n -> 
                                wts = weights[n]
                                if wts do 
                                    wts
                                else
                                    []
                                end
                        end)
            
      {updated_received_at, updated_q} = 
        next_edges
        |> Enum.reduce({received_at, new_q}, fn {node, t}, {recvd, q} ->
                          new_time = next_time + t
                          if recvd[node] > new_time do 
                            r = Map.put(recvd, node, new_time)
                            q = 
                              if :gb_trees.is_defined(new_time, q) do 
                                curr_nodes = :gb_trees.get(new_time, q)
                                :gb_trees.enter(new_time, [node | curr_nodes], q)
                              else
                                :gb_trees.insert(new_time, [node], q)
                              end
                             {r, q}
                           else
                             {recvd, q}
                           end
                      end)
      djikstra(updated_received_at, weights, updated_q)
    end
  end
  ```