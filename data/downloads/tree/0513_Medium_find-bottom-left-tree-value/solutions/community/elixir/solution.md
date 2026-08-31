# Elixir - Simple recursive BFS

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792533/](https://leetcode.com/problems/find-bottom-left-tree-value/solutions/4792533/)

---

# Code
```
# Definition for a binary tree node.
#
# defmodule TreeNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           left: TreeNode.t() | nil,
#           right: TreeNode.t() | nil
#         }
#   defstruct val: 0, left: nil, right: nil
# end

defmodule Solution do
  @spec find_bottom_left_value(root :: TreeNode.t | nil) :: integer
  def find_bottom_left_value(root) do
    do_find(0,[root])
  end

  defp do_find(res, []), do: res
  defp do_find(_, [left | _] = nodes) do
    do_find(left.val, get_next(nodes))
  end  

  defp get_next(nodes) do
    Enum.reduce(nodes, [], fn node, acc ->
      acc = if node.left, do: [node.left | acc], else: acc
      if node.right, do: [node.right | acc], else: acc
    end) |> Enum.reverse()
  end
end
```