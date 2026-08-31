# Elixir, DFS, Recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/4145839/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/4145839/)

---

# Approach
Uses recursion to perform depth first traversal that compares and returns the minimum depth among all the paths in the tree.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec min_depth(root :: TreeNode.t | nil) :: integer
  def min_depth(nil), do: 0
  def min_depth(root), do: do_min_depth(root, 1)

  defp do_min_depth(%TreeNode{left: left, right: right}, depth) when left != nil and right != nil do
    min(do_min_depth(left, depth + 1), do_min_depth(right, depth + 1))
  end
  defp do_min_depth(%TreeNode{left: left}, depth) when left != nil, do: do_min_depth(left, depth + 1)
  defp do_min_depth(%TreeNode{right: right}, depth) when right != nil, do: do_min_depth(right, depth + 1)
  defp do_min_depth(_, depth), do: depth
end
```