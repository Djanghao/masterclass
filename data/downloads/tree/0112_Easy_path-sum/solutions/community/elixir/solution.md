# Elixir simple solution

**Author:** tsycho
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum/solutions/5459431/](https://leetcode.com/problems/path-sum/solutions/5459431/)

---

# Approach
Take sum till current node if the sum is equal to the target sum then true otherwise false

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

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
  @spec has_path_sum(root :: TreeNode.t() | nil, target_sum :: integer) :: boolean
  def has_path_sum(root, target_sum, acc \\\\ 0)
  def has_path_sum(nil, _, _), do: false

  def has_path_sum(root, target_sum, acc) do
    cond do
      root.left == nil and root.right == nil ->
        root.val + acc == target_sum

      true ->
        has_path_sum(root.left, target_sum, acc + root.val) or
          has_path_sum(root.right, target_sum, acc + root.val)
    end
  end

end
```