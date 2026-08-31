# Elixir solution

**Author:** Minamikaze392
**Votes:** 3
**Link:** [https://leetcode.com/problems/reverse-linked-list-ii/solutions/4012236/](https://leetcode.com/problems/reverse-linked-list-ii/solutions/4012236/)

---

# Approach
1. Reverse the part [left..right] and keep in the variable `prev`.
2. Extend the reversed part `prev` with the remaining nodes.
# Code
```
defmodule Solution do
  @spec reverse_between(head :: ListNode.t | nil, left :: integer, right :: integer) :: ListNode.t | nil
  def reverse_between(head, left, left), do: head
  def reverse_between(head, left, right) do
    traverse(head, left, right, nil)
  end

  defp traverse(node, _, 0, prev), do: extend(prev, node)
  defp traverse(node, left, right, prev) when left <= 1 do
    traverse(node.next, left - 1, right - 1, %{node | next: prev})
  end
  defp traverse(node, left, right, _) do
    %{node | next: traverse(node.next, left - 1, right - 1, nil)}
  end

  defp extend(nil, node2), do: node2
  defp extend(node, node2) do
    %{node | next: extend(node.next, node2)}
  end
end
```