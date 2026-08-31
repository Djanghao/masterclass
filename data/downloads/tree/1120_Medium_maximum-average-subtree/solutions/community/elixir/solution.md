# [Elixir] Basic tree recursion

**Author:** tiedyedvortex
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/2047601/](https://leetcode.com/problems/maximum-average-subtree/solutions/2047601/)

---

Basic depth-first tree recursion. The trick is that we have to expand the recursive output to be a tuple of (number of nodes in subtree, sum of subtree, maximum average in subtree), because otherwise we lose information and can't compute the new average on the parent node after recursion. Then we just drop the extra data at the end.


``` defmodule Solution do
  @spec maximum_average_subtree(root :: TreeNode.t | nil) :: float
  def maximum_average_subtree(root) do
    # Get the node count, sum of tree, and the maximum average of full tree
    # Then return only that maximum average
    elem(get_count_total_max_avg(root), 2)
  end

  def get_count_total_max_avg(nil) do
    # Off the tree, null node
    {0, 0.0, 0.0}
  end

  def get_count_total_max_avg(node) do
    # DFS recursively left and right
    left_tuple = get_count_total_max_avg(node.left)
    right_tuple = get_count_total_max_avg(node.right)

    # Update count and total by including current node, compute average of this subtree
    count = elem(left_tuple, 0) + elem(right_tuple, 0) + 1
    total = elem(left_tuple, 1) + elem(right_tuple, 1) + node.val
    avg = total/count

    # Pass up maximum average as the greatest of left, right, and current
    max_avg = avg |> max(elem(left_tuple, 2)) |> max(elem(right_tuple, 2))

    {count, total, max_avg}
  end
end
```