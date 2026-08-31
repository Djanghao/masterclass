# Elixir: tail-recursive, single pass over tree level

**Author:** lacrosse
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3205573/](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/solutions/3205573/)

---

# Code
```elixir
defmodule Solution do
  def zigzag_level_order(nil), do: []
  def zigzag_level_order(root), do: zigzag_by_level([root], [], 0)

  defp zigzag_by_level([], acc, _), do: Enum.reverse(acc)

  defp zigzag_by_level(level, vs_acc, order) do
    {level, vs} = step(level, order)
    zigzag_by_level(level, [vs | vs_acc], rem(order + 1, 2))
  end

  defp step(node_list, order) do
    Enum.reduce(node_list, {[], []}, fn %TreeNode{left: l, right: r, val: v}, {prev, vs} ->
      {Enum.reduce(in_order(l, r, order), prev, &drop_nil_head/2), [v | vs]}
    end)
  end

  defp drop_nil_head(nil, t), do: t
  defp drop_nil_head(h, t), do: [h | t]

  defp in_order(a, b, 0), do: [b, a]
  defp in_order(a, b, 1), do: [a, b]
end
```

# Time complexity

$$\\mathcal{O}(n)$$

# Space complexity

$$\\mathcal{O}(n)$$