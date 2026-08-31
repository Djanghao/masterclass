# Elixir solution easy to under stand

**Author:** hongsuk
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-right-side-view/solutions/2266111/](https://leetcode.com/problems/binary-tree-right-side-view/solutions/2266111/)

---

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
  @spec right_side_view(root :: TreeNode.t | nil) :: [integer]
  def right_side_view(nil), do: []
  def right_side_view(node), do:
    [node.val | 
        right_merge(right_side_view(node.left), right_side_view(node.right))]
      
  def right_merge([], []), do: []
  def right_merge([], right_list), do: right_list
  def right_merge(left_list, []), do: left_list
  def right_merge([l | left_list], [r | right_list]), do:
    [r | right_merge(left_list, right_list)]
end
```

I think elixir is quite easy language to understand without explanation.
It creates node list of both side and merge them ignoring hidden left nodes reculsively.

Cheers!