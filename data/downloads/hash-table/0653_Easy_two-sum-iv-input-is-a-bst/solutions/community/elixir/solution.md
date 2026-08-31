# Elixir, mapset, DFS

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/4237476/](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/solutions/4237476/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_target(root :: TreeNode.t | nil, k :: integer) :: boolean
  def find_target(root, k), do: do_find_target(root, k, {false, MapSet.new}) |> elem(0)

  defp do_find_target(nil, k, acc), do: acc
  defp do_find_target(node, k, {res, set}) do
    cond do
      res || MapSet.member?(set, k - node.val)-> {true, set}
      true -> {res, set} = do_find_target(node.left, k, {false, MapSet.put(set, node.val)})
              if res, do: {res, set}, else: do_find_target(node.right, k, {false, set})
    end
  end
end
```