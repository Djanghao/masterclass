# Elixir Union Find Solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/2935698/](https://leetcode.com/problems/possible-bipartition/solutions/2935698/)

---

```elixir
defmodule Solution do
  defmodule UnionFind do
    defstruct root: %{}, rank: %{}

    def new() do
      %UnionFind{}
    end

    def find(uf, n) do
      case uf.root[n] do
        nil ->
          {n, %{uf | root: Map.put(uf.root, n, n), rank: Map.put(uf.rank, n, 1)}}

        ^n ->
          {n, uf}

        x ->
          {rn, uf} = find(uf, x)
          {rn, %{uf | root: Map.put(uf.root, n, rn)}}
      end
    end

    def union(uf, x, y) do
      {rx, uf} = find(uf, x)
      {ry, uf} = find(uf, y)
      rank_x = uf.rank[rx]
      rank_y = uf.rank[ry]

      cond do
        rx == ry ->
          uf

        rank_x > rank_y ->
          %{uf | root: Map.put(uf, ry, rx)}

        rank_x < rank_y ->
          %{uf | root: Map.put(uf, rx, ry)}

        true ->
          %{uf | root: Map.put(uf.root, rx, ry), rank: Map.update!(uf.rank, rx, &(&1 + 1))}
      end
    end
  end

  @spec possible_bipartition(n :: integer, dislikes :: [[integer]]) :: boolean
  def possible_bipartition(n, dislikes) do
    dislikes
    |> Enum.reduce_while({true, UnionFind.new()}, fn [x, y], {acc, uf} ->
      {rx, uf} = UnionFind.find(uf, x)
      {ry, uf} = UnionFind.find(uf, y)

      if rx == ry do
        {:halt, {false, uf}}
      else
        uf = UnionFind.union(uf, x, y + 2000)
        uf = UnionFind.union(uf, y, x + 2000)
        {:cont, {acc, uf}}
      end
    end)
    |> elem(0)
  end
end

```