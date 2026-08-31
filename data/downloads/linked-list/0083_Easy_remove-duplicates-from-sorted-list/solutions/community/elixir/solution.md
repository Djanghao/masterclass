# Pattern-matching plus recursion

**Author:** kkalb
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5190943/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5190943/)

---

# Code
```
defmodule Solution do
  @spec delete_duplicates(head :: ListNode.t() | nil) :: ListNode.t() | nil
  def delete_duplicates(linked_list), do: solve(linked_list, []) |> Enum.reverse() |> build()

  defp solve(nil, res), do: res

  defp solve(%ListNode{val: val1, next: nil}, [last_ele | _res] = res) when val1 == last_ele,
    do: res

  defp solve(%ListNode{val: val1, next: nil}, res), do: [val1 | res]

  defp solve(%ListNode{val: val1, next: next}, [val2 | _rest] = result)
       when val1 == val2,
       do: solve(next, result)

  defp solve(%ListNode{val: val1, next: next}, result),
    do: solve(next, [val1 | result])

  defp build([]), do: nil
  defp build([ele]), do: %ListNode{val: ele, next: nil}
  defp build([ele | rest]), do: %ListNode{val: ele, next: build(rest)}
end
```