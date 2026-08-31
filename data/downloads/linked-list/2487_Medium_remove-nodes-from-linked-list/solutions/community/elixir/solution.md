# Elixir - Monotonic Stack

**Author:** Nono31
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5119137/](https://leetcode.com/problems/remove-nodes-from-linked-list/solutions/5119137/)

---



# Code
```
# Definition for singly-linked list.
#
# defmodule ListNode do
#   @type t :: %__MODULE__{
#           val: integer,
#           next: ListNode.t() | nil
#         }
#   defstruct val: 0, next: nil
# end

defmodule Solution do
  @spec remove_nodes(head :: ListNode.t | nil) :: ListNode.t | nil
  def remove_nodes(head) do
    filter([], head)
  end

  defp filter([], %{val: v, next: next}), do: filter([v], next)
  defp filter(stack, nil), do: rebuild(nil, stack)
  defp filter([s | t_s], %{val: v} = list) when v > s, do: filter(t_s, list)
  defp filter([s | _] = stack, %{val: v, next: next}), do: filter([v | stack], next)

  defp rebuild(prev, []), do: prev
  defp rebuild(prev, [v | rest]), do: %ListNode{next: prev, val: v} |> rebuild(rest)
end
```