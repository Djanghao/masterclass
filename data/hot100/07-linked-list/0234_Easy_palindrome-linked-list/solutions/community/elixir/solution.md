# Elixir - Just reverse it!

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/4908124/](https://leetcode.com/problems/palindrome-linked-list/solutions/4908124/)

---

# Code
```elixir
defmodule Solution do
  @spec is_palindrome(head :: ListNode.t | nil) :: boolean
  def is_palindrome(head) do
    reverse(head, nil) == head
  end

  defp reverse(nil, acc), do: acc

  defp reverse(%ListNode{} = node, acc) do
    reverse(node.next, %{node | next: acc})
  end
end
```