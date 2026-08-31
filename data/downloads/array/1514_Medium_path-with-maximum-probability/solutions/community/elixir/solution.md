# Elixir - Dijkstra

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-with-maximum-probability/solutions/5696194/](https://leetcode.com/problems/path-with-maximum-probability/solutions/5696194/)

---

# Code
```elixir [Without libgraph]
defmodule Solution do
  @spec max_probability(n :: integer, edges :: [[integer]], succ_prob :: [float], start_node :: integer, end_node :: integer) :: float
  def max_probability(n, edges, succ_prob, start_node, end_node) do
    adj = build_adj(n, edges, succ_prob)
    pq = :gb_sets.from_ordset([{1.0, start_node}])
    seen = MapSet.new()

    dijkstra(adj, end_node, pq, seen)
  end

  @empty_pq :gb_sets.new()

  defp dijkstra(_adj, _end_node, @empty_pq, _seen) do
    0
  end

  defp dijkstra(adj, end_node, pq, seen) do
    {{p, v1}, pq} = :gb_sets.take_largest(pq)

    if v1 == end_node do
      p
    else
      seen = MapSet.put(seen, v1)
      
      pq =
        for {v2, p2} <- adj[v1],
            v2 not in seen,
            reduce: pq do
          pq -> :gb_sets.add({p * p2, v2}, pq)
        end

      dijkstra(adj, end_node, pq, seen)
    end
  end

  defp build_adj(n, edges, succ_prob) do
    adj = Map.new(0..n-1, &{&1, []})

    for {[v1, v2], prob} <- Enum.zip(edges, succ_prob), reduce: adj do
      adj ->
        adj
        |> Map.update!(v1, &[{v2, prob} | &1])
        |> Map.update!(v2, &[{v1, prob} | &1])
    end
  end
end
```

```elixir [With libgraph (not work in LeetCode)]
defmodule Solution do
  @spec max_probability(n :: integer, edges :: [[integer]], succ_prob :: [float], start_node :: integer, end_node :: integer) :: float
  def max_probability(n, edges, succ_prob, start_node, end_node) do
    graph =
      Graph.new(type: :undirected)
      |> Graph.add_vertices(Enum.to_list(0..n-1))

    graph =
      for {[v1, v2], p} <- Enum.zip(edges, succ_prob), reduce: graph do
        graph -> Graph.add_edge(graph, v1, v2, weight: entropy(p))
      end

    path = Graph.dijkstra(graph, start_node, end_node)

    if path == nil do
      0
    else
      path
      |> Stream.chunk_every(2, 1, :discard)
      |> Stream.map(fn [v1, v2] ->
        Graph.edge(graph, v1, v2).weight
      end)
      |> Enum.sum()
      |> probability()
    end
  end

  defp entropy(probability) do
    -:math.log2(probability)
  end

  defp probability(entropy) do
    2 ** (-entropy)
  end
end
```