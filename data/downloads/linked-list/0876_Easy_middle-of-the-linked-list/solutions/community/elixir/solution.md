# Elixir | Fast and Slow Pointers

**Author:** ryanzidago
**Votes:** 1
**Link:** [https://leetcode.com/problems/middle-of-the-linked-list/solutions/1435461/](https://leetcode.com/problems/middle-of-the-linked-list/solutions/1435461/)

---

```elixir
defmodule Solution do                     
  @spec middle_node(head :: ListNode.t | nil) :: ListNode.t | nil
  def middle_node(head), do: do_middle_node(head, head)
    
  defp do_middle_node(slow, %ListNode{next: %ListNode{}} = fast), do: do_middle_node(slow.next, fast.next.next)   
  defp do_middle_node(slow, _), do: slow
end
```