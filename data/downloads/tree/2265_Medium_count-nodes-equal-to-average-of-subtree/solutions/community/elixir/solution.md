# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/2061674/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/2061674/)

---

```elixir
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
  @spec average_of_subtree(root :: TreeNode.t() | nil) :: integer
  def average_of_subtree(root) do
    aux(root) |> elem(2)
  end

  def aux(nil) do
    {0, 0, 0}
  end

  def aux(root) do
    {left_sum, left_num, ln} = aux(root.left)
    {right_sum, right_num, rn} = aux(root.right)
    sum = left_sum + right_sum + root.val
    num = left_num + right_num + 1

    if div(sum, num) == root.val do
      {sum, num, ln + rn + 1}
    else
      {sum, num, ln + rn}
    end
  end
end
```