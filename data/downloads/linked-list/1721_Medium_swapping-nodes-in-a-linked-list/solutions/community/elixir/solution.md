# Elixir solution: No re-building

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3525520/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/3525520/)

---

Use a recursive function which returns the modified node, together with the original value of the swapped node.
The last parameter in `&update/3` can be either `x`, which means changing the node's value to `x`, or `{:swap, j}`, which means swapping the value with the *`j`-th* node after it.
# Code
```
defmodule Solution do
  @spec swap_nodes(head :: ListNode.t | nil, k :: integer) :: ListNode.t | nil
  def swap_nodes(head, k) do
    n = list_len(head)
    i = min(k, n - k + 1)
    j = (n - i + 1) - i
    update(head, i - 1, {:swap, j})
    |> elem(0)
  end

  defp list_len(node, ans \\\\ 0)
  defp list_len(nil, ans), do: ans
  defp list_len(node, ans), do: list_len(node.next, ans + 1)
  
  defp update(node, 0, {:swap, j}) do
    {node, res} = update(node, j, node.val)
    {%{node | val: res}, node.val}
  end
  defp update(node, 0, x) do
    {%{node | val: x}, node.val}
  end
  defp update(node, i, arg) do
    {node2, res} = update(node.next, i - 1, arg)
    {%{node | next: node2}, res}
  end
end
```