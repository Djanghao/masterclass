# Elixir - DFS - Graph diameter

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/5064470/](https://leetcode.com/problems/minimum-height-trees/solutions/5064470/)

---

# Intuition
To find the min_height Tree. We can think about finding the the diameter of the Graph. Meaning the longest possible path between 2 nodes.
Then find the middle of the diameter, which will represent a tree with the minimal possible height.
If the diameter is even, we would have 2 possible solutions.

To find the longest path, we take a random node and find the longest path from that node.

Then we find the longest path from the node we just found.

This gives us the diameter of the Tree.

# Approach

We will use DFS, to find the longest path, twice. That will give us the diameter.
Then we can find the middle(s) of the diameter

# Note

That `longest_path` function is not as pretty as I would like, but it does the work.



# Code
```
defmodule Solution do
  @spec find_min_height_trees(n :: integer, edges :: [[integer]]) :: [integer]
  def find_min_height_trees(1, []), do: [0]
  def find_min_height_trees(_n, edges) do
    graph = edges |> Enum.reduce(%{}, fn [a, b], graph ->
      graph
      |> Map.update(a, [b], &[b | &1])
      |> Map.update(b, [a], &[a | &1])
    end)

    f = longest_path(1, graph, -1, 1, [0], 1, [0]) |> elem(1) |> hd()
    [f]
    {size, path} = longest_path(f, graph, -1, 1, [f], 1, [f])
    if rem(size, 2) == 1 do
      [Enum.at(path, div(size, 2))]
    else
      [a, b | _] = Enum.drop(path, div(size, 2) - 1)
      [a, b]
    end
  end

  defp longest_path(node, graph, prev, current_size, current_path, max_size, longest_path) do
    {max_size, longest_path} = if current_size > max_size do
      {current_size, current_path}
    else
      {max_size, longest_path}
    end
    Map.get(graph, node)
    |> Enum.reduce({max_size, longest_path}, fn next, {max_size, longest_path} = acc ->
      with false <- prev == next,
          {n_max_size, n_longest_path} <- longest_path(next, graph, node, current_size+ 1, [next | current_path], max_size, longest_path),
          true <- n_max_size > max_size do
          {n_max_size, n_longest_path}
      else
        _ -> acc
      end
    end)
  end

end
```