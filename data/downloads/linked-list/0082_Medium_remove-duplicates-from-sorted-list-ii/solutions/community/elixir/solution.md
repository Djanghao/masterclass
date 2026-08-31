# Elixir using simple pattern matching

**Author:** tsycho
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/5448269/](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/solutions/5448269/)

---

# Intuition
Compare with next value and previous value.
Only consider currently node when it is not equal.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
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
  @spec delete_duplicates(head :: ListNode.t() | nil) :: ListNode.t() | nil
  def delete_duplicates(head), do: delete_duplicates(head, 101) |> elem(1)

  def delete_duplicates(nil, v), do: {101, nil}

  def delete_duplicates(%ListNode{val: v, next: n}, v) do
    {v, delete_duplicates(n, v) |> elem(1)}
  end

  def delete_duplicates(head, _) do
    {next_val, next} = delete_duplicates(head.next, head.val)

    if next_val == head.val do
      {head.val, next}
    else
      {head.val, %ListNode{head | next: next}}
    end
  end

end
```