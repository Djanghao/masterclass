# Elixir simple solution

**Author:** stackcats
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/1638901/](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/solutions/1638901/)

---

```elixir
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
  @spec delete_middle(head :: ListNode.t() | nil) :: ListNode.t() | nil
  def delete_middle(head) do
    aux(nil, head, head)
  end

  def aux(nil, slow, nil), do: nil

  def aux(pre, slow, nil), do: %{pre | next: slow.next}

  def aux(nil, slow, fast) do
    if fast.next == nil do
      aux(nil, slow, nil)
    else
      aux(slow, slow.next, fast.next.next)
    end
  end

  def aux(pre, slow, fast) do
    if fast.next == nil do
      %{pre | next: slow.next}
    else
      %{pre | next: aux(slow, slow.next, fast.next.next)}
    end
  end
end
```