# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/4292844/](https://leetcode.com/problems/range-sum-of-bst/solutions/4292844/)

---

# Approach
Uses recursion to traverse all the nodes and accumulate the result based on the node's value. The left sub tree can be skipped if the node's value falls below the required range and similarly the right sub tree can be skipped if the node's value falls above the required range.
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
  @spec range_sum_bst(root :: TreeNode.t | nil, low :: integer, high :: integer) :: integer
  def range_sum_bst(root, low, high), do: do_range_sum_bst(root, low, high, 0)

  defp do_range_sum_bst(%TreeNode{val: v, left: left, right: right}, low, high, acc) do
    cond do
      v < low -> do_range_sum_bst(right, low, high, acc)
      v > high -> do_range_sum_bst(left, low, high, acc)
      true -> acc = do_range_sum_bst(left, low, high, acc + v)
              do_range_sum_bst(right, low, high, acc)
    end
  end
  defp do_range_sum_bst(nil, _low, _high, acc), do: acc
end
```