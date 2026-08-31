# Elixir solution with Kruskal's algorithm using DisjointSet/UnionFind

**Author:** kkhaniffff
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4047120/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4047120/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
First connect all points having Manhattan distance as weight of each edge. Sort all edges by weight, initialize DisjointSet and iterate over sorted edges. For each edge that connects **different** sets add its weight to the final answer. 

# Code
```
defmodule DisjointSet do
  defstruct root: %{}, rank: %{}, dist: 0

  def new(n) do
    {root, rank} =
      Enum.reduce(1..n, {%{}, %{}}, fn x, {root, rank} ->
        {Map.put(root, x, x), Map.put(root, x, 1)}
      end)

    %DisjointSet{root: root, rank: rank, dist: 0}
  end

  def find(ds, x) do
    parent = ds.root[x]
    if x == parent, do: x, else: find(ds, parent)
  end

  def union(ds, {x, y, dist}) do
    x_root = find(ds, x)
    y_root = find(ds, y)

    cond do
      x_root == y_root -> ds
      
      ds.rank[x_root] > ds.rank[y_root] ->
        %DisjointSet{
          ds | 
          root: %{ds.root | y_root => x_root}, 
          dist: ds.dist + dist
        }

      ds.rank[x_root] < ds.rank[y_root] ->
        %DisjointSet{
          ds | 
          root: %{ds.root | x_root => y_root}, 
          dist: ds.dist + dist
        }
      
      true ->
        %DisjointSet{
          ds | 
          root: %{ds.root | y_root => x_root}, 
          rank: %{ds.rank | x_root => ds.rank[x_root] + 1},
          dist: ds.dist + dist
        }
    end
  end
end

defmodule Solution do
  @spec min_cost_connect_points(points :: [[integer]]) :: integer
  def min_cost_connect_points(points) do
    {graph, size} = connect([], points, 1)

    graph
    |> Enum.sort(&(elem(&1, 2) <= elem(&2, 2)))
    |> Enum.reduce(DisjointSet.new(size), &DisjointSet.union(&2, &1))
    |> then(&(&1.dist))
  end

  defp connect(acc, [point], curr), do: {acc, curr + 1}

  defp connect(acc, [[x1, y1] | points], curr) do
    points
    |> Stream.with_index(1)
    |> Enum.reduce(acc, fn {[x2, y2], i}, acc -> 
      dist = abs(x1 - x2) + abs(y1 - y2)
      [{curr, curr + i, dist} | acc]
    end)
    |> connect(points, curr + 1)
  end
end
```