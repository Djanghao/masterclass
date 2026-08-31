# Elixir, In order traversal

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/4218505/](https://leetcode.com/problems/minimum-absolute-difference-in-bst/solutions/4218505/)

---

# Approach
Uses in order traversal to traverse the nodes in a sorted manner, propagating the previous node's value and the minimum difference. 

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec get_minimum_difference(root :: TreeNode.t | nil) :: integer
  def get_minimum_difference(root), do: do_get_minimum_difference(root, {nil, nil}) |> elem(1)

  defp do_get_minimum_difference(nil, acc), do: acc
  defp do_get_minimum_difference(%{val: v, left: left, right: right}, {prev, res}) do
    {prev, res} = do_get_minimum_difference(left, {prev, res})
    {prev, res} = if prev, do: {v, min(res, v - prev)}, else: {v, res}
    do_get_minimum_difference(right, {prev, res})
  end
end
```