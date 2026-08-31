# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-list/solutions/3430411/](https://leetcode.com/problems/sort-list/solutions/3430411/)

---

Using conversions between ListNode and List.
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
  @spec sort_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def sort_list(head) do
    node_to_list(head, [])
    |> Enum.sort(:desc)
    |> list_to_node(nil)
  end

  defp node_to_list(nil, list), do: list
  defp node_to_list(node, list) do
    node_to_list(node.next, [node.val | list])
  end

  defp list_to_node([], node), do: node
  defp list_to_node([x | tail], node) do
    list_to_node(tail, %ListNode{val: x, next: node})
  end
end
```