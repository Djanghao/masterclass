# Elixir, tail call recursion

**Author:** Lykos_unleashed
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/4337780/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/4337780/)

---

# Approach
Iterate the linked list and accumulate the decimal value of the given binary digits.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

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
  @spec get_decimal_value(head :: ListNode.t | nil) :: integer
  def get_decimal_value(head), do: do_get_decimal_value(head, 0)

  defp do_get_decimal_value(%ListNode{val: v, next: next}, acc), do: do_get_decimal_value(next, (acc * 2) + v)
  defp do_get_decimal_value(_, acc), do: acc
end
```