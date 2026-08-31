# Elixir, recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-complete-tree-nodes/solutions/4166878/](https://leetcode.com/problems/count-complete-tree-nodes/solutions/4166878/)

---

# Approach
If the left and right depths of a tree is equal, the number of nodes can be calculated by using the formula 2^depth - 1. If the depth is not equal then the same logic is recursively done on the child nodes.

# Complexity
- Time complexity:
O(log(n))

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec count_nodes(root :: TreeNode.t | nil) :: integer
  def count_nodes(nil), do: 0
  def count_nodes(root) do
    case left_right_depth_equal?(root.left, root.right, 1) do
     {true, depth} -> (2 ** depth) - 1
     _ -> 1 + count_nodes(root.left) + count_nodes(root.right)
    end
  end

  defp left_right_depth_equal?(nil, nil , depth), do: {true, depth}
  defp left_right_depth_equal?(left, nil, depth), do: {false, depth}
  defp left_right_depth_equal?(left, right, depth), do: left_right_depth_equal?(left.left, right.right, depth+ 1 )
end
```