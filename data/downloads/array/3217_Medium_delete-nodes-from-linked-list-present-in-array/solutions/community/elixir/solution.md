# Elixir - Easy solution

**Author:** Aetherus
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744125/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744125/)

---

# Code
```elixir []
defmodule Solution do
  @spec modified_list(nums :: [integer], head :: ListNode.t | nil) :: ListNode.t | nil
  def modified_list(nums, head) do
    nums = MapSet.new(nums)
    remove(head, nums)
  end

  defp remove(%ListNode{} = node, nums) do
    if node.val in nums do
      remove(node.next, nums)
    else
      %{node | next: remove(node.next, nums)}
    end
  end

  defp remove(nil, _), do: nil
end
```