# [Elixir] DFS-Recursive Approach | Beats 100%

**Author:** sultanfariz
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-one-row-to-tree/solutions/5032264/](https://leetcode.com/problems/add-one-row-to-tree/solutions/5032264/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
I solved this problem using a recursive approach. The function parameters I passed include the current node, new node value, current depth, and a flag indicating whether the potential new node's child is located on the left or right of the new node.

I traverse the tree by decrementing the depth by 1 and pass the current node with child (left or right node). If the depth becomes 0, I return a new node with the value from the function parameters and place the child on the left or right node based on the flag parameter.

If the current node is nil, I first check if the depth is 0. If the depth is 0, we can assume that this is the farthest leaf on the tree, and we place new nodes as new leaves. If the depth is greater than 0, we don't need to create new nodes and return nil.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

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
  @spec add_one_row(root :: TreeNode.t | nil, val :: integer, depth :: integer, isLeft :: boolean) :: TreeNode.t | nil
  defp add_one_row(nil, val, 0, _), do: %TreeNode{val: val, left: nil, right: nil}
  defp add_one_row(nil, _, _, _), do: nil
  defp add_one_row(root, val, 0, false), do: %TreeNode{val: val, left: nil, right: root}
  defp add_one_row(root, val, 0, true), do: %TreeNode{val: val, left: root, right: nil}
  defp add_one_row(root, val, depth, _) do
    left = add_one_row(root.left, val, depth-1, true)
    right = add_one_row(root.right, val, depth-1, false)
    %TreeNode{val: root.val, left: left, right: right}
  end

  @spec add_one_row(root :: TreeNode.t | nil, val :: integer, depth :: integer) :: TreeNode.t | nil
  def add_one_row(root, val, depth) do
    add_one_row(root, val, depth-1, true)
  end
end
```