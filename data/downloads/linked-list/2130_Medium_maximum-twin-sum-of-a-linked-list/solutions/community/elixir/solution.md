# Elixir solution with a stack

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3532598/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/3532598/)

---

# Code
```Elixir
defmodule Solution do
  @spec pair_sum(head :: ListNode.t | nil) :: integer
  def pair_sum(head) do
    half_to_stack(head, head, [])
    |> max_twin_sum(0)
  end
  
  defp half_to_stack(slow, nil, stack), do: {slow, stack}
  defp half_to_stack(slow, fast, stack) do
    half_to_stack(slow.next, fast.next.next, [slow.val | stack])
  end

  defp max_twin_sum({slow, [x | stack]}, ans) do
    max_twin_sum({slow.next, stack}, max(ans, slow.val + x))
  end
  defp max_twin_sum(_, ans), do: ans
end
```