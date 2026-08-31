# Elixir DFS

**Author:** Minamikaze392
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3191528/](https://leetcode.com/problems/maximum-depth-of-binary-tree/solutions/3191528/)

---

# Code
```
defmodule Solution do
  @spec max_depth(root :: TreeNode.t | nil) :: integer
  def max_depth(root) do
    dfs(0, 1, root)
  end

  defp dfs(ans, _, nil), do: ans
  defp dfs(ans, depth, node) do
    max(ans, depth)
    |> dfs(depth + 1, node.left)
    |> dfs(depth + 1, node.right)
  end
end
```