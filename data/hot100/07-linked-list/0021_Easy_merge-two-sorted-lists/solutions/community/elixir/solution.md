# Elixir | Pattern-Matching, Recursion

**Author:** ryanzidago
**Votes:** 2
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/1440967/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/1440967/)

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
  @spec merge_two_lists(l1 :: ListNode.t | nil, l2 :: ListNode.t | nil) :: ListNode.t | nil
  def merge_two_lists(nil, nil), do: nil
  def merge_two_lists(l1, nil), do: l1
  def merge_two_lists(nil, l2), do: l2
                                   
  def merge_two_lists(%ListNode{val: val1, next: next1} = _l1, %ListNode{val: val2} = l2) when val1 <= val2 do
    %ListNode{val: val1, next: merge_two_lists(next1, l2)}
  end

  def merge_two_lists(%ListNode{val: val1} = l1, %ListNode{val: val2, next: next2} = _l2) do 
    %ListNode{val: val2, next: merge_two_lists(l1, next2)}
  end
end
```