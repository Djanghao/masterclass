# Elixir - simple solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639077/](https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/solutions/3639077/)

---

# Approach
Sort of like BFS, but no quite.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$ (does not count garbage)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
  @spec max_level_sum(root :: TreeNode.t | nil) :: integer
  def max_level_sum(root) do
    solve([root], 1, {nil, nil})
  end

  defp solve([], _current_level, {_max_sum, level}), do: level

  defp solve(layer, current_level, {max_sum, level} = acc) do
    sum = Enum.reduce(layer, 0, & &1.val + &2)

    acc = if is_nil(max_sum) or sum > max_sum,
      do: {sum, current_level},
      else: acc

    layer
    |> Enum.flat_map(&[&1.left, &1.right])
    |> Enum.reject(&is_nil/1)
    |> solve(current_level + 1, acc)
  end
end
```