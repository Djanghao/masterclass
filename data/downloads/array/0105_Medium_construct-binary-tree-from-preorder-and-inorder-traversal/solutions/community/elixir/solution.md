# Easy Elixir Solution

**Author:** tsycho
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/5455810/](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solutions/5455810/)

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
  @spec build_tree(preorder :: [integer], inorder :: [integer]) :: TreeNode.t() | nil
  def build_tree([], []), do: nil
  def build_tree(preorder, inorder) do
    [head | preorder] = preorder

    {left_inorder, [_ | right_inorder]} =
      inorder
      |> Enum.split_while(&(&1 != head))

    {left_preorder, right_preorder} = take_n_drop(preorder, length(left_inorder))

    %TreeNode{
      val: head,
      left: build_tree(left_preorder, left_inorder),
      right: build_tree(right_preorder, right_inorder)
    }
  end

  def take_n_drop(list, n, acc \\\\ [])

  def take_n_drop(list, 0, acc) do
    {acc |> Enum.reverse(), list}
  end

  def take_n_drop([head | tail], n, acc) do
    take_n_drop(tail, n - 1, [head | acc])
  end
end
```