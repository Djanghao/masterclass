# Elixir solution

**Author:** Minamikaze392
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5419649/](https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/solutions/5419649/)

---

Convert the linked list to a stream of values, each representing the comparison of adjacent node values (0 for equal, 1 for less than, 2 for greater than).
# Code
```
defmodule Solution do
  @spec nodes_between_critical_points(head :: ListNode.t | nil) :: [integer]
  def nodes_between_critical_points(head) do
    Stream.unfold(head, fn
      %{next: nil} -> nil
      n when n.val < n.next.val -> {1, n.next}
      n when n.val > n.next.val -> {2, n.next}
      n -> {0, n.next}
    end)
    |> Enum.chunk_every(2, 1, :discard)
    |> Enum.with_index()
    |> Enum.reduce({[-1, -1], nil, nil}, fn {[x, y], i}, {[lo, hi], first, last} ->
      cond do
        x + y != 3 -> {[lo, hi], first, last}
        first == nil -> {[lo, hi], i, i}
        lo == -1 -> {[i - last, i - first], first, i}
        true -> {[min(lo, i - last), i - first], first, i}
      end
    end)
    |> elem(0)
  end
end
```