# Elixir solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/2882124/](https://leetcode.com/problems/odd-even-linked-list/solutions/2882124/)

---

Using tail recursion to achieve Space O(1) (hopefully?).
# Approach
Firstly split the linked list into odd list and even list, both reversed.
Then reverse each of them again, while appending the even list after the odd list.
# Code
```elixir
defmodule Solution do
  @spec odd_even_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def odd_even_list(head) do
    {tail1, tail2, head_is_1} = alt_split(nil, nil, true, head)
    if head_is_1 do
      reverse(nil, tail2)
      |> reverse(tail1)
    else
      reverse(nil, tail1)
      |> reverse(tail2)
    end
  end

  defp alt_split(tail1, tail2, head_is_1, node = %ListNode{next: node2}) do
    alt_split(tail2, %{node | next: tail1}, not head_is_1, node2)
  end
  defp alt_split(tail1, tail2, head_is_1, nil), do: {tail1, tail2, head_is_1}

  defp reverse(tail, node = %ListNode{next: node2}) do
    reverse(%{node | next: tail}, node2)
  end
  defp reverse(tail, nil), do: tail
end
```

OLD solution: Not tail recursion.

# Code
```elixir
defmodule Solution do
  @spec odd_even_list(head :: ListNode.t | nil) :: ListNode.t | nil
  def odd_even_list(nil), do: nil
  def odd_even_list(head) do
    take_alt(head, take_alt(head.next, nil))
  end

  defp take_alt(nil, tail), do: tail
  defp take_alt(node = %ListNode{next: %ListNode{next: node2}}, tail) do
    %{node | next: take_alt(node2, tail)}
  end
  defp take_alt(node, tail) do
    %{node | next: tail}
  end
end
```