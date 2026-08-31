# Elixir Solution

**Author:** xue0
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-left-leaves/solutions/5019328/](https://leetcode.com/problems/sum-of-left-leaves/solutions/5019328/)

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
  @spec sum_of_left_leaves(root :: TreeNode.t() | nil) :: integer
  def sum_of_left_leaves(root) do
    do_sum(root, 0, false)
  end

  defp do_sum(nil, sum, _is_left), do: sum

  defp do_sum(%TreeNode{val: val, left: nil, right: nil}, sum, true),
    do: sum + val

  defp do_sum(%TreeNode{left: left, right: right} = tree, sum, is_left),
    do: do_sum(left, sum, true) + do_sum(right, sum, false)
end
```