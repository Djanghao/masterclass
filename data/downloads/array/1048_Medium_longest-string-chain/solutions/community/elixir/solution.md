# Elixir - DAG (with comments)

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-string-chain/solutions/2153661/](https://leetcode.com/problems/longest-string-chain/solutions/2153661/)

---

I saw so many DP solutions, so I just wanna try something else. I ended up using DAG to solve this problem. It's slow, but passed the tests anyway.

```elixir
defmodule Solution do
  @spec longest_str_chain(words :: [String.t]) :: integer
  def longest_str_chain([_]), do: 1

  def longest_str_chain(words) do
    graph = :digraph.new([:acyclic])

    # Put all words into the graph as vertices.
    for w <- words do
      :digraph.add_vertex(graph, w)
    end

    # For each pair of words (w1, w2),
	# if w1 is a predecessor of w2,
	# add a directed edge w1 -> w2
    for w1 <- words, w2 <- words, predecessor?(w1, w2) do
      :digraph.add_edge(graph, w1, w2)
    end

    # If a vertex has 0 in-degree, it has no predecessor in the given word list.
	# If a vertex has 0 out-degree, it's not a predecessor to any of the words in the given word list.
    # So we just find a path from any vertex with a 0 in-degree to any vertex with a 0 out-degree.
	# (by the way, in this specific problem, 
	# if there are multiple paths in from a 0-in-degree vertex to a 0-out-degree vertex,
	# they have the same length)
	#
	# However, if we directly do so, it times out when no vertex is connected to any other vertex.
	# So I just find the longest path for each maximum connected subgraph (component),
	# and take the longest amongst them.
    for component <- :digraph_utils.components(graph), reduce: 0 do
      len ->
        start_words = Enum.filter(component, &:digraph.in_degree(graph, &1) == 0)
        end_words = Enum.filter(component, &:digraph.out_degree(graph, &1) == 0)

        for w1 <- start_words,
            w2 <- end_words,
            :digraph.in_degree(graph, w1) == 0,
            :digraph.out_degree(graph, w2) == 0,
            reduce: 0 do
          len ->
            graph
            |> :digraph.get_short_path(w1, w2)
            |> Kernel.||([w1])
            |> length()
            |> max(len)
        end
        |> max(len)
    end
  end
    
  defp predecessor?(s1, s2) when byte_size(s1) + 1 != byte_size(s2), do: false
  defp predecessor?(s1, s2), do: predecessor?(s1, s2, false)
 
  defp predecessor?(<<c, r1::binary>>, <<c, r2::binary>>, false), do: predecessor?(r1, r2, false)
  defp predecessor?(s1, <<_, r2::binary>>, false), do: predecessor?(s1, r2, true)
  defp predecessor?(s1, s2, true), do: s1 == s2
end
```