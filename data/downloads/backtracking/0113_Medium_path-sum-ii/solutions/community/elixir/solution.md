# Depth first traversal

**Author:** zdyrko
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-ii/solutions/3478053/](https://leetcode.com/problems/path-sum-ii/solutions/3478053/)

---

# Intuition
Depth first traversal, because root->[leafs] sums must be calculated.

# Approach
On each non-leaf node, add val to sum, and branch out.
On leaf node - compare sum to target and return path if they are equal.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec path_sum(root :: TreeNode.t | nil, target_sum :: integer) :: [[integer]]
  def path_sum(nil, target_sum), do: []
  def path_sum(root, target_sum) do
    root
    |> paths(target_sum)
  end

  defp paths(node, target, sum \\\\ 0, path \\\\ [])
  defp paths(%TreeNode{val: val, left: nil, right: nil}, target, sum, path) do
    if val + sum == target, do: [path ++ [val]], else: []
  end
  defp paths(%TreeNode{val: val, left: left, right: nil}, target, sum, path) do
    paths(left, target, sum + val, path ++ [val])
  end
  defp paths(%TreeNode{val: val, left: nil, right: right}, target, sum, path) do
    paths(right, target, sum + val, path ++ [val])
  end
  defp paths(%TreeNode{val: val, left: left, right: right}, target, sum, path) do
    left = paths(left, target, sum + val, path ++ [val])
    right = paths(right, target, sum + val, path ++ [val])
    left ++ right
  end
end
```