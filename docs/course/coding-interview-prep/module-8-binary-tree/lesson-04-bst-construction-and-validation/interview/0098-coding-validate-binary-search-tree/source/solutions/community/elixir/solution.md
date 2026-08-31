# Simple solution using custom guards

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/validate-binary-search-tree/solutions/6044755/](https://leetcode.com/problems/validate-binary-search-tree/solutions/6044755/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
  @spec is_valid_bst(root :: TreeNode.t | nil) :: boolean
  def is_valid_bst(root) do
    is_valid_bst(root, :max, :min)
  end

  defguardp greater_than(val, minimum) when minimum === :min or val > minimum
  defguardp less_than(val, maximum) when maximum === :max or val < maximum

  defp is_valid_bst(nil, _maximum, _minimum), do: true

  defp is_valid_bst(node, maximum, minimum) when greater_than(node.val, minimum) and less_than(node.val, maximum) do
    is_valid_bst(node.left, node.val, minimum) and is_valid_bst(node.right, maximum, node.val)
  end

  defp is_valid_bst(_node, _maximum, _minimum), do: false
end
```