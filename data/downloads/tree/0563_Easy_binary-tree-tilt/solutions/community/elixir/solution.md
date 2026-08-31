# Elixir, DFS

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-tilt/solutions/4222035/](https://leetcode.com/problems/binary-tree-tilt/solutions/4222035/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_tilt(root :: TreeNode.t | nil) :: integer
  def find_tilt(root), do: do_find_tilt(root, {0, 0}) |> elem(1)

  defp do_find_tilt(nil, acc), do: acc
  defp do_find_tilt(node, acc) do
    {l_node_sum, l_res} = do_find_tilt(node.left, acc)
    {r_node_sum, r_res} = do_find_tilt(node.right, acc)
    {l_node_sum + r_node_sum + node.val, l_res + r_res + abs(l_node_sum - r_node_sum)}
  end
end
```