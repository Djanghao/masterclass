# Elixir, DFS, map

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4209832/](https://leetcode.com/problems/find-mode-in-binary-search-tree/solutions/4209832/)

---

# Complexity
- Time complexity:
O(n) where n is the number of nodes in the tree

- Space complexity:
O(n)

# Code
```
defmodule Solution do
  @spec find_mode(root :: TreeNode.t | nil) :: [integer]
  def find_mode(root), do: do_find_mode(root, {%{}, 0, [0]}) |> elem(2)

  defp do_find_mode(nil, acc), do: acc
  defp do_find_mode(node, {freq_map, max_count, res}) do
    new_count = Map.get(freq_map, node.val, 0) + 1
    {max_count, res} = cond do
      new_count > max_count -> {new_count, [node.val]}
      new_count == max_count -> {max_count, [node.val | res]}
      true -> {max_count, res}
    end
    acc = do_find_mode(node.left, {Map.put(freq_map, node.val, new_count), max_count, res})
    do_find_mode(node.right, acc)
  end
end
```