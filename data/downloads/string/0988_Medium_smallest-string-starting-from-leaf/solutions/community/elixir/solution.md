# Elixir - Recursion - Easy

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5035178/](https://leetcode.com/problems/smallest-string-starting-from-leaf/solutions/5035178/)

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
  @spec smallest_from_leaf(root :: TreeNode.t | nil) :: String.t
  def smallest_from_leaf(root) do
    build_string(root, [], []) |> Enum.min()
  end

  defp build_string(nil, _, res), do: res
  defp build_string(%{val: val, left: nil, right: nil}, word, res) do
    [ [val + 97 | word] |> to_string() | res ]
  end
  defp build_string(%{val: val} = node, word, res) do
    res = build_string(node.left, [val + 97 | word], res)
    build_string(node.right, [val + 97 | word], res)
  end
end
```