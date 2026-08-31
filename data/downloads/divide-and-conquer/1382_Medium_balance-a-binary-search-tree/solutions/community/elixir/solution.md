# Elixir Solution

**Author:** Aetherus
**Votes:** 0
**Link:** [https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5370097/](https://leetcode.com/problems/balance-a-binary-search-tree/solutions/5370097/)

---

# Approach
Just convert the BST to a sorted tuple, then build another BST. from that tuple.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```elixir
defmodule Solution do
  @spec balance_bst(root :: TreeNode.t | nil) :: TreeNode.t | nil
  def balance_bst(root) do
    values =
      root
      |> reverse_in_order_traverse([])
      |> List.to_tuple()

    build_bst(values, 0, tuple_size(values))
  end

  defp reverse_in_order_traverse(nil, acc), do: acc

  defp reverse_in_order_traverse(node, acc) do
    acc = reverse_in_order_traverse(node.right, acc)
    reverse_in_order_traverse(node.left, [node.val | acc])
  end

  defp build_bst(_values, i, j) when j <= i, do: nil

  defp build_bst(values, i, j) do
    m = div(i + j, 2)
    val = elem(values, m)
    left = build_bst(values, i, m)
    right = build_bst(values, m + 1, j)

    %TreeNode{
      val: val,
      left: left,
      right: right
    }
  end
end
```