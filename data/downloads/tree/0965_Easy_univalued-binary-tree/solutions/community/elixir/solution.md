# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/4297221/](https://leetcode.com/problems/univalued-binary-tree/solutions/4297221/)

---

# Approach
Uses recursion to check if all the nodes have the same value as the root node.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
  @spec is_unival_tree(root :: TreeNode.t | nil) :: boolean
  def is_unival_tree(root), do: do_is_unival_tree(root.left, root.val) && do_is_unival_tree(root.right, root.val) 

  defp do_is_unival_tree(%TreeNode{val: v, left: left, right: right}, v) do 
    do_is_unival_tree(left, v) && do_is_unival_tree(right, v)
  end
  defp do_is_unival_tree(node, _), do: node == nil
end
```