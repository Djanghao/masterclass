# 2 Lines Solution in Elixir [Clean] - Most efficient Solution O(n)

**Author:** dbustamante
**Votes:** 1
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/2346593/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/2346593/)

---

The most simple and efficient solution using pattern matching and recursion in Elixir.

100% Faster

```
defmodule Solution do
  @spec swap_pairs(head :: ListNode.t | nil) :: ListNode.t | nil
  def swap_pairs(nil), do: nil
  def swap_pairs(old_head = %ListNode{next: nil}), do: old_head
  def swap_pairs(old_head = %ListNode{next: new_head = %ListNode{}}) do
    %{new_head | next: %{old_head | next: swap_pairs(new_head.next)}}
  end
end
```
