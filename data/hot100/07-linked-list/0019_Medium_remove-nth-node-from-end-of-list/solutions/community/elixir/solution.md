# Recursive way of removing n in a nested struct

**Author:** davidgross
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/4827570/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/4827570/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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
  @spec remove_nth_from_end(head :: ListNode.t | nil, n :: integer) :: ListNode.t | nil
  def remove_nth_from_end(head, n) do
    find_nth_from_end(head, [], n - 1)
  end
  
  defp find_nth_from_end(%ListNode{val: val, next: nil}, acc, n) do
    {_, list_nodes} = [val | acc] |> List.pop_at(n)

    list_nodes
    |> Enum.reverse()
    |> build_list_node()
  end

  defp find_nth_from_end(%ListNode{val: val, next: next}, acc, n) do
    find_nth_from_end(next, [val | acc], n)
  end

  defp build_list_node([]), do: nil

  defp build_list_node([head]) do
    %ListNode{val: head, next: nil}
  end

  defp build_list_node([val, next | tail]) do
    %ListNode{val: val, next: build_list_node([next | tail])}
  end
end
```