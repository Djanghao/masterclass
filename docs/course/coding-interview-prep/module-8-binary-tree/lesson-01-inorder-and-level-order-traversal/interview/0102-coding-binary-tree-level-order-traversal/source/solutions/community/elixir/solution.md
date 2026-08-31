# Simple solution without Enum

**Author:** sQQVEutPou
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/6044834/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/6044834/)

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
  @spec level_order(root :: TreeNode.t | nil) :: [[integer]]
  def level_order(root) do
    if is_nil(root) do
      []
    else
      do_level_order([root])
    end
  end

  defp do_level_order(level) do
    case next_level_and_acc(level) do
      {[], a} ->
        [a]

      {next_level, a} ->
        acc = do_level_order(next_level)
        [a | acc]
    end
  end

  defp next_level_and_acc([head | level]) do
    {next_level, acc} = next_level_and_acc(level)

    next_level = if(not is_nil(head.right), do: [head.right | next_level], else: next_level)
    next_level = if(not is_nil(head.left), do: [head.left | next_level], else: next_level)

    {next_level, [head.val | acc]}
  end

  defp next_level_and_acc([]), do: {[], []}
end
```