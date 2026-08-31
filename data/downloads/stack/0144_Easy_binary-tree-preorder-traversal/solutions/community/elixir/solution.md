# Elixir Approach and Solution

**Author:** bpfaust
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3023127/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/3023127/)

---

# Intuition
Recursively iterate down the tree following a depth-first search approach. 

# Approach
1. Concatenate lists formed by the current node's `val`, the preorder traversal of the `left` node, and the preorder traversal of the `right` node. Though list concatenation is slow in Elixir, this allows for a straightforward approach that does not require creating any temporary variables. 
2. Upon hitting the end of a traversal, marked by a `nil` node, return an empty list. 

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(h)$$, wherein $$h$$ represents the height of the tree. 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
  @spec preorder_traversal(root :: TreeNode.t | nil) :: [integer]
  def preorder_traversal(%TreeNode{val: val, left: left, right: right}) do
    [val] ++ preorder_traversal(left) ++ preorder_traversal(right)
  end
  def preorder_traversal(nil), do: []
end
```