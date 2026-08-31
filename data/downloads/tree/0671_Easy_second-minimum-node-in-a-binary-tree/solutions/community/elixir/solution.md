# Elixir, DFS

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/4238213/](https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/solutions/4238213/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
defmodule Solution do
  @spec find_second_minimum_value(root :: TreeNode.t | nil) :: integer
  def find_second_minimum_value(root) do 
    res = do_find(root, {root.val, nil})
    elem(res, 1) || -1
  end

  defp do_find(node, {min1, min2} = acc) do
    cond do
      node.val > min1 && node.val < min2 -> {min1, node.val}
      node.left == nil || node.val > min2 -> acc
      true -> acc = do_find(node.left, acc)
              acc = do_find(node.right, acc)
    end
  end
end
```