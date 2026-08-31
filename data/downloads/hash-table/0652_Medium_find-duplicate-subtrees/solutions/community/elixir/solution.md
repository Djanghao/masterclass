# Elixir with map

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238381/](https://leetcode.com/problems/find-duplicate-subtrees/solutions/3238381/)

---

# Approach
Stuff the whole subtrees into the map as keys :)
# Code
```elixir
defmodule Solution do
  @spec find_duplicate_subtrees(root :: TreeNode.t | nil) :: [TreeNode.t | nil]
  def find_duplicate_subtrees(root) do
    dfs(%{}, root)
    |> Enum.filter(fn {_, c} -> c > 1 end)
    |> Enum.map(fn {node, _} -> node end)
  end

  defp dfs(map, nil), do: map
  defp dfs(map, node) do
    Map.update(map, node, 1, &(&1 + 1))
    |> dfs(node.left)
    |> dfs(node.right)
  end
end
```