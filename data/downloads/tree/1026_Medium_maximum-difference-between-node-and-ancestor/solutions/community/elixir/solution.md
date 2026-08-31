# Elixir - DFS

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4551533/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4551533/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(height(tree))$$

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
  @spec max_ancestor_diff(root :: TreeNode.t | nil) :: integer
  def max_ancestor_diff(root) do
    root
    |> min_max_diff()
    |> elem(2)
  end

  defp min_max_diff(nil) do
    {nil, nil, nil}
  end

  defp min_max_diff(node) do
    {min1, max1, diff1} = min_max_diff(node.left)
    {min2, max2, diff2} = min_max_diff(node.right)
    min = [min1, min2, node.val] |> Enum.reject(&is_nil/1) |> Enum.min()
    max = [max1, max2, node.val] |> Enum.reject(&is_nil/1) |> Enum.max()
    max_diff = [
      diff1,
      diff2,
      abs(node.val - (min1 || node.val)),
      abs(node.val - (max1 || node.val)),
      abs(node.val - (min2 || node.val)),
      abs(node.val - (max2 || node.val))
    ]
    |> Enum.reject(&is_nil/1)
    |> Enum.max()

    {min, max, max_diff}
  end
end
```