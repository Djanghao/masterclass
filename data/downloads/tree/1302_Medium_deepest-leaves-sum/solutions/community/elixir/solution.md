# [Elixir] Basic recursion

**Author:** tiedyedvortex
**Votes:** 1
**Link:** [https://leetcode.com/problems/deepest-leaves-sum/solutions/2041903/](https://leetcode.com/problems/deepest-leaves-sum/solutions/2041903/)

---

Fairly straightforward. The trick is that our recursive function needs to return a tuple of the height and the sum of the deepest nodes; any time we find that one branch is shorter than the other, we can disregard the shorter branch (since it won't have any "deepest" leaves). Then we just need to be able to identify leaves, which are the nodes with no children. For our final answer we just ditch the height element of the tuple since we don't need it.

```
defmodule Solution do
  @spec deepest_leaves_sum(root :: TreeNode.t | nil) :: integer
  def deepest_leaves_sum(root) do
    {_, total} = do_deepest_leaves_sum(root)
    total
  end

  defp do_deepest_leaves_sum(nil) do
    {-1, 0}
  end

  defp do_deepest_leaves_sum(node) do
    {left_height, left_sum} = do_deepest_leaves_sum(node.left)
    {right_height, right_sum} = do_deepest_leaves_sum(node.right)

    height = max(left_height, right_height) + 1

    cond do
      height == 0 -> {height, node.val}
      left_height > right_height -> {height, left_sum}
      right_height > left_height -> {height, right_sum}
      true -> {height, left_sum + right_sum}
    end
  end
end
```