# Elixir DFS

**Author:** terenceponce
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/4381614/](https://leetcode.com/problems/subtree-of-another-tree/solutions/4381614/)

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
  @spec is_subtree(root :: TreeNode.t | nil, sub_root :: TreeNode.t | nil) :: boolean
  def is_subtree(root, sub_root) do
    subtree?(root, sub_root)
  end

  defp subtree?(nil, nil), do: true
  defp subtree?(nil, _), do: false

  defp subtree?(root, sub_root) do
    if same_tree?(root, sub_root) do
      true
    else
      subtree?(root.left, sub_root) || subtree?(root.right, sub_root)
    end
  end

  defp same_tree?(%TreeNode{val: p_val, left: p_left, right: p_right}, %TreeNode{
         val: q_val,
         left: q_left,
         right: q_right
       }) do
    if p_val == q_val do
      same_tree?(p_left, q_left) && same_tree?(p_right, q_right)
    else
      false
    end
  end

  defp same_tree?(nil, nil), do: true
  defp same_tree?(_, _), do: false
end
```