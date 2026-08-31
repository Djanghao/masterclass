# Elixir, DFS

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/4311752/](https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/solutions/4311752/)

---

# Approach
Traverses the nodes using depth first search, accumulates the decimal number at each node in the path and finally accumulates the sum at the leaf nodes.

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
  @spec sum_root_to_leaf(root :: TreeNode.t | nil) :: integer
  def sum_root_to_leaf(root), do: do_sum_root_to_leaf(root, {0, 0}) |> elem(1)

  defp do_sum_root_to_leaf(%TreeNode{val: v, left: left, right: right}, {n, sum}) when left != nil or right != nil do
    acc = {(n * 2) + v, sum}
    {_, l_sum} = do_sum_root_to_leaf(left, acc)
    {_, r_sum} = do_sum_root_to_leaf(right, acc)
    {0, l_sum + r_sum}
  end
  defp do_sum_root_to_leaf(%TreeNode{val: v}, {n, sum}), do: {0, sum + (n * 2) + v}
  defp do_sum_root_to_leaf(nil, acc), do: acc
end
```