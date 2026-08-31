# Simple recursive Elixir solution

**Author:** TimoWess
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/5757432/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/5757432/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```elixir []
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
  @spec split_list_to_parts(head :: ListNode.t | nil, k :: integer) :: [ListNode.t | nil]
  def split_list_to_parts(head, k) do
    len = get_length(head)
    plus_ones = rem(len, k)
    split_size = div(len, k)

    divide(head, plus_ones, split_size, k)
  end

  def get_length(head, acc \\\\ 0)
  def get_length(nil, acc), do: acc
  def get_length(head, acc), do: get_length(head.next, acc + 1)

  def take(head, amount \\\\ 0)
  def take(head, 0), do: nil
  def take(nil, _), do: nil
  def take(head, amount), do: %ListNode{val: head.val, next: take(head.next, amount-1)}

  def drop(head, amount \\\\ 0)
  def drop(head, 0), do: head
  def drop(nil, _), do: nil
  def drop(head, amount), do: drop(head.next, amount - 1)
  
  def divide(_,_,_,0), do: []
  def divide(head, plus_ones, split_size, k) do
    take_amount = if plus_ones > 0, do: split_size + 1, else: split_size
    curr = take(head, take_amount)
    next = drop(head, take_amount)

    [curr | divide(next, plus_ones - 1, split_size, k - 1)]
  end
end
```