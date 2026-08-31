# Elixir Simple Solution

**Author:** stackcats
**Votes:** 0
**Link:** [https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/1736552/](https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/solutions/1736552/)

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
  @spec lca_deepest_leaves(root :: TreeNode.t() | nil) :: TreeNode.t() | nil
  def lca_deepest_leaves(root) do
    aux(root) |> elem(0)
  end

  def aux(nil), do: {nil, 0}
  def aux(%TreeNode{left: nil, right: nil, val: _val} = t), do: {t, 1}

  def aux(t) do
    {lt, ld} = aux(t.left)
    {rt, rd} = aux(t.right)

    cond do
      ld == rd -> {t, ld + 1}
      ld < rd -> {rt, rd + 1}
      true -> {lt, ld + 1}
    end
  end
end
```