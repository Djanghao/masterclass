# Elixir - Directed Eulerian Graph | DFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-arrangement-of-pairs/solutions/6098408/](https://leetcode.com/problems/valid-arrangement-of-pairs/solutions/6098408/)

---

# Intuition
Actually, though I noticed that this problem is about Eulerian graph, I checked the editorial for the DFS part. Kinda cheating, so I'm not proud of myself.

# Complexity
- Time complexity: $$O((|E| + |V|) \\log |V|)$$
- Space complexity: $$O(|E| + |V| \\log |V|)$$

# Code
```elixir []
defmodule Solution do
  @spec valid_arrangement(pairs :: [[integer]]) :: [[integer]]
  def valid_arrangement(pairs) do
    graph = Enum.group_by(pairs, &hd/1, &List.last/1)

    out_degrees =
      pairs
      |> Enum.map(&hd/1)
      |> Enum.frequencies()

    in_degrees =
      pairs
      |> Enum.map(&List.last/1)
      |> Enum.frequencies()

    start =
      out_degrees
      |> Enum.find(fn {node, out_degree} ->
        out_degree - (in_degrees[node] || 0) == 1
      end)
      |> case do
        nil -> hd(hd(pairs))
        {node, _out_degree} -> node
      end

    graph
    |> arrange(start, [])
    |> elem(1)
  end

  defp arrange(graph, curr, acc) do
    case graph[curr] || [] do
      [] ->
        {graph, acc}

      [h | t] ->
        graph = %{graph | curr => t}
        {graph, acc} = arrange(graph, h, acc)
        acc = [[curr, h] | acc]
        arrange(graph, curr, acc)
    end
  end
end
```