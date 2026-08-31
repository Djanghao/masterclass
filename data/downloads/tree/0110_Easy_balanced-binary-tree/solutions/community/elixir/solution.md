# Elixir solution

**Author:** 23bohdan
**Votes:** 1
**Link:** [https://leetcode.com/problems/balanced-binary-tree/solutions/3406286/](https://leetcode.com/problems/balanced-binary-tree/solutions/3406286/)

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
  @spec is_balanced(root :: TreeNode.t | nil) :: boolean
  def is_balanced(root) do
    match?({:ok, _}, balanced_depth(root))
  end

  defp balanced_depth(nil), do: {:ok, 0}

  defp balanced_depth(%{left: left, right: right}) do
    with {:ok, depth_left} <- balanced_depth(left),
         {:ok, depth_right} <- balanced_depth(right),
         true <- abs(depth_left - depth_right) <= 1 do
      {:ok, 1 + Enum.max([depth_left, depth_right])}
    end
  end
end
```