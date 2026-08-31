# Recursive post-order DFS

**Author:** leodag
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5168085/](https://leetcode.com/problems/delete-leaves-with-a-given-value/solutions/5168085/)

---

# Code
```
defmodule Solution do
  def remove_leaf_nodes(nil, _), do: nil

  @spec remove_leaf_nodes(root :: TreeNode.t | nil, target :: integer) :: TreeNode.t | nil
  def remove_leaf_nodes(root, target) do
    left = remove_leaf_nodes(root.left, target)
    right = remove_leaf_nodes(root.right, target)
    
    unless left == nil and right == nil and root.val == target do
        %TreeNode{
            val: root.val,
            left: left,
            right: right
        }
    end
  end
end
```