# Replace node with leftmost node on right-hand tree

**Author:** glimmerfors
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-node-in-a-bst/solutions/4048539/](https://leetcode.com/problems/delete-node-in-a-bst/solutions/4048539/)

---

# Approach
Find the smallest node that was larger than the removed node and put it in the removed node's place.
Where is the smallest node in a BST? Recursively visit the left node.
So when a node is to be deleted, we find the left-most node of the right-hand tree. Then we assign the left-hand tree to the left-hand side of this node, and we assign the right-hand tree (minus this node) to the right-hand side. 

# Complexity
- Time complexity:
$$O(log(n))$$

- Space complexity:
$$O(log(n))$$

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
  @spec delete_node(root :: TreeNode.t | nil, key :: integer) :: TreeNode.t | nil
  def delete_node(nil, _), do: nil
  def delete_node(%{val: key, left: left, right: right}, key), do: merge_trees(left, right)
  def delete_node(%{left: nil, right: nil} = root, key), do: root
  def delete_node(%{left: left, right: nil} = root, key), do: %{root | left: delete_node(left, key)}
  def delete_node(%{left: nil, right: right} = root, key), do: %{root | right: delete_node(right, key)}
  def delete_node(%{val: val, left: left, right: right}, key) do
    %TreeNode{
      val: val,
      left: delete_node(left, key),
      right: delete_node(right, key)
    }
  end

  defp merge_trees(tree1, nil), do: tree1
  defp merge_trees(nil, tree2), do: tree2
  defp merge_trees(tree1, tree2) do
    %TreeNode{val: leftmost(tree2), left: tree1, right: remove_leftmost(tree2)}
  end

  defp leftmost(%{val: val, left: nil}), do: val
  defp leftmost(%{left: left}), do: leftmost(left)

  defp remove_leftmost(nil), do: nil
  defp remove_leftmost(%{left: nil, right: right}), do: right
  defp remove_leftmost(%{val: val, left: left, right: right}) do
    %TreeNode{
      val: val,
      left: remove_leftmost(left),
      right: right
    }
  end
end
```