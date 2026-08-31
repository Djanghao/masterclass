# Elixir and Python3 Recursive Solutions

**Author:** bpfaust
**Votes:** 0
**Link:** [https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1948039/](https://leetcode.com/problems/trim-a-binary-search-tree/solutions/1948039/)

---

# Solution, Elixir
Runtime of 316 ms, and memory usage of 57.2 MB. 
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
  @spec trim_bst(root :: TreeNode.t | nil, low :: integer, high :: integer) :: TreeNode.t | nil
  def trim_bst(%TreeNode{val: val, right: right}, low, high) when val < low, do: trim_bst(right, low, high)
  def trim_bst(%TreeNode{val: val, left: left}, low, high) when val > high, do: trim_bst(left, low, high)
  def trim_bst(%TreeNode{val: val, left: left, right: right}, low, high) do 
               %TreeNode{
               val: val, 
               left: trim_bst(left, low, high), 
               right: trim_bst(right, low, high)
              }
  end
  def trim_bst(nil, _, _), do: nil
end
```

# Solution, Python3
Applying the same structure, but using a single conditional instead of function guards, may yield something similar to the below in Python. Runtime of 53 ms, faster than 82.07%, with memory usage of 18 MB, less than 48.91%. 
```
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def trimBST(self, root: Optional[TreeNode], low: int, high: int) -> Optional[TreeNode]:
        if root == None:
          return None
        elif root.val < low:
          return self.trimBST(root.right, low, high)
        elif root.val > high:
          return self.trimBST(root.left, low, high)
        else:
          return TreeNode(val   = root.val, 
                          left  = self.trimBST(root.left, low, high), 
                          right = self.trimBST(root.right, low, high)
                         )
```