# Elixir, In order traversal

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/4263354/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/4263354/)

---

# Approach
Uses recursion to traverse the nodes in in order traversal and updates the minimum difference by checking the difference between the current node's value and the previous value. Using in order traversal will make sure that the node values are traversed in ascending order.  

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

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
  @max 10**5 + 1
  @spec min_diff_in_bst(root :: TreeNode.t | nil) :: integer
  def min_diff_in_bst(root), do: do_min_diff_in(root, {nil, @max}) |> elem(1)

  defp do_min_diff_in(nil, val), do: val
  defp do_min_diff_in(%TreeNode{val: v, left: left, right: right}, acc) do
    {prev, min_diff} = do_min_diff_in(left, acc)
    acc = if prev == nil, do: {v, min_diff}, else: {v, min(min_diff, v - prev)}
    do_min_diff_in(right, acc)
  end
end
```