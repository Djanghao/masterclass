# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-order-search-tree/solutions/4285432/](https://leetcode.com/problems/increasing-order-search-tree/solutions/4285432/)

---

# Approach
The node values are sorted descending when using an reverse inorder traversal. Start from the right most node and traverse all the way to the left most node. Keep constructing the tree node with the previous node in each iteration as it the right child node.

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
  @spec increasing_bst(root :: TreeNode.t | nil) :: TreeNode.t | nil
  def increasing_bst(root), do: do_increasing_bst(root, nil)

  defp do_increasing_bst(%TreeNode{val: v, left: left, right: right}, child_node) do
    child_node = %TreeNode{val: v, left: nil, right: do_increasing_bst(right, child_node)}
    do_increasing_bst(left, child_node)
  end
  defp do_increasing_bst(nil, child_node), do: child_node
end
```