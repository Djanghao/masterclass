# Elixir - Recursion - Using Process to store max

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-binary-tree/solutions/4791880/](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4791880/)

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
  @max "sol_max_key"
  @spec diameter_of_binary_tree(root :: TreeNode.t | nil) :: integer
  def diameter_of_binary_tree(root) do
    Task.async(fn ->
      Process.put(@max, 0)
      do_find(root)
      Process.get(@max)
    end)
    |> Task.await(:infinity)
  end

  defp do_find(nil), do: 0
  defp do_find(root) do
    left = if root.left, do: 1 + do_find(root.left), else: 0
    right = if root.right, do: 1 + do_find(root.right), else: 0
    max = left + right
    prev_max = Process.get(@max)
    if prev_max < max, do: Process.put(@max, max)
    res = max(left, right)
    res
  end
end
```