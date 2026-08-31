# Elixir DFS Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3096912/](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/solutions/3096912/)

---

```
defmodule Solution do
  @spec closest_meeting_node(edges :: [integer], node1 :: integer, node2 :: integer) :: integer
  def closest_meeting_node(edges, node1, node2) do
    edges =
      edges
      |> Enum.with_index()
      |> Enum.reduce(%{}, fn {e, i}, acc -> Map.put(acc, i, e) end)

    mp1 = dfs(edges, node1, 0)
    mp2 = dfs(edges, node2, 0)

    0..(map_size(edges) - 1)
    |> Enum.reduce({-1, 100_000}, fn n, {ans, dis} ->
      ma = max(mp1[n], mp2[n])
      if ma < dis, do: {n, ma}, else: {ans, dis}
    end)
    |> elem(0)
  end

  def dfs(edges, curr, dis, mp \\\\ %{}) do
    mp = Map.put(mp, curr, dis)
    next = Map.get(edges, curr, -1)

    if next == -1 || mp[next] != nil do
      mp
    else
      dfs(edges, next, dis + 1, mp)
    end
  end
end

```