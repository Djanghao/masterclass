# Elixir - Tail Recursion

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3775729/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3775729/)

---

I think there's not much to say. The code says it all.

# Complexity
- Time complexity:
$$O(|l1| + |l2|)$$

- Space complexity:
$$O(|l1| + |l2|)$$

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
  @spec add_two_numbers(l1 :: ListNode.t | nil, l2 :: ListNode.t | nil) :: ListNode.t | nil
  def add_two_numbers(l1, l2) do
    add(
      reverse(l1, nil),
      reverse(l2, nil),
      0,
      nil
    )
  end

  defp add(nil, nil, 0, acc) do
    acc
  end

  defp add(nil, nil, 1, acc) do
    %ListNode{val: 1, next: acc}
  end

  defp add(nil, %ListNode{} = l2, carry, acc) do
    add(%ListNode{val: 0}, l2, carry, acc)
  end

  defp add(%ListNode{} = l1, nil, carry, acc) do
    add(l1, %ListNode{val: 0}, carry, acc)
  end

  defp add(%ListNode{} = l1, %ListNode{} = l2, carry, acc) do
    tmp = l1.val + l2.val + carry
    val = rem(tmp, 10)
    carry = div(tmp, 10)
    add(l1.next, l2.next, carry, %ListNode{val: val, next: acc})
  end

  defp reverse(nil, acc), do: acc

  defp reverse(%ListNode{next: next} = curr, acc) do
    reverse(next, %{curr | next: acc})
  end
end
```