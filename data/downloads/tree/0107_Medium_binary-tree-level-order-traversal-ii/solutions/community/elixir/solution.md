# Lol

**Author:** tsycho
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/5455958/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/5455958/)

---

# Code
```elixir []
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
  @spec level_order_bottom(root :: TreeNode.t | nil) :: [[integer]]
  def level_order_bottom(nil), do: []

  def level_order_bottom(root) do
    # Basically we need to do the breadth first traversal
    level_traverse([root], [])
  end

  def level_traverse([], acc), do: acc

  def level_traverse(level, acc) do
    {level_data, next_level} = traverse(level)

    next_level
    |> Enum.reverse()
    |> level_traverse([level_data | acc])
  end

  def traverse(level) do
    level
    |> Enum.reduce({[], []}, fn
      nil, {values, childs} ->
        {values, childs}

      node, {values, childs} ->
        childs = if node.right != nil, do: [node.right | childs], else: childs
        childs = if node.left != nil, do: [node.left | childs], else: childs
        {[node.val | values], childs}
    end)
  end
end
```